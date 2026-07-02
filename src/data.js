export const platforms = [
  ["platform", "汉脑工业联网平台", 100],
  ["platform", "内网工业互联网平台", 200],
  ["platform", "AI安全数据底座", 0],
  ["platform", "企业级工业底座", 0]
];

export const software = [
  ["ERP", "经营", "V4.2", 9, 6],
  ["MES", "制造", "V3.8", 11, 8],
  ["WMS", "仓储", "V3.1", 7, 5],
  ["PLM", "研发", "V2.9", 5, 4],
  ["PDM", "数据", "V2.6", 4, 4],
  ["MRP", "物料", "V2.4", 3, 3],
  ["APS", "排程", "V2.2", 6, 4],
  ["IES", "能效", "V1.8", 4, 3],
  ["CRM", "增长", "V3.0", 5, 4]
];

export const saas = [
  ["达铃", "协同", "V2.1", 2, 1],
  ["考勤", "人事", "V3.4", 3, 2],
  ["餐饮", "后勤", "V2.8", 2, 1],
  ["薪安", "薪资", "V1.9", 2, 2],
  ["万加", "服务", "V2.2", 1, 1],
  ["鉴富宝", "核验", "V1.6", 2, 1],
  ["标识解析", "追溯", "V3.0", 4, 3],
  ["优羽", "协同", "V1.8", 1, 1],
  ["CRM", "增长", "V2.7", 3, 2],
  ["工资条", "薪酬", "V1.5", 1, 1],
  ["e维保", "维保", "V2.4", 2, 2],
  ["扩展", "生态", "V1.0", 1, 1]
];

export const roles = [
  ["sales", "销售", "案例与公开资料"],
  ["presales", "售前", "方案、合同、蓝图"],
  ["tech", "技术总监", "代码、接口、协议"],
  ["gm", "总经理预览", "独立预览内容"]
];

export const assetModules = [
  ["业务中台模块", 30, "标准接口、复用流程、数据协议"],
  ["现场组件", 10, "工位机、手持终端、电子看板、采集网关"],
  ["底层接口", 46, "设备协议、主数据接口、权限接口"],
  ["资料证据", 128, "合同、蓝图、凭证、人员工时、验收资料"]
];

export const caseAssets = [
  {
    name: "象山锦秀服装产业大脑",
    industry: "纺织服装",
    sourceYear: "1999",
    status: "normal",
    manager: "HN-PM-001",
    engineer: "HN-TECH-001",
    managerState: "active",
    engineerState: "active",
    patents: 8,
    copyrights: 6,
    calls: "12.8万",
    modules: ["ERP经营", "MES制造", "WMS仓储", "质量追溯", "电子看板"],
    components: ["工位机", "手持机", "RFID", "电子看板"],
    evolution: ["1999 服装管理软件", "2012 生产协同平台", "2020 产业大脑", "2026 无形资产沉淀"],
    evidence: ["项目合同", "蓝图方案", "验收资料", "研发工时", "软著证书"],
    access: ["sales", "presales", "tech"],
    intro: "从早期服装项目演进为产业大脑案例，沉淀生产、仓储、质量和设备联动组件。",
    contributors: [["杜英杰", "产品规划", 32], ["艾总", "架构研发", 28], ["冯小燕", "行业资料", 16], ["秦步日", "现场联调", 14], ["武文豪", "设备协同", 10]]
  },
  {
    name: "五金离散制造数字工厂",
    industry: "五金",
    sourceYear: "2016",
    status: "risk",
    manager: "HN-PM-002",
    engineer: "HN-TECH-002",
    managerState: "new",
    engineerState: "active",
    patents: 5,
    copyrights: 4,
    calls: "8.6万",
    modules: ["MES制造", "APS排程", "设备采集", "质量检测"],
    components: ["工业相机", "边缘计算机", "机械臂"],
    evolution: ["2016 车间联网", "2020 设备数据平台", "2024 数字工厂", "2026 资产治理"],
    evidence: ["需求规格说明", "设备接口表", "现场照片", "专利台账"],
    access: ["sales", "presales", "tech"],
    intro: "覆盖离散制造排程、采集、质检和设备联动，当前需要补齐双负责人机制。",
    contributors: [["冯小燕", "产品梳理", 26], ["秦步日", "设备接口", 31], ["艾总", "平台架构", 18], ["陈良", "质检联动", 15], ["杜英杰", "资料治理", 10]]
  },
  {
    name: "物流装备智能仓储案例",
    industry: "物流装备",
    sourceYear: "2020",
    status: "normal",
    manager: "HN-PM-003",
    engineer: "HN-TECH-003",
    managerState: "active",
    engineerState: "active",
    patents: 7,
    copyrights: 5,
    calls: "10.2万",
    modules: ["WMS仓储", "AGV调度", "立体库管理", "设备监控"],
    components: ["AGV", "提升机", "穿梭车", "立体库"],
    evolution: ["2020 仓储数字化", "2022 AGV接入", "2025 立体库联动", "2026 资料归档"],
    evidence: ["项目合同", "设备清单", "调试记录", "验收报告"],
    access: ["sales", "presales", "tech"],
    intro: "以仓储和物流装备为核心，形成软件、硬件、设备与项目凭证的完整资料归档。",
    contributors: [["武文豪", "方案设计", 30], ["陈良", "装备联动", 30], ["艾总", "调度算法", 18], ["冯小燕", "验收资料", 12], ["杜英杰", "案例包装", 10]]
  }
];

export const evidenceMap = [
  ["案例资产", "象山锦秀服装产业大脑", "核心案例与复用入口"],
  ["项目关联", "1999历史项目 / 2020产业大脑", "演进来源"],
  ["人员关联", "产品经理 + 技术负责人", "组织责任"],
  ["凭证位置", "合同 / 蓝图 / 验收 / 工时", "审计证据"],
  ["成本关联", "研发投入 / 实施成本 / 运维成本", "价值支撑"],
  ["知识产权", "专利 / 软著 / 商标", "资产沉淀"]
];

export const timeline = [
  ["1999", "历史项目", "服装管理软件形成第一批行业经验"],
  ["2012", "平台化", "ERP、MES、WMS模块开始标准化复用"],
  ["2020", "产业大脑", "行业案例、项目凭证和数据资产联网"],
  ["2026", "无形资产工作台", "案例、组件和资料归档统一展示"]
];

const pendingChildren = [
  ["专利台账", 0, 0],
  ["软著沉淀", 0, 0],
  ["案例资料", 0, 0]
];

export const industries = [
  ["纺织服装", [
    ["男装", 2, 1],
    ["女装", 3, 2],
    ["裘皮", 1, 1],
    ["皮革", 1, 1],
    ["针织运动", 4, 3],
    ["羊毛衫", 2, 1],
    ["牛仔", 2, 2],
    ["羽绒服", 3, 2],
    ["童装", 1, 1],
    ["林业", 1, 1],
    ["无纺布", 2, 1],
    ["扩展", 0, 0]
  ]],
  ["五金", pendingChildren],
  ["医疗", pendingChildren],
  ["汽车零部件", pendingChildren],
  ["童车", pendingChildren],
  ["电子电气", pendingChildren],
  ["食品", pendingChildren],
  ["塑料", pendingChildren],
  ["政府类", pendingChildren],
  ["物流装备", pendingChildren]
];

const visual = (file) => `./assets/photos/visuals/${file}`;

export const caseVisuals = {
  象山锦秀服装产业大脑: {
    hero: visual("case-xiangshan.jpg"),
    card: [visual("case-xiangshan-line.jpg"), visual("case-xiangshan-dashboard.jpg")],
    previews: [visual("case-xiangshan.jpg"), visual("case-xiangshan-line.jpg"), visual("case-xiangshan-dashboard.jpg")],
    detail: "以服装智能车间、生产看板和产业大脑图像为主视觉，突出象山锦秀服装从生产协同到产业数据沉淀的演进。"
  },
  五金离散制造数字工厂: {
    hero: visual("case-hardware.jpg"),
    card: [visual("case-hardware-line.jpg"), visual("case-hardware-quality.jpg")],
    previews: [visual("case-hardware.jpg"), visual("case-hardware-line.jpg"), visual("case-hardware-quality.jpg")],
    detail: "以五金加工产线、设备联网和视觉质检图像呈现离散制造数字工厂的现场特征。"
  },
  物流装备智能仓储案例: {
    hero: visual("case-warehouse.jpg"),
    card: [visual("case-warehouse-agv.jpg"), visual("case-warehouse-control.jpg")],
    previews: [visual("case-warehouse.jpg"), visual("case-warehouse-agv.jpg"), visual("case-warehouse-control.jpg")],
    detail: "以智能仓储、AGV调度和WMS控制界面作为主视觉，体现物流装备软硬件联动。"
  }
};

const textileIndustryVisuals = [
  ["男装", "industry-menswear.jpg", "男装生产线与版型协同场景，适配订单排产、工序跟踪和质检归档。"],
  ["女装", "industry-womenswear.jpg", "女装制衣与柔性生产场景，突出款式变化、批次管理和生产协同。"],
  ["裘皮", "industry-fur.jpg", "裘皮加工与高价值物料管理场景，适配质量追溯和工艺沉淀。"],
  ["皮革", "industry-leather.jpg", "皮革制品生产与工序流转场景，强调物料批次、裁剪和成品质检。"],
  ["针织运动", "industry-knit-sports.jpg", "针织运动服生产场景，适配快速订单、设备联动和过程看板。"],
  ["羊毛衫", "industry-wool-sweater.jpg", "羊毛衫针织生产场景，适配织造、套口、整烫和成品追溯。"],
  ["牛仔", "industry-denim.jpg", "牛仔服装生产场景，覆盖洗水、缝制、质检和批次追溯。"],
  ["羽绒服", "industry-down-jacket.jpg", "羽绒服制造场景，突出充绒、缝制、防钻绒检测和订单交付。"],
  ["童装", "industry-kidswear.jpg", "童装生产场景，适配多尺码、多颜色和安全标准资料沉淀。"],
  ["林业", "industry-forestry.jpg", "林业数字化管理场景，适配资源台账、巡检记录和数据看板。"],
  ["无纺布", "industry-nonwoven.jpg", "无纺布产线场景，适配连续制造、能耗监控和质量追溯。"],
  ["扩展", "industry-expansion.jpg", "行业扩展应用场景，作为新行业、新客户和新组件接入入口。"]
].map(([name, image, description]) => [`纺织服装/${name}`, { image: visual(image), description }]);

const pendingIndustryFiles = {
  五金: ["industry-hardware-ledger.jpg", "industry-hardware-copyright.jpg", "industry-hardware-case.jpg"],
  医疗: ["industry-medical-ledger.jpg", "industry-medical-copyright.jpg", "industry-medical-case.jpg"],
  汽车零部件: ["industry-auto-ledger.jpg", "industry-auto-copyright.jpg", "industry-auto-case.jpg"],
  童车: ["industry-stroller-ledger.jpg", "industry-stroller-copyright.jpg", "industry-stroller-case.jpg"],
  电子电气: ["industry-electronics-ledger.jpg", "industry-electronics-copyright.jpg", "industry-electronics-case.jpg"],
  食品: ["industry-food-ledger.jpg", "industry-food-copyright.jpg", "industry-food-case.jpg"],
  塑料: ["industry-plastic-ledger.jpg", "industry-plastic-copyright.jpg", "industry-plastic-case.jpg"],
  政府类: ["industry-government-ledger.png", "industry-government-copyright.jpg", "industry-government-case.jpg"],
  物流装备: ["industry-logistics-ledger.png", "industry-logistics-copyright.jpg", "industry-logistics-case.png"]
};

const pendingIndustryVisuals = Object.entries(pendingIndustryFiles).flatMap(([zone, files]) =>
  pendingChildren.map(([name], index) => [
    `${zone}/${name}`,
    {
      image: visual(files[index]),
      description: `${zone}${name}内容用于承接案例、知识产权、软件著作权和行业资料归档。`
    }
  ])
);

export const industryVisuals = Object.fromEntries([...textileIndustryVisuals, ...pendingIndustryVisuals]);

export const softwareVisuals = {
  ERP: {
    image: visual("software-erp.jpg"),
    previews: [visual("software-erp.jpg"), visual("industry-government-copyright.jpg"), visual("industry-food-copyright.jpg")],
    description: "经营管理、订单合同、财务协同与经营指标看板。"
  },
  MES: {
    image: visual("software-mes.jpg"),
    previews: [visual("software-mes.jpg"), visual("case-hardware-line.jpg"), visual("case-xiangshan-line.jpg")],
    description: "生产制造、工序报工、质量追溯与现场执行管理。"
  },
  WMS: {
    image: visual("software-wms.jpg"),
    previews: [visual("software-wms.jpg"), visual("case-warehouse.jpg"), visual("case-warehouse-agv.jpg")],
    description: "仓储收发、库存库位、条码作业与智能仓储联动。"
  },
  PLM: {
    image: visual("software-plm.jpg"),
    previews: [visual("software-plm.jpg"), visual("industry-auto-copyright.jpg"), visual("industry-medical-copyright.jpg")],
    description: "研发过程、产品结构、变更评审与生命周期资料沉淀。"
  },
  PDM: {
    image: visual("software-pdm.jpg"),
    previews: [visual("software-pdm.jpg"), visual("industry-electronics-copyright.jpg"), visual("industry-stroller-copyright.jpg")],
    description: "图文档、BOM、版本和研发数据统一管理。"
  },
  MRP: {
    image: visual("software-mrp.jpg"),
    previews: [visual("software-mrp.jpg"), visual("industry-plastic-copyright.jpg"), visual("industry-nonwoven.jpg")],
    description: "物料需求计划、采购建议、库存占用和交期测算。"
  },
  APS: {
    image: visual("software-aps-official-top.png"),
    previews: [
      visual("software-aps-official-top.png"),
      visual("software-aps-official-01.png"),
      visual("software-aps-official-02.png"),
      visual("software-aps-official-03.png"),
      visual("software-aps-official-04.png")
    ],
    description: "汉脑APS智能排产系统，采用人工智能算法进行计划推演、计划排产、计划发布和计划执行。"
  },
  IES: {
    image: visual("software-ies.jpg"),
    previews: [visual("software-ies.jpg"), visual("industry-logistics-ledger.png"), visual("industry-hardware-ledger.jpg")],
    description: "能源采集、能耗分析、设备效率和节能指标看板。"
  },
  CRM: {
    image: visual("software-crm.jpg"),
    previews: [visual("software-crm.jpg"), visual("industry-government-case.jpg"), visual("saas-crm.jpg")],
    description: "客户线索、商机跟进、合同回款和服务闭环。"
  }
};

export const saasVisuals = Object.fromEntries([
  ["达铃", "saas-daling.jpg", "企业协同、即时沟通、任务通知和组织在线。"],
  ["考勤", "saas-attendance.jpg", "人员考勤、排班、请假和异常处理。"],
  ["餐饮", "saas-catering.jpg", "后勤餐饮、订餐、取餐和消费记录管理。"],
  ["薪安", "saas-xinan.jpg", "薪资核算、薪酬发放、个税和人事数据同步。"],
  ["万加", "saas-wanjia.png", "服务工单、客户反馈、处理进度和服务评价。"],
  ["鉴富宝", "saas-jianfubao.png", "身份核验、风控校验、授权记录和风险留痕。"],
  ["标识解析", "saas-identifier.jpg", "标识注册、解析追溯、数据采集和产业链协同。"],
  ["优羽", "saas-youyu.jpg", "移动协同、轻量审批、消息触达和团队任务。"],
  ["CRM", "saas-crm.jpg", "SaaS化客户管理、线索转化、商机跟进和续费服务。"],
  ["工资条", "saas-payslip.jpg", "电子工资条、薪酬确认、消息送达和员工自助查询。"],
  ["e维保", "saas-maintenance.jpg", "设备报修、维保计划、巡检记录和工单闭环。"],
  ["扩展", "saas-expansion.jpg", "SaaS扩展应用、客户订阅、生态接入和能力编排。"]
].map(([name, file, description]) => [name, { image: visual(file), description }]));

export const intake = [
  ["copyright", "软著", "本月登记", 8],
  ["patent", "专利", "授权归集", 12],
  ["trademark", "商标", "品牌关联", 6],
  ["document", "案例", "素材沉淀", 9]
];

export const hardware = [
  ["工位机", "现场终端", "./assets/photos/workstation.jpg"],
  ["手持机", "移动作业", "./assets/photos/handheld.jpg"],
  ["打印机", "标签单据", "./assets/photos/printer.jpg"],
  ["广告机", "信息发布", "./assets/photos/ad-screen.jpg"],
  ["取餐机", "自助终端", "./assets/photos/meal-kiosk.jpg"],
  ["RFID", "自动识别", "./assets/photos/rfid.jpg"],
  ["边缘计算机", "现场网关", "./assets/photos/edge-computer.jpg"],
  ["硬件扩展", "预留接入", "./assets/photos/hardware-plus.jpg"]
];

export const equipment = [
  ["无源相控阵出入库管控装置", "入库管控", "./assets/photos/phased-array.jpg"],
  ["AGV", "智能物流", "./assets/photos/agv.jpg"],
  ["提升机", "仓储提升", "./assets/photos/lifter.jpg"],
  ["穿梭车", "库内搬运", "./assets/photos/shuttle.jpg"],
  ["机械臂", "自动作业", "./assets/photos/robot-arm.jpg"],
  ["立体库", "仓储系统", "./assets/photos/warehouse.jpg"],
  ["视觉检测设备", "质量检测", "./assets/photos/vision-inspection.jpg"],
  ["工业相机", "图像采集", "./assets/photos/industrial-camera.jpg"],
  ["电子看板", "现场展示", "./assets/photos/display-board.jpg"],
  ["装备扩展", "预留接入", "./assets/photos/equipment-plus.jpg"]
];

export const docs = [
  ["知识产权", [["商标", 18, 2, 1], ["专利", 41, 5, 2], ["软著", 31, 3, 1]]],
  ["品牌渠道", [["网站", 3, 1, 0], ["公众号", 5, 1, 0], ["域名", 8, 2, 1], ["证书", 6, 1, 2], ["外购软件", 9, 2, 1], ["AI工具", 14, 3, 1], ["插件", 22, 4, 2]]],
  ["宣传资产", [["宣传资料", 36], ["展会资料", 11], ["文案", 58], ["企业照片", 126], ["企业视频", 18]]],
  ["企业档案", [["应用表单", 17], ["合同模板", 23], ["企业资料", 29], ["申报文件", 32], ["规章制度", 16], ["荣誉资质", 27], ["证照", 15], ["大事记", 42]]]
];

export const docContentLedger = {
  知识产权: {
    商标: [
      ["汉脑科技", "第42类软件服务商标", "2024-09-18", "已注册"],
      ["汉脑工业互联网", "工业软件品牌标识", "2025-03-12", "已受理"],
      ["HNAO", "英文品牌标识", "2025-11-26", "已注册"]
    ],
    专利: [
      ["一种服装生产工位数据采集方法", "发明专利", "2024-12-20", "已授权"],
      ["多工厂排产协同数据处理装置", "实用新型", "2025-06-18", "已授权"],
      ["基于 RFID 的仓储追溯设备", "实用新型", "2025-10-09", "已授权"]
    ],
    软著: [
      ["汉脑 MES 生产执行系统 V3.8", "生产制造", "2025-08-16", "已登记"],
      ["汉脑 WMS 仓储管理系统 V3.1", "仓储物流", "2025-09-22", "已登记"],
      ["汉脑 APS 高级排产系统 V2.2", "计划排程", "2025-11-18", "已登记"]
    ],
    授权证书: [
      ["软件产品证书", "ERP/MES/WMS 产品线", "2025-04-28", "有效"],
      ["信息安全管理证书", "研发与运维管理", "2025-07-15", "有效"],
      ["工业互联网服务能力证书", "平台与集成服务", "2025-12-06", "有效"]
    ],
    申报中: [
      ["工位机报工交互方法", "发明专利", "2026-03-22", "申报中"],
      ["产业大脑资产治理平台", "软著", "2026-04-18", "材料提交"],
      ["设备状态看板可视化系统", "软著", "2026-05-09", "受理中"]
    ]
  },
  品牌渠道: {
    网站: [
      ["汉脑科技官网", "https://www.hnao.cn", "公司品牌、产品介绍、案例展示", "运行中"],
      ["产品中心 APS 页面", "https://www.hnao.cn/product/aps", "APS 产品介绍与线索承接", "运行中"],
      ["无形资产工作台", "https://fanciful-bubblegum-81c4af.netlify.app/", "资产展示与内部汇报", "运行中"]
    ],
    公众号: [
      ["汉脑科技", "企业服务号", "品牌新闻、产品动态", "运营中"],
      ["汉脑工业互联网", "行业内容号", "解决方案、案例文章", "运营中"],
      ["汉脑数字工厂", "客户服务号", "项目交付、培训通知", "运营中"],
      ["达铃协同", "SaaS 产品号", "协同办公与移动应用", "运营中"],
      ["薪安服务", "SaaS 服务号", "薪资、考勤与员工服务", "运营中"]
    ],
    域名: [
      ["hnao.cn", "主官网域名", "2026-11-18", "已备案"],
      ["hnao.com.cn", "品牌保护域名", "2026-09-30", "已备案"],
      ["hnao.net", "技术服务备用域名", "2026-08-12", "已持有"],
      ["hanoai.cn", "AI 产品线域名", "2027-01-05", "已持有"],
      ["daling.cn", "达铃产品域名", "2026-10-26", "已备案"],
      ["xinan-saas.cn", "薪安产品域名", "2026-12-03", "已持有"],
      ["industrybrain.cn", "产业大脑专题域名", "2027-02-14", "已持有"],
      ["factoryos.cn", "数字工厂产品域名", "2026-07-21", "已持有"]
    ],
    证书: [
      ["ICP备案主体证书", "官网与产品站", "2025-05-16", "有效"],
      ["SSL 通配符证书", "*.hnao.cn", "2026-04-30", "有效"],
      ["等保备案回执", "项目管理与资产平台", "2025-12-20", "有效"],
      ["软件企业证书", "企业资质", "2025-09-18", "有效"]
    ],
    外购软件: [
      ["Adobe Creative Cloud", "宣传图、视频、品牌物料制作", "2026-01-12", "年度授权"],
      ["Axure RP", "产品原型与需求评审", "2025-12-01", "年度授权"],
      ["JetBrains All Products", "研发 IDE", "2026-02-28", "年度授权"],
      ["Navicat Premium", "数据库管理", "2025-11-20", "授权中"],
      ["OmniPlan", "项目计划与排期", "2025-10-10", "授权中"],
      ["WPS 商业版", "文档、表格、汇报材料", "2026-03-31", "授权中"]
    ],
    AI工具: [
      ["Codex", "代码生成、页面修改、资料整理", "2026-06-30", "使用中"],
      ["ChatGPT Team", "方案撰写、需求分析、知识检索", "2026-05-18", "使用中"],
      ["通义千问", "中文资料整理与行业内容生成", "2026-04-22", "使用中"],
      ["Kimi", "长文档阅读、会议纪要整理", "2026-04-09", "使用中"],
      ["即梦 AI", "宣传素材图生成", "2026-03-15", "使用中"],
      ["剪映 AI", "企业视频剪辑与字幕", "2026-02-26", "使用中"]
    ],
    插件: [
      ["Vite", "单页应用构建", "前端工程", "使用中"],
      ["Lucide Icons", "页面图标体系", "UI 组件", "使用中"],
      ["ESBuild", "构建加速", "前端工程", "使用中"],
      ["Browser 控制插件", "本地页面验证", "测试验证", "使用中"],
      ["Chrome 控制插件", "浏览器调试", "测试验证", "备用"],
      ["PDF 工具插件", "资料 PDF 读取与生成", "资料治理", "备用"]
    ]
  },
  宣传资产: {
    宣传资料: [
      ["汉脑科技公司介绍 PPT", "品牌介绍", "2026-01-18", "已归档"],
      ["数字工厂解决方案手册", "售前资料", "2026-03-12", "已归档"],
      ["工业互联网平台白皮书", "行业资料", "2025-12-08", "已归档"]
    ],
    展会资料: [
      ["服装数字工厂展板", "展会海报", "2025-09-20", "已归档"],
      ["智能制造展产品单页", "宣传单页", "2025-10-16", "已归档"],
      ["产业大脑演示脚本", "现场讲解", "2026-04-28", "已归档"]
    ],
    文案: [
      ["官网首页品牌文案", "网站内容", "2026-02-09", "已发布"],
      ["APS 产品介绍文案", "产品页面", "2026-03-06", "已发布"],
      ["SaaS 应用矩阵文案", "产品资料", "2026-05-21", "已归档"]
    ],
    企业照片: [
      ["办公室环境照片", "企业形象", "2025-11-19", "已归档"],
      ["项目实施现场照片", "案例资料", "2026-01-14", "已归档"],
      ["设备联调现场照片", "硬件资料", "2026-04-10", "已归档"]
    ],
    企业视频: [
      ["汉脑科技宣传片", "品牌视频", "2025-12-30", "已归档"],
      ["智能工厂演示视频", "方案视频", "2026-03-18", "已归档"],
      ["工位机报工演示视频", "产品视频", "2026-05-11", "已归档"]
    ]
  },
  企业档案: {
    应用表单: [
      ["项目立项申请表", "项目管理", "2026-01-05", "已归档"],
      ["客户需求确认表", "售前交付", "2026-02-12", "已归档"],
      ["上线验收确认表", "实施交付", "2026-04-22", "已归档"]
    ],
    合同模板: [
      ["软件实施服务合同模板", "销售合同", "2025-12-01", "已启用"],
      ["SaaS 订阅服务协议", "订阅合同", "2026-01-20", "已启用"],
      ["硬件设备采购合同模板", "采购合同", "2026-03-08", "已启用"]
    ],
    企业资料: [
      ["营业执照扫描件", "主体资料", "2026-01-02", "有效"],
      ["开户许可证资料", "财务资料", "2026-01-02", "有效"],
      ["公司介绍标准版", "对外资料", "2026-04-16", "已更新"]
    ],
    申报文件: [
      ["高新技术企业申报材料", "资质申报", "2025-09-26", "已归档"],
      ["软件企业评估材料", "资质申报", "2025-11-15", "已归档"],
      ["工业互联网服务商申报材料", "资质申报", "2026-03-30", "已归档"]
    ],
    规章制度: [
      ["研发资料归档制度", "研发管理", "2026-02-01", "执行中"],
      ["知识产权管理制度", "资产治理", "2026-02-15", "执行中"],
      ["信息安全管理制度", "安全管理", "2026-03-01", "执行中"]
    ],
    荣誉资质: [
      ["高新技术企业证书", "企业资质", "2025-12-18", "有效"],
      ["软件企业证书", "企业资质", "2025-09-18", "有效"],
      ["优秀工业互联网服务商", "荣誉证书", "2026-01-25", "有效"]
    ],
    证照: [
      ["营业执照", "企业证照", "长期", "有效"],
      ["开户许可证", "财务证照", "长期", "有效"],
      ["社保登记资料", "人事证照", "2026-01-08", "有效"]
    ],
    大事记: [
      ["1999 服装行业软件项目启动", "历史资产", "1999-06-18", "已归档"],
      ["2020 产业大脑项目建设", "案例资产", "2020-09-12", "已归档"],
      ["2026 无形资产工作台上线", "资产治理", "2026-06-30", "已归档"]
    ]
  }
};

export const employeeDirectory = {
  "HN-PM-001": {
    name: "杜英杰",
    role: "产品经理",
    department: "产品与解决方案部",
    status: "active",
    assets: ["象山锦秀服装产业大脑", "服装行业应用组件"],
    note: "负责服装行业产品规划、资料归档和客户价值梳理。"
  },
  "HN-TECH-001": {
    name: "艾总",
    role: "技术负责人",
    department: "工业软件研发部",
    status: "active",
    assets: ["MES制造", "WMS仓储", "电子看板"],
    note: "负责核心模块架构、接口联调和版本发布。"
  },
  "HN-PM-002": {
    name: "冯小燕",
    role: "产品经理",
    department: "行业应用部",
    status: "new",
    assets: ["五金离散制造数字工厂"],
    note: "新增负责人，正在补齐项目证据链和知识产权归属资料。"
  },
  "HN-TECH-002": {
    name: "秦步日",
    role: "技术负责人",
    department: "现场交付部",
    status: "departed",
    assets: ["设备采集", "质量检测"],
    note: "已离职，涉及接口文档、设备协议和现场调试记录需重点交接。"
  },
  "HN-PM-003": {
    name: "武文豪",
    role: "产品经理",
    department: "物流装备事业部",
    status: "active",
    assets: ["物流装备智能仓储案例"],
    note: "负责智能仓储案例、客户资料和设备清单沉淀。"
  },
  "HN-TECH-003": {
    name: "陈良",
    role: "技术负责人",
    department: "智能装备研发部",
    status: "active",
    assets: ["AGV调度", "立体库管理", "设备监控"],
    note: "负责仓储装备联动、任务调度和设备监控能力。"
  }
};

export const companyDocMatrix = [
  ["知识产权", [["商标", 18], ["专利", 41], ["软著", 31], ["授权证书", 6], ["申报中", 8]]],
  ["品牌渠道", [["网站", 3], ["公众号", 5], ["域名", 8], ["证书", 6], ["外购软件", 9], ["AI工具", 14], ["插件", 22]]],
  ["企业档案", [["应用表单", 17], ["合同模板", 23], ["企业资料", 29], ["申报文件", 32], ["规章制度", 16], ["荣誉资质", 27], ["证照", 15], ["大事记", 42]]],
  ["宣传资料", [["宣传册", 36], ["展会资料", 11], ["文案", 58], ["企业照片", 126], ["方案PPT", 24], ["客户案例", 18]]]
];

export const ipAssetLedger = {
  patent: {
    label: "专利",
    items: [
      ["HN-PAT-2020-001", "服装生产数据联动方法", "象山锦秀服装产业大脑", "2020-09-18", "已授权"],
      ["HN-PAT-2021-004", "设备采集与异常预警装置", "五金离散制造数字工厂", "2021-12-06", "证书归档"],
      ["HN-PAT-2024-007", "智能仓储任务调度方法", "物流装备智能仓储案例", "2024-05-22", "已授权"],
      ["HN-PAT-2025-011", "APS排产约束计算方法", "APS", "2025-11-20", "已授权"],
      ["HN-PAT-2025-013", "工位机报工数据采集装置", "工位机", "2025-09-16", "证书归档"],
      ["HN-PAT-2026-002", "手持机仓储扫码校验方法", "手持机", "2026-02-21", "申报中"],
      ["HN-PAT-2024-018", "MES质量追溯联动方法", "MES", "2024-12-12", "已授权"],
      ["HN-PAT-2023-016", "WMS库位任务分配方法", "WMS", "2023-10-30", "已授权"],
      ["HN-PAT-2022-009", "电子看板异常预警方法", "电子看板", "2022-08-19", "证书归档"]
    ]
  },
  copyright: {
    label: "软著",
    items: [
      ["HN-SR-2019-ERP", "汉脑ERP经营管理软件", "ERP", "2019-08-12", "已登记"],
      ["HN-SR-2021-MES", "汉脑MES制造执行软件", "MES", "2021-04-20", "已登记"],
      ["HN-SR-2024-APS", "汉脑APS智能排产系统", "APS", "2024-10-16", "已登记"],
      ["HN-SR-2022-WMS", "汉脑WMS仓储管理系统", "WMS", "2022-06-24", "已登记"],
      ["HN-SR-2025-DL", "达铃企业协同SaaS平台", "达铃", "2025-03-18", "已登记"],
      ["HN-SR-2025-GWJ", "汉脑工位机生产报工系统", "工位机", "2025-08-26", "已登记"],
      ["HN-SR-2026-HSJ", "汉脑手持机移动仓储系统", "手持机", "2026-01-14", "已登记"],
      ["HN-SR-2023-PLM", "汉脑PLM产品生命周期软件", "PLM", "2023-11-09", "已登记"],
      ["HN-SR-2024-CRM", "汉脑CRM客户管理系统", "CRM", "2024-07-03", "已登记"]
    ]
  }
};

export const productAssetProfiles = {
  ERP: {
    costs: [["累计投入", "286万"], ["开发费", "118万"], ["人工费", "132万"], ["实施运维", "36万"]],
    hours: [["研发工时", "5,420h"], ["测试工时", "1,180h"], ["实施工时", "2,360h"]],
    versions: [["V4.2", "2025-11-18", "经营指标、合同回款、客户台账增强"], ["V3.6", "2024-06-12", "财务协同与订单流转优化"], ["V2.8", "2022-09-26", "基础经营模块标准化"]],
    components: ["客户台账", "合同回款", "经营看板", "主数据接口"]
  },
  MES: {
    costs: [["累计投入", "364万"], ["开发费", "156万"], ["人工费", "172万"], ["现场调试", "36万"]],
    hours: [["研发工时", "6,880h"], ["测试工时", "1,520h"], ["实施工时", "3,140h"]],
    versions: [["V3.8", "2025-12-08", "工序报工、质量追溯和看板联动"], ["V3.1", "2024-03-21", "设备采集与异常处理"], ["V2.5", "2022-07-15", "车间任务流标准化"]],
    components: ["工序报工", "质量追溯", "设备采集", "电子工票"]
  },
  WMS: {
    costs: [["累计投入", "238万"], ["开发费", "96万"], ["人工费", "108万"], ["设备联调", "34万"]],
    hours: [["研发工时", "4,260h"], ["测试工时", "960h"], ["实施工时", "2,780h"]],
    versions: [["V3.1", "2025-08-28", "库位、条码和AGV任务联动"], ["V2.7", "2023-12-19", "收发存标准流程"], ["V2.0", "2021-10-11", "基础仓储台账"]],
    components: ["库位管理", "条码作业", "AGV接口", "库存看板"]
  },
  APS: {
    costs: [["累计投入", "326万"], ["算法开发", "142万"], ["人工费", "146万"], ["排产模型", "38万"]],
    hours: [["研发工时", "5,960h"], ["测试工时", "1,240h"], ["实施工时", "2,180h"]],
    versions: [["V2.2", "2026-03-10", "计划推演、计划排产、计划发布和计划执行"], ["V1.8", "2025-05-23", "插单、撤单、改单调度"], ["V1.2", "2024-01-09", "订单交期推演"]],
    components: ["计划推演", "约束排程", "工位任务发布", "产能日历"]
  },
  达铃: {
    costs: [["累计投入", "118万"], ["开发费", "46万"], ["人工费", "54万"], ["SaaS运维", "18万"]],
    hours: [["研发工时", "2,180h"], ["运维工时", "620h"], ["客户支持", "480h"]],
    versions: [["V2.1", "2025-09-05", "消息协同、任务通知和组织在线"], ["V1.7", "2024-08-20", "移动端提醒"], ["V1.0", "2023-04-18", "基础协同"]],
    components: ["消息中心", "组织通讯录", "任务提醒", "移动端"]
  }
};

export const sceneOperationLibrary = [
  {
    name: "手持机收发作业",
    device: "手持机",
    image: visual("scene-handheld-warehouse.jpg"),
    scene: "仓库收货、发货、盘点、移库",
    role: "仓管员",
    output: "扫码记录、库存异动、盘点差异表",
    docs: ["手持机作业SOP", "WMS扫码操作说明", "盘点模板"]
  },
  {
    name: "工位机生产报工",
    device: "工位机",
    image: visual("scene-workstation-reporting-upload.png"),
    scene: "缝制工位、组装工位、质检工位",
    role: "车间员工",
    output: "工序报工、工时记录、质量异常",
    docs: ["工位机报工说明", "MES工序配置表", "异常处理流程"]
  },
  {
    name: "大屏看板现场调度",
    device: "电子看板",
    image: visual("scene-dashboard-dispatch.jpg"),
    scene: "车间产线、仓库月台、管理驾驶舱",
    role: "车间主管",
    output: "产量达成、异常预警、交付风险",
    docs: ["看板指标口径", "大屏部署说明", "班组日报模板"]
  },
  {
    name: "RFID批次追溯",
    device: "RFID",
    image: visual("scene-rfid-trace.jpg"),
    scene: "裁片流转、吊挂绑定、成衣入库",
    role: "物料员",
    output: "批次追溯、流转节点、异常定位",
    docs: ["RFID绑定规则", "追溯字段说明", "标签打印模板"]
  }
];

export const costOverview = {
  totals: [["累计投入", "1,846万"], ["产品开发费", "742万"], ["人工费", "816万"], ["累计工时", "38,420h"], ["资料治理费", "86万"], ["知识产权费", "54万"], ["硬件样机费", "92万"], ["云资源费", "56万"]],
  distribution: [["软件产品", 38], ["SaaS应用", 18], ["行业案例", 17], ["资料资产", 11], ["硬件装备", 10], ["知识产权", 6]],
  rankings: [["MES", "364万", 100], ["APS", "326万", 90], ["ERP", "286万", 79], ["WMS", "238万", 65], ["PLM", "168万", 46], ["达铃", "118万", 32]],
  trend: [["2019", 18], ["2020", 32], ["2021", 48], ["2022", 56], ["2023", 68], ["2024", 76], ["2025", 84], ["2026", 92]],
  costItems: [["开发投入", "742万", 40], ["人工费用", "816万", 44], ["实施交付", "196万", 11], ["运维云资源", "92万", 5]],
  workHours: [["研发", "21,640h", 56], ["测试", "5,420h", 14], ["实施", "8,960h", 23], ["运维", "2,400h", 7]],
  deposits: [["复用组件", "86个"], ["项目证据", "214份"], ["版本记录", "43条"], ["专利软著", "72项"], ["场景资料", "38套"], ["客户案例", "18个"]]
};

export const renewalTodos = [
  { name: "www.hnao.cn 官网域名", category: "域名", due: "2026-08-18", amount: "¥680", owner: "杜英杰", status: "task", note: "距离到期不足 60 天，需确认续费年限。" },
  { name: "APS 产品页 SSL 证书", category: "SSL证书", due: "2026-07-28", amount: "¥1,260", owner: "艾总", status: "risk", note: "证书临期，影响产品页面 HTTPS 访问。" },
  { name: "研发中心企业宽带", category: "宽带", due: "2026-09-30", amount: "¥8,800", owner: "冯小燕", status: "normal", note: "年度宽带续费，当前链路正常。" },
  { name: "对象存储图片资源桶", category: "云资源", due: "2026-08-05", amount: "¥3,200", owner: "秦步日", status: "task", note: "图片和资料资源包存储费用待确认。" },
  { name: "蓝湖设计协作空间", category: "外购软件", due: "2026-07-16", amount: "¥2,980", owner: "武文豪", status: "risk", note: "UI 图访问依赖该空间权限，需提前续费。" },
  { name: "短信通知接口套餐", category: "接口服务", due: "2026-10-12", amount: "¥1,500", owner: "陈良", status: "normal", note: "用于SaaS通知和设备预警短信。" }
];

export const assetAccessLogs = [
  ["2026-07-02 09:18", "杜英杰", "访问", "象山锦秀服装产业大脑", "案例详情", "正常"],
  ["2026-07-02 09:31", "艾总", "点击", "APS 工业软件", "查看UI", "正常"],
  ["2026-07-02 10:06", "冯小燕", "下载", "知识产权台账", "专利证书清单", "有任务"],
  ["2026-07-02 10:42", "秦步日", "访问", "工位机生产报工", "蓝湖UI入口", "异常提醒"],
  ["2026-07-02 11:05", "武文豪", "点击", "物流装备智能仓储案例", "生命周期明细", "正常"],
  ["2026-07-02 11:27", "陈良", "下载", "设备维护资料", "智能装备资料包", "正常"]
];

export const assetLifecycleDetails = [
  ["立项", "2019-03-12", "建立服装行业生产协同方向，确认ERP/MES/WMS核心资产边界。", "杜英杰", "已完成"],
  ["研发", "2020-09-18", "完成产业大脑、设备采集、质量追溯等核心模块研发。", "艾总", "已完成"],
  ["归档", "2024-10-16", "补齐软著、专利、项目合同、蓝图方案和验收资料。", "冯小燕", "治理中"],
  ["授权", "2025-12-18", "完成专利授权和软件著作权登记证书归集。", "武文豪", "已完成"],
  ["复用", "2026-03-10", "复用到APS、WMS、工位机、手持机和电子看板方案。", "陈良", "进行中"],
  ["治理", "2026-07-02", "跟踪低利用率资产、权限访问和待续费事项。", "秦步日", "预警"]
];

export const lowUtilizationAssets = [
  ["PDM图文档", "31%", "168万", "1.6万", "老项目引用少，培训资料不足", "合并到PLM资产包"],
  ["薪安SaaS", "28%", "86万", "0.9万", "客户续费率低，移动端入口弱", "补齐移动端演示和客户案例"],
  ["工业相机质检组件", "24%", "72万", "0.7万", "依赖现场硬件，标准化不足", "沉淀通用检测模板"],
  ["广告机信息发布", "19%", "38万", "0.3万", "独立销售少，场景联动弱", "纳入大屏看板组合方案"],
  ["RFID批次追溯", "35%", "96万", "1.2万", "客户硬件投入门槛高", "形成轻量版试点包"]
];

export const idleAssetDetails = [
  ["PDM图文档", "闲置", "31%", "168万", "连续 90 天仅 3 个项目调用", "合并到PLM知识库"],
  ["广告机信息发布", "闲置", "19%", "38万", "只在展厅和少量客户现场使用", "并入大屏看板方案"],
  ["工业相机质检组件", "低频", "24%", "72万", "硬件依赖高，复用门槛偏高", "抽象为通用质检模板"],
  ["RFID批次追溯", "低频", "35%", "96万", "客户硬件投入周期长", "形成轻量试点包"],
  ["薪安SaaS", "观察", "28%", "86万", "续费和活跃度低于预期", "补齐移动端入口和案例"]
];

export const designLibrary = [
  {
    name: "AI排产助手移动端",
    category: "SaaS产品设计",
    designDate: "2026-03-18",
    designer: "郑玉悦",
    status: "未开发",
    reason: "现有APS排产能力尚未完成移动端权限与客户场景验证，短期开发会造成重复投入。",
    reuse: "保留交互稿和算法流程，后续并入APS移动驾驶舱。"
  },
  {
    name: "设备能耗碳账本",
    category: "行业应用设计",
    designDate: "2026-04-09",
    designer: "郭振",
    status: "未开发",
    reason: "客户能耗数据采集口径差异较大，标准化数据源不足，暂不具备产品化条件。",
    reuse: "沉淀指标口径，作为IES能效系统的扩展模块储备。"
  },
  {
    name: "供应商协同报价门户",
    category: "业务门户设计",
    designDate: "2026-04-26",
    designer: "冯小燕",
    status: "未开发",
    reason: "与ERP采购模块边界重叠，当前客户付费意愿不足，优先级低于核心产品迭代。",
    reuse: "保留报价流程和表单规范，后续用于ERP供应链轻量化改造。"
  },
  {
    name: "工厂数字孪生3D看板",
    category: "大屏产品设计",
    designDate: "2026-05-12",
    designer: "武文豪",
    status: "未开发",
    reason: "3D建模成本高，项目交付周期长，当前更适合采用二维大屏看板方案。",
    reuse: "保留车间布局与指标体系，作为重点客户定制化方案储备。"
  },
  {
    name: "售后AI知识库问答",
    category: "AI工具设计",
    designDate: "2026-06-05",
    designer: "秦步日",
    status: "未开发",
    reason: "售后知识资料还未完成结构化治理，直接开发会影响问答准确率和可控性。",
    reuse: "先用于资料治理规则设计，待知识库完整后进入验证。"
  }
];

export const assetUiGalleries = {
  工位机: {
    url: "https://lanhuapp.com/link/#/invite?sid=lXD8qbKa",
    images: [visual("scene-workstation-reporting-upload.png"), visual("software-mes.jpg"), visual("case-xiangshan-line.jpg")]
  },
  手持机: {
    url: "https://lanhuapp.com/link/#/invite?sid=lx0IBLKy",
    images: [visual("scene-handheld-warehouse.jpg"), visual("software-wms.jpg"), visual("case-warehouse.jpg")]
  },
  APS: { url: "", images: [visual("software-aps-official-top.png"), visual("software-aps-official-01.png"), visual("software-aps-official-02.png")] },
  MES: { url: "", images: [visual("software-mes.jpg"), visual("case-hardware-line.jpg"), visual("case-xiangshan-line.jpg")] },
  WMS: { url: "", images: [visual("software-wms.jpg"), visual("case-warehouse.jpg"), visual("scene-handheld-warehouse.jpg")] },
  ERP: { url: "", images: [visual("software-erp.jpg"), visual("industry-government-copyright.jpg"), visual("industry-food-copyright.jpg")] },
  PLM: { url: "", images: [visual("software-plm.jpg"), visual("industry-auto-copyright.jpg"), visual("industry-medical-copyright.jpg")] },
  达铃: { url: "", images: [visual("saas-daling.jpg"), visual("saas-crm.jpg"), visual("saas-attendance.jpg")] }
};

export const appVersionInfo = {
  currentVersion: "v1.0.3",
  history: [
    {
      version: "v1.0.3",
      date: "2026-07-02",
      title: "参考图首屏视觉优化版",
      status: "当前版本",
      systemUrl: "/versions/v1.0.3/index.html",
      modules: ["顶部导航", "首屏背景", "公司资料分类", "版本快照"],
      changes: [
        "参考百度智能云式白色网站导航，顶部导航改为浅色悬浮导航。",
        "引入汉脑系统矩阵图作为首屏弱化背景，形成浅蓝科技视觉氛围。",
        "公司资料分类改为四组悬浮卡片展示，资料条目保留点击查看详情能力。",
        "同步生成 v1.0.3 独立版本快照，版本历史可跳转查看对应页面。"
      ]
    },
    {
      version: "v1.0.2",
      date: "2026-07-02",
      title: "导航与资料分类视觉优化版",
      status: "历史版本",
      systemUrl: "/versions/v1.0.2/index.html",
      modules: ["顶部导航", "公司资料分类", "资产治理", "详情弹窗", "版本快照"],
      changes: [
        "顶部导航字体、按钮宽度和背景样式优化，提升网站式导航识别度。",
        "公司资料分类胶囊项缩小字号和留白，降低边框与背景对比，让页面更简洁。",
        "右侧资产治理调整为完成度、治理项、异常项、设计库四项卡片展示。",
        "所有主要详情页补充资料清单、归档路径、责任人、更新记录卡片入口。",
        "设计库记录已设计但未开发产品，并保留不开发原因和后续复用方向。"
      ]
    },
    {
      version: "v1.0.1",
      date: "2026-07-02",
      title: "资产展示与治理看板优化版",
      status: "历史版本",
      systemUrl: "/versions/v1.0.1/index.html",
      modules: ["顶部导航", "公司资料", "案例资产", "资产概览", "待办提醒"],
      changes: [
        "顶部分类导航调整为网站式展示，移除数量展示，提升页面浏览入口清晰度。",
        "公司资料分类改为截图样式的四行浅色容器与胶囊入口，删除知识产权、品牌渠道、企业档案、宣传资料分组文字。",
        "案例资产关联专利、人员及成本，形成价值脉络，并在案例详情中展示UI图和访问地址。",
        "资产概览新增访问日志、生命周期、低利用率资产和资产闲置情况明细。",
        "右侧待办提醒简化为统计摘要，网站、证书、宽带等续费明细改为弹窗查看。"
      ]
    },
    {
      version: "v1.0.0",
      date: "2026-07-01",
      title: "无形资产工作台基础版",
      status: "历史版本",
      systemUrl: "/versions/v1.0.0/index.html",
      modules: ["资产概览", "公司资料", "案例资产", "产品矩阵", "场景运营库"],
      changes: [
        "建立汉脑无形资产工作台首页，统一展示案例、行业内容、核心平台、产品矩阵、SaaS应用和设备资产。",
        "新增资产概览与成本看板，展示投入费用、工时、资产沉淀趋势和成本结构。",
        "公司资料支持知识产权、品牌渠道、宣传资产、企业档案等资料清单查看。",
        "产品、行业、SaaS和案例资产支持专利/软著详情入口。"
      ]
    },
    {
      version: "v0.9.0",
      date: "2026-06-30",
      title: "资产治理与资料清单完善",
      status: "历史版本",
      systemUrl: "",
      modules: ["公司资料", "知识产权", "品牌渠道", "详情弹窗"],
      changes: [
        "补充品牌渠道的网站、公众号、域名、证书、外购软件、AI工具和插件清单。",
        "完善知识产权、宣传资产、企业档案的具体内容台账。",
        "优化右侧公司资料排序和资产治理展示。"
      ]
    },
    {
      version: "v0.8.0",
      date: "2026-06-29",
      title: "成本看板与图形概览升级",
      status: "历史版本",
      systemUrl: "",
      modules: ["资产概览", "成本看板", "图表样式"],
      changes: [
        "资产概览弹窗升级为全屏成本看板。",
        "新增费用构成、公司构成、产品投入排行和累计沉淀趋势。",
        "保留原产品资产分布、行业覆盖指数、资料完成度和资产补齐进度图形。"
      ]
    },
    {
      version: "v0.7.0",
      date: "2026-06-28",
      title: "案例与产品资产详情增强",
      status: "历史版本",
      systemUrl: "",
      modules: ["案例资产", "行业内容", "产品矩阵", "SaaS应用"],
      changes: [
        "案例资产补充人员工号、责任人信息和离职提示。",
        "产品详情补充版本历史、投入费用、工时和累计组件。",
        "行业内容、产品矩阵、SaaS应用补充专利和软著入口。"
      ]
    }
  ]
};
