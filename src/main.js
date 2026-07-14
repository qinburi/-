import "./styles.css";
import {
  caseAssets,
  caseVisuals,
  companyDocMatrix,
  costOverview,
  docContentLedger,
  docs,
  appVersionInfo,
  assetAccessLogs,
  assetLifecycleDetails,
  assetUiGalleries,
  designLibrary,
  idleAssetDetails,
  equipment,
  employeeDirectory,
  hardware,
  industryVisuals,
  industries,
  intake,
  ipAssetLedger,
  lowUtilizationAssets,
  platforms,
  productAssetProfiles,
  renewalTodos,
  saas,
  saasVisuals,
  sceneOperationLibrary,
  softwareVisuals,
  software
} from "./data.js";
import { icon, loadIconfont } from "./iconfont.js";

loadIconfont();

const searchText = (items) => items.join(" ");
const byId = (id) => document.getElementById(id);
const brandLogo = "./assets/brand/hannao-logo-transparent.png";
const detailRegistry = new Map();
const previewImages = [
  "./assets/photos/workstation.jpg",
  "./assets/photos/warehouse.jpg",
  "./assets/photos/agv.jpg",
  "./assets/photos/display-board.jpg",
  "./assets/photos/vision-inspection.jpg",
  "./assets/photos/industrial-camera.jpg"
];
const topNavRows = [
  {
    level: "primary",
    items: [
      { label: "公司资料", target: "docMatrix" },
      { label: "案例资产", target: "cases-section" },
      { label: "行业内容", target: "industry-section" },
      { label: "核心平台", target: "platform-section" },
      { label: "产品矩阵", target: "software-section" },
      { label: "SaaS应用", target: "saas-section" },
      { label: "场景运营库", target: "scene-section" },
      { label: "智能硬件", target: "hardware-section" },
      { label: "智能设备", target: "equipment-section" },
      { label: "资产治理", action: "chart" },
      { label: "版本留痕", action: "version" }
    ]
  },
  {
    level: "secondary",
    items: [
      { label: "知识产权", target: "docMatrix" },
      { label: "品牌渠道", target: "docMatrix" },
      { label: "宣传资产", target: "docMatrix" },
      { label: "企业档案", target: "docMatrix" },
      { label: "专利软著", target: "cases-section" },
      { label: "产品投入", target: "software-section" },
      { label: "待办续费", target: "renewalTodos" },
      { label: "访问日志", detail: "asset-access-log" },
      { label: "生命周期", detail: "asset-lifecycle" },
      { label: "设计库", detail: "design-library" }
    ]
  },
  {
    level: "tertiary",
    items: [
      { label: "ERP", target: "software-section" },
      { label: "MES", target: "software-section" },
      { label: "WMS", target: "software-section" },
      { label: "PLM", target: "software-section" },
      { label: "PDM", target: "software-section" },
      { label: "MRP", target: "software-section" },
      { label: "APS", target: "software-section" },
      { label: "IES", target: "software-section" },
      { label: "CRM", target: "software-section" },
      { label: "达铃", target: "saas-section" },
      { label: "考勤", target: "saas-section" },
      { label: "餐饮", target: "saas-section" },
      { label: "薪安", target: "saas-section" },
      { label: "工位机", target: "scene-section" },
      { label: "手持机", target: "scene-section" },
      { label: "大屏看板", target: "scene-section" },
      { label: "RFID", target: "scene-section" }
    ]
  }
];
const todoStatusText = {
  normal: "正常",
  task: "有任务",
  risk: "异常提醒"
};

function rotateImages(images, start, count, exclude = []) {
  const filtered = images.filter((image) => image && !exclude.includes(image));
  if (!filtered.length) return previewImages.slice(0, count);
  return Array.from({ length: count }, (_, offset) => filtered[(start + offset) % filtered.length]);
}

function numberFromText(value) {
  return Number(String(value || "").replace(/,/g, "").match(/\d+(?:\.\d+)?/)?.[0] || 0);
}

function effortDaysFromHours(hours = []) {
  const totalHours = hours.reduce((sum, item) => sum + numberFromText(item[1]), 0);
  return Math.max(1, Math.round(totalHours / 8));
}

function effortDaysFromCost(cost) {
  const costWan = numberFromText(cost);
  return Math.max(1, Math.round(costWan / 0.12));
}

function personByName(name) {
  return Object.entries(employeeDirectory).find(([, person]) => person.name === name);
}

function personByCodeOrName(value) {
  if (employeeDirectory[value]) return [value, employeeDirectory[value]];
  return personByName(value);
}

function contributionPeople(contributors = [], fallbackSeed = "") {
  if (contributors.length) {
    return contributors.map((member) => {
      const found = personByName(member[0]);
      return {
        name: member[0],
        role: member[1],
        ratio: member[2],
        code: found?.[0] || "人员编号待补",
        status: statusText(found?.[1]?.status || "active")
      };
    });
  }
  const seed = Array.from(fallbackSeed).reduce((sum, char) => sum + char.charCodeAt(0), 0);
  const employees = Object.entries(employeeDirectory);
  return Array.from({ length: 3 }, (_, index) => {
    const [code, person] = employees[(seed + index) % employees.length];
    return {
      name: person.name,
      role: index === 0 ? "产品规划" : index === 1 ? "研发交付" : "资料治理",
      ratio: [42, 35, 23][index],
      code,
      status: statusText(person.status)
    };
  });
}

function profileInvestment(profile, versionFallback = appVersionInfo.currentVersion) {
  const cost = profile?.costs?.[0]?.[1] || "96万";
  return {
    days: profile?.hours?.length ? effortDaysFromHours(profile.hours) : effortDaysFromCost(cost),
    cost,
    version: profile?.versions?.[0]?.[0] || versionFallback
  };
}

function caseInvestment(item) {
  const cost = caseCostValue(item);
  return {
    days: effortDaysFromCost(cost),
    cost,
    version: item.evolution?.at(-1)?.split(" ")?.[0] || appVersionInfo.currentVersion
  };
}

function formatWan(value) {
  const rounded = Math.round(value * 10) / 10;
  return `${Number.isInteger(rounded) ? rounded.toFixed(0) : rounded.toFixed(1)}万`;
}

function caseContributionPeople(item, investment) {
  const costWan = numberFromText(investment.cost);
  return contributionPeople(item.contributors, item.name).map((member) => ({
    ...member,
    effortDays: Math.max(1, Math.round(investment.days * Number(member.ratio || 0) / 100)),
    cost: formatWan(costWan * Number(member.ratio || 0) / 100)
  }));
}

function industrySourceMap() {
  return Object.fromEntries(industries.map((zone) => [zone[0], zone[1]]));
}

function industryEntry(source, item) {
  return {
    source,
    visualTitle: item[0],
    item: source === "纺织服装" ? item : [`${source}${item[0]}`, item[1], item[2]]
  };
}

function industryDisplayZones() {
  const sourceMap = industrySourceMap();
  const textileItems = (sourceMap["纺织服装"] || []).map((item) => industryEntry("纺织服装", item));
  const mergedZone = (name, sources) => ({
    name,
    items: sources.flatMap((source) => (sourceMap[source] || []).map((item) => industryEntry(source, item)))
  });
  const withMore = (zone, visibleCount) => ({
    ...zone,
    visibleItems: zone.items.slice(0, visibleCount),
    moreItems: zone.items.slice(visibleCount)
  });
  const highEndZone = mergedZone("高端设备", ["物流装备"]);
  return [
    {
      name: "纺织服装",
      items: textileItems,
      visibleItems: textileItems.slice(0, 9),
      moreItems: textileItems.slice(9)
    },
    withMore(mergedZone("汽车零部件/五金", ["汽车零部件", "五金"]), 3),
    withMore(mergedZone("医疗食品", ["医疗", "食品"]), 3),
    { ...highEndZone, visibleItems: highEndZone.items.slice(0, 3), moreItems: highEndZone.items },
    withMore(mergedZone("其他", ["塑料", "电子电气", "童车", "政府类"]), 9)
  ];
}

function saasDisplayItems() {
  return {
    visibleItems: saas.slice(0, 9),
    moreItems: saas.slice(9)
  };
}

function productSecondaryImages(type, title, index) {
  const visualMap = type === "saas" ? saasVisuals : softwareVisuals;
  const visual = visualMap[title];
  if (visual?.previews?.length >= 3) return visual.previews.slice(1, 3);
  const primary = visual?.image;
  const images = type === "saas"
    ? Object.values(visualMap).map((item) => item.image)
    : [
      "./assets/photos/visuals/industry-government-copyright.jpg",
      "./assets/photos/visuals/case-hardware-line.jpg",
      "./assets/photos/visuals/case-warehouse.jpg",
      "./assets/photos/visuals/industry-auto-copyright.jpg",
      "./assets/photos/visuals/industry-electronics-copyright.jpg",
      "./assets/photos/visuals/industry-plastic-copyright.jpg",
      "./assets/photos/visuals/industry-logistics-ledger.png",
      "./assets/photos/visuals/industry-government-case.jpg"
    ];
  return rotateImages(images, index + 1, 2, [primary]);
}

function industrySecondaryImages(zoneName, title, zoneIndex, itemIndex) {
  const primary = industryVisuals[`${zoneName}/${title}`]?.image;
  const images = Object.values(industryVisuals).map((item) => item.image);
  return rotateImages(images, zoneIndex * 3 + itemIndex + 1, 2, [primary]);
}

function assetTags(patent, copyright) {
  return `
    <div class="asset-tags">
      <span class="patent">${icon("patent")}<strong>${patent}</strong><em>专利</em></span>
      <span class="copyright">${icon("copyright")}<strong>${copyright}</strong><em>软著</em></span>
    </div>
  `;
}

function statusText(status) {
  return {
    active: "在岗",
    departed: "已离职",
    new: "新增"
  }[status] || "在岗";
}

function trendLineMarkup(items) {
  const width = 680;
  const height = 230;
  const paddingX = 48;
  const paddingTop = 28;
  const paddingBottom = 42;
  const maxValue = Math.max(...items.map((item) => item[1]));
  const minValue = 0;
  const range = Math.max(1, maxValue - minValue);
  const points = items.map((item, index) => {
    const x = paddingX + (index * (width - paddingX * 2)) / (items.length - 1);
    const y = paddingTop + ((maxValue - item[1]) * (height - paddingTop - paddingBottom)) / range;
    return [Number(x.toFixed(1)), Number(y.toFixed(1)), item[0], item[1]];
  });
  const curvePath = (list) => list.map((point, index) => {
    if (index === 0) return `M ${point[0]} ${point[1]}`;
    const prev = list[index - 1];
    const midX = (prev[0] + point[0]) / 2;
    return `C ${midX} ${prev[1]}, ${midX} ${point[1]}, ${point[0]} ${point[1]}`;
  }).join(" ");
  const linePath = curvePath(points);
  const area = `${linePath} L ${points[points.length - 1][0]} ${height - paddingBottom} L ${points[0][0]} ${height - paddingBottom} Z`;
  const gridRows = [0, 25, 50, 75, 100].map((pct) => Number((paddingTop + ((height - paddingTop - paddingBottom) * pct) / 100).toFixed(1)));
  const activePoint = points[Math.min(5, points.length - 1)];
  return `
    <div class="trend-line-chart">
      <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="累计沉淀趋势折线图">
        <defs>
          <linearGradient id="trendFill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stop-color="#60a5fa" stop-opacity="0.24"></stop>
            <stop offset="100%" stop-color="#22d3ee" stop-opacity="0.04"></stop>
          </linearGradient>
          <filter id="trendGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="12" stdDeviation="9" flood-color="#2563eb" flood-opacity="0.18"></feDropShadow>
          </filter>
        </defs>
        ${gridRows.map((y) => `<line class="trend-grid" x1="${paddingX}" y1="${y}" x2="${width - paddingX}" y2="${y}"></line>`).join("")}
        <path class="trend-area" d="${area}"></path>
        <path class="trend-line trend-line-compare" d="${linePath}"></path>
        ${points.map((point) => `<g class="trend-point" transform="translate(${point[0]} ${point[1]})"><circle r="5"></circle><text y="-12">${point[3]}</text></g>`).join("")}
        <g class="trend-tooltip" transform="translate(${activePoint[0]} ${activePoint[1]})">
          <line y1="0" y2="${height - paddingBottom - activePoint[1]}"></line>
          <rect x="-22" y="-48" width="44" height="28" rx="14"></rect>
          <text y="-29">${activePoint[3]}</text>
        </g>
      </svg>
      <div class="trend-year-axis">${items.map((item) => `<span>${item[0]}</span>`).join("")}</div>
    </div>
  `;
}

function chartModalMarkup() {
  const costHeroIcons = ["cost", "software", "person", "timeline", "document", "patent", "hardware", "saas"];
  return `
    <div class="chart-modal" id="chartModal" aria-hidden="true">
      <div class="chart-dialog" role="dialog" aria-modal="true" aria-labelledby="chartModalTitle">
        <div class="chart-dialog-head">
          <div>
            <h2 id="chartModalTitle">资产概览与成本看板</h2>
            <span>保留原资产结构数据，并新增投入、工时、资产沉淀的董事长关注视角</span>
          </div>
          <button class="chart-close" id="chartClose" type="button" aria-label="关闭资产概览">${icon("close", "关闭")}</button>
        </div>
        <div class="chart-section-title"><b>资产图形概览</b><span>结构、完成度、补齐进度</span></div>
        <section class="charts overview-charts" id="chartPanel">
          <div class="chart">
            <h2>产品资产分布</h2>
            <div class="chart-row">
              <div class="donut"></div>
              <div class="legend">
                <span><i style="background:var(--blue)"></i>软件 9</span>
                <span><i style="background:var(--cyan)"></i>SaaS 12</span>
                <span><i style="background:var(--green)"></i>硬件装备 10</span>
              </div>
            </div>
            <div class="chart-num-row"><strong>31</strong><em>资产项</em></div>
          </div>
          <div class="chart">
            <h2>行业覆盖指数</h2>
            <div class="barset">
              <span class="bar-item" style="--h:55%"><i></i><b><strong>20</strong><em>行业</em></b></span>
              <span class="bar-item" style="--h:76%"><i></i><b><strong>31</strong><em>产品</em></b></span>
              <span class="bar-item" style="--h:44%"><i></i><b><strong>72</strong><em>资料</em></b></span>
              <span class="bar-item" style="--h:88%"><i></i><b><strong>18</strong><em>案例</em></b></span>
              <span class="bar-item" style="--h:63%"><i></i><b><strong>27</strong><em>资质</em></b></span>
            </div>
          </div>
          <div class="chart">
            <h2>资料资产完成度</h2>
            <div class="ring" style="--p:72"><span>72%</span></div>
            <div class="chart-num-row"><strong>128</strong><em>资料证据</em></div>
          </div>
          <div class="chart">
            <h2>资产补齐进度</h2>
            <div class="stack">
              <div class="stack-row"><b>专利</b><span style="--w:68%"></span><em>12</em></div>
              <div class="stack-row"><b>软著</b><span style="--w:56%"></span><em>8</em></div>
              <div class="stack-row"><b>案例</b><span style="--w:74%"></span><em>9</em></div>
              <div class="stack-row"><b>宣传</b><span style="--w:48%"></span><em>6</em></div>
            </div>
          </div>
        </section>
        <div class="chart-section-title"><b>成本投入看板</b><span>开发、人工、交付、沉淀</span></div>
        <section class="cost-dashboard">
          <div class="cost-hero">
            ${costOverview.totals.map((item, index) => `<div><span>${item[0]}</span><strong>${item[1]}</strong><em class="cost-hero-icon">${icon(costHeroIcons[index] || "chart")}</em></div>`).join("")}
          </div>
          <div class="cost-grid">
            <div class="cost-panel">
              <h3>资产投入结构</h3>
              <div class="cost-bars cost-bars-percent">
                ${costOverview.distribution.map((item) => `<div><b>${item[0]}</b><span style="--w:${item[1]}%"></span><em>${item[1]}%</em></div>`).join("")}
              </div>
            </div>
            <div class="cost-panel">
              <h3>费用构成</h3>
              <div class="pie-panel">
                <div class="cost-pie cost-pie-fee"></div>
                <div class="pie-legend">
                  ${costOverview.costItems.map((item, index) => `<span><i style="--c:var(--pie-${index + 1})"></i><b>${item[0]}</b><em>${item[1]}</em></span>`).join("")}
                </div>
              </div>
            </div>
            <div class="cost-panel">
              <h3>产品投入排行</h3>
              <div class="rank-list">
                ${costOverview.rankings.map((item, index) => `<div style="--w:${item[2]}%"><i>${index + 1}</i><span>${item[0]}</span><em></em><b>${item[1]}</b></div>`).join("")}
              </div>
            </div>
            <div class="cost-panel">
              <h3>公司构成</h3>
              <div class="pie-panel">
                <div class="cost-pie cost-pie-hours"></div>
                <div class="pie-legend">
                  ${costOverview.workHours.map((item, index) => `<span><i style="--c:var(--pie-${index + 1})"></i><b>${item[0]}</b><em>${item[1]}</em></span>`).join("")}
                </div>
              </div>
            </div>
            <div class="cost-panel trend-panel">
              <h3>累计沉淀趋势</h3>
              ${trendLineMarkup(costOverview.trend)}
            </div>
            <div class="cost-panel">
              <h3>资产沉淀</h3>
              <div class="deposit-grid">
                ${costOverview.deposits.map((item) => `<div><span>${item[0]}</span><strong>${item[1]}</strong></div>`).join("")}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  `;
}

function detailModalMarkup() {
  return `
    <div class="detail-modal" id="detailModal" aria-hidden="true">
      <div class="detail-dialog" role="dialog" aria-modal="true" aria-labelledby="detailTitle">
        <button class="detail-close" id="detailClose" type="button" aria-label="关闭详情">${icon("close", "关闭")}</button>
        <div id="detailContent"></div>
      </div>
    </div>
  `;
}

function versionModalMarkup() {
  const currentVersion = appVersionInfo.history.find((item) => item.version === appVersionInfo.currentVersion) || appVersionInfo.history[0];
  return `
    <div class="version-modal" id="versionModal" aria-hidden="true">
      <div class="version-dialog" role="dialog" aria-modal="true" aria-labelledby="versionTitle">
        <button class="detail-close" id="versionClose" type="button" aria-label="关闭版本详情">${icon("close", "关闭")}</button>
        <div class="version-head">
          <div class="detail-app-icon">${icon("timeline")}</div>
          <div>
            <h2 id="versionTitle">版本历史</h2>
            <p>当前版本 ${appVersionInfo.currentVersion} · 点击版本号查看对应内容</p>
          </div>
        </div>
        <div class="version-layout">
          <div class="version-history" role="listbox" aria-label="版本历史列表">
            ${appVersionInfo.history.map((item) => `
              <button class="version-item ${item.version === currentVersion.version ? "is-active" : ""}" type="button" data-version="${item.version}" aria-selected="${item.version === currentVersion.version}">
                <b>${item.version}</b>
                <span>${item.title}</span>
                <em>${item.date}</em>
              </button>
            `).join("")}
          </div>
          <div class="version-detail" id="versionDetail">
            ${versionDetailMarkup(currentVersion)}
          </div>
        </div>
      </div>
    </div>
  `;
}

function versionDetailMarkup(version) {
  if (!version) return "";
  const hasSystemUrl = Boolean(version.systemUrl);
  return `
    <div class="version-detail-head">
      <span class="version-state">${version.status}</span>
      <h3>${version.version} · ${version.title}</h3>
      <p>${version.date}</p>
    </div>
    <div class="version-module-list">
      ${version.modules.map((item) => `<span>${icon("tag")}${item}</span>`).join("")}
    </div>
    <div class="version-change-list">
      ${version.changes.map((item) => `<div><i></i><span>${item}</span></div>`).join("")}
    </div>
    <div class="version-system-actions">
      <button class="version-system-btn${hasSystemUrl ? "" : " is-disabled"}" type="button" data-system-url="${hasSystemUrl ? version.systemUrl : ""}" aria-disabled="${String(!hasSystemUrl)}">
        ${icon("external")}<span>${hasSystemUrl ? "查看版本系统" : "版本系统文件待提供"}</span>
      </button>
      <p class="version-system-tip">${hasSystemUrl ? "将在新标签页打开该版本对应的真实网页内容。" : "该历史版本的真实 HTML 文件提供后，可在配置中补充地址。"}</p>
    </div>
  `;
}

function resolveSystemUrl(systemUrl) {
  if (!systemUrl) return "";
  if (/^(https?:)?\/\//.test(systemUrl)) return systemUrl;
  const normalizedUrl = systemUrl.replace(/^\.?\//, "");
  const versionPathIndex = window.location.pathname.indexOf("/versions/");
  const basePath =
    versionPathIndex >= 0
      ? window.location.pathname.slice(0, versionPathIndex + 1)
      : window.location.pathname.slice(0, window.location.pathname.lastIndexOf("/") + 1);
  return new URL(normalizedUrl, `${window.location.origin}${basePath}`).href;
}

function topNavMarkup() {
  return `
    <nav class="top-nav" aria-label="无形资产分类导航">
      ${topNavRows.map((row) => `
        <div class="top-nav-row top-nav-${row.level}">
          ${row.items.map((item) => `
            <button type="button"${item.target ? ` data-target="${item.target}"` : ""}${item.action ? ` data-action="${item.action}"` : ""}${item.detail ? ` data-detail-key="${item.detail}"` : ""}>${item.label}</button>
          `).join("")}
        </div>
      `).join("")}
    </nav>
  `;
}

function renderShell() {
  byId("app").innerHTML = `
    <main class="app" style="--hero-bg: url('./assets/photos/visuals/hannao-system-map-hero.png')">
      <header class="topbar">
        <div class="brand">
          <img class="brand-logo" src="${brandLogo}" alt="汉脑科技">
          <div><h1>汉脑无形资产</h1></div>
        </div>
        <div class="top-meta">
          <label class="search-box top-search" id="searchBox" title="搜索案例、产品、行业、资料、硬件">
            ${icon("search")}
            <input id="globalSearch" type="search" placeholder="搜索" autocomplete="off">
            <button id="clearSearch" type="button" aria-label="清空搜索">${icon("close", "清空")}</button>
          </label>
          <button class="search-submit top-search-submit" type="button" title="开始搜索">${icon("search")}<span>搜索</span></button>
          <span class="chip search-count" id="searchCount"></span>
          <button class="chart-toggle" id="chartToggle" aria-expanded="false" title="资产概览">${icon("chart")}<span>资产概览</span></button>
          <button class="version-chip" id="versionToggle" type="button" aria-expanded="false" title="查看版本历史">${icon("timeline")}<span>版本 ${appVersionInfo.currentVersion}</span></button>
          <span class="chip time" id="clock">--:--:--</span>
        </div>
      </header>
      <div class="layout">
        <section class="main">
          ${chartModalMarkup()}
          ${detailModalMarkup()}
          ${versionModalMarkup()}
          ${topNavMarkup()}
          <section class="doc-matrix" id="docMatrix"></section>
          <section class="section case-hero" id="cases-section">
            <div class="head case-head">
              <div>
                <h2>${icon("case")}案例资产</h2>
              </div>
              <div class="module-head-actions"><span>${caseAssets.length}项</span><button class="industry-more detail-trigger" type="button" data-detail-key="case-more">${icon("detail")}更多</button></div>
            </div>
            <div class="case-grid" id="caseAssets"></div>
          </section>
          <section class="section" id="industry-section">
            <div class="head"><h2>行业内容</h2><span id="industryStats">专利 0 · 软著 0</span></div>
            <div class="industry-board" id="industries"></div>
          </section>
          <section class="section" id="platform-section">
            <div class="head"><h2>核心平台</h2></div>
            <div class="entries" id="platforms"></div>
          </section>
          <section class="section product-board">
            <div class="panel" id="software-section"><div class="head"><h2>产品软件矩阵</h2><div class="module-head-actions"><span>${software.length}项</span><button class="industry-more detail-trigger" type="button" data-detail-key="software-more">${icon("detail")}更多</button></div></div><div class="software-map" id="software"></div></div>
            <div class="panel" id="saas-section"><div class="head"><h2>SaaS 产品</h2><div class="module-head-actions"><span>${saas.length}项</span><button class="industry-more detail-trigger" id="saasMore" type="button" data-detail-key="saas-more">${icon("detail")}更多</button></div></div><div class="saas-cloud" id="saas"></div></div>
          </section>
          <section class="section scene-section" id="scene-section"><div class="head"><h2>场景运营库</h2><div class="module-head-actions"><span>${sceneOperationLibrary.length}项</span><button class="industry-more detail-trigger" type="button" data-detail-key="scene-more">${icon("detail")}更多</button></div></div><div class="scene-library" id="sceneLibrary"></div></section>
          <section class="section" id="hardware-section"><div class="head"><h2>智能硬件</h2><div class="module-head-actions"><span>${hardware.length}项</span><button class="industry-more detail-trigger" type="button" data-detail-key="hardware-more">${icon("detail")}更多</button></div></div><div class="hardware-grid" id="hardware"></div></section>
          <section class="section" id="equipment-section"><div class="head"><h2>智能装备</h2><div class="module-head-actions"><span>${equipment.length}项</span><button class="industry-more detail-trigger" type="button" data-detail-key="equipment-more">${icon("detail")}更多</button></div></div><div class="hardware-grid" id="equipment"></div></section>
        </section>
        <aside class="side">
          <div class="doc-panel">
            <div class="todo-assets">
              <h3>${icon("task")}待资产录入</h3>
              <div class="intake-grid" id="intake"></div>
            </div>
            <div class="renewal-todos" id="renewalTodos"></div>
            <div class="asset-governance">
              <h3>${icon("governance")}<span class="governance-title-text">资产治理</span></h3>
              <div class="governance-card-grid">
                <div class="governance-card"><span>${icon("chart")}完成度</span><b>72%</b><em>资料治理</em></div>
                <div class="governance-card"><span>${icon("document")}治理项</span><b>35</b><em>待跟进</em></div>
                <div class="governance-card"><span>${icon("warning")}异常项</span><b>4</b><em>需处理</em></div>
                <button class="governance-card detail-trigger" type="button" data-detail-key="asset-access-log"><span>${icon("permission")}访问记录<i>${icon("detail", "查看详情")}</i></span><b>${assetAccessLogs.length}</b><em>查看详情</em></button>
                <button class="governance-card detail-trigger" type="button" data-detail-key="asset-lifecycle"><span>${icon("timeline")}生命周期<i>${icon("detail", "查看详情")}</i></span><b>${assetLifecycleDetails.length}</b><em>查看详情</em></button>
                <button class="governance-card detail-trigger is-risk" type="button" data-detail-key="asset-low-use"><span>${icon("warning")}低利用率<i>${icon("detail", "查看详情")}</i></span><b>${lowUtilizationAssets.length}</b><em>查看详情</em></button>
                <button class="governance-card detail-trigger is-idle" type="button" data-detail-key="asset-idle"><span>${icon("archive")}闲置资产<i>${icon("detail", "查看详情")}</i></span><b>${idleAssetDetails.length}</b><em>查看详情</em></button>
                <button class="governance-card design-library-entry detail-trigger" type="button" data-detail-key="design-library">
                  <span>${icon("blueprint")}设计库<i>${icon("detail", "查看详情")}</i></span>
                  <b>${designLibrary.length}</b>
                  <em>查看详情</em>
                </button>
              </div>
            </div>
            <div class="doc-list" id="docs"></div>
          </div>
        </aside>
      </div>
      <footer class="contact-footer">
        <div><h2>汉脑智能 · 无形资产工作台</h2><p>无形资产、行业应用、智能硬件与资料资产统一展示。</p></div>
        <div class="contact-list"><span>官网：www.hannao.com</span><span>商务合作：sales@hannao.com</span><span>服务热线：400-800-2026</span><span>地址：浙江省 · 智能制造产业园</span></div>
      </footer>
    </main>
  `;
}

function renderData() {
  detailRegistry.clear();
  registerChartDetails();
  renderDocMatrix();
  renderCaseAssets();

  byId("platforms").innerHTML = platforms.map((item, index) => `
    <div class="entry search-item" id="platform-${index}" data-search="${searchText(item)} 核心平台">
      <div class="entry-icon">${icon("platform")}</div><b>${item[1]}</b><div class="entry-count"><strong>${item[2]}</strong></div>
    </div>
  `).join("");

  detailRegistry.set("software-more", createProductMoreDetail("产品软件矩阵更多", "产品软件矩阵", "software", software, 0));
  byId("software").innerHTML = software.map((item, index) => productAppCard(item, "software", index)).join("");

  const saasDisplay = saasDisplayItems();
  detailRegistry.set("saas-more", createProductMoreDetail("SaaS 产品更多", "SaaS 产品", "saas", productMoreItems("saas"), 0));
  byId("saas").innerHTML = saasDisplay.visibleItems.map((item, index) => productAppCard(item, "saas", index)).join("");
  renderSceneLibrary();

  const displayZones = industryDisplayZones();
  const industryPatentTotal = displayZones.flatMap((zone) => zone.items).reduce((sum, entry) => sum + Number(entry.item[1] || 0), 0);
  const industryCopyrightTotal = displayZones.flatMap((zone) => zone.items).reduce((sum, entry) => sum + Number(entry.item[2] || 0), 0);
  byId("industryStats").textContent = `专利 ${industryPatentTotal} · 软著 ${industryCopyrightTotal}`;
  byId("industries").innerHTML = `
    <div class="industry-board-grid">
      ${displayZones.map((zone, zoneIndex) => {
        const visibleItems = zone.visibleItems || zone.items;
        const moreKey = `industry-more-${zoneIndex}`;
        if (zone.moreItems?.length) detailRegistry.set(moreKey, createIndustryMoreDetail(zone, zoneIndex));
        return `
        <div class="zone search-item" data-search="${zone.name} ${zone.items.map((entry) => entry.item.join(" ")).join(" ")} 行业">
          <div class="zone-head">
            <b>${icon("industry")}${zone.name}</b>
            <div class="zone-head-actions">
              <span class="zone-count">${zone.items.length}项</span>
              ${zone.moreItems?.length ? `<button class="industry-more detail-trigger" type="button" data-detail-key="${moreKey}">${icon("detail")}更多</button>` : ""}
            </div>
          </div>
          <div class="zone-grid">
            ${visibleItems.map((entry, itemIndex) => industryCard(zone.name, entry.item, zoneIndex, itemIndex, entry.source, entry.visualTitle)).join("")}
          </div>
        </div>
      `;}).join("")}
    </div>
  `;

  byId("intake").innerHTML = intake.map((item) => `
    <div class="intake-card search-item" data-search="${searchText(item)} 待资产录入 待录入">
      <div class="asset-ico">${icon(item[0])}</div><div><b>${item[1]}</b></div><strong>${item[3]}</strong>
    </div>
  `).join("");
  renderRenewalTodos();

  const deviceCard = (item, kind, index, keyPrefix = "device") => {
    const key = `${keyPrefix}-${kind}-${index}`;
    detailRegistry.set(key, createDeviceDetail(item, kind, index));
    return `
      <button class="device-card search-item detail-trigger" type="button" data-detail-key="${key}" data-search="${item[0]} ${item[1]} ${kind} 设备">
        <div class="scene"><img src="${item[2]}" alt="${item[0]}"></div>
        <div class="device-title"><b>${item[0]}</b><em>${icon("detail")}详情</em></div>
        <span>${item[1]}</span>
      </button>
    `;
  };
  detailRegistry.set("hardware-more", createDeviceMoreDetail("智能硬件更多", "智能硬件", hardware, 0));
  detailRegistry.set("equipment-more", createDeviceMoreDetail("智能装备更多", "智能装备", equipment.slice(8), 8));
  byId("hardware").innerHTML = hardware.map((item, index) => deviceCard(item, "智能硬件", index)).join("");
  byId("equipment").innerHTML = equipment.slice(0, 8).map((item, index) => deviceCard(item, "智能装备", index)).join("");

  byId("docs").innerHTML = `
    <h2 class="doc-list-title">${icon("document")}公司资料</h2>
    ${docs.map((group, groupIndex) => `
    <div class="doc-group search-item" data-search="${group[0]} 公司资料 资料资产">${icon(docIcon(group[0]))}${group[0]}</div>
    ${group[0] === "宣传资产" ? `<div class="promo-media search-item" data-search="宣传资产 视频播放 企业照片 企业视频"><div class="promo-video"><video src="./assets/videos/promo.mp4" poster="./assets/photos/warehouse.jpg" controls muted preload="metadata"></video></div></div>` : ""}
    ${group[1].map((item, itemIndex) => {
      const key = `side-doc-${groupIndex}-${itemIndex}`;
      detailRegistry.set(key, createDocDetail(group[0], item));
      return `
        <button class="doc search-item detail-trigger ${Number.isFinite(item[2]) ? "expiry-doc" : ""}" type="button" data-detail-key="${key}" data-search="${group[0]} ${searchText(item)} 公司资料 资料资产">
          <div class="doc-main"><b>${item[0]}</b><strong>${item[1]}</strong></div>
          ${Number.isFinite(item[2]) ? `<div class="expiry-row" title="黄色为快超期，红色为超期"><span class="expiry-pill warn">${item[2]}</span><span class="expiry-pill danger">${item[3]}</span></div>` : ""}
        </button>
      `;
    }).join("")}
  `).join("")}
  `;
}

function registerChartDetails() {
  detailRegistry.set("asset-access-log", {
    type: "asset-log",
    title: "权限访问、点击、下载记录",
    subtitle: "资产概览 · 权限人操作明细",
    iconName: "permission",
    items: assetAccessLogs
  });
  detailRegistry.set("asset-lifecycle", {
    type: "asset-lifecycle",
    title: "无形资产生命周期详情",
    subtitle: "资产概览 · 立项、研发、归档、授权、复用、治理",
    iconName: "timeline",
    items: assetLifecycleDetails
  });
  detailRegistry.set("asset-low-use", {
    type: "low-use",
    title: "低利用率资产明细",
    subtitle: "资产概览 · 投入高、调用低、复用不足",
    iconName: "warning",
    items: lowUtilizationAssets
  });
  detailRegistry.set("asset-idle", {
    type: "idle-assets",
    title: "资产闲置情况明细",
    subtitle: "资产概览 · 闲置、低频、观察资产",
    iconName: "archive",
    items: idleAssetDetails
  });
  detailRegistry.set("renewal-todos", {
    type: "renewal-todos",
    title: "待办提醒明细",
    subtitle: "网站、证书、宽带、云资源、外购软件续费明细",
    iconName: "warning",
    items: renewalTodos
  });
  detailRegistry.set("design-library", {
    type: "design-library",
    title: "设计库",
    subtitle: "资产治理 · 已完成设计但暂不开发的产品记录",
    iconName: "blueprint",
    items: designLibrary
  });
}

function renderRenewalTodos() {
  const counts = renewalTodos.reduce((acc, item) => {
    acc[item.status] = (acc[item.status] || 0) + 1;
    return acc;
  }, {});
  const nearest = renewalTodos.slice().sort((a, b) => a.due.localeCompare(b.due))[0];
  const amountTotal = renewalTodos.reduce((sum, item) => sum + Number(item.amount.replace(/[^\d.]/g, "") || 0), 0);
  byId("renewalTodos").innerHTML = `
    <div class="renewal-head">
      <h3>${icon("warning")}待办提醒</h3>
      <span>${renewalTodos.length}项</span>
    </div>
    <div class="renewal-summary">
      <span class="normal">正常 ${counts.normal || 0}</span>
      <span class="task">有任务 ${counts.task || 0}</span>
      <span class="risk">异常 ${counts.risk || 0}</span>
    </div>
    <div class="renewal-compact search-item" data-search="${renewalTodos.map((item) => `${item.name} ${item.category} ${item.owner}`).join(" ")} 待办 续费 网站 证书 宽带">
      <div><span>最近到期</span><b>${nearest?.due || "-"}</b></div>
      <div><span>预计费用</span><b>¥${amountTotal.toLocaleString("zh-CN")}</b></div>
      <button class="detail-trigger" type="button" data-detail-key="renewal-todos">${icon("detail")}查看明细</button>
    </div>
  `;
}

function renderDocMatrix() {
  const usageGroups = [
    {
      name: "对外使用",
      note: "客户展示、品牌传播、资质证明",
      sections: [
        ["品牌入口", [["商标", 18], ["网站", 3], ["公众号", 5], ["域名", 8]]],
        ["资质证明", [["专利", 41], ["软著", 31], ["证书", 6], ["荣誉资质", 27]]],
        ["宣传获客", [["宣传册", 36], ["展会资料", 11], ["方案PPT", 24], ["客户案例", 18], ["企业照片", 126]]]
      ]
    },
    {
      name: "对内管理",
      note: "经营支撑、制度合同、申报归档",
      sections: [
        ["经营资料", [["应用表单", 17], ["合同模板", 23], ["企业资料", 29], ["证照", 15]]],
        ["合规申报", [["申报中", 8], ["申报文件", 32], ["规章制度", 16], ["大事记", 42]]],
        ["工具资产", [["外购软件", 9], ["AI工具", 14], ["插件", 22], ["文案", 58]]]
      ]
    }
  ];
  byId("docMatrix").innerHTML = `
    <div class="doc-matrix-title">
      <b>${icon("document")}公司资料分类</b>
      <span>点击数字查看归档详情</span>
    </div>
    <div class="doc-matrix-list">
      ${usageGroups.map((group, groupIndex) => `
        <div class="doc-usage-card search-item" data-search="${group.name} ${group.note} ${group.sections.flat(2).join(" ")} 公司资料">
          <div class="doc-usage-head">
            <b>${icon(groupIndex === 0 ? "media" : "archive")}${group.name}</b>
            <span>${group.note}</span>
          </div>
          <div class="doc-usage-sections">
            ${group.sections.map((section, sectionIndex) => `
              <div class="doc-usage-section">
                <h3>${section[0]}</h3>
                <div class="doc-matrix-items">
                  ${section[1].map((item, itemIndex) => {
                    const key = `doc-usage-${groupIndex}-${sectionIndex}-${itemIndex}`;
                    detailRegistry.set(key, createDocDetail(section[0], item));
                    return `<button class="doc-matrix-item detail-trigger" type="button" data-detail-key="${key}"><span>${item[0]}</span><b>${item[1]}</b></button>`;
                  }).join("")}
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      `).join("")}
    </div>
  `;
}

function renderSceneLibrary() {
  detailRegistry.set("scene-more", createSceneMoreDetail());
  byId("sceneLibrary").innerHTML = sceneOperationLibrary.map((item, index) => sceneCard(item, index)).join("");
}

function sceneCard(item, index, keyPrefix = "scene") {
  const key = `${keyPrefix}-${index}`;
  detailRegistry.set(key, createSceneDetail(item));
  return `
    <button class="scene-card search-item detail-trigger" type="button" data-detail-key="${key}" data-search="${item.name} ${item.device} ${item.scene} 场景运营库">
      <div class="scene-card-media"><img src="${item.image}" alt="${item.name}"></div>
      <div>
        <span class="scene-card-device">${icon(item.device.includes("看板") ? "chart" : item.device.includes("RFID") ? "hardware" : "equipment")}${item.device}</span>
        <b>${item.name}</b>
        <span>${item.role}</span>
        <p>${item.scene}</p>
      </div>
      <em>${icon("download")}资料</em>
    </button>
  `;
}

function renderCaseAssets() {
  detailRegistry.set("case-more", createCaseMoreDetail());
  byId("caseAssets").innerHTML = visibleCaseAssets().map((item, index) => caseCard(item, index)).join("");
}

function visibleCaseAssets() {
  return caseAssets;
}

function caseCard(item, index, keyPrefix = "case") {
  const key = `${keyPrefix}-${index}`;
  const visual = caseVisuals[item.name] || {};
  const manager = employeeDirectory[item.manager];
  const engineer = employeeDirectory[item.engineer];
  const images = visual.card || [
    previewImages[index % previewImages.length],
    previewImages[(index + 1) % previewImages.length]
  ];
  const patentKey = `ip-${keyPrefix}-${index}-patent`;
  const copyrightKey = `ip-${keyPrefix}-${index}-copyright`;
  detailRegistry.set(key, createCaseDetail(item, visual));
  detailRegistry.set(patentKey, createIpDetail("patent", item.name, item.patents));
  detailRegistry.set(copyrightKey, createIpDetail("copyright", item.name, item.copyrights));
  detailRegistry.set(`person-${item.manager}`, createPersonDetail(item.manager));
  detailRegistry.set(`person-${item.engineer}`, createPersonDetail(item.engineer));
  return `
    <article id="${key}" class="case-asset search-item detail-trigger status-${item.status}" data-detail-key="${key}" data-search="${item.name} ${item.industry} ${item.modules.join(" ")} ${item.components.join(" ")} 案例 资产">
      <div class="case-top">
        <div class="case-icon">${icon("case")}</div>
        <div>
          <span class="case-industry">${item.industry} · 来源 ${item.sourceYear}</span>
          <h3>${item.name}</h3>
        </div>
        <span class="status-badge">${statusLabel(item.status)}</span>
      </div>
      <p>${item.intro}</p>
      <div class="case-components">
        ${item.modules.slice(0, 5).map((module) => `<span>${icon("module")}${module}</span>`).join("")}
      </div>
      <div class="case-ip-assets">
        <button class="asset-mini asset-strip detail-trigger" type="button" data-detail-key="${patentKey}">专利 ${item.patents}</button>
        <button class="asset-mini asset-strip detail-trigger" type="button" data-detail-key="${copyrightKey}">软著 ${item.copyrights}</button>
      </div>
      <div class="case-image">
        ${images.map((image, imageIndex) => `<img src="${image}" alt="${item.name}图片${imageIndex + 1}">`).join("")}
      </div>
      <div class="case-actions">
        <div class="case-owner-summary">
          ${caseOwnerSummary("产品", item.manager, manager, item.managerState)}
          ${caseOwnerSummary("技术", item.engineer, engineer, item.engineerState)}
        </div>
        <button type="button">${icon("detail")}详情</button>
      </div>
    </article>
  `;
}

function caseOwnerSummary(label, code, person, state) {
  const status = statusText(person?.status || state);
  const warning = person?.status === "departed" || state === "departed" ? "交接预警" : person?.status === "new" || state === "new" ? "补齐预警" : "正常";
  return `
    <button class="case-owner-chip detail-trigger state-${person?.status || state}" type="button" data-detail-key="person-${code}">
      <span>${code} · ${person?.role || `${label}负责人`}</span>
      <b>${person?.department || "资产责任工位"}</b>
      <em>${warning} · ${status}</em>
    </button>
  `;
}

function caseCostValue(item) {
  if (item.name.includes("象山")) return "326万";
  if (item.name.includes("五金")) return "214万";
  if (item.name.includes("物流")) return "238万";
  return "96万";
}

function productAppCard(item, type, index, keyPrefix = type) {
  const title = item[0];
  const group = type === "saas" ? "SaaS产品" : "产品软件矩阵";
  const iconName = type === "saas" ? "saas" : "software";
  const visualMap = type === "saas" ? saasVisuals : softwareVisuals;
  const visual = visualMap[title] || {};
  const image = visual.image || previewImages[(index + (type === "saas" ? 2 : 0)) % previewImages.length];
  const secondaryImages = productSecondaryImages(type, title, index);
  const key = `${keyPrefix}-${index}`;
  const patentKey = `ip-${keyPrefix}-${index}-patent`;
  const copyrightKey = `ip-${keyPrefix}-${index}-copyright`;
  detailRegistry.set(key, createProductDetail(item, type, index, visual, secondaryImages));
  detailRegistry.set(patentKey, createIpDetail("patent", title, item[3]));
  detailRegistry.set(copyrightKey, createIpDetail("copyright", title, item[4]));
  return `
    <div class="industry app-card product-app search-item" id="${key}" data-search="${searchText(item)} ${group} 专利 软著 订阅 软件 产品">
      <div class="app-card-main">
        <div class="app-icon">${icon(iconName)}</div>
        <div class="app-title">
          <b>${title}</b>
          <span>${group} · ${item[1]} · ${item[2]}</span>
        </div>
        <div class="app-action">
          <button class="detail-link detail-trigger" type="button" data-detail-key="${key}">${icon("detail")}详情</button>
          <div class="app-assets">
            <button class="asset-mini asset-strip detail-trigger" type="button" data-detail-key="${patentKey}">专利 ${item[3]}</button>
            <button class="asset-mini asset-strip detail-trigger" type="button" data-detail-key="${copyrightKey}">软著 ${item[4]}</button>
          </div>
        </div>
      </div>
      <div class="app-metrics">
        <span>${icon("star")}4.7分</span>
        <span>${icon(type === "saas" ? "subscribe" : "download")}${type === "saas" ? "订阅同步" : "内部复用"}</span>
        <span>${item[1]}系统</span>
      </div>
      <div class="app-tags">
        <span>${icon("tag")}${type === "saas" ? "SaaS应用" : "工业软件"}</span>
        <span>${item[2]}</span>
        <span>${type === "saas" ? "客户同步" : "标准模块"}</span>
      </div>
      <p>${visual.description || `${title}面向${item[1]}业务场景，沉淀标准接口、模块能力、专利软著和可复用资料。`}</p>
      <div class="app-previews product-previews">
        <img src="${image}" alt="${title}界面图">
        <img src="${secondaryImages[0]}" alt="${title}应用场景图">
        <img src="${secondaryImages[1]}" alt="${title}详情图">
      </div>
    </div>
  `;
}

function industryCard(zoneName, item, zoneIndex, itemIndex, sourceName = zoneName, visualTitle = item[0], keyPrefix = "industry") {
  const key = `${keyPrefix}-${zoneIndex}-${itemIndex}`;
  const title = item[0];
  const patent = Number(item[1] || 0);
  const copyright = Number(item[2] || 0);
  const visual = industryVisuals[`${sourceName}/${visualTitle}`] || industryVisuals[`${zoneName}/${title}`] || {};
  const image = visual.image || previewImages[(zoneIndex + itemIndex) % previewImages.length];
  const secondaryImages = industrySecondaryImages(sourceName, visualTitle, zoneIndex, itemIndex);
  const patentKey = `ip-${keyPrefix}-${zoneIndex}-${itemIndex}-patent`;
  const copyrightKey = `ip-${keyPrefix}-${zoneIndex}-${itemIndex}-copyright`;
  detailRegistry.set(key, createIndustryDetail(sourceName, item, visual, secondaryImages));
  detailRegistry.set(patentKey, createIpDetail("patent", `${sourceName}${title}`, patent));
  detailRegistry.set(copyrightKey, createIpDetail("copyright", `${sourceName}${title}`, copyright));
  return `
    <div class="industry app-card search-item" data-search="${zoneName} ${searchText(item)} 行业 专利 软著">
      <div class="app-card-main">
        <div class="app-icon">${icon("industry")}</div>
        <div class="app-title">
          <b>${title}</b>
          <span>${zoneName} · 工业APP应用软件</span>
        </div>
        <div class="app-action">
          <button class="detail-link detail-trigger" type="button" data-detail-key="${key}">${icon("detail")}详情</button>
          <div class="app-assets">
            <button class="asset-mini asset-strip detail-trigger" type="button" data-detail-key="${patentKey}">专利 ${patent}</button>
            <button class="asset-mini asset-strip detail-trigger" type="button" data-detail-key="${copyrightKey}">软著 ${copyright}</button>
          </div>
        </div>
      </div>
      <div class="app-metrics">
        <span>${icon("star")}4.8分</span>
        <span>${icon("download")}9.8万次</span>
        <span>使用率 70.55%</span>
      </div>
      <div class="app-tags">
        <span>${icon("tag")}数字化工厂</span>
        <span>提升效率</span>
        <span>QC巡检</span>
      </div>
      <p>${visual.description || `面向${zoneName}${title}场景的工业应用，覆盖生产协同、质量追溯、设备联动与资料资产沉淀。`}</p>
      <div class="app-previews industry-previews">
        <img src="${image}" alt="${title}界面图">
        <img src="${secondaryImages[0]}" alt="${title}应用场景图">
        <img src="${secondaryImages[1]}" alt="${title}详情图">
      </div>
    </div>
  `;
}

function createIndustryDetail(zoneName, item, visual, secondaryImages) {
  const title = `${item[0]}工业APP应用`;
  const image = visual.image || secondaryImages[0];
  const profile = productAssetProfiles[item[0]] || defaultProductProfile(title);
  return {
    type: "industry",
    title,
    subtitle: `${zoneName} · 数字化工厂 · 提升效率`,
    iconName: "industry",
    heroImage: image,
    metrics: [
      ["评价评分", "4.8", "五星"],
      ["专利", String(item[1] || 0), "已归档"],
      ["软著", String(item[2] || 0), "已归档"],
      ["使用率", "70.55%", "今日"]
    ],
    description: visual.description || `${title}面向${zoneName}行业应用场景，整合生产计划、质量巡检、设备状态、资料沉淀与客户案例能力，帮助企业提升无形资产转化效率。`,
    tags: ["数字化工厂", "QC巡检", "提升效率"],
    previews: [image, ...secondaryImages],
    support: ["手机", "工位机", "电脑端", "电子看板"],
    docs: ["产品需求规格说明书", "技术架构设计方案", "产品演示与解决方案PPT"],
    profile,
    investment: profileInvestment(profile, appVersionInfo.currentVersion),
    contributionPeople: contributionPeople([], title),
    appDownload: true
  };
}

function createIndustryMoreDetail(zone, zoneIndex) {
  return {
    type: "industry-more",
    title: `${zone.name}更多行业内容`,
    subtitle: `隐藏模块 · ${zone.moreItems.length}项 · 点击查看详情`,
    iconName: "industry",
    tags: [zone.name, "更多模块", "行业内容"],
    zoneIndex,
    items: zone.moreItems
  };
}

function createProductMoreDetail(title, subtitle, productType, items, startIndex) {
  return {
    type: "product-more",
    title,
    subtitle: `${subtitle} · ${items.length}项 · 点击查看详情`,
    iconName: productType === "saas" ? "saas" : "software",
    tags: [productType === "saas" ? "SaaS应用" : "工业软件", "更多模块", "产品资产"],
    productType,
    startIndex,
    items
  };
}

function productMoreItems(productType) {
  return productType === "saas" ? saas : software;
}

function createCaseMoreDetail() {
  return {
    type: "case-more",
    title: "案例资产更多",
    subtitle: `案例资产 · ${caseAssets.length}项 · 点击查看详情`,
    iconName: "case",
    tags: ["案例资产", "知识产权", "项目沉淀"],
    items: caseAssets
  };
}

function createDeviceMoreDetail(title, kind, items, startIndex) {
  return {
    type: "device-more",
    title,
    subtitle: `${kind} · ${items.length}项 · 点击查看详情`,
    iconName: kind === "智能硬件" ? "hardware" : "equipment",
    tags: [kind, "设备资产", "更多模块"],
    kind,
    startIndex,
    items
  };
}

function createSceneMoreDetail() {
  return {
    type: "scene-more",
    title: "场景运营库更多",
    subtitle: `场景运营库 · ${sceneOperationLibrary.length}项 · 点击查看详情`,
    iconName: "equipment",
    tags: ["场景运营库", "现场应用", "资料沉淀"],
    items: sceneOperationLibrary
  };
}

function createProductDetail(item, type, index, visual, secondaryImages) {
  const title = item[0];
  const group = type === "saas" ? "SaaS产品" : "产品软件矩阵";
  const iconName = type === "saas" ? "saas" : "software";
  const image = visual.image || previewImages[(index + (type === "saas" ? 2 : 0)) % previewImages.length];
  const profile = productAssetProfiles[title] || defaultProductProfile(title);
  const previews = visual.previews || [image, ...secondaryImages];
  return {
    type: "product",
    title: `${title}${type === "saas" ? " SaaS应用" : " 工业软件"}`,
    subtitle: `${group} · ${item[1]} · ${item[2]}`,
    iconName,
    heroImage: image,
    metrics: [
      ["评价评分", type === "saas" ? "4.7" : "4.8", "五星"],
      ["专利", String(item[3] || 0), "已归档"],
      ["软著", String(item[4] || 0), "已归档"],
      [type === "saas" ? "订阅状态" : "复用状态", type === "saas" ? "同步中" : "可复用", "今日"]
    ],
    description: visual.description || `${title}面向${item[1]}业务场景，沉淀标准接口、模块能力、专利软著和可复用资料。`,
    tags: [item[1], item[2], type === "saas" ? "客户同步" : "标准模块"],
    previews,
    uiGallery: uiGalleryFor(title, previews),
    support: type === "saas" ? ["手机", "电脑端", "企业微信", "订阅门户"] : ["电脑端", "工位机", "电子看板", "接口网关"],
    docs: ["产品需求规格说明书", "技术架构设计方案", "演示与解决方案PPT"],
    profile,
    investment: profileInvestment(profile, item[2]),
    contributionPeople: contributionPeople([], title),
    appDownload: type === "saas"
  };
}

function defaultProductProfile(title) {
  return {
    costs: [["累计投入", "96万"], ["开发费", "38万"], ["人工费", "44万"], ["实施运维", "14万"]],
    hours: [["研发工时", "1,860h"], ["测试工时", "420h"], ["实施工时", "760h"]],
    versions: [["V1.6", "2025-10-24", `${title}移动端与看板联动增强`], ["V1.2", "2024-11-15", "基础业务流程和资料归档能力上线"]],
    components: ["业务组件", "接口组件", "资料组件", "现场组件"]
  };
}

function createDocDetail(groupName, item) {
  const list = docContentLedger[groupName]?.[item[0]] || [];
  return {
    type: "doc",
    title: `${groupName} / ${item[0]}`,
    subtitle: `公司资料 · 已归档 ${item[1]} · 清单 ${list.length || item[1]} 项`,
    iconName: "document",
    tags: [groupName, item[0], "资料资产"],
    metrics: [["归档数量", String(item[1]), "当前"], ["年度新增", String(Math.max(2, Math.round(item[1] * 0.18))), "2026"], ["资料状态", "已建档", "治理"]],
    description: `${item[0]}用于支撑公司无形资产证明、项目审计、客户展示和内部复用，已纳入资料资产台账进行分类管理。`,
    docs: ["资料清单", "归档路径", "责任人", "更新记录"],
    contentList: list
  };
}

function createIpDetail(kind, assetName, count) {
  const source = ipAssetLedger[kind];
  const related = source.items.filter((item) => item[2].includes(assetName) || assetName.includes(item[2]));
  const items = completeIpItems(kind, assetName, Number(count || 0), related);
  return {
    type: "ip",
    title: `${assetName}${source.label}详情`,
    subtitle: `${source.label} · 数量 ${items.length || count} · 证书台账`,
    iconName: kind === "patent" ? "patent" : "copyright",
    tags: [source.label, assetName, count > 0 ? "已有关联" : "申报中"],
    metrics: [["数量", String(count), "卡片"], ["最近获得", count > 0 ? "2025-12-18" : "2026-03-22", "证书"], ["资料状态", "已建档", "治理"]],
    items
  };
}

function completeIpItems(kind, assetName, count, related) {
  const source = ipAssetLedger[kind];
  const targetCount = Math.max(count, related.length, 1);
  const base = related.length ? related : source.items.slice(0, Math.min(source.items.length, targetCount));
  const items = base.map((item) => [...item]);
  const prefix = kind === "patent" ? "HN-PAT" : "HN-SR";
  const label = source.label;
  const status = kind === "patent" ? "已授权" : "已登记";
  while (items.length < targetCount) {
    const index = items.length + 1;
    const year = 2020 + (index % 6);
    items.push([
      `${prefix}-${year}-${String(index).padStart(3, "0")}`,
      `${assetName}${label}明细${index}`,
      assetName,
      `${year}-${String((index % 12) + 1).padStart(2, "0")}-${String((index % 24) + 1).padStart(2, "0")}`,
      index % 5 === 0 ? "申报中" : status
    ]);
  }
  return items.slice(0, targetCount);
}

function createPersonDetail(code) {
  const person = employeeDirectory[code];
  return {
    type: "person",
    title: code,
    subtitle: person ? `${person.role} · ${statusText(person.status)}` : "人员信息已登记",
    iconName: "person",
    tags: person ? [person.department, person.role, statusText(person.status)] : ["资产责任人"],
    person: person || { name: "张工", role: "资产责任人", department: "项目交付部", status: "new", assets: ["资料资产"], note: "人员信息已纳入资产责任台账。" }
  };
}

function createSceneDetail(item) {
  return {
    type: "scene",
    title: item.name,
    subtitle: `${item.device} · ${item.role} · 场景运营库`,
    iconName: "equipment",
    tags: [item.device, item.role, "行业现场"],
    heroImage: item.image,
    scene: item
  };
}

function createDeviceDetail(item, kind, index) {
  const previews = [item[2], previewImages[(index + 1) % previewImages.length], previewImages[(index + 2) % previewImages.length]];
  return {
    type: "device",
    title: item[0],
    subtitle: `${kind} · ${item[1]} · 资产已归档`,
    iconName: kind === "智能硬件" ? "hardware" : "equipment",
    heroImage: item[2],
    metrics: [
      ["设备类型", kind, "已登记"],
      ["应用场景", item[1], "现场"],
      ["资料状态", "已归档", "72%"],
      ["维护状态", "正常", "可用"]
    ],
    description: `${item[0]}用于${item[1]}场景，纳入无形资产工作台进行图片、资料、应用案例和知识产权关联展示。`,
    tags: [kind, item[1], "现场资产"],
    previews,
    uiGallery: uiGalleryFor(item[0], previews),
    support: ["现场终端", "数据采集", "资产台账", "资料归档"],
    docs: ["设备照片", "应用案例", "维护资料"]
  };
}

function uiGalleryFor(title, fallbackImages) {
  const configured = assetUiGalleries[title];
  return {
    url: configured?.url || "",
    images: configured?.images?.length ? configured.images.slice(0, 3) : fallbackImages.slice(0, 3)
  };
}

function createCaseDetail(item, visual = {}) {
  const previews = visual.previews || [previewImages[0], previewImages[1], previewImages[3]];
  const investment = caseInvestment(item);
  return {
    type: "case",
    title: item.name,
    subtitle: `${item.industry} · 来源 ${item.sourceYear} · ${statusLabel(item.status)}`,
    iconName: "case",
    heroImage: visual.hero || previewImages[caseAssets.indexOf(item) % previewImages.length],
    metrics: [
      ["专利", String(item.patents), "已关联"],
      ["软著", String(item.copyrights), "已关联"],
      ["人员", String(item.contributors?.length || 0), "贡献"],
      ["成本", caseCostValue(item), "沉淀"]
    ],
    description: visual.detail || item.intro,
    tags: [item.industry, statusLabel(item.status), `${item.sourceYear}演进`],
    previews,
    uiGallery: caseUiGallery(item, previews),
    support: item.components,
    docs: ["公开案例资料", "知识产权台账"],
    modules: item.modules,
    components: item.components,
    contributors: item.contributors,
    investment,
    contributionPeople: caseContributionPeople(item, investment),
    evolution: item.evolution,
    evidence: item.evidence,
    owners: [
      ["产品经理", item.manager, item.managerState],
      ["技术负责人", item.engineer, item.engineerState]
    ],
    roleAllowed: true
  };
}

function caseUiGallery(item, fallbackImages) {
  const device = item.components.includes("工位机") ? "工位机" : item.components.includes("手持机") ? "手持机" : "";
  const configured = device ? assetUiGalleries[device] : null;
  return {
    url: configured?.url || "",
    images: configured?.images?.length ? configured.images.slice(0, 3) : fallbackImages.slice(0, 3)
  };
}

function statusLabel(status) {
  return {
    normal: "正常",
    idle: "闲置",
    risk: "风险"
  }[status] || "正常";
}

function personBadge(role, name, state) {
  const found = personByCodeOrName(name);
  const code = found?.[0] || name;
  const person = found?.[1];
  const label = statusText(person?.status || state);
  return `<button class="person-badge detail-trigger state-${person?.status || state}" type="button" data-detail-key="person-${code}"><i></i><b>${role}</b><em>${person?.name || name} · ${code} · ${label}</em></button>`;
}

function evidenceIcon(label) {
  if (label.includes("案例")) return "case";
  if (label.includes("项目")) return "timeline";
  if (label.includes("人员")) return "person";
  if (label.includes("凭证")) return "contract";
  if (label.includes("成本")) return "cost";
  return "patent";
}

function renderNavigation() {
  document.querySelectorAll(".top-nav button").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.action === "chart") {
        byId("chartToggle")?.click();
        return;
      }
      if (button.dataset.action === "version") {
        byId("versionToggle")?.click();
        return;
      }
      if (button.dataset.detailKey) {
        setDetailModal(true, button.dataset.detailKey);
        return;
      }
      const target = byId(button.dataset.target);
      if (target) target.scrollIntoView({ block: "start", behavior: "smooth" });
    });
  });
}

function docIcon(groupName) {
  return {
    知识产权: "patent",
    品牌渠道: "channel",
    宣传资产: "media",
    企业档案: "archive"
  }[groupName] || "document";
}

const detailOwners = ["杜英杰", "艾总", "冯小燕", "秦步日", "武文豪", "陈良", "郑玉悦", "郭振"];

function hashText(text) {
  return Array.from(text).reduce((sum, char) => (sum * 31 + char.charCodeAt(0)) >>> 0, 7).toString(36);
}

function ownerFor(detail, offset = 0) {
  const text = `${detail.title || ""}${detail.subtitle || ""}`;
  const seed = Array.from(text).reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return detailOwners[(seed + offset) % detailOwners.length];
}

function normalizeRow(item, index, fallbackTitle = "资料") {
  if (Array.isArray(item)) {
    return [
      item[0] || `${fallbackTitle}${index + 1}`,
      item[1] || "资料资产",
      item[2] || item[3] || "已归档",
      item[4] || item[3] || "可查看"
    ];
  }
  return [String(item || `${fallbackTitle}${index + 1}`), "资料资产", "已归档", "可查看"];
}

function detailInfoRows(detail, kind) {
  const title = detail.title || "资产详情";
  const owner = ownerFor(detail);
  if (kind === "docs") {
    const source = detail.contentList?.length
      ? detail.contentList
      : detail.items?.length
        ? detail.items.slice(0, 8)
        : [...(detail.docs || []), ...(detail.evidence || []), ...(detail.modules || []), ...(detail.components || [])].slice(0, 8);
    const rows = source.length ? source.map((item, index) => normalizeRow(item, index, "资料")) : [
      [`${title}资料总表`, "资料资产", "已归档", "可查看"],
      [`${title}证明材料`, "审计凭证", "已归档", "可查看"],
      [`${title}复用说明`, "内部资料", "已归档", "可查看"]
    ];
    return rows.slice(0, 10);
  }
  if (kind === "path") {
    const base = title.replace(/[^\u4e00-\u9fa5A-Za-z0-9]+/g, "-").replace(/^-|-$/g, "");
    return [
      ["资产台账主目录", `/无形资产台账/${detail.tags?.[0] || "综合资产"}/${base || "资产"}`, owner, "已同步"],
      ["证据资料目录", `/归档资料/证据链/${base || "资产"}`, ownerFor(detail, 1), "已归档"],
      ["版本快照目录", `versions/${appVersionInfo.currentVersion}/assets/${base || "asset"}`, ownerFor(detail, 2), "可追溯"]
    ];
  }
  if (kind === "owner") {
    if (detail.owners?.length) {
      return detail.owners.map((item, index) => {
        const person = employeeDirectory[item[1]];
        return [item[0], person?.name || item[1], person?.department || "项目交付部", statusText(person?.status || item[2])];
      });
    }
    return [
      ["资产负责人", owner, "资产治理", "在岗"],
      ["资料维护人", ownerFor(detail, 1), "资料归档", "在岗"],
      ["复核确认人", ownerFor(detail, 2), "管理复核", "在岗"]
    ];
  }
  return [
    ["2026-07-02", owner, "更新资料卡片展示", "已完成"],
    ["2026-06-30", ownerFor(detail, 1), "补齐证据与归档路径", "已完成"],
    ["2026-06-28", ownerFor(detail, 2), "建立资产详情台账", "已完成"]
  ];
}

function infoCardDetail(detail, kind, label, iconName) {
  return {
    type: "info-card",
    title: `${detail.title} / ${label}`,
    subtitle: `${label} · ${detail.subtitle || "资产详情"}`,
    iconName,
    tags: [label, detail.tags?.[0] || "资料资产", "可追溯"],
    rows: detailInfoRows(detail, kind)
  };
}

function detailInfoCards(detail) {
  if (detail.type === "info-card") return "";
  const cards = [
    ["docs", "资料清单", "document"],
    ["path", "归档路径", "archive"],
    ["owner", "责任人", "owner"],
    ["updates", "更新记录", "timeline"]
  ];
  const baseKey = `info-${detail.type || "detail"}-${hashText(detail.title || detail.subtitle || "asset")}`;
  return `
    <div class="detail-info-card-grid">
      ${cards.map(([kind, label, iconName]) => {
        const key = `${baseKey}-${kind}`;
        const rows = detailInfoRows(detail, kind);
        detailRegistry.set(key, infoCardDetail(detail, kind, label, iconName));
        return `
          <button class="detail-info-card detail-trigger" type="button" data-detail-key="${key}">
            <span>${icon(iconName)}${label}</span>
            <em>${rows.length}项</em>
            <b>${icon("detail")}查看</b>
          </button>
        `;
      }).join("")}
    </div>
  `;
}

function detailMarkup(detail) {
  if (detail.type === "case") return caseDetailMarkup(detail);
  if (detail.type === "doc") return docDetailMarkup(detail);
  if (detail.type === "ip") return ipDetailMarkup(detail);
  if (detail.type === "person") return personDetailMarkup(detail);
  if (detail.type === "scene") return sceneDetailMarkup(detail);
  if (detail.type === "info-card") return infoCardDetailMarkup(detail);
  if (detail.type === "asset-log") return assetLogDetailMarkup(detail);
  if (detail.type === "asset-lifecycle") return lifecycleDetailMarkup(detail);
  if (detail.type === "low-use") return lowUseDetailMarkup(detail);
  if (detail.type === "idle-assets") return idleAssetDetailMarkup(detail);
  if (detail.type === "renewal-todos") return renewalTodoDetailMarkup(detail);
  if (detail.type === "design-library") return designLibraryDetailMarkup(detail);
  if (detail.type === "industry-more") return industryMoreDetailMarkup(detail);
  if (detail.type === "product-more") return productMoreDetailMarkup(detail);
  if (detail.type === "case-more") return caseMoreDetailMarkup(detail);
  if (detail.type === "device-more") return deviceMoreDetailMarkup(detail);
  if (detail.type === "scene-more") return sceneMoreDetailMarkup(detail);
  return `
    <div class="detail-head">
      <div class="detail-app-icon">${icon(detail.iconName)}</div>
      <div>
        <h2 id="detailTitle">${detail.title}</h2>
        <p>${detail.subtitle}</p>
        <div class="detail-tags">${detail.tags.map((tag) => `<span>${icon("tag")}${tag}</span>`).join("")}</div>
      </div>
      <button class="detail-download" type="button">${icon("download")}资料包</button>
    </div>
    <div class="detail-metrics">
      ${detail.metrics.map((metric) => `<div><span>${metric[0]}</span><strong>${metric[1]}</strong><em>${metric[2]}</em></div>`).join("")}
    </div>
    <div class="detail-body">
      <section class="detail-left">
        <div class="detail-hero">
          <img src="${detail.heroImage}" alt="${detail.title}">
          <button type="button" aria-label="播放介绍">${icon("play", "播放")}</button>
        </div>
        <h3>${icon("solution")}软件介绍</h3>
        <p>${detail.description}</p>
        <h3>${icon("image")}界面详情</h3>
        <div class="detail-previews">
          ${detail.previews.map((image, index) => `<img src="${image}" alt="${detail.title}界面${index + 1}">`).join("")}
        </div>
        ${detail.uiGallery ? uiGalleryMarkup(detail) : ""}
        ${detailInfoCards(detail)}
        ${detail.profile ? productProfileMarkup(detail) : ""}
      </section>
      <aside class="detail-side">
        <h3>${icon("customer")}客户案例</h3>
        ${["华纳科技有限公司", "华丽服饰有限公司", "东方智造集团"].map((name, index) => `
          <div class="case-card">
            <b>${name}</b>
            <span>${detail.tags[0]} · ${index === 0 ? "大型企业" : "中型企业"}</span>
            <p>已覆盖核心应用场景，形成资料、案例与知识产权联动。</p>
            <button type="button">${icon("detail")}查看详情</button>
          </div>
        `).join("")}
        <h3>${icon("hardware")}支持设备</h3>
        <div class="support-list">${detail.support.map((item) => `<span>${item}</span>`).join("")}</div>
        ${detail.appDownload ? `<h3>${icon("download")}最新版本</h3><div class="download-box"><b>${detail.title}</b><span>V${detail.subtitle.match(/V[0-9.]+/)?.[0]?.replace("V", "") || "2.0"} · 2026-05-20</span><button type="button">${icon("download")}下载资料包</button></div>` : ""}
      </aside>
    </div>
  `;
}

function uiGalleryMarkup(detail) {
  const url = detail.uiGallery.url;
  return `
    <h3>${icon("image")}UI图访问</h3>
    <div class="ui-gallery">
      ${detail.uiGallery.images.map((image, index) => `
        <a class="ui-shot" href="${url || image}" target="_blank" rel="noopener noreferrer">
          <img src="${image}" alt="${detail.title}UI图${index + 1}">
          <span>${url ? "查看UI" : "UI地址待配置"}</span>
        </a>
      `).join("")}
    </div>
    <a class="ui-link ${url ? "" : "is-disabled"}" href="${url || "#"}" target="_blank" rel="noopener noreferrer" aria-disabled="${String(!url)}">${icon("external")}${url ? "打开蓝湖UI地址" : "UI地址待配置"}</a>
  `;
}

function productProfileMarkup(detail) {
  const profile = detail.profile;
  return `
    ${detail.investment ? `
      <h3>${icon("cost")}投入概览</h3>
      <div class="investment-summary">
        <div><span>已有投入人天</span><strong>${detail.investment.days}人天</strong></div>
        <div><span>投入成本</span><strong>${detail.investment.cost}</strong></div>
        <div><span>对应版本</span><strong>${detail.investment.version}</strong></div>
      </div>
    ` : ""}
    ${detail.contributionPeople?.length ? `
      <h3>${icon("person")}投入人员</h3>
      <div class="people-ledger">
        ${detail.contributionPeople.map((member) => `<div><b>${member.name}</b><span>${member.role}</span><em>${member.code} · ${member.status}</em></div>`).join("")}
      </div>
    ` : ""}
    <h3>${icon("cost")}投入成本</h3>
    <div class="cost-mini-grid">${profile.costs.map((item) => `<div><span>${item[0]}</span><strong>${item[1]}</strong></div>`).join("")}</div>
    <h3>${icon("task")}工时构成</h3>
    <div class="cost-mini-grid">${profile.hours.map((item) => `<div><span>${item[0]}</span><strong>${item[1]}</strong></div>`).join("")}</div>
    <h3>${icon("timeline")}版本历史</h3>
    <div class="version-list">${profile.versions.map((item) => `<div><b>${item[0]} · ${item[1]}</b><span>${item[2]}</span></div>`).join("")}</div>
    <h3>${icon("component")}累计组件</h3>
    <div class="detail-chip-grid">${profile.components.map((item) => `<span>${icon("component")}${item}</span>`).join("")}</div>
  `;
}

function docDetailMarkup(detail) {
  return `
    <div class="detail-head">
      <div class="detail-app-icon">${icon("document")}</div>
      <div><h2 id="detailTitle">${detail.title}</h2><p>${detail.subtitle}</p><div class="detail-tags">${detail.tags.map((tag) => `<span>${icon("tag")}${tag}</span>`).join("")}</div></div>
    </div>
    <div class="detail-metrics">${detail.metrics.map((metric) => `<div><span>${metric[0]}</span><strong>${metric[1]}</strong><em>${metric[2]}</em></div>`).join("")}</div>
    <div class="simple-detail">
      <p>${detail.description}</p>
      ${detail.contentList?.length ? `
        <div class="doc-content-list">
          ${detail.contentList.map((item) => `
            <div>
              <b>${item[0]}</b>
              <span>${item[1]}</span>
              <em>${item[2]}</em>
              <strong>${item[3]}</strong>
            </div>
          `).join("")}
        </div>
      ` : ""}
      ${detailInfoCards(detail)}
    </div>
  `;
}

function ipDetailMarkup(detail) {
  return `
    <div class="detail-head">
      <div class="detail-app-icon">${icon(detail.iconName)}</div>
      <div><h2 id="detailTitle">${detail.title}</h2><p>${detail.subtitle}</p><div class="detail-tags">${detail.tags.map((tag) => `<span>${icon("tag")}${tag}</span>`).join("")}</div></div>
    </div>
    <div class="detail-metrics">${detail.metrics.map((metric) => `<div><span>${metric[0]}</span><strong>${metric[1]}</strong><em>${metric[2]}</em></div>`).join("")}</div>
    <div class="ip-table">
      ${detail.items.map((item) => `<div><b>${item[1]}</b><span>${item[0]}</span><span>关联：${item[2]}</span><span>获得时间：${item[3]}</span><em>${item[4]}</em></div>`).join("")}
    </div>
    ${detailInfoCards(detail)}
  `;
}

function personDetailMarkup(detail) {
  const person = detail.person;
  return `
    <div class="detail-head">
      <div class="detail-app-icon">${icon("person")}</div>
      <div><h2 id="detailTitle">${detail.title}</h2><p>${detail.subtitle}</p><div class="detail-tags">${detail.tags.map((tag) => `<span>${icon("tag")}${tag}</span>`).join("")}</div></div>
    </div>
    <div class="person-detail ${person.status === "departed" ? "is-departed" : ""}">
      ${person.status === "departed" ? `<div class="leave-alert">${icon("warning")}该人员已离职，相关接口、源码、现场资料需确认交接完整性。</div>` : ""}
      <div class="person-info"><span>姓名</span><b>${person.name}</b><span>岗位</span><b>${person.role}</b><span>部门</span><b>${person.department}</b><span>状态</span><b>${statusText(person.status)}</b></div>
      <h3>${icon("case")}负责资产</h3>
      <div class="detail-chip-grid">${person.assets.map((item) => `<span>${item}</span>`).join("")}</div>
      <p>${person.note}</p>
      ${detailInfoCards(detail)}
    </div>
  `;
}

function sceneDetailMarkup(detail) {
  const scene = detail.scene;
  return `
    <div class="detail-head">
      <div class="detail-app-icon">${icon("equipment")}</div>
      <div><h2 id="detailTitle">${detail.title}</h2><p>${detail.subtitle}</p><div class="detail-tags">${detail.tags.map((tag) => `<span>${icon("tag")}${tag}</span>`).join("")}</div></div>
    </div>
    <div class="scene-detail">
      <div class="detail-hero scene-detail-hero"><img src="${detail.heroImage}" alt="${detail.title}"></div>
      <div class="scene-flow"><div><span>使用场景</span><b>${scene.scene}</b></div><div><span>适用岗位</span><b>${scene.role}</b></div><div><span>产出资料</span><b>${scene.output}</b></div></div>
      ${detailInfoCards(detail)}
    </div>
  `;
}

function infoCardDetailMarkup(detail) {
  return `
    <div class="detail-head">
      <div class="detail-app-icon">${icon(detail.iconName)}</div>
      <div><h2 id="detailTitle">${detail.title}</h2><p>${detail.subtitle}</p><div class="detail-tags">${detail.tags.map((tag) => `<span>${icon("tag")}${tag}</span>`).join("")}</div></div>
    </div>
    <div class="info-card-detail-list">
      ${detail.rows.map((row) => `
        <div>
          <b>${row[0]}</b>
          <span>${row[1]}</span>
          <em>${row[2]}</em>
          <strong>${row[3]}</strong>
        </div>
      `).join("")}
    </div>
  `;
}

function assetLogDetailMarkup(detail) {
  return `
    <div class="detail-head">
      <div class="detail-app-icon">${icon("permission")}</div>
      <div><h2 id="detailTitle">${detail.title}</h2><p>${detail.subtitle}</p><div class="detail-tags"><span>${icon("tag")}权限记录</span><span>${icon("tag")}审计明细</span></div></div>
    </div>
    <div class="asset-log-table">
      <div class="asset-log-head"><span>时间</span><span>姓名</span><span>动作</span><span>资产</span><span>内容</span><span>状态</span></div>
      ${detail.items.map((item) => `<div><span>${item[0]}</span><b>${item[1]}</b><em>${item[2]}</em><span>${item[3]}</span><span>${item[4]}</span><strong class="${item[5] === "异常提醒" ? "risk" : item[5] === "有任务" ? "task" : "normal"}">${item[5]}</strong></div>`).join("")}
    </div>
  `;
}

function lifecycleDetailMarkup(detail) {
  return `
    <div class="detail-head">
      <div class="detail-app-icon">${icon("timeline")}</div>
      <div><h2 id="detailTitle">${detail.title}</h2><p>${detail.subtitle}</p><div class="detail-tags"><span>${icon("tag")}生命周期</span><span>${icon("tag")}资产治理</span></div></div>
    </div>
    <div class="lifecycle-list">
      ${detail.items.map((item) => `<div><i></i><section><b>${item[0]}</b><span>${item[1]} · ${item[3]} · ${item[4]}</span><p>${item[2]}</p></section></div>`).join("")}
    </div>
  `;
}

function lowUseDetailMarkup(detail) {
  return `
    <div class="detail-head">
      <div class="detail-app-icon">${icon("warning")}</div>
      <div><h2 id="detailTitle">${detail.title}</h2><p>${detail.subtitle}</p><div class="detail-tags"><span>${icon("tag")}低利用率</span><span>${icon("tag")}复用风险</span></div></div>
    </div>
    <div class="low-use-list">
      ${detail.items.map((item) => `<div><header><b>${item[0]}</b><strong>${item[1]}</strong></header><span>累计投入 ${item[2]} · 调用量 ${item[3]}</span><p>${item[4]}</p><em>${item[5]}</em></div>`).join("")}
    </div>
  `;
}

function idleAssetDetailMarkup(detail) {
  return `
    <div class="detail-head">
      <div class="detail-app-icon">${icon("archive")}</div>
      <div><h2 id="detailTitle">${detail.title}</h2><p>${detail.subtitle}</p><div class="detail-tags"><span>${icon("tag")}闲置资产</span><span>${icon("tag")}治理建议</span></div></div>
    </div>
    <div class="low-use-list idle-list">
      ${detail.items.map((item) => `<div><header><b>${item[0]}</b><strong>${item[1]} · ${item[2]}</strong></header><span>累计投入 ${item[3]}</span><p>${item[4]}</p><em>${item[5]}</em></div>`).join("")}
    </div>
  `;
}

function renewalTodoDetailMarkup(detail) {
  return `
    <div class="detail-head">
      <div class="detail-app-icon">${icon("warning")}</div>
      <div><h2 id="detailTitle">${detail.title}</h2><p>${detail.subtitle}</p><div class="detail-tags"><span>${icon("tag")}续费待办</span><span>${icon("tag")}费用提醒</span></div></div>
    </div>
    <div class="renewal-detail-list">
      ${detail.items.map((item) => `
        <div class="${item.status}">
          <header><b>${item.name}</b><strong>${todoStatusText[item.status]}</strong></header>
          <span>${item.category} · 到期 ${item.due} · ${item.amount}</span>
          <p>${item.owner} · ${item.note}</p>
        </div>
      `).join("")}
    </div>
  `;
}

function designLibraryDetailMarkup(detail) {
  return `
    <div class="detail-head">
      <div class="detail-app-icon">${icon("blueprint")}</div>
      <div><h2 id="detailTitle">${detail.title}</h2><p>${detail.subtitle}</p><div class="detail-tags"><span>${icon("tag")}设计沉淀</span><span>${icon("tag")}未开发产品</span><span>${icon("tag")}原因留痕</span></div></div>
    </div>
    <div class="design-library-list">
      ${detail.items.map((item) => `
        <div>
          <header>
            <b>${item.name}</b>
            <strong>${item.status}</strong>
          </header>
          <span>${item.category} · ${item.designDate} · ${item.designer}</span>
          <p>${item.reason}</p>
          <em>${item.reuse}</em>
        </div>
      `).join("")}
    </div>
  `;
}

function industryMoreDetailMarkup(detail) {
  return `
    <div class="detail-head">
      <div class="detail-app-icon">${icon("industry")}</div>
      <div><h2 id="detailTitle">${detail.title}</h2><p>${detail.subtitle}</p><div class="detail-tags">${detail.tags.map((tag) => `<span>${icon("tag")}${tag}</span>`).join("")}</div></div>
    </div>
    <div class="more-card-grid">
      ${detail.items.map((entry, index) => {
        const cardIndex = index + 9;
        return industryCard(detail.tags[0], entry.item, detail.zoneIndex, cardIndex, entry.source, entry.visualTitle, "industry-more-card");
      }).join("")}
    </div>
  `;
}

function productMoreDetailMarkup(detail) {
  return `
    <div class="detail-head">
      <div class="detail-app-icon">${icon(detail.iconName)}</div>
      <div><h2 id="detailTitle">${detail.title}</h2><p>${detail.subtitle}</p><div class="detail-tags">${detail.tags.map((tag) => `<span>${icon("tag")}${tag}</span>`).join("")}</div></div>
    </div>
    <div class="more-card-grid">
      ${detail.items.map((item, index) => {
        const productIndex = detail.startIndex + index;
        return productAppCard(item, detail.productType, productIndex, `${detail.productType}-more-card`);
      }).join("")}
    </div>
  `;
}

function caseMoreDetailMarkup(detail) {
  return `
    <div class="detail-head">
      <div class="detail-app-icon">${icon("case")}</div>
      <div><h2 id="detailTitle">${detail.title}</h2><p>${detail.subtitle}</p><div class="detail-tags">${detail.tags.map((tag) => `<span>${icon("tag")}${tag}</span>`).join("")}</div></div>
    </div>
    <div class="case-more-grid">
      ${detail.items.map((item, index) => caseCard(item, index, "case-more-card")).join("")}
    </div>
  `;
}

function deviceMoreDetailMarkup(detail) {
  return `
    <div class="detail-head">
      <div class="detail-app-icon">${icon(detail.iconName)}</div>
      <div><h2 id="detailTitle">${detail.title}</h2><p>${detail.subtitle}</p><div class="detail-tags">${detail.tags.map((tag) => `<span>${icon("tag")}${tag}</span>`).join("")}</div></div>
    </div>
    <div class="device-more-grid">
      ${detail.items.map((item, index) => {
        const itemIndex = detail.startIndex + index;
        const key = `device-more-${detail.kind}-${itemIndex}`;
        detailRegistry.set(key, createDeviceDetail(item, detail.kind, itemIndex));
        return `
          <button class="device-card search-item detail-trigger" type="button" data-detail-key="${key}" data-search="${item[0]} ${item[1]} ${detail.kind} 设备">
            <div class="scene"><img src="${item[2]}" alt="${item[0]}"></div>
            <div class="device-title"><b>${item[0]}</b><em>${icon("detail")}详情</em></div>
            <span>${item[1]}</span>
          </button>
        `;
      }).join("")}
    </div>
  `;
}

function sceneMoreDetailMarkup(detail) {
  return `
    <div class="detail-head">
      <div class="detail-app-icon">${icon(detail.iconName)}</div>
      <div><h2 id="detailTitle">${detail.title}</h2><p>${detail.subtitle}</p><div class="detail-tags">${detail.tags.map((tag) => `<span>${icon("tag")}${tag}</span>`).join("")}</div></div>
    </div>
    <div class="scene-more-grid">
      ${detail.items.map((item, index) => sceneCard(item, index, "scene-more-card")).join("")}
    </div>
  `;
}

function caseDetailMarkup(detail) {
  return `
    <div class="detail-head case-detail-head">
      <div class="detail-app-icon">${icon("case")}</div>
      <div>
        <h2 id="detailTitle">${detail.title}</h2>
        <p>${detail.subtitle}</p>
        <div class="detail-tags">${detail.tags.map((tag) => `<span>${icon("tag")}${tag}</span>`).join("")}</div>
      </div>
      <button class="detail-download" type="button">${icon("download")}资料包</button>
    </div>
    <div class="detail-metrics">
      ${detail.metrics.map((metric) => `<div><span>${metric[0]}</span><strong>${metric[1]}</strong><em>${metric[2]}</em></div>`).join("")}
    </div>
    <div class="case-detail-layout">
      <section class="case-detail-main">
        <div class="detail-hero">
          <img src="${detail.heroImage}" alt="${detail.title}">
          <button type="button" aria-label="播放介绍">${icon("play", "播放")}</button>
        </div>
        <h3>${icon("solution")}案例价值</h3>
        <p>${detail.description}</p>
        <h3>${icon("timeline")}价值脉络</h3>
        <div class="case-value-flow">
          <span>${icon("patent")}知识产权 ${detail.metrics[0][1]}项专利 / ${detail.metrics[1][1]}项软著</span>
          <span>${icon("person")}人员贡献 ${detail.metrics[2][1]}人协同</span>
          <span>${icon("cost")}成本沉淀 ${detail.metrics[3][1]}</span>
        </div>
        ${detail.investment ? `
          <h3>${icon("cost")}投入概览</h3>
          <div class="investment-summary">
            <div><span>已有投入人天</span><strong>${detail.investment.days}人天</strong></div>
            <div><span>投入成本</span><strong>${detail.investment.cost}</strong></div>
            <div><span>对应版本</span><strong>${detail.investment.version}</strong></div>
          </div>
        ` : ""}
        <h3>${icon("module")}模块构成</h3>
        <div class="detail-chip-grid">${detail.modules.map((item) => `<span>${icon("module")}${item}</span>`).join("")}</div>
        <h3>${icon("component")}标准组件</h3>
        <div class="detail-chip-grid">${detail.components.map((item) => `<span>${icon("component")}${item}</span>`).join("")}</div>
        <h3>${icon("person")}组成人员贡献度</h3>
        <div class="contribution-list">
          ${detail.contributionPeople.map((member) => `<div style="--w:${member.ratio}%"><b>${member.name}</b><span>${member.role}</span><small>${member.code} · ${member.status}</small><strong>${member.effortDays}人天 · ${member.cost}</strong><i></i><em>${member.ratio}%</em></div>`).join("")}
        </div>
        <h3>${icon("timeline")}演进动线</h3>
        <div class="detail-timeline">${detail.evolution.map((item) => `<span>${item}</span>`).join("")}</div>
        <h3>${icon("image")}现场图片</h3>
        <div class="detail-previews">
          ${detail.previews.map((image, index) => `<img src="${image}" alt="${detail.title}现场图${index + 1}">`).join("")}
        </div>
        ${detail.uiGallery ? uiGalleryMarkup(detail) : ""}
      </section>
      <aside class="case-detail-side">
        <h3>${icon("owner")}组织责任</h3>
        <div class="detail-owner-list">
          ${detail.owners.map((owner) => personBadge(owner[0], owner[1], owner[2])).join("")}
        </div>
        ${detailInfoCards(detail)}
      </aside>
    </div>
  `;
}

function setDetailModal(open, key = "") {
  const modal = byId("detailModal");
  const content = byId("detailContent");
  if (open) {
    const detail = detailRegistry.get(key);
    if (!detail) return;
    content.innerHTML = detailMarkup(detail);
  }
  modal.classList.toggle("is-open", open);
  modal.setAttribute("aria-hidden", String(!open));
  document.body.classList.toggle("modal-open", open || byId("chartModal")?.classList.contains("is-open") || byId("versionModal")?.classList.contains("is-open"));
}

function bindInteractions() {
  const chartModal = byId("chartModal");
  const chartToggle = byId("chartToggle");
  const chartClose = byId("chartClose");
  const versionModal = byId("versionModal");
  const versionToggle = byId("versionToggle");
  const versionClose = byId("versionClose");
  const setChartModal = (open) => {
    chartModal.classList.toggle("is-open", open);
    chartModal.setAttribute("aria-hidden", String(!open));
    chartToggle.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("modal-open", open || byId("detailModal")?.classList.contains("is-open") || versionModal?.classList.contains("is-open"));
  };
  const setVersionModal = (open) => {
    versionModal.classList.toggle("is-open", open);
    versionModal.setAttribute("aria-hidden", String(!open));
    versionToggle.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("modal-open", open || byId("detailModal")?.classList.contains("is-open") || chartModal?.classList.contains("is-open"));
  };

  chartToggle.addEventListener("click", () => setChartModal(!chartModal.classList.contains("is-open")));
  chartClose.addEventListener("click", () => setChartModal(false));
  chartModal.addEventListener("click", (event) => {
    if (event.target === chartModal) setChartModal(false);
  });
  versionToggle.addEventListener("click", () => setVersionModal(!versionModal.classList.contains("is-open")));
  versionClose.addEventListener("click", () => setVersionModal(false));
  versionModal.addEventListener("click", (event) => {
    if (event.target === versionModal) setVersionModal(false);
  });
  versionModal.addEventListener("click", (event) => {
    const button = event.target.closest(".version-item");
    if (!button || !versionModal.contains(button)) return;
    const version = appVersionInfo.history.find((item) => item.version === button.dataset.version);
    if (!version) return;
    byId("versionDetail").innerHTML = versionDetailMarkup(version);
    versionModal.querySelectorAll(".version-item").forEach((item) => {
      const selected = item === button;
      item.classList.toggle("is-active", selected);
      item.setAttribute("aria-selected", String(selected));
    });
  });
  versionModal.addEventListener("click", (event) => {
    const button = event.target.closest(".version-system-btn");
    if (!button || !versionModal.contains(button)) return;
    const url = button.dataset.systemUrl;
    if (!url) return;
    window.open(resolveSystemUrl(url), "_blank", "noopener,noreferrer");
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setChartModal(false);
      setDetailModal(false);
      setVersionModal(false);
    }
  });

  byId("detailClose").addEventListener("click", () => setDetailModal(false));
  byId("detailModal").addEventListener("click", (event) => {
    if (event.target === byId("detailModal")) setDetailModal(false);
  });
  document.addEventListener("click", (event) => {
    const trigger = event.target.closest(".detail-trigger");
    if (!trigger) return;
    event.stopPropagation();
    event.preventDefault();
    setDetailModal(true, trigger.dataset.detailKey);
  });

  document.querySelectorAll(".scene img").forEach((image) => {
    image.addEventListener("error", () => {
      image.closest(".device-card").classList.add("is-missing");
      image.remove();
    });
  });

  const searchInput = byId("globalSearch");
  const searchBox = byId("searchBox");
  const clearSearch = byId("clearSearch");
  const searchSubmit = document.querySelector(".search-submit");
  const searchCount = byId("searchCount");
  const applySearch = () => {
    const keyword = searchInput.value.trim().toLowerCase();
    const items = [...document.querySelectorAll(".search-item")];
    document.body.classList.toggle("search-active", Boolean(keyword));
    searchBox.classList.toggle("has-value", Boolean(keyword));
    if (!keyword) {
      items.forEach((item) => item.classList.remove("is-match"));
      searchCount.textContent = "";
      return;
    }
    let count = 0;
    items.forEach((item) => {
      const hit = (item.dataset.search || item.textContent).toLowerCase().includes(keyword);
      item.classList.toggle("is-match", hit);
      if (hit) count += 1;
    });
    searchCount.textContent = count ? `命中 ${count}` : "未命中";
  };
  searchInput.addEventListener("input", applySearch);
  searchSubmit.addEventListener("click", () => {
    applySearch();
    searchInput.focus();
  });
  clearSearch.addEventListener("click", () => {
    searchInput.value = "";
    applySearch();
    searchInput.focus();
  });

  const tick = () => {
    const now = new Date();
    byId("clock").textContent = [now.getHours(), now.getMinutes(), now.getSeconds()].map((value) => String(value).padStart(2, "0")).join(":");
  };
  tick();
  setInterval(tick, 1000);
}

renderShell();
renderData();
renderNavigation();
bindInteractions();
