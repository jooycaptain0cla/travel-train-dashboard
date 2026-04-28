const TRAIN_LEGS = [
  {
    date: '2026-05-30',
    route: 'Paris → Lyon',
    trainNumber: 'Frecciarossa 6649',
    seat: 'Car 7, Seat 2C',
    departureTime: '12:34',
    arrivalTime: '14:30',
    departureStation: 'Paris-Gare-de-Lyon',
    departureAddress: '4 Place Louis Armand, 75012 Paris, France',
    departurePlatform: 'Hall 1, Platform N',
    arrivalStation: 'Lyon Part-Dieu',
    arrivalAddress: '5 Place Charles Béraudier, 69003 Lyon, France',
    arrivalPlatform: 'Platform H',
    platformLookupUrl:
      'https://v6.db.transport.rest/stops/8700012/departures?when=2026-05-30T12:00:00%2B02:00&duration=120&language=en',
    platformLookupHint: {
      zh: '查找 FR 6649',
      en: 'Look for FR 6649',
    },
    notes: {
      zh: '站台可能调整，请在出发当天通过车站大屏或 SNCF/Trenitalia app 确认。',
      en: 'Platform may change. Confirm on departure day via station board or SNCF/Trenitalia app.',
    },
    resolvedOnline: false,
  },
  {
    date: '2026-06-05',
    route: 'Turin → Florence',
    trainNumber: '9927 (Italo)',
    departureTime: '09:30',
    arrivalTime: '12:35',
    departureStation: 'Torino Porta Nuova',
    departureAddress: 'Corso Vittorio Emanuele II, 10125 Torino, Italy',
    departurePlatform: 'Platform 15',
    arrivalStation: 'Firenze Santa Maria Novella',
    arrivalAddress: 'Piazza della Stazione, 1, 50123 Firenze, Italy',
    arrivalPlatform: 'Platform 12',
    platformLookupUrl: 'https://www.italotreno.com/en/train-status',
    platformLookupHint: {
      zh: '搜索车次 9927',
      en: 'Search train 9927',
    },
    notes: {
      zh: '中途停靠：Torino Porta Susa (09:40/09:42)、Milano Centrale、Milano Rogoredo。请在 Italo app 再次确认站台。',
      en: 'Intermediate stops: Torino Porta Susa (09:40/09:42), Milano Centrale, Milano Rogoredo. Reconfirm platform in the Italo app.',
    },
    resolvedOnline: false,
  },
  {
    date: '2026-06-05',
    route: 'Florence → Perugia',
    trainNumber: 'RE 4079',
    departureTime: '14:14',
    arrivalTime: '16:21',
    departureStation: 'Firenze Santa Maria Novella',
    departureAddress: 'Piazza della Stazione, 1, 50123 Firenze, Italy',
    departurePlatform: null,
    arrivalStation: 'Perugia (Fontivegge)',
    arrivalAddress: 'Piazza Vittorio Veneto, 06124 Perugia PG, Italy',
    arrivalPlatform: null,
    platformLookupUrl:
      'https://v6.db.transport.rest/stops/8300151/departures?when=2026-06-05T14:00:00%2B02:00&duration=120&language=en',
    platformLookupHint: {
      zh: '查找 RE 4079',
      en: 'Look for RE 4079',
    },
    notes: {
      zh: '该车次为在线时刻表补全结果。站台通常会在临近发车时显示。',
      en: 'This train number was resolved from online timetable lookup. Platform is usually posted close to departure time.',
    },
    resolvedOnline: true,
  },
  {
    date: '2026-06-06',
    route: 'Perugia → Spello',
    trainNumber: 'Regionale 4073',
    departureTime: '10:19',
    arrivalTime: '10:53',
    departureStation: 'Perugia Fontivegge',
    departureAddress: 'Piazza Vittorio Veneto, 06124 Perugia PG, Italy',
    departurePlatform: 'Platform 2',
    arrivalStation: 'Spello',
    arrivalAddress: 'Piazza della Repubblica, 06038 Spello PG, Italy',
    arrivalPlatform: 'Platform 1',
    platformLookupUrl:
      'https://v6.db.transport.rest/stops/8300211/departures?when=2026-06-06T10:00:00%2B02:00&duration=90&language=en',
    platformLookupHint: {
      zh: '查找 RE 4073',
      en: 'Look for RE 4073',
    },
    notes: {
      zh: '站台仍可能临时变化，请当天再确认。该段为短途区域列车。',
      en: 'Platform may still change on departure day. This is a short regional ride.',
    },
    resolvedOnline: false,
  },
  {
    date: '2026-06-07',
    route: 'Spello → Perugia',
    trainNumber: 'RE 4082',
    departureTime: '17:11',
    arrivalTime: '17:42',
    departureStation: 'Stazione di Spello',
    departureAddress: 'Via Stazione, 06038 Spello PG, Italy',
    departurePlatform: null,
    arrivalStation: 'Perugia Fontivegge',
    arrivalAddress: 'Piazza Vittorio Veneto, 06124 Perugia PG, Italy',
    arrivalPlatform: null,
    platformLookupUrl:
      'https://v6.db.transport.rest/stops/8300760/departures?when=2026-06-07T17:00:00%2B02:00&duration=90&language=en',
    platformLookupHint: {
      zh: '查找 RE 4082',
      en: 'Look for RE 4082',
    },
    notes: {
      zh: '该车次为在线时刻表补全结果。站台请以车站大屏为准。',
      en: 'This train number was resolved from online timetable lookup. Confirm platform on the station board.',
    },
    resolvedOnline: true,
  },
];

const I18N = {
  zh: {
    pageTitle: '火车行程看板',
    appTitle: '🚆 火车行程看板',
    appSubtitle: '已从行程 DOCX 文档提取并整理',
    sectionTitle: '火车行程',
    sectionSubtitle: '桌面端显示表格，移动端显示卡片。',
    headers: {
      date: '日期',
      route: '路线',
      train: '车次',
      departure: '出发',
      arrival: '到达',
      from: '出发站（名称 + 地址）',
      to: '到达站（名称 + 地址）',
      depPlatform: '出发站台',
      arrPlatform: '到达站台',
      lookup: '站台查询',
      notes: '备注',
    },
    stats: {
      segments: '火车行程段数',
      knownDep: '已知出发站台',
      resolved: '在线补全车次数',
    },
    findingsTitle: '已完成在线车次补全',
    findingsBody:
      '缺失车次已通过在线时刻表补全：<strong>Firenze → Perugia = RE 4079</strong>，<strong>Spello → Perugia = RE 4082</strong>。请使用每一行的 <em>站台查询</em> 链接查看当天最新站台信息。',
    openLookup: '打开实时查询',
    noLink: '无链接',
    lookupBtn: '站台查询',
    departMap: '出发站地图',
    arrivalMap: '到达站地图',
    mobileDeparture: '出发',
    mobileArrival: '到达',
    mobileFrom: '出发站',
    mobileTo: '到达站',
    mobileNotes: '备注',
    tbdPlatform: '待确认（当天）',
    resolvedTag: '在线补全',
    checkNowBtn: '一键查站台',
    checkingNow: '查询中...',
    lookupResultTitle: '实时匹配结果',
    lookupScheduled: '计划时间',
    lookupPlatform: '站台',
    lookupNoMatch: '未找到匹配车次，可能尚未放出或临时调整。',
    lookupFailed: '查询失败，请稍后重试。',
    lookupFilterUnsupported: '该查询页暂不支持自动过滤，已为你打开页面，请手动搜索车次：',
    toggleLabel: '中文 | EN',
    toggleAria: '切换到英文',
  },
  en: {
    pageTitle: 'Train Itinerary Dashboard',
    appTitle: '🚆 Train Itinerary Dashboard',
    appSubtitle: 'Structured from itinerary DOCX',
    sectionTitle: 'Train Segments',
    sectionSubtitle: 'Desktop shows table view, mobile shows card view.',
    headers: {
      date: 'Date',
      route: 'Route',
      train: 'Train #',
      departure: 'Departure',
      arrival: 'Arrival',
      from: 'From (Station + Address)',
      to: 'To (Station + Address)',
      depPlatform: 'Dep Platform',
      arrPlatform: 'Arr Platform',
      lookup: 'Platform Lookup',
      notes: 'Notes',
    },
    stats: {
      segments: 'Train Segments',
      knownDep: 'Known Departure Platforms',
      resolved: 'Missing Train # Resolved Online',
    },
    findingsTitle: 'Online train number lookup completed',
    findingsBody:
      'Missing train numbers were resolved via online timetable lookup: <strong>Firenze → Perugia = RE 4079</strong>, <strong>Spello → Perugia = RE 4082</strong>. Use each row\'s <em>Platform Lookup</em> link to check day-of platform updates.',
    openLookup: 'Open live lookup',
    noLink: 'No link',
    lookupBtn: 'Platform lookup',
    departMap: 'Depart map',
    arrivalMap: 'Arrival map',
    mobileDeparture: 'Departure',
    mobileArrival: 'Arrival',
    mobileFrom: 'From',
    mobileTo: 'To',
    mobileNotes: 'Notes',
    tbdPlatform: 'TBD (day-of)',
    resolvedTag: 'Resolved online',
    checkNowBtn: 'Check platform now',
    checkingNow: 'Checking...',
    lookupResultTitle: 'Live match result',
    lookupScheduled: 'Scheduled',
    lookupPlatform: 'Platform',
    lookupNoMatch: 'No matching train found. It may not be posted yet or has changed.',
    lookupFailed: 'Lookup failed. Please try again shortly.',
    lookupFilterUnsupported: 'This lookup page does not support auto-filter yet. Page opened, please search train:',
    toggleLabel: 'EN | 中文',
    toggleAria: 'Switch to Chinese',
  },
};

let currentLang = 'zh';
const platformCheckState = {};

function mapsLink(address) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

function getT() {
  return I18N[currentLang];
}

function setText(id, text) {
  const el = document.getElementById(id);
  if (el) {
    el.textContent = text;
  }
}

function applyStaticText() {
  const t = getT();
  document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';
  document.title = t.pageTitle;

  setText('appTitle', t.appTitle);
  setText('appSubtitle', t.appSubtitle);
  setText('sectionTitle', t.sectionTitle);
  setText('sectionSubtitle', t.sectionSubtitle);

  setText('thDate', t.headers.date);
  setText('thRoute', t.headers.route);
  setText('thTrain', t.headers.train);
  setText('thDeparture', t.headers.departure);
  setText('thArrival', t.headers.arrival);
  setText('thFrom', t.headers.from);
  setText('thTo', t.headers.to);
  setText('thDepPlatform', t.headers.depPlatform);
  setText('thArrPlatform', t.headers.arrPlatform);
  setText('thLookup', t.headers.lookup);
  setText('thNotes', t.headers.notes);

  const toggleBtn = document.getElementById('langToggle');
  if (toggleBtn) {
    toggleBtn.textContent = t.toggleLabel;
    toggleBtn.setAttribute('aria-label', t.toggleAria);
  }
}

function platformBadge(platform) {
  const t = getT();
  return platform
    ? `<span class="badge">${platform}</span>`
    : `<span class="badge missing">${t.tbdPlatform}</span>`;
}

function stationCell(station, address) {
  return `
    <div class="station">${station}</div>
    <a href="${mapsLink(address)}" target="_blank" rel="noreferrer">${address}</a>
  `;
}

function sortLegs(data) {
  return [...data].sort((a, b) =>
    `${a.date}T${a.departureTime}`.localeCompare(`${b.date}T${b.departureTime}`)
  );
}

function normalizeTrainToken(value) {
  return String(value || '')
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, '');
}

function buildTrainCandidates(trainNumber) {
  const cleaned = String(trainNumber || '')
    .replace(/\(.*?\)/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toUpperCase();

  const set = new Set();
  const addToken = (token) => {
    const normalized = normalizeTrainToken(token);
    if (normalized) {
      set.add(normalized);
    }
  };

  addToken(cleaned);
  (cleaned.match(/\b[A-Z]{1,3}\s*\d{3,5}\b/g) || []).forEach(addToken);

  const nums = cleaned.match(/\d{3,5}/g) || [];
  nums.forEach(addToken);

  const firstNum = nums[0];
  if (cleaned.includes('FRECCIAROSSA') && firstNum) {
    addToken(`FR ${firstNum}`);
  }
  if (cleaned.includes('REGIONALE') && firstNum) {
    addToken(`RE ${firstNum}`);
  }

  return Array.from(set);
}

function formatTimeFromIso(isoText) {
  if (!isoText) {
    return '--:--';
  }
  const d = new Date(isoText);
  if (Number.isNaN(d.getTime())) {
    return isoText;
  }
  return d.toLocaleTimeString(currentLang === 'zh' ? 'zh-CN' : 'en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
}

function isTransportRestLookup(url) {
  return typeof url === 'string' && url.includes('transport.rest') && url.includes('/departures');
}

function departureMatchesTrain(departure, trainNumber) {
  const candidates = buildTrainCandidates(trainNumber);
  const lineToken = normalizeTrainToken(departure?.line?.name || departure?.name || '');
  const tripToken = normalizeTrainToken(departure?.tripId || '');

  return candidates.some((candidate) => lineToken.includes(candidate) || tripToken.includes(candidate));
}

function renderLookupResult(index) {
  const t = getT();
  const state = platformCheckState[index];
  if (!state) {
    return '';
  }

  if (state.status === 'loading') {
    return `<div class="check-result loading">${t.checkingNow}</div>`;
  }

  if (state.status === 'unsupported') {
    return `<div class="check-result warn">${t.lookupFilterUnsupported} <strong>${state.trainNumber}</strong></div>`;
  }

  if (state.status === 'error') {
    return `<div class="check-result error">${t.lookupFailed}</div>`;
  }

  if (state.status !== 'success') {
    return '';
  }

  if (!state.matches.length) {
    return `<div class="check-result">${t.lookupNoMatch}</div>`;
  }

  const rows = state.matches
    .map((item) => {
      const platformText = item.platform || t.tbdPlatform;
      return `
        <div class="check-row">
          <span class="badge">${item.line || item.trainNumber}</span>
          <span class="check-meta">${t.lookupScheduled}: ${formatTimeFromIso(item.time)}</span>
          <span class="check-meta">${t.lookupPlatform}: ${platformText}</span>
        </div>
      `;
    })
    .join('');

  return `<div class="check-result"><div class="check-result-title">${t.lookupResultTitle}</div>${rows}</div>`;
}

async function checkPlatformNow(index) {
  const sorted = sortLegs(TRAIN_LEGS);
  const leg = sorted[index];
  if (!leg || !leg.platformLookupUrl) {
    return;
  }

  if (!isTransportRestLookup(leg.platformLookupUrl)) {
    platformCheckState[index] = {
      status: 'unsupported',
      trainNumber: leg.trainNumber,
    };
    window.open(leg.platformLookupUrl, '_blank', 'noopener');
    renderAll();
    return;
  }

  platformCheckState[index] = { status: 'loading' };
  renderAll();

  try {
    const response = await fetch(leg.platformLookupUrl, {
      headers: {
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const payload = await response.json();
    const departures = Array.isArray(payload?.departures) ? payload.departures : [];
    const matches = departures
      .filter((dep) => departureMatchesTrain(dep, leg.trainNumber))
      .slice(0, 5)
      .map((dep) => ({
        line: dep?.line?.name || '',
        time: dep?.plannedWhen || dep?.when || '',
        platform: dep?.platform || dep?.plannedPlatform || '',
        trainNumber: leg.trainNumber,
      }));

    platformCheckState[index] = {
      status: 'success',
      matches,
    };
  } catch (_error) {
    platformCheckState[index] = {
      status: 'error',
    };
  }

  renderAll();
}

function renderStats(data) {
  const t = getT();
  const total = data.length;
  const knownDepPlatforms = data.filter((d) => d.departurePlatform).length;
  const foundOnline = data.filter((d) => d.resolvedOnline).length;

  document.getElementById('stats').innerHTML = `
    <div class="stat"><div class="label">${t.stats.segments}</div><div class="value">${total}</div></div>
    <div class="stat"><div class="label">${t.stats.knownDep}</div><div class="value">${knownDepPlatforms}</div></div>
    <div class="stat"><div class="label">${t.stats.resolved}</div><div class="value">${foundOnline}</div></div>
  `;
}

function renderFindings() {
  const t = getT();
  document.getElementById('findings').innerHTML = `
    <h2>${t.findingsTitle}</h2>
    <p>${t.findingsBody}</p>
  `;
}

function renderTable(data) {
  const t = getT();
  const rows = sortLegs(data)
    .map((d, index) => {
      const hint = d.platformLookupHint?.[currentLang] || '';
      const notes = d.notes?.[currentLang] || '';
      const resolvedTag = d.resolvedOnline ? `<div class="muted">${t.resolvedTag}</div>` : '';
      const lookupResult = renderLookupResult(index);
      const lookup = d.platformLookupUrl
        ? `
          <div class="lookup-actions">
            <a href="${d.platformLookupUrl}" target="_blank" rel="noreferrer">${t.openLookup}</a>
            <button class="mini-btn check-now-btn" type="button" data-index="${index}">${t.checkNowBtn}</button>
          </div>
          <div class="muted">${hint}</div>
          ${lookupResult}
        `
        : `<span class="muted">${t.noLink}</span>`;

      return `
        <tr>
          <td>${d.date}</td>
          <td>${d.route}</td>
          <td><span class="badge">${d.trainNumber}</span>${resolvedTag}${d.seat ? `<div class="muted">${d.seat}</div>` : ''}</td>
          <td>${d.departureTime}</td>
          <td>${d.arrivalTime}</td>
          <td>${stationCell(d.departureStation, d.departureAddress)}</td>
          <td>${stationCell(d.arrivalStation, d.arrivalAddress)}</td>
          <td>${platformBadge(d.departurePlatform)}</td>
          <td>${platformBadge(d.arrivalPlatform)}</td>
          <td>${lookup}</td>
          <td>${notes}</td>
        </tr>
      `;
    })
    .join('');

  document.getElementById('rows').innerHTML = rows;
}

function renderMobileCards(data) {
  const t = getT();
  const cards = sortLegs(data)
    .map((d, index) => {
      const hint = d.platformLookupHint?.[currentLang] || '';
      const notes = d.notes?.[currentLang] || '';
      const resolvedTag = d.resolvedOnline ? `<div class="muted">${t.resolvedTag}</div>` : '';
      const lookupResult = renderLookupResult(index);
      const lookup = d.platformLookupUrl
        ? `
            <a class="link-btn" href="${d.platformLookupUrl}" target="_blank" rel="noreferrer">${t.lookupBtn}</a>
            <button class="link-btn check-now-btn" type="button" data-index="${index}">${t.checkNowBtn}</button>
          `
        : '';

      return `
        <article class="mobile-card">
          <div class="mobile-head">
            <div>
              <div class="mobile-date">${d.date}</div>
              <h3>${d.route}</h3>
            </div>
            <span class="badge">${d.trainNumber}</span>
          </div>

          ${resolvedTag}
          ${d.seat ? `<div class="muted">${d.seat}</div>` : ''}

          <div class="mobile-time-grid">
            <div>
              <div class="mobile-label">${t.mobileDeparture}</div>
              <div class="mobile-value">${d.departureTime}</div>
              <div class="muted">${platformBadge(d.departurePlatform)}</div>
            </div>
            <div>
              <div class="mobile-label">${t.mobileArrival}</div>
              <div class="mobile-value">${d.arrivalTime}</div>
              <div class="muted">${platformBadge(d.arrivalPlatform)}</div>
            </div>
          </div>

          <div class="mobile-block">
            <div class="mobile-label">${t.mobileFrom}</div>
            ${stationCell(d.departureStation, d.departureAddress)}
          </div>

          <div class="mobile-block">
            <div class="mobile-label">${t.mobileTo}</div>
            ${stationCell(d.arrivalStation, d.arrivalAddress)}
          </div>

          <div class="mobile-actions">
            ${lookup}
            <a class="link-btn" href="${mapsLink(d.departureAddress)}" target="_blank" rel="noreferrer">${t.departMap}</a>
            <a class="link-btn" href="${mapsLink(d.arrivalAddress)}" target="_blank" rel="noreferrer">${t.arrivalMap}</a>
          </div>

          ${lookupResult}

          ${hint ? `<div class="muted">${hint}</div>` : ''}

          <div class="mobile-block">
            <div class="mobile-label">${t.mobileNotes}</div>
            <div class="muted">${notes}</div>
          </div>
        </article>
      `;
    })
    .join('');

  document.getElementById('mobileCards').innerHTML = cards;
}

function renderAll() {
  applyStaticText();
  renderStats(TRAIN_LEGS);
  renderFindings();
  renderTable(TRAIN_LEGS);
  renderMobileCards(TRAIN_LEGS);
}

function toggleLanguage() {
  currentLang = currentLang === 'zh' ? 'en' : 'zh';
  renderAll();
}

function handleGlobalClick(event) {
  const button = event.target.closest('.check-now-btn');
  if (!button) {
    return;
  }

  const index = Number(button.dataset.index);
  if (!Number.isInteger(index)) {
    return;
  }

  checkPlatformNow(index);
}

function bootstrap() {
  const toggleBtn = document.getElementById('langToggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleLanguage);
  }
  document.addEventListener('click', handleGlobalClick);
  renderAll();
}

bootstrap();
