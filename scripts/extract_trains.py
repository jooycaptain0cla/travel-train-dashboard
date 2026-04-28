#!/usr/bin/env python3
"""Extract train segments from the itinerary DOCX into structured JSON."""

from __future__ import annotations

import json
import re
import sys
from dataclasses import asdict, dataclass
from pathlib import Path
from typing import List, Optional

from docx import Document


DATE_RE = re.compile(r"\d{4}/\d{1,2}/\d{1,2}")
TIME_RE = re.compile(r"([0-2]?\d:[0-5]\d)")


@dataclass
class TrainLeg:
    date: str
    route: str
    train_number: Optional[str]
    departure_time: Optional[str]
    arrival_time: Optional[str]
    departure_station: str
    departure_address: str
    arrival_station: str
    arrival_address: str
    source_excerpt: str


def clean(text: str) -> str:
    return text.strip().replace("\u3000", " ")


def normalize_time_text(text: str) -> str:
    return text.replace("：", ":")


def parse_times(text: str) -> tuple[Optional[str], Optional[str]]:
    matches = TIME_RE.findall(normalize_time_text(text))
    if len(matches) >= 2:
        return matches[0], matches[1]
    if len(matches) == 1:
        return matches[0], None
    return None, None


def load_lines(docx_path: Path) -> List[str]:
    doc = Document(str(docx_path))
    lines: List[str] = []
    for p in doc.paragraphs:
        t = clean(p.text)
        if t:
            lines.append(t)
    return lines


def find_index(lines: List[str], needle: str) -> int:
    for i, line in enumerate(lines):
        if needle in line:
            return i
    raise ValueError(f"Could not find line containing: {needle}")


def find_previous_date(lines: List[str], start: int) -> str:
    for i in range(start, -1, -1):
        m = DATE_RE.search(lines[i])
        if m:
            return m.group(0)
    return ""


def extract(lines: List[str]) -> List[TrainLeg]:
    legs: List[TrainLeg] = []

    # 1) Paris -> Lyon
    i = find_index(lines, "巴黎 → 里昂")
    dep, arr = parse_times(lines[i + 1])
    legs.append(
        TrainLeg(
            date=find_previous_date(lines, i),
            route="Paris-Gare-de-Lyon -> Lyon Part-Dieu",
            train_number=lines[i + 2].replace("车次：", "").strip(),
            departure_time=dep,
            arrival_time=arr,
            departure_station=lines[i + 4].replace("出发站：", "").strip(),
            departure_address=lines[i + 5].replace("地址：", "").strip(),
            arrival_station=lines[i + 7].replace("到达站：", "").strip(),
            arrival_address=lines[i + 8].replace("地址：", "").strip(),
            source_excerpt=lines[i + 1],
        )
    )

    # 2) Torino -> Firenze
    i = find_index(lines, "车次9927")
    dep, arr = parse_times(lines[i])
    legs.append(
        TrainLeg(
            date=find_previous_date(lines, i),
            route="Torino Porta Nuova -> Firenze S.M.Novella",
            train_number="9927",
            departure_time=dep,
            arrival_time=arr,
            departure_station=lines[i + 2],
            departure_address=lines[i + 3].replace("地址：", "").strip(),
            arrival_station=lines[i + 5],
            arrival_address=lines[i + 6].replace("地址：", "").strip(),
            source_excerpt=lines[i],
        )
    )

    # 3) Firenze -> Perugia (second leg same day)
    i = find_index(lines, "第二程Firenze")
    dep, arr = parse_times(lines[i + 1])
    perugia_addr_idx = find_index(lines, "佩鲁贾站（Perugia）：")
    perugia_addr = lines[perugia_addr_idx].replace("佩鲁贾站（Perugia）：", "").strip()
    legs.append(
        TrainLeg(
            date="2026/6/5",
            route="Firenze S.M.Novella -> Perugia",
            train_number=None,
            departure_time=dep,
            arrival_time=arr,
            departure_station="Firenze S.M.Novella",
            departure_address="Piazza della Stazione, 1, 50123 Firenze, Italia",
            arrival_station="Perugia (Fontivegge)",
            arrival_address=perugia_addr,
            source_excerpt=lines[i + 1],
        )
    )

    # 4) Perugia -> Spello (Regionale 4073)
    i = find_index(lines, "区域快车4073")
    time_line_idx = i - 1
    dep, arr = parse_times(lines[time_line_idx])
    dep_station = lines[i + 1].replace("佩鲁贾站（Perugia）：", "").strip()
    arr_station = lines[i + 3].replace("• 斯佩洛站（Spello）：", "").strip()
    legs.append(
        TrainLeg(
            date=find_previous_date(lines, i),
            route="Perugia -> Spello",
            train_number="Regionale 4073",
            departure_time=dep,
            arrival_time=arr,
            departure_station="Perugia (Perugia Fontivegge)",
            departure_address=dep_station,
            arrival_station="Spello",
            arrival_address=arr_station,
            source_excerpt=lines[time_line_idx],
        )
    )

    # 5) Spello -> Perugia
    i = find_index(lines, "斯佩罗→佩鲁贾 火车")
    dep = normalize_time_text(lines[i + 2].replace("发车：斯佩罗 Spello", "").strip())
    arr = normalize_time_text(lines[i + 3].replace("到达：佩鲁贾 Perugia", "").strip())

    dep_station_local = lines[i + 6].replace("出发站：", "").strip()
    dep_station_full = lines[i + 7].replace("全称：", "").strip()
    arr_station_local = lines[i + 10].replace("到达站：", "").strip()
    arr_station_full = lines[i + 11].replace("全称：", "").strip()

    legs.append(
        TrainLeg(
            date=find_previous_date(lines, i),
            route="Spello -> Perugia",
            train_number=None,
            departure_time=dep,
            arrival_time=arr,
            departure_station=f"{dep_station_local} ({dep_station_full})",
            departure_address=lines[i + 8].replace("地址：", "").strip(),
            arrival_station=f"{arr_station_local} ({arr_station_full})",
            arrival_address=lines[i + 12].replace("地址：", "").strip(),
            source_excerpt=f"{lines[i + 2]} | {lines[i + 3]}",
        )
    )

    return legs


def main() -> int:
    if len(sys.argv) != 3:
        print("Usage: extract_trains.py <input.docx> <output.json>")
        return 1

    input_path = Path(sys.argv[1]).expanduser().resolve()
    output_path = Path(sys.argv[2]).expanduser().resolve()

    lines = load_lines(input_path)
    legs = extract(lines)

    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(
        json.dumps([asdict(leg) for leg in legs], ensure_ascii=False, indent=2),
        encoding="utf-8",
    )

    print(f"Extracted {len(legs)} train segments -> {output_path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
