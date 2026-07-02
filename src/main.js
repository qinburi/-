import "./styles.css";
import {
  caseAssets,
  caseVisuals,
  companyDocMatrix,
  costOverview,
  docContentLedger,
  docs,
  appVersionInfo,
  equipment,
  employeeDirectory,
  hardware,
  industryVisuals,
  industries,
  intake,
  ipAssetLedger,
  platforms,
  productAssetProfiles,
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

function rotateImages(images, start, count, exclude = []) {
  const filtered = images.filter((image) => image && !exclude.includes(image));
  if (!filtered.length) return previewImages.slice(0, count);
  return Array.from({ length: count }, (_, offset) => filtered[(start + offset) % filtered.length]);
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
  `;
}

function renderShell() {
  byId("app").innerHTML = `
    <main class="app">
      <header class="topbar">
        <div class="brand">
          <img class="brand-logo" src="${brandLogo}" alt="汉脑科技">
          <div><h1>汉脑无形资产</h1></div>
        </div>
        <div class="top-meta">
          <label class="search-box" id="searchBox" title="搜索案例、产品、行业、资料、硬件">
            ${icon("search")}
            <input id="globalSearch" type="search" placeholder="请输入" autocomplete="off">
            <button id="clearSearch" type="button" aria-label="清空搜索">${icon("close", "清空")}</button>
          </label>
          <button class="search-submit" type="button">${icon("search")}开始搜索</button>
          <span class="chip search-count" id="searchCount"></span>
          <button class="chart-toggle" id="chartToggle" aria-expanded="false" title="资产概览" data-tip="资产概览">${icon("chart")}</button>
          <button class="version-chip" id="versionToggle" type="button" aria-expanded="false" title="查看版本历史">${icon("timeline")}<span>版本 ${appVersionInfo.currentVersion}</span></button>
          <span class="chip time" id="clock">--:--:--</span>
        </div>
      </header>
      <div class="layout">
        <section class="main">
          ${chartModalMarkup()}
          ${detailModalMarkup()}
          ${versionModalMarkup()}
          <section class="doc-matrix" id="docMatrix"></section>
          <nav class="quick-nav" aria-label="无形资产导航" id="quickNav">
            ${[["cases", "案例资产"], ["industry", "行业内容"], ["platform", "核心平台"], ["software", "产品矩阵"], ["saas", "SaaS应用"], ["scene", "场景运营库"], ["docs", "资料资产"], ["hardware", "智能硬件"], ["equipment", "智能设备"]].map((item) => `
              <div class="nav-item">
                <button class="nav-trigger" type="button" data-menu="${item[0]}"><span>${item[1]}</span>${icon("arrow", "展开")}</button>
                <div class="nav-menu" id="nav-${item[0]}"></div>
              </div>
            `).join("")}
          </nav>
          <section class="section case-hero" id="cases-section">
            <div class="head case-head">
              <div>
                <h2>${icon("case")}案例资产</h2>
              </div>
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
            <div class="panel" id="software-section"><div class="head"><h2>产品软件矩阵</h2></div><div class="software-map" id="software"></div></div>
            <div class="panel" id="saas-section"><div class="head"><h2>SaaS 产品</h2></div><div class="saas-cloud" id="saas"></div></div>
          </section>
          <section class="section scene-section" id="scene-section"><div class="head"><h2>场景运营库</h2><span>行业现场设备应用</span></div><div class="scene-library" id="sceneLibrary"></div></section>
          <section class="section" id="hardware-section"><div class="head"><h2>智能硬件</h2></div><div class="hardware-grid" id="hardware"></div></section>
          <section class="section" id="equipment-section"><div class="head"><h2>智能装备</h2></div><div class="hardware-grid" id="equipment"></div></section>
        </section>
        <aside class="side">
          <div class="doc-panel">
            <div class="todo-assets">
              <h3>${icon("task")}待资产录入</h3>
              <div class="intake-grid" id="intake"></div>
            </div>
            <div class="asset-governance">
              <h3>${icon("governance")}<span class="governance-title-text">资产治理</span></h3>
              <div class="governance-metrics">
                <span><b>72%</b></span>
                <span><b>35</b></span>
                <span><b>4</b></span>
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
  renderDocMatrix();
  renderCaseAssets();

  byId("platforms").innerHTML = platforms.map((item, index) => `
    <div class="entry search-item" id="platform-${index}" data-search="${searchText(item)} 核心平台">
      <div class="entry-icon">${icon("platform")}</div><b>${item[1]}</b><div class="entry-count"><strong>${item[2]}</strong></div>
    </div>
  `).join("");

  byId("software").innerHTML = software.map((item, index) => productAppCard(item, "software", index)).join("");

  byId("saas").innerHTML = saas.map((item, index) => productAppCard(item, "saas", index)).join("");
  renderSceneLibrary();

  const industryPatentTotal = industries.flatMap((zone) => zone[1]).reduce((sum, item) => sum + Number(item[1] || 0), 0);
  const industryCopyrightTotal = industries.flatMap((zone) => zone[1]).reduce((sum, item) => sum + Number(item[2] || 0), 0);
  byId("industryStats").textContent = `专利 ${industryPatentTotal} · 软著 ${industryCopyrightTotal}`;
  byId("industries").innerHTML = `
    <div class="industry-board-grid">
      ${industries.map((zone, zoneIndex) => `
        <div class="zone search-item" data-search="${zone[0]} ${zone[1].flat().join(" ")} 行业">
          <div class="zone-head"><b>${icon("industry")}${zone[0]}</b><span>${zone[1].length}项</span></div>
          <div class="zone-grid">
            ${zone[1].map((item, itemIndex) => industryCard(zone[0], item, zoneIndex, itemIndex)).join("")}
          </div>
        </div>
      `).join("")}
    </div>
  `;

  byId("intake").innerHTML = intake.map((item) => `
    <div class="intake-card search-item" data-search="${searchText(item)} 待资产录入 待录入">
      <div class="asset-ico">${icon(item[0])}</div><div><b>${item[1]}</b></div><strong>${item[3]}</strong>
    </div>
  `).join("");

  const deviceCard = (item, kind, index) => {
    const key = `device-${kind}-${index}`;
    detailRegistry.set(key, createDeviceDetail(item, kind, index));
    return `
      <button class="device-card search-item detail-trigger" type="button" data-detail-key="${key}" data-search="${item[0]} ${item[1]} ${kind} 设备">
        <div class="scene"><img src="${item[2]}" alt="${item[0]}"></div>
        <div class="device-title"><b>${item[0]}</b><em>${icon("detail")}详情</em></div>
        <span>${item[1]}</span>
      </button>
    `;
  };
  byId("hardware").innerHTML = hardware.map((item, index) => deviceCard(item, "智能硬件", index)).join("");
  byId("equipment").innerHTML = equipment.map((item, index) => deviceCard(item, "智能装备", index)).join("");

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

function renderDocMatrix() {
  byId("docMatrix").innerHTML = `
    <div class="doc-matrix-title">
      <b>${icon("document")}公司资料分类</b>
      <span>点击数字查看归档详情</span>
    </div>
    <div class="doc-matrix-list">
      ${companyDocMatrix.map((group, groupIndex) => `
        <div class="doc-matrix-row search-item" data-search="${group[0]} ${group[1].flat().join(" ")} 公司资料">
          <div class="doc-matrix-label">${group[0]}${icon("arrow")}</div>
          <div class="doc-matrix-items">
            ${group[1].map((item, itemIndex) => {
              const key = `doc-${groupIndex}-${itemIndex}`;
              detailRegistry.set(key, createDocDetail(group[0], item));
              return `<button class="doc-matrix-item detail-trigger" type="button" data-detail-key="${key}"><span>${item[0]}</span><b>${item[1]}</b></button>`;
            }).join("")}
          </div>
        </div>
      `).join("")}
    </div>
  `;
}

function renderSceneLibrary() {
  byId("sceneLibrary").innerHTML = sceneOperationLibrary.map((item, index) => {
    const key = `scene-${index}`;
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
  }).join("");
}

function renderCaseAssets() {
  byId("caseAssets").innerHTML = visibleCaseAssets().map((item, index) => caseCard(item, index)).join("");
}

function visibleCaseAssets() {
  return caseAssets;
}

function caseCard(item, index) {
  const key = `case-${index}`;
  const singleOwner = item.manager === item.engineer;
  const visual = caseVisuals[item.name] || {};
  const images = visual.card || [
    previewImages[index % previewImages.length],
    previewImages[(index + 1) % previewImages.length]
  ];
  const patentKey = `ip-case-${index}-patent`;
  const copyrightKey = `ip-case-${index}-copyright`;
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
        <div class="case-owner">
          ${personBadge("产品", item.manager, item.managerState)}
          ${personBadge("技术", item.engineer, item.engineerState)}
          ${singleOwner ? `<span class="owner-warning">${icon("warning")}单人负责</span>` : ""}
        </div>
        <button type="button">${icon("detail")}详情</button>
      </div>
    </article>
  `;
}

function productAppCard(item, type, index) {
  const title = item[0];
  const group = type === "saas" ? "SaaS产品" : "产品软件矩阵";
  const iconName = type === "saas" ? "saas" : "software";
  const visualMap = type === "saas" ? saasVisuals : softwareVisuals;
  const visual = visualMap[title] || {};
  const image = visual.image || previewImages[(index + (type === "saas" ? 2 : 0)) % previewImages.length];
  const secondaryImages = productSecondaryImages(type, title, index);
  const key = `${type}-${index}`;
  const patentKey = `ip-${type}-${index}-patent`;
  const copyrightKey = `ip-${type}-${index}-copyright`;
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

function industryCard(zoneName, item, zoneIndex, itemIndex) {
  const key = `industry-${zoneIndex}-${itemIndex}`;
  const title = item[0];
  const patent = Number(item[1] || 0);
  const copyright = Number(item[2] || 0);
  const visual = industryVisuals[`${zoneName}/${title}`] || {};
  const image = visual.image || previewImages[(zoneIndex + itemIndex) % previewImages.length];
  const secondaryImages = industrySecondaryImages(zoneName, title, zoneIndex, itemIndex);
  const patentKey = `ip-industry-${zoneIndex}-${itemIndex}-patent`;
  const copyrightKey = `ip-industry-${zoneIndex}-${itemIndex}-copyright`;
  detailRegistry.set(key, createIndustryDetail(zoneName, item, visual, secondaryImages));
  detailRegistry.set(patentKey, createIpDetail("patent", `${zoneName}${title}`, patent));
  detailRegistry.set(copyrightKey, createIpDetail("copyright", `${zoneName}${title}`, copyright));
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
    appDownload: true
  };
}

function createProductDetail(item, type, index, visual, secondaryImages) {
  const title = item[0];
  const group = type === "saas" ? "SaaS产品" : "产品软件矩阵";
  const iconName = type === "saas" ? "saas" : "software";
  const image = visual.image || previewImages[(index + (type === "saas" ? 2 : 0)) % previewImages.length];
  const profile = productAssetProfiles[title] || defaultProductProfile(title);
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
    previews: visual.previews || [image, ...secondaryImages],
    support: type === "saas" ? ["手机", "电脑端", "企业微信", "订阅门户"] : ["电脑端", "工位机", "电子看板", "接口网关"],
    docs: ["产品需求规格说明书", "技术架构设计方案", "演示与解决方案PPT"],
    profile,
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
  const related = source.items.filter((item) => item[2].includes(assetName) || assetName.includes(item[2])).slice(0, 3);
  return {
    type: "ip",
    title: `${assetName}${source.label}详情`,
    subtitle: `${source.label} · 数量 ${count} · 证书台账`,
    iconName: kind === "patent" ? "patent" : "copyright",
    tags: [source.label, assetName, count > 0 ? "已有关联" : "申报中"],
    metrics: [["数量", String(count), "卡片"], ["最近获得", count > 0 ? "2025-12-18" : "2026-03-22", "证书"], ["资料状态", "已建档", "治理"]],
    items: related.length ? related : [["HN-IP-2026-009", `${assetName}${source.label}资产登记`, assetName, "2026-03-22", "申报中"]]
  };
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
    previews: [item[2], previewImages[(index + 1) % previewImages.length], previewImages[(index + 2) % previewImages.length]],
    support: ["现场终端", "数据采集", "资产台账", "资料归档"],
    docs: ["设备照片", "应用案例", "维护资料"]
  };
}

function createCaseDetail(item, visual = {}) {
  return {
    type: "case",
    title: item.name,
    subtitle: `${item.industry} · 来源 ${item.sourceYear} · ${statusLabel(item.status)}`,
    iconName: "case",
    heroImage: visual.hero || previewImages[caseAssets.indexOf(item) % previewImages.length],
    metrics: [
      ["专利", String(item.patents), "已关联"],
      ["软著", String(item.copyrights), "已关联"],
      ["调用活跃度", item.calls, "累计"]
    ],
    description: visual.detail || item.intro,
    tags: [item.industry, statusLabel(item.status), `${item.sourceYear}演进`],
    previews: visual.previews || [previewImages[0], previewImages[1], previewImages[3]],
    support: item.components,
    docs: ["公开案例资料", "知识产权台账"],
    modules: item.modules,
    components: item.components,
    evolution: item.evolution,
    evidence: item.evidence,
    owners: [
      ["产品经理", item.manager, item.managerState],
      ["技术负责人", item.engineer, item.engineerState]
    ],
    roleAllowed: true
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
  const person = employeeDirectory[name];
  const label = statusText(person?.status || state);
  return `<button class="person-badge detail-trigger state-${person?.status || state}" type="button" data-detail-key="person-${name}"><i></i><b>${role}</b><em>${name} · ${label}</em></button>`;
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
  byId("nav-cases").innerHTML = visibleCaseAssets().map((item, index) => navMenuButton(`case-${index}`, item.name, item.industry, "case")).join("");
  byId("nav-platform").innerHTML = platforms.map((item, index) => navMenuButton(`platform-${index}`, item[1], item[2], "platform")).join("");
  byId("nav-software").innerHTML = software.map((item, index) => navMenuButton(`software-${index}`, item[0], item[2], "software")).join("");
  byId("nav-saas").innerHTML = saas.map((item, index) => navMenuButton(`saas-${index}`, item[0], item[2], "saas")).join("");
  byId("nav-scene").innerHTML = sceneOperationLibrary.map((item) => navMenuButton("scene-section", item.name, item.device, "equipment")).join("");
  byId("nav-industry").innerHTML = industries.map((item) => navMenuButton("industry-section", item[0], item[1].length, "industry")).join("");
  byId("nav-docs").innerHTML = docs.map((item) => navMenuButton("docs", item[0], item[1].length, "document")).join("");
  byId("nav-hardware").innerHTML = hardware.map((item) => navMenuButton("hardware-section", item[0], item[1], "hardware")).join("");
  byId("nav-equipment").innerHTML = equipment.map((item) => navMenuButton("equipment-section", item[0], item[1], "equipment")).join("");
}

function docIcon(groupName) {
  return {
    知识产权: "patent",
    品牌渠道: "channel",
    宣传资产: "media",
    企业档案: "archive"
  }[groupName] || "document";
}

function navMenuButton(target, label, meta, iconName) {
  return `<button type="button" data-target="${target}"><span>${icon(iconName)}${label}</span><small>${meta}</small></button>`;
}

function detailMarkup(detail) {
  if (detail.type === "case") return caseDetailMarkup(detail);
  if (detail.type === "doc") return docDetailMarkup(detail);
  if (detail.type === "ip") return ipDetailMarkup(detail);
  if (detail.type === "person") return personDetailMarkup(detail);
  if (detail.type === "scene") return sceneDetailMarkup(detail);
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
        <h3>${icon("document")}相关文档</h3>
        <div class="detail-docs">
          ${detail.docs.map((doc) => `<div><span>${icon("document")}${doc}</span><button type="button">${icon("download")}下载</button></div>`).join("")}
        </div>
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

function productProfileMarkup(detail) {
  const profile = detail.profile;
  return `
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
      <div class="detail-docs">${detail.docs.map((doc) => `<div><span>${icon("document")}${doc}</span><button type="button">${icon("detail")}查看</button></div>`).join("")}</div>
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
      <h3>${icon("document")}资料下载</h3>
      <div class="detail-docs">${scene.docs.map((doc) => `<div><span>${icon("document")}${doc}</span><button type="button">${icon("download")}下载</button></div>`).join("")}</div>
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
        <h3>${icon("module")}模块构成</h3>
        <div class="detail-chip-grid">${detail.modules.map((item) => `<span>${icon("module")}${item}</span>`).join("")}</div>
        <h3>${icon("component")}标准组件</h3>
        <div class="detail-chip-grid">${detail.components.map((item) => `<span>${icon("component")}${item}</span>`).join("")}</div>
        <h3>${icon("timeline")}演进动线</h3>
        <div class="detail-timeline">${detail.evolution.map((item) => `<span>${item}</span>`).join("")}</div>
        <h3>${icon("image")}现场图片</h3>
        <div class="detail-previews">
          ${detail.previews.map((image, index) => `<img src="${image}" alt="${detail.title}现场图${index + 1}">`).join("")}
        </div>
      </section>
      <aside class="case-detail-side">
        <h3>${icon("owner")}组织责任</h3>
        <div class="detail-owner-list">
          ${detail.owners.map((owner) => personBadge(owner[0], owner[1], owner[2])).join("")}
        </div>
        <h3>${icon("document")}相关资料</h3>
        <div class="detail-docs">
          ${detail.evidence.map((item) => `<div><span>${icon("contract")}${item}</span><button type="button">${icon("detail")}追溯</button></div>`).join("")}
        </div>
        <h3>${icon("permission")}角色可见资料</h3>
        <div class="detail-docs">
          ${detail.docs.map((doc) => `<div><span>${icon(doc.includes("代码") || doc.includes("接口") ? "code" : doc.includes("合同") ? "contract" : doc.includes("蓝图") ? "blueprint" : "document")}${doc}</span><button type="button">${icon("download")}下载</button></div>`).join("")}
        </div>
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

  document.querySelectorAll(".nav-trigger").forEach((button) => {
    button.addEventListener("click", (event) => {
      const item = event.currentTarget.closest(".nav-item");
      document.querySelectorAll(".nav-item").forEach((nav) => {
        if (nav !== item) nav.classList.remove("is-open");
      });
      item.classList.toggle("is-open");
    });
  });
  document.querySelectorAll(".nav-menu button").forEach((button) => {
    button.addEventListener("click", (event) => {
      const target = byId(event.currentTarget.dataset.target);
      document.querySelectorAll(".nav-item").forEach((item) => item.classList.remove("is-open"));
      if (target) target.scrollIntoView({ block: "center", behavior: "smooth" });
    });
  });
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".quick-nav")) document.querySelectorAll(".nav-item").forEach((item) => item.classList.remove("is-open"));
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
