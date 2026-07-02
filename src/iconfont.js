export const iconfontSymbolUrl = "";
// Paste the iconfont.cn Symbol script URL here, for example:
// export const iconfontSymbolUrl = "//at.alicdn.com/t/c/font_xxxxx.js";

export const iconMap = {
  platform: "icon-pingtai",
  software: "icon-ruanjian",
  saas: "icon-yunfuwu",
  patent: "icon-zhuanli",
  copyright: "icon-banquan",
  trademark: "icon-shangbiao",
  document: "icon-wendang",
  industry: "icon-hangye",
  hardware: "icon-yingjian",
  equipment: "icon-shebei",
  search: "icon-sousuo",
  chart: "icon-tongji",
  arrow: "icon-youjiantou",
  close: "icon-guanbi",
  governance: "icon-zhili",
  task: "icon-renwu",
  channel: "icon-qudao",
  media: "icon-tupian",
  archive: "icon-dangan",
  detail: "icon-xiangqing",
  download: "icon-xiazai",
  play: "icon-bofang",
  customer: "icon-kehu",
  star: "icon-xingxing",
  tag: "icon-biaoqian",
  image: "icon-tupian",
  team: "icon-tuandui",
  solution: "icon-fangan",
  status: "icon-zhuangtai",
  calendar: "icon-rili"
  ,
  case: "icon-anli",
  component: "icon-zujian",
  module: "icon-mokuai",
  owner: "icon-fuzeren",
  risk: "icon-fengxian",
  evidence: "icon-zhengju",
  permission: "icon-quanxian",
  contract: "icon-hetong",
  blueprint: "icon-lantu",
  code: "icon-daima",
  subscribe: "icon-dingyue",
  timeline: "icon-shijianzhou",
  cost: "icon-chengben",
  person: "icon-renyuan",
  warning: "icon-yujing"
};

const iconFallback = {};
const localSymbols = {
  "icon-pingtai": '<path d="M4 5h16v10H4V5Zm2 2v6h12V7H6Zm1 10h10l1 2H6l1-2Z"/>',
  "icon-ruanjian": '<path d="M5 4h14a1 1 0 0 1 1 1v14H4V5a1 1 0 0 1 1-1Zm1 4h12V6H6v2Zm0 2v7h12v-7H6Zm2 2h3v3H8v-3Zm5 0h3v1.5h-3V12Zm0 2.5h3V16h-3v-1.5Z"/>',
  "icon-yunfuwu": '<path d="M8 18a5 5 0 0 1-.7-10A6 6 0 0 1 18.8 9.7 4.2 4.2 0 0 1 18 18H8Zm0-2h10a2.2 2.2 0 0 0 .2-4.4l-1.2-.1-.3-1.1A4 4 0 0 0 9 9.2l-.4.9-1 .1A3 3 0 0 0 8 16Z"/>',
  "icon-zhuanli": '<path d="M6 3h9l4 4v14H6V3Zm2 2v14h9V8h-3V5H8Zm2 6h5v2h-5v-2Zm0 4h5v2h-5v-2Z"/>',
  "icon-banquan": '<path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 2a7 7 0 1 1 0 14 7 7 0 0 1 0-14Zm.2 3.5c1.5 0 2.7.7 3.4 1.8l-1.7 1a2 2 0 1 0 0 2.4l1.7 1a4 4 0 1 1-3.4-6.2Z"/>',
  "icon-shangbiao": '<path d="M5 4h14v2H5V4Zm1 4h12l-1 12H7L6 8Zm3 2 .4 8h5.2l.4-8H9Zm1-2h4l1-3H9l1 3Z"/>',
  "icon-wendang": '<path d="M6 3h8l4 4v14H6V3Zm2 2v14h8V8h-3V5H8Zm2 6h4v2h-4v-2Zm0 4h4v2h-4v-2Z"/>',
  "icon-hangye": '<path d="M4 20V8l5-3v5l5-3v5l6-4v12H4Zm2-2h3v-5H6v5Zm5 0h3v-5h-3v5Zm5 0h2v-6l-2 1.4V18Z"/>',
  "icon-yingjian": '<path d="M7 7h10v10H7V7Zm2 2v6h6V9H9Zm-5 1h2v2H4v-2Zm0 4h2v2H4v-2Zm14-4h2v2h-2v-2Zm0 4h2v2h-2v-2ZM10 4h2v2h-2V4Zm4 0h2v2h-2V4Zm-4 14h2v2h-2v-2Zm4 0h2v2h-2v-2Z"/>',
  "icon-shebei": '<path d="M6 4h12v9H6V4Zm2 2v5h8V6H8Zm-1 9h10l2 5H5l2-5Zm1.3 2-.4 1h8.2l-.4-1H8.3Z"/>',
  "icon-sousuo": '<path d="M10.5 4a6.5 6.5 0 0 1 5.1 10.5l4 4-1.4 1.4-4-4A6.5 6.5 0 1 1 10.5 4Zm0 2a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z"/>',
  "icon-tongji": '<path d="M5 19h14v2H5V3h2v16Zm4-2H7v-6h2v6Zm4 0h-2V7h2v10Zm4 0h-2v-8h2v8Zm2-12-5 4-3-2.5L7.6 10 6.2 8.6 10.8 4l3.1 2.6L17.8 3 19 5Z"/>',
  "icon-youjiantou": '<path d="m9 5 7 7-7 7-1.4-1.4 5.6-5.6-5.6-5.6L9 5Z"/>',
  "icon-guanbi": '<path d="m6.4 5 5.6 5.6L17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6L6.4 19 5 17.6l5.6-5.6L5 6.4 6.4 5Z"/>',
  "icon-zhili": '<path d="M12 3 4 6v6c0 4.4 3.1 7.3 8 9 4.9-1.7 8-4.6 8-9V6l-8-3Zm0 2.2L18 7.4V12c0 3.1-2.1 5.3-6 6.9-3.9-1.6-6-3.8-6-6.9V7.4l6-2.2Zm-1 4.3h2V16h-2V9.5Zm0-3h2v2h-2v-2Z"/>',
  "icon-renwu": '<path d="M7 4h10v3h3v14H4V7h3V4Zm2 3h6V6H9v1ZM6 9v10h12V9H6Zm2 3h2v2H8v-2Zm4 .2h4v1.6h-4v-1.6ZM8 16h2v2H8v-2Zm4 .2h4v1.6h-4v-1.6Z"/>',
  "icon-qudao": '<path d="M4 5h6v6H4V5Zm2 2v2h2V7H6Zm8-2h6v6h-6V5Zm2 2v2h2V7h-2ZM4 15h6v6H4v-6Zm2 2v2h2v-2H6Zm9-1h2v2h3v2h-5v-4Zm-2-4h2v3h-2v-3Zm4 0h3v2h-3v-2Z"/>',
  "icon-tupian": '<path d="M5 5h14v14H5V5Zm2 2v10h10V7H7Zm1 8 3-4 2 2.5 1.4-1.7L17 15H8Zm7-7.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>',
  "icon-dangan": '<path d="M4 6h7l2 2h7v11H4V6Zm2 4v7h12v-7H6Zm0-2h5.2l-.8-1H6v1Z"/>',
  "icon-xiangqing": '<path d="M5 4h14v16H5V4Zm2 2v12h10V6H7Zm2 2h6v2H9V8Zm0 4h6v2H9v-2Zm0 4h4v1H9v-1Z"/>',
  "icon-xiazai": '<path d="M11 4h2v8l3-3 1.4 1.4L12 15.8l-5.4-5.4L8 9l3 3V4ZM5 18h14v2H5v-2Z"/>',
  "icon-bofang": '<path d="M8 5v14l11-7L8 5Zm2 3.6 5.2 3.4-5.2 3.4V8.6Z"/>',
  "icon-kehu": '<path d="M12 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-7 11a7 7 0 0 1 14 0h-2a5 5 0 0 0-10 0H5Z"/>',
  "icon-xingxing": '<path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z"/>',
  "icon-biaoqian": '<path d="M4 5h9l7 7-8 8-8-8V5Zm2 2v4.2l6 6 5.2-5.2-5-5H6Zm3 1a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>',
  "icon-tuandui": '<path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm8 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6ZM3 20a5 5 0 0 1 10 0H3Zm8.5-2.5A5 5 0 0 1 21 20h-6a7 7 0 0 0-3.5-2.5Z"/>',
  "icon-fangan": '<path d="M5 4h14v5H5V4Zm2 2v1h10V6H7Zm-2 5h6v9H5v-9Zm2 2v5h2v-5H7Zm6-2h6v9h-6v-9Zm2 2v5h2v-5h-2Z"/>',
  "icon-zhuangtai": '<path d="M12 4a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm-1 3h2v4h-2V9Zm0 5h2v2h-2v-2Z"/>',
  "icon-rili": '<path d="M7 3h2v2h6V3h2v2h3v16H4V5h3V3Zm11 7H6v9h12v-9ZM6 8h12V7H6v1Z"/>',
  "icon-anli": '<path d="M8 5V3h8v2h4v16H4V5h4Zm2 0h4V4h-4v1ZM6 7v12h12V7H6Zm2 4h8v2H8v-2Zm0 4h6v2H8v-2Z"/>',
  "icon-zujian": '<path d="M4 4h7v7H4V4Zm2 2v3h3V6H6Zm7-2h7v7h-7V4Zm2 2v3h3V6h-3ZM4 13h7v7H4v-7Zm2 2v3h3v-3H6Zm7-2h7v7h-7v-7Zm2 2v3h3v-3h-3Z"/>',
  "icon-mokuai": '<path d="m12 3 8 4v10l-8 4-8-4V7l8-4Zm0 2.2L7.2 7.6 12 10l4.8-2.4L12 5.2ZM6 9.2v6.6l5 2.5v-6.6L6 9.2Zm7 9.1 5-2.5V9.2l-5 2.5v6.6Z"/>',
  "icon-fuzeren": '<path d="M9 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-6 10a6 6 0 0 1 10.8-3.6L12.4 18A4 4 0 0 0 5 20H3Zm14.5.2-3.2-3.2 1.4-1.4 1.8 1.8 3.8-4 1.4 1.4-5.2 5.4Z"/>',
  "icon-fengxian": '<path d="M12 3 22 20H2L12 3Zm0 4L5.5 18h13L12 7Zm-1 4h2v4h-2v-4Zm0 5h2v2h-2v-2Z"/>',
  "icon-zhengju": '<path d="M7 3h10v18H7V3Zm2 2v14h6V5H9Zm1 2h4v2h-4V7Zm0 4h4v2h-4v-2Zm0 4h3v2h-3v-2Z"/>',
  "icon-quanxian": '<path d="M7 10V8a5 5 0 0 1 10 0v2h2v11H5V10h2Zm2 0h6V8a3 3 0 0 0-6 0v2Zm-2 2v7h10v-7H7Zm4 2h2v3h-2v-3Z"/>',
  "icon-hetong": '<path d="M6 3h12v18H6V3Zm2 2v14h8V5H8Zm2 3h4v2h-4V8Zm0 4h4v2h-4v-2Zm0 4h3v1h-3v-1Z"/>',
  "icon-lantu": '<path d="M4 4h16v16H4V4Zm2 2v12h12V6H6Zm2 2h3v3H8V8Zm5 0h3v2h-3V8Zm0 4h3v4h-3v-4ZM8 13h3v3H8v-3Z"/>',
  "icon-daima": '<path d="m8.6 8.4-3.6 3.6 3.6 3.6L7.2 17 2.2 12l5-5 1.4 1.4Zm6.8 0L16.8 7l5 5-5 5-1.4-1.4 3.6-3.6-3.6-3.6ZM11 19H9l4-14h2l-4 14Z"/>',
  "icon-dingyue": '<path d="M6 4h12v16l-6-3-6 3V4Zm2 2v10.8l4-2 4 2V6H8Zm2 3h4v2h-4V9Z"/>',
  "icon-shijianzhou": '<path d="M5 5h14v2H5V5Zm2 4h10v2H7V9Zm-2 4h14v2H5v-2Zm2 4h10v2H7v-2Z"/>',
  "icon-chengben": '<path d="M12 3a7 7 0 0 1 7 7c0 5-7 11-7 11S5 15 5 10a7 7 0 0 1 7-7Zm0 2a5 5 0 0 0-5 5c0 2.7 3 6.5 5 8.3 2-1.8 5-5.6 5-8.3a5 5 0 0 0-5-5Zm1 3h2v2h-2v5h-2v-5H9V8h2V6h2v2Z"/>',
  "icon-renyuan": '<path d="M12 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-7 12a7 7 0 0 1 14 0h-2a5 5 0 0 0-10 0H5Z"/>',
  "icon-yujing": '<path d="M12 3 22 21H2L12 3Zm0 4-6.6 12h13.2L12 7Zm-1 4h2v4h-2v-4Zm0 5h2v2h-2v-2Z"/>'
};

function injectLocalSymbols() {
  if (document.getElementById("local-iconfont-symbols")) return;
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.id = "local-iconfont-symbols";
  svg.setAttribute("aria-hidden", "true");
  svg.style.cssText = "position:absolute;width:0;height:0;overflow:hidden";
  svg.innerHTML = Object.entries(localSymbols)
    .map(([id, paths]) => `<symbol id="${id}" viewBox="0 0 24 24">${paths}</symbol>`)
    .join("");
  document.body.prepend(svg);
}

export function loadIconfont() {
  injectLocalSymbols();
  if (!iconfontSymbolUrl || document.querySelector("[data-iconfont-symbol]")) return;
  const script = document.createElement("script");
  script.src = iconfontSymbolUrl;
  script.dataset.iconfontSymbol = "true";
  script.addEventListener("load", () => document.documentElement.classList.add("iconfont-loaded"));
  document.head.appendChild(script);
}

export function icon(name, label = "") {
  const symbol = iconMap[name] || name;
  return `
    <span class="icon-wrap icon-${name}" ${label ? `aria-label="${label}"` : ""}>
    <svg class="iconfont-svg" aria-hidden="true" data-fallback="${iconFallback[name] || ""}">
      <use href="#${symbol}"></use>
    </svg>
    <span class="icon-fallback">${iconFallback[name] || ""}</span>
    </span>
  `;
}
