(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))e(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&e(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function e(o){if(o.ep)return;o.ep=!0;const n=t(o);fetch(o.href,n)}})();const Zs=[["platform","汉脑工业联网平台",100],["platform","内网工业互联网平台",200],["platform","AI安全数据底座",0],["platform","企业级工业底座",0]],C=[["ERP","经营","V4.2",9,6],["MES","制造","V3.8",11,8],["WMS","仓储","V3.1",7,5],["PLM","研发","V2.9",5,4],["PDM","数据","V2.6",4,4],["MRP","物料","V2.4",3,3],["APS","排程","V2.2",6,4],["IES","能效","V1.8",4,3],["CRM","增长","V3.0",5,4]],N=[["达铃","协同","V2.1",2,1],["考勤","人事","V3.4",3,2],["餐饮","后勤","V2.8",2,1],["薪安","薪资","V1.9",2,2],["万加","服务","V2.2",1,1],["鉴富宝","核验","V1.6",2,1],["标识解析","追溯","V3.0",4,3],["优羽","协同","V1.8",1,1],["CRM","增长","V2.7",3,2],["工资条","薪酬","V1.5",1,1],["e维保","维保","V2.4",2,2],["扩展","生态","V1.0",1,1]],E=[{name:"象山锦秀服装产业大脑",industry:"纺织服装",sourceYear:"1999",status:"normal",manager:"HN-PM-001",engineer:"HN-TECH-001",managerState:"active",engineerState:"active",patents:8,copyrights:6,calls:"12.8万",modules:["ERP经营","MES制造","WMS仓储","质量追溯","电子看板"],components:["工位机","手持机","RFID","电子看板"],evolution:["1999 服装管理软件","2012 生产协同平台","2020 产业大脑","2026 无形资产沉淀"],evidence:["项目合同","蓝图方案","验收资料","研发工时","软著证书"],access:["sales","presales","tech"],intro:"从早期服装项目演进为产业大脑案例，沉淀生产、仓储、质量和设备联动组件。",contributors:[["杜英杰","产品规划",32],["艾总","架构研发",28],["冯小燕","行业资料",16],["秦步日","现场联调",14],["武文豪","设备协同",10]]},{name:"五金离散制造数字工厂",industry:"五金",sourceYear:"2016",status:"risk",manager:"HN-PM-002",engineer:"HN-TECH-002",managerState:"new",engineerState:"active",patents:5,copyrights:4,calls:"8.6万",modules:["MES制造","APS排程","设备采集","质量检测"],components:["工业相机","边缘计算机","机械臂"],evolution:["2016 车间联网","2020 设备数据平台","2024 数字工厂","2026 资产治理"],evidence:["需求规格说明","设备接口表","现场照片","专利台账"],access:["sales","presales","tech"],intro:"覆盖离散制造排程、采集、质检和设备联动，当前需要补齐双负责人机制。",contributors:[["冯小燕","产品梳理",26],["秦步日","设备接口",31],["艾总","平台架构",18],["陈良","质检联动",15],["杜英杰","资料治理",10]]},{name:"物流装备智能仓储案例",industry:"物流装备",sourceYear:"2020",status:"normal",manager:"HN-PM-003",engineer:"HN-TECH-003",managerState:"active",engineerState:"active",patents:7,copyrights:5,calls:"10.2万",modules:["WMS仓储","AGV调度","立体库管理","设备监控"],components:["AGV","提升机","穿梭车","立体库"],evolution:["2020 仓储数字化","2022 AGV接入","2025 立体库联动","2026 资料归档"],evidence:["项目合同","设备清单","调试记录","验收报告"],access:["sales","presales","tech"],intro:"以仓储和物流装备为核心，形成软件、硬件、设备与项目凭证的完整资料归档。",contributors:[["武文豪","方案设计",30],["陈良","装备联动",30],["艾总","调度算法",18],["冯小燕","验收资料",12],["杜英杰","案例包装",10]]}],Z=[["专利台账",0,0],["软著沉淀",0,0],["案例资料",0,0]],Vs=[["纺织服装",[["男装",2,1],["女装",3,2],["裘皮",1,1],["皮革",1,1],["针织运动",4,3],["羊毛衫",2,1],["牛仔",2,2],["羽绒服",3,2],["童装",1,1],["林业",1,1],["无纺布",2,1],["扩展",0,0]]],["五金",Z],["医疗",Z],["汽车零部件",Z],["童车",Z],["电子电气",Z],["食品",Z],["塑料",Z],["政府类",Z],["物流装备",Z]],r=s=>`./assets/photos/visuals/${s}`,Hs={象山锦秀服装产业大脑:{hero:r("case-xiangshan.jpg"),card:[r("case-xiangshan-line.jpg"),r("case-xiangshan-dashboard.jpg")],previews:[r("case-xiangshan.jpg"),r("case-xiangshan-line.jpg"),r("case-xiangshan-dashboard.jpg")],detail:"以服装智能车间、生产看板和产业大脑图像为主视觉，突出象山锦秀服装从生产协同到产业数据沉淀的演进。"},五金离散制造数字工厂:{hero:r("case-hardware.jpg"),card:[r("case-hardware-line.jpg"),r("case-hardware-quality.jpg")],previews:[r("case-hardware.jpg"),r("case-hardware-line.jpg"),r("case-hardware-quality.jpg")],detail:"以五金加工产线、设备联网和视觉质检图像呈现离散制造数字工厂的现场特征。"},物流装备智能仓储案例:{hero:r("case-warehouse.jpg"),card:[r("case-warehouse-agv.jpg"),r("case-warehouse-control.jpg")],previews:[r("case-warehouse.jpg"),r("case-warehouse-agv.jpg"),r("case-warehouse-control.jpg")],detail:"以智能仓储、AGV调度和WMS控制界面作为主视觉，体现物流装备软硬件联动。"}},ks=[["男装","industry-menswear.jpg","男装生产线与版型协同场景，适配订单排产、工序跟踪和质检归档。"],["女装","industry-womenswear.jpg","女装制衣与柔性生产场景，突出款式变化、批次管理和生产协同。"],["裘皮","industry-fur.jpg","裘皮加工与高价值物料管理场景，适配质量追溯和工艺沉淀。"],["皮革","industry-leather.jpg","皮革制品生产与工序流转场景，强调物料批次、裁剪和成品质检。"],["针织运动","industry-knit-sports.jpg","针织运动服生产场景，适配快速订单、设备联动和过程看板。"],["羊毛衫","industry-wool-sweater.jpg","羊毛衫针织生产场景，适配织造、套口、整烫和成品追溯。"],["牛仔","industry-denim.jpg","牛仔服装生产场景，覆盖洗水、缝制、质检和批次追溯。"],["羽绒服","industry-down-jacket.jpg","羽绒服制造场景，突出充绒、缝制、防钻绒检测和订单交付。"],["童装","industry-kidswear.jpg","童装生产场景，适配多尺码、多颜色和安全标准资料沉淀。"],["林业","industry-forestry.jpg","林业数字化管理场景，适配资源台账、巡检记录和数据看板。"],["无纺布","industry-nonwoven.jpg","无纺布产线场景，适配连续制造、能耗监控和质量追溯。"],["扩展","industry-expansion.jpg","行业扩展应用场景，作为新行业、新客户和新组件接入入口。"]].map(([s,a,t])=>[`纺织服装/${s}`,{image:r(a),description:t}]),Ls={五金:["industry-hardware-ledger.jpg","industry-hardware-copyright.jpg","industry-hardware-case.jpg"],医疗:["industry-medical-ledger.jpg","industry-medical-copyright.jpg","industry-medical-case.jpg"],汽车零部件:["industry-auto-ledger.jpg","industry-auto-copyright.jpg","industry-auto-case.jpg"],童车:["industry-stroller-ledger.jpg","industry-stroller-copyright.jpg","industry-stroller-case.jpg"],电子电气:["industry-electronics-ledger.jpg","industry-electronics-copyright.jpg","industry-electronics-case.jpg"],食品:["industry-food-ledger.jpg","industry-food-copyright.jpg","industry-food-case.jpg"],塑料:["industry-plastic-ledger.jpg","industry-plastic-copyright.jpg","industry-plastic-case.jpg"],政府类:["industry-government-ledger.png","industry-government-copyright.jpg","industry-government-case.jpg"],物流装备:["industry-logistics-ledger.png","industry-logistics-copyright.jpg","industry-logistics-case.png"]},Ps=Object.entries(Ls).flatMap(([s,a])=>Z.map(([t],e)=>[`${s}/${t}`,{image:r(a[e]),description:`${s}${t}内容用于承接案例、知识产权、软件著作权和行业资料归档。`}])),R=Object.fromEntries([...ks,...Ps]),ss={ERP:{image:r("software-erp.jpg"),previews:[r("software-erp.jpg"),r("industry-government-copyright.jpg"),r("industry-food-copyright.jpg")],description:"经营管理、订单合同、财务协同与经营指标看板。"},MES:{image:r("software-mes.jpg"),previews:[r("software-mes.jpg"),r("case-hardware-line.jpg"),r("case-xiangshan-line.jpg")],description:"生产制造、工序报工、质量追溯与现场执行管理。"},WMS:{image:r("software-wms.jpg"),previews:[r("software-wms.jpg"),r("case-warehouse.jpg"),r("case-warehouse-agv.jpg")],description:"仓储收发、库存库位、条码作业与智能仓储联动。"},PLM:{image:r("software-plm.jpg"),previews:[r("software-plm.jpg"),r("industry-auto-copyright.jpg"),r("industry-medical-copyright.jpg")],description:"研发过程、产品结构、变更评审与生命周期资料沉淀。"},PDM:{image:r("software-pdm.jpg"),previews:[r("software-pdm.jpg"),r("industry-electronics-copyright.jpg"),r("industry-stroller-copyright.jpg")],description:"图文档、BOM、版本和研发数据统一管理。"},MRP:{image:r("software-mrp.jpg"),previews:[r("software-mrp.jpg"),r("industry-plastic-copyright.jpg"),r("industry-nonwoven.jpg")],description:"物料需求计划、采购建议、库存占用和交期测算。"},APS:{image:r("software-aps-official-top.png"),previews:[r("software-aps-official-top.png"),r("software-aps-official-01.png"),r("software-aps-official-02.png"),r("software-aps-official-03.png"),r("software-aps-official-04.png")],description:"汉脑APS智能排产系统，采用人工智能算法进行计划推演、计划排产、计划发布和计划执行。"},IES:{image:r("software-ies.jpg"),previews:[r("software-ies.jpg"),r("industry-logistics-ledger.png"),r("industry-hardware-ledger.jpg")],description:"能源采集、能耗分析、设备效率和节能指标看板。"},CRM:{image:r("software-crm.jpg"),previews:[r("software-crm.jpg"),r("industry-government-case.jpg"),r("saas-crm.jpg")],description:"客户线索、商机跟进、合同回款和服务闭环。"}},as=Object.fromEntries([["达铃","saas-daling.jpg","企业协同、即时沟通、任务通知和组织在线。"],["考勤","saas-attendance.jpg","人员考勤、排班、请假和异常处理。"],["餐饮","saas-catering.jpg","后勤餐饮、订餐、取餐和消费记录管理。"],["薪安","saas-xinan.jpg","薪资核算、薪酬发放、个税和人事数据同步。"],["万加","saas-wanjia.png","服务工单、客户反馈、处理进度和服务评价。"],["鉴富宝","saas-jianfubao.png","身份核验、风控校验、授权记录和风险留痕。"],["标识解析","saas-identifier.jpg","标识注册、解析追溯、数据采集和产业链协同。"],["优羽","saas-youyu.jpg","移动协同、轻量审批、消息触达和团队任务。"],["CRM","saas-crm.jpg","SaaS化客户管理、线索转化、商机跟进和续费服务。"],["工资条","saas-payslip.jpg","电子工资条、薪酬确认、消息送达和员工自助查询。"],["e维保","saas-maintenance.jpg","设备报修、维保计划、巡检记录和工单闭环。"],["扩展","saas-expansion.jpg","SaaS扩展应用、客户订阅、生态接入和能力编排。"]].map(([s,a,t])=>[s,{image:r(a),description:t}])),As=[["copyright","软著","本月登记",8],["patent","专利","授权归集",12],["trademark","商标","品牌关联",6],["document","案例","素材沉淀",9]],F=[["工位机","现场终端","./assets/photos/workstation.jpg"],["手持机","移动作业","./assets/photos/handheld.jpg"],["打印机","标签单据","./assets/photos/printer.jpg"],["广告机","信息发布","./assets/photos/ad-screen.jpg"],["取餐机","自助终端","./assets/photos/meal-kiosk.jpg"],["RFID","自动识别","./assets/photos/rfid.jpg"],["边缘计算机","现场网关","./assets/photos/edge-computer.jpg"],["硬件扩展","预留接入","./assets/photos/hardware-plus.jpg"]],O=[["无源相控阵出入库管控装置","入库管控","./assets/photos/phased-array.jpg"],["AGV","智能物流","./assets/photos/agv.jpg"],["提升机","仓储提升","./assets/photos/lifter.jpg"],["穿梭车","库内搬运","./assets/photos/shuttle.jpg"],["机械臂","自动作业","./assets/photos/robot-arm.jpg"],["立体库","仓储系统","./assets/photos/warehouse.jpg"],["视觉检测设备","质量检测","./assets/photos/vision-inspection.jpg"],["工业相机","图像采集","./assets/photos/industrial-camera.jpg"],["电子看板","现场展示","./assets/photos/display-board.jpg"],["装备扩展","预留接入","./assets/photos/equipment-plus.jpg"]],Is=[["知识产权",[["商标",18,2,1],["专利",41,5,2],["软著",31,3,1]]],["品牌渠道",[["网站",3,1,0],["公众号",5,1,0],["域名",8,2,1],["证书",6,1,2],["外购软件",9,2,1],["AI工具",14,3,1],["插件",22,4,2]]],["宣传资产",[["宣传资料",36],["展会资料",11],["文案",58],["企业照片",126],["企业视频",18]]],["企业档案",[["应用表单",17],["合同模板",23],["企业资料",29],["申报文件",32],["规章制度",16],["荣誉资质",27],["证照",15],["大事记",42]]]],Ts={知识产权:{商标:[["汉脑科技","第42类软件服务商标","2024-09-18","已注册"],["汉脑工业互联网","工业软件品牌标识","2025-03-12","已受理"],["HNAO","英文品牌标识","2025-11-26","已注册"]],专利:[["一种服装生产工位数据采集方法","发明专利","2024-12-20","已授权"],["多工厂排产协同数据处理装置","实用新型","2025-06-18","已授权"],["基于 RFID 的仓储追溯设备","实用新型","2025-10-09","已授权"]],软著:[["汉脑 MES 生产执行系统 V3.8","生产制造","2025-08-16","已登记"],["汉脑 WMS 仓储管理系统 V3.1","仓储物流","2025-09-22","已登记"],["汉脑 APS 高级排产系统 V2.2","计划排程","2025-11-18","已登记"]],授权证书:[["软件产品证书","ERP/MES/WMS 产品线","2025-04-28","有效"],["信息安全管理证书","研发与运维管理","2025-07-15","有效"],["工业互联网服务能力证书","平台与集成服务","2025-12-06","有效"]],申报中:[["工位机报工交互方法","发明专利","2026-03-22","申报中"],["产业大脑资产治理平台","软著","2026-04-18","材料提交"],["设备状态看板可视化系统","软著","2026-05-09","受理中"]]},品牌渠道:{网站:[["汉脑科技官网","https://www.hnao.cn","公司品牌、产品介绍、案例展示","运行中"],["产品中心 APS 页面","https://www.hnao.cn/product/aps","APS 产品介绍与线索承接","运行中"],["无形资产工作台","https://fanciful-bubblegum-81c4af.netlify.app/","资产展示与内部汇报","运行中"]],公众号:[["汉脑科技","企业服务号","品牌新闻、产品动态","运营中"],["汉脑工业互联网","行业内容号","解决方案、案例文章","运营中"],["汉脑数字工厂","客户服务号","项目交付、培训通知","运营中"],["达铃协同","SaaS 产品号","协同办公与移动应用","运营中"],["薪安服务","SaaS 服务号","薪资、考勤与员工服务","运营中"]],域名:[["hnao.cn","主官网域名","2026-11-18","已备案"],["hnao.com.cn","品牌保护域名","2026-09-30","已备案"],["hnao.net","技术服务备用域名","2026-08-12","已持有"],["hanoai.cn","AI 产品线域名","2027-01-05","已持有"],["daling.cn","达铃产品域名","2026-10-26","已备案"],["xinan-saas.cn","薪安产品域名","2026-12-03","已持有"],["industrybrain.cn","产业大脑专题域名","2027-02-14","已持有"],["factoryos.cn","数字工厂产品域名","2026-07-21","已持有"]],证书:[["ICP备案主体证书","官网与产品站","2025-05-16","有效"],["SSL 通配符证书","*.hnao.cn","2026-04-30","有效"],["等保备案回执","项目管理与资产平台","2025-12-20","有效"],["软件企业证书","企业资质","2025-09-18","有效"]],外购软件:[["Adobe Creative Cloud","宣传图、视频、品牌物料制作","2026-01-12","年度授权"],["Axure RP","产品原型与需求评审","2025-12-01","年度授权"],["JetBrains All Products","研发 IDE","2026-02-28","年度授权"],["Navicat Premium","数据库管理","2025-11-20","授权中"],["OmniPlan","项目计划与排期","2025-10-10","授权中"],["WPS 商业版","文档、表格、汇报材料","2026-03-31","授权中"]],AI工具:[["Codex","代码生成、页面修改、资料整理","2026-06-30","使用中"],["ChatGPT Team","方案撰写、需求分析、知识检索","2026-05-18","使用中"],["通义千问","中文资料整理与行业内容生成","2026-04-22","使用中"],["Kimi","长文档阅读、会议纪要整理","2026-04-09","使用中"],["即梦 AI","宣传素材图生成","2026-03-15","使用中"],["剪映 AI","企业视频剪辑与字幕","2026-02-26","使用中"]],插件:[["Vite","单页应用构建","前端工程","使用中"],["Lucide Icons","页面图标体系","UI 组件","使用中"],["ESBuild","构建加速","前端工程","使用中"],["Browser 控制插件","本地页面验证","测试验证","使用中"],["Chrome 控制插件","浏览器调试","测试验证","备用"],["PDF 工具插件","资料 PDF 读取与生成","资料治理","备用"]]},宣传资产:{宣传资料:[["汉脑科技公司介绍 PPT","品牌介绍","2026-01-18","已归档"],["数字工厂解决方案手册","售前资料","2026-03-12","已归档"],["工业互联网平台白皮书","行业资料","2025-12-08","已归档"]],展会资料:[["服装数字工厂展板","展会海报","2025-09-20","已归档"],["智能制造展产品单页","宣传单页","2025-10-16","已归档"],["产业大脑演示脚本","现场讲解","2026-04-28","已归档"]],文案:[["官网首页品牌文案","网站内容","2026-02-09","已发布"],["APS 产品介绍文案","产品页面","2026-03-06","已发布"],["SaaS 应用矩阵文案","产品资料","2026-05-21","已归档"]],企业照片:[["办公室环境照片","企业形象","2025-11-19","已归档"],["项目实施现场照片","案例资料","2026-01-14","已归档"],["设备联调现场照片","硬件资料","2026-04-10","已归档"]],企业视频:[["汉脑科技宣传片","品牌视频","2025-12-30","已归档"],["智能工厂演示视频","方案视频","2026-03-18","已归档"],["工位机报工演示视频","产品视频","2026-05-11","已归档"]]},企业档案:{应用表单:[["项目立项申请表","项目管理","2026-01-05","已归档"],["客户需求确认表","售前交付","2026-02-12","已归档"],["上线验收确认表","实施交付","2026-04-22","已归档"]],合同模板:[["软件实施服务合同模板","销售合同","2025-12-01","已启用"],["SaaS 订阅服务协议","订阅合同","2026-01-20","已启用"],["硬件设备采购合同模板","采购合同","2026-03-08","已启用"]],企业资料:[["营业执照扫描件","主体资料","2026-01-02","有效"],["开户许可证资料","财务资料","2026-01-02","有效"],["公司介绍标准版","对外资料","2026-04-16","已更新"]],申报文件:[["高新技术企业申报材料","资质申报","2025-09-26","已归档"],["软件企业评估材料","资质申报","2025-11-15","已归档"],["工业互联网服务商申报材料","资质申报","2026-03-30","已归档"]],规章制度:[["研发资料归档制度","研发管理","2026-02-01","执行中"],["知识产权管理制度","资产治理","2026-02-15","执行中"],["信息安全管理制度","安全管理","2026-03-01","执行中"]],荣誉资质:[["高新技术企业证书","企业资质","2025-12-18","有效"],["软件企业证书","企业资质","2025-09-18","有效"],["优秀工业互联网服务商","荣誉证书","2026-01-25","有效"]],证照:[["营业执照","企业证照","长期","有效"],["开户许可证","财务证照","长期","有效"],["社保登记资料","人事证照","2026-01-08","有效"]],大事记:[["1999 服装行业软件项目启动","历史资产","1999-06-18","已归档"],["2020 产业大脑项目建设","案例资产","2020-09-12","已归档"],["2026 无形资产工作台上线","资产治理","2026-06-30","已归档"]]}},H={"HN-PM-001":{name:"杜英杰",role:"产品经理",department:"产品与解决方案部",status:"active",assets:["象山锦秀服装产业大脑","服装行业应用组件"],note:"负责服装行业产品规划、资料归档和客户价值梳理。"},"HN-TECH-001":{name:"艾总",role:"技术负责人",department:"工业软件研发部",status:"active",assets:["MES制造","WMS仓储","电子看板"],note:"负责核心模块架构、接口联调和版本发布。"},"HN-PM-002":{name:"冯小燕",role:"产品经理",department:"行业应用部",status:"new",assets:["五金离散制造数字工厂"],note:"新增负责人，正在补齐项目证据链和知识产权归属资料。"},"HN-TECH-002":{name:"秦步日",role:"技术负责人",department:"现场交付部",status:"departed",assets:["设备采集","质量检测"],note:"已离职，涉及接口文档、设备协议和现场调试记录需重点交接。"},"HN-PM-003":{name:"武文豪",role:"产品经理",department:"物流装备事业部",status:"active",assets:["物流装备智能仓储案例"],note:"负责智能仓储案例、客户资料和设备清单沉淀。"},"HN-TECH-003":{name:"陈良",role:"技术负责人",department:"智能装备研发部",status:"active",assets:["AGV调度","立体库管理","设备监控"],note:"负责仓储装备联动、任务调度和设备监控能力。"}},ts={patent:{label:"专利",items:[["HN-PAT-2020-001","服装生产数据联动方法","象山锦秀服装产业大脑","2020-09-18","已授权"],["HN-PAT-2021-004","设备采集与异常预警装置","五金离散制造数字工厂","2021-12-06","证书归档"],["HN-PAT-2024-007","智能仓储任务调度方法","物流装备智能仓储案例","2024-05-22","已授权"],["HN-PAT-2025-011","APS排产约束计算方法","APS","2025-11-20","已授权"],["HN-PAT-2025-013","工位机报工数据采集装置","工位机","2025-09-16","证书归档"],["HN-PAT-2026-002","手持机仓储扫码校验方法","手持机","2026-02-21","申报中"],["HN-PAT-2024-018","MES质量追溯联动方法","MES","2024-12-12","已授权"],["HN-PAT-2023-016","WMS库位任务分配方法","WMS","2023-10-30","已授权"],["HN-PAT-2022-009","电子看板异常预警方法","电子看板","2022-08-19","证书归档"]]},copyright:{label:"软著",items:[["HN-SR-2019-ERP","汉脑ERP经营管理软件","ERP","2019-08-12","已登记"],["HN-SR-2021-MES","汉脑MES制造执行软件","MES","2021-04-20","已登记"],["HN-SR-2024-APS","汉脑APS智能排产系统","APS","2024-10-16","已登记"],["HN-SR-2022-WMS","汉脑WMS仓储管理系统","WMS","2022-06-24","已登记"],["HN-SR-2025-DL","达铃企业协同SaaS平台","达铃","2025-03-18","已登记"],["HN-SR-2025-GWJ","汉脑工位机生产报工系统","工位机","2025-08-26","已登记"],["HN-SR-2026-HSJ","汉脑手持机移动仓储系统","手持机","2026-01-14","已登记"],["HN-SR-2023-PLM","汉脑PLM产品生命周期软件","PLM","2023-11-09","已登记"],["HN-SR-2024-CRM","汉脑CRM客户管理系统","CRM","2024-07-03","已登记"]]}},es={ERP:{costs:[["累计投入","286万"],["开发费","118万"],["人工费","132万"],["实施运维","36万"]],hours:[["研发工时","5,420h"],["测试工时","1,180h"],["实施工时","2,360h"]],versions:[["V4.2","2025-11-18","经营指标、合同回款、客户台账增强"],["V3.6","2024-06-12","财务协同与订单流转优化"],["V2.8","2022-09-26","基础经营模块标准化"]],components:["客户台账","合同回款","经营看板","主数据接口"]},MES:{costs:[["累计投入","364万"],["开发费","156万"],["人工费","172万"],["现场调试","36万"]],hours:[["研发工时","6,880h"],["测试工时","1,520h"],["实施工时","3,140h"]],versions:[["V3.8","2025-12-08","工序报工、质量追溯和看板联动"],["V3.1","2024-03-21","设备采集与异常处理"],["V2.5","2022-07-15","车间任务流标准化"]],components:["工序报工","质量追溯","设备采集","电子工票"]},WMS:{costs:[["累计投入","238万"],["开发费","96万"],["人工费","108万"],["设备联调","34万"]],hours:[["研发工时","4,260h"],["测试工时","960h"],["实施工时","2,780h"]],versions:[["V3.1","2025-08-28","库位、条码和AGV任务联动"],["V2.7","2023-12-19","收发存标准流程"],["V2.0","2021-10-11","基础仓储台账"]],components:["库位管理","条码作业","AGV接口","库存看板"]},APS:{costs:[["累计投入","326万"],["算法开发","142万"],["人工费","146万"],["排产模型","38万"]],hours:[["研发工时","5,960h"],["测试工时","1,240h"],["实施工时","2,180h"]],versions:[["V2.2","2026-03-10","计划推演、计划排产、计划发布和计划执行"],["V1.8","2025-05-23","插单、撤单、改单调度"],["V1.2","2024-01-09","订单交期推演"]],components:["计划推演","约束排程","工位任务发布","产能日历"]},达铃:{costs:[["累计投入","118万"],["开发费","46万"],["人工费","54万"],["SaaS运维","18万"]],hours:[["研发工时","2,180h"],["运维工时","620h"],["客户支持","480h"]],versions:[["V2.1","2025-09-05","消息协同、任务通知和组织在线"],["V1.7","2024-08-20","移动端提醒"],["V1.0","2023-04-18","基础协同"]],components:["消息中心","组织通讯录","任务提醒","移动端"]}},q=[{name:"手持机收发作业",device:"手持机",image:r("scene-handheld-warehouse.jpg"),scene:"仓库收货、发货、盘点、移库",role:"仓管员",output:"扫码记录、库存异动、盘点差异表",docs:["手持机作业SOP","WMS扫码操作说明","盘点模板"]},{name:"工位机生产报工",device:"工位机",image:r("scene-workstation-reporting-upload.png"),scene:"缝制工位、组装工位、质检工位",role:"车间员工",output:"工序报工、工时记录、质量异常",docs:["工位机报工说明","MES工序配置表","异常处理流程"]},{name:"大屏看板现场调度",device:"电子看板",image:r("scene-dashboard-dispatch.jpg"),scene:"车间产线、仓库月台、管理驾驶舱",role:"车间主管",output:"产量达成、异常预警、交付风险",docs:["看板指标口径","大屏部署说明","班组日报模板"]},{name:"RFID批次追溯",device:"RFID",image:r("scene-rfid-trace.jpg"),scene:"裁片流转、吊挂绑定、成衣入库",role:"物料员",output:"批次追溯、流转节点、异常定位",docs:["RFID绑定规则","追溯字段说明","标签打印模板"]}],L={totals:[["累计投入","1,846万"],["产品开发费","742万"],["人工费","816万"],["累计工时","38,420h"],["资料治理费","86万"],["知识产权费","54万"],["硬件样机费","92万"],["云资源费","56万"]],distribution:[["软件产品",38],["SaaS应用",18],["行业案例",17],["资料资产",11],["硬件装备",10],["知识产权",6]],rankings:[["MES","364万",100],["APS","326万",90],["ERP","286万",79],["WMS","238万",65],["PLM","168万",46],["达铃","118万",32]],trend:[["2019",18],["2020",32],["2021",48],["2022",56],["2023",68],["2024",76],["2025",84],["2026",92]],costItems:[["开发投入","742万",40],["人工费用","816万",44],["实施交付","196万",11],["运维云资源","92万",5]],workHours:[["研发","21,640h",56],["测试","5,420h",14],["实施","8,960h",23],["运维","2,400h",7]],deposits:[["复用组件","86个"],["项目证据","214份"],["版本记录","43条"],["专利软著","72项"],["场景资料","38套"],["客户案例","18个"]]},A=[{name:"www.hnao.cn 官网域名",category:"域名",due:"2026-08-18",amount:"¥680",owner:"杜英杰",status:"task",note:"距离到期不足 60 天，需确认续费年限。"},{name:"APS 产品页 SSL 证书",category:"SSL证书",due:"2026-07-28",amount:"¥1,260",owner:"艾总",status:"risk",note:"证书临期，影响产品页面 HTTPS 访问。"},{name:"研发中心企业宽带",category:"宽带",due:"2026-09-30",amount:"¥8,800",owner:"冯小燕",status:"normal",note:"年度宽带续费，当前链路正常。"},{name:"对象存储图片资源桶",category:"云资源",due:"2026-08-05",amount:"¥3,200",owner:"秦步日",status:"task",note:"图片和资料资源包存储费用待确认。"},{name:"蓝湖设计协作空间",category:"外购软件",due:"2026-07-16",amount:"¥2,980",owner:"武文豪",status:"risk",note:"UI 图访问依赖该空间权限，需提前续费。"},{name:"短信通知接口套餐",category:"接口服务",due:"2026-10-12",amount:"¥1,500",owner:"陈良",status:"normal",note:"用于SaaS通知和设备预警短信。"}],ns=[["2026-07-02 09:18","杜英杰","访问","象山锦秀服装产业大脑","案例详情","正常"],["2026-07-02 09:31","艾总","点击","APS 工业软件","查看UI","正常"],["2026-07-02 10:06","冯小燕","下载","知识产权台账","专利证书清单","有任务"],["2026-07-02 10:42","秦步日","访问","工位机生产报工","蓝湖UI入口","异常提醒"],["2026-07-02 11:05","武文豪","点击","物流装备智能仓储案例","生命周期明细","正常"],["2026-07-02 11:27","陈良","下载","设备维护资料","智能装备资料包","正常"]],is=[["立项","2019-03-12","建立服装行业生产协同方向，确认ERP/MES/WMS核心资产边界。","杜英杰","已完成"],["研发","2020-09-18","完成产业大脑、设备采集、质量追溯等核心模块研发。","艾总","已完成"],["归档","2024-10-16","补齐软著、专利、项目合同、蓝图方案和验收资料。","冯小燕","治理中"],["授权","2025-12-18","完成专利授权和软件著作权登记证书归集。","武文豪","已完成"],["复用","2026-03-10","复用到APS、WMS、工位机、手持机和电子看板方案。","陈良","进行中"],["治理","2026-07-02","跟踪低利用率资产、权限访问和待续费事项。","秦步日","预警"]],os=[["PDM图文档","31%","168万","1.6万","老项目引用少，培训资料不足","合并到PLM资产包"],["薪安SaaS","28%","86万","0.9万","客户续费率低，移动端入口弱","补齐移动端演示和客户案例"],["工业相机质检组件","24%","72万","0.7万","依赖现场硬件，标准化不足","沉淀通用检测模板"],["广告机信息发布","19%","38万","0.3万","独立销售少，场景联动弱","纳入大屏看板组合方案"],["RFID批次追溯","35%","96万","1.2万","客户硬件投入门槛高","形成轻量版试点包"]],rs=[["PDM图文档","闲置","31%","168万","连续 90 天仅 3 个项目调用","合并到PLM知识库"],["广告机信息发布","闲置","19%","38万","只在展厅和少量客户现场使用","并入大屏看板方案"],["工业相机质检组件","低频","24%","72万","硬件依赖高，复用门槛偏高","抽象为通用质检模板"],["RFID批次追溯","低频","35%","96万","客户硬件投入周期长","形成轻量试点包"],["薪安SaaS","观察","28%","86万","续费和活跃度低于预期","补齐移动端入口和案例"]],cs=[{name:"AI排产助手移动端",category:"SaaS产品设计",designDate:"2026-03-18",designer:"郑玉悦",status:"未开发",reason:"现有APS排产能力尚未完成移动端权限与客户场景验证，短期开发会造成重复投入。",reuse:"保留交互稿和算法流程，后续并入APS移动驾驶舱。"},{name:"设备能耗碳账本",category:"行业应用设计",designDate:"2026-04-09",designer:"郭振",status:"未开发",reason:"客户能耗数据采集口径差异较大，标准化数据源不足，暂不具备产品化条件。",reuse:"沉淀指标口径，作为IES能效系统的扩展模块储备。"},{name:"供应商协同报价门户",category:"业务门户设计",designDate:"2026-04-26",designer:"冯小燕",status:"未开发",reason:"与ERP采购模块边界重叠，当前客户付费意愿不足，优先级低于核心产品迭代。",reuse:"保留报价流程和表单规范，后续用于ERP供应链轻量化改造。"},{name:"工厂数字孪生3D看板",category:"大屏产品设计",designDate:"2026-05-12",designer:"武文豪",status:"未开发",reason:"3D建模成本高，项目交付周期长，当前更适合采用二维大屏看板方案。",reuse:"保留车间布局与指标体系，作为重点客户定制化方案储备。"},{name:"售后AI知识库问答",category:"AI工具设计",designDate:"2026-06-05",designer:"秦步日",status:"未开发",reason:"售后知识资料还未完成结构化治理，直接开发会影响问答准确率和可控性。",reuse:"先用于资料治理规则设计，待知识库完整后进入验证。"}],ds={工位机:{url:"https://lanhuapp.com/link/#/invite?sid=lXD8qbKa",images:[r("scene-workstation-reporting-upload.png"),r("software-mes.jpg"),r("case-xiangshan-line.jpg")]},手持机:{url:"https://lanhuapp.com/link/#/invite?sid=lx0IBLKy",images:[r("scene-handheld-warehouse.jpg"),r("software-wms.jpg"),r("case-warehouse.jpg")]},APS:{url:"",images:[r("software-aps-official-top.png"),r("software-aps-official-01.png"),r("software-aps-official-02.png")]},MES:{url:"",images:[r("software-mes.jpg"),r("case-hardware-line.jpg"),r("case-xiangshan-line.jpg")]},WMS:{url:"",images:[r("software-wms.jpg"),r("case-warehouse.jpg"),r("scene-handheld-warehouse.jpg")]},ERP:{url:"",images:[r("software-erp.jpg"),r("industry-government-copyright.jpg"),r("industry-food-copyright.jpg")]},PLM:{url:"",images:[r("software-plm.jpg"),r("industry-auto-copyright.jpg"),r("industry-medical-copyright.jpg")]},达铃:{url:"",images:[r("saas-daling.jpg"),r("saas-crm.jpg"),r("saas-attendance.jpg")]}},M={currentVersion:"v1.0.2",history:[{version:"v1.0.2",date:"2026-07-03",title:"当前资产展示与分类交互优化版",status:"当前版本",systemUrl:"versions/v1.0.2/index.html",modules:["顶部导航","公司资料","案例资产","行业内容","产品矩阵","场景运营库","资产治理"],changes:["公司资料按对外使用、对内管理重新分类展示，保留资料详情查看能力。","顶部搜索、资产概览和分类导航优化为更清晰的入口样式。","案例资产补充负责人岗位、员工工位和预警状态展示，并优化详情入口位置。","行业内容、产品矩阵、SaaS应用、场景运营库、智能硬件和智能设备增加统计数与更多弹窗。","资产治理入口补充查看详情提示，方便继续查看访问日志、生命周期和闲置资产等明细。"]},{version:"v1.0.1",date:"2026-07-02",title:"资产展示与治理看板优化版",status:"历史版本",systemUrl:"versions/v1.0.1/index.html",modules:["顶部导航","公司资料","案例资产","资产概览","待办提醒"],changes:["顶部分类导航调整为网站式展示，移除数量展示，提升页面浏览入口清晰度。","公司资料分类改为截图样式的四行浅色容器与胶囊入口，删除知识产权、品牌渠道、企业档案、宣传资料分组文字。","案例资产关联专利、人员及成本，形成价值脉络，并在案例详情中展示UI图和访问地址。","资产概览新增访问日志、生命周期、低利用率资产和资产闲置情况明细。","右侧待办提醒简化为统计摘要，网站、证书、宽带等续费明细改为弹窗查看。"]},{version:"v1.0.0",date:"2026-07-01",title:"无形资产工作台基础版",status:"历史版本",systemUrl:"versions/v1.0.0/index.html",modules:["资产概览","公司资料","案例资产","产品矩阵","场景运营库"],changes:["建立汉脑无形资产工作台首页，统一展示案例、行业内容、核心平台、产品矩阵、SaaS应用和设备资产。","新增资产概览与成本看板，展示投入费用、工时、资产沉淀趋势和成本结构。","公司资料支持知识产权、品牌渠道、宣传资产、企业档案等资料清单查看。","产品、行业、SaaS和案例资产支持专利/软著详情入口。"]},{version:"v0.9.0",date:"2026-06-30",title:"资产治理与资料清单完善",status:"历史版本",systemUrl:"",modules:["公司资料","知识产权","品牌渠道","详情弹窗"],changes:["补充品牌渠道的网站、公众号、域名、证书、外购软件、AI工具和插件清单。","完善知识产权、宣传资产、企业档案的具体内容台账。","优化右侧公司资料排序和资产治理展示。"]},{version:"v0.8.0",date:"2026-06-29",title:"成本看板与图形概览升级",status:"历史版本",systemUrl:"",modules:["资产概览","成本看板","图表样式"],changes:["资产概览弹窗升级为全屏成本看板。","新增费用构成、公司构成、产品投入排行和累计沉淀趋势。","保留原产品资产分布、行业覆盖指数、资料完成度和资产补齐进度图形。"]},{version:"v0.7.0",date:"2026-06-28",title:"案例与产品资产详情增强",status:"历史版本",systemUrl:"",modules:["案例资产","行业内容","产品矩阵","SaaS应用"],changes:["案例资产补充人员工号、责任人信息和离职提示。","产品详情补充版本历史、投入费用、工时和累计组件。","行业内容、产品矩阵、SaaS应用补充专利和软著入口。"]}]},Ds={platform:"icon-pingtai",software:"icon-ruanjian",saas:"icon-yunfuwu",patent:"icon-zhuanli",copyright:"icon-banquan",trademark:"icon-shangbiao",document:"icon-wendang",industry:"icon-hangye",hardware:"icon-yingjian",equipment:"icon-shebei",search:"icon-sousuo",chart:"icon-tongji",arrow:"icon-youjiantou",close:"icon-guanbi",governance:"icon-zhili",task:"icon-renwu",channel:"icon-qudao",media:"icon-tupian",archive:"icon-dangan",detail:"icon-xiangqing",download:"icon-xiazai",play:"icon-bofang",customer:"icon-kehu",star:"icon-xingxing",tag:"icon-biaoqian",image:"icon-tupian",team:"icon-tuandui",solution:"icon-fangan",status:"icon-zhuangtai",calendar:"icon-rili",case:"icon-anli",component:"icon-zujian",module:"icon-mokuai",owner:"icon-fuzeren",risk:"icon-fengxian",evidence:"icon-zhengju",permission:"icon-quanxian",contract:"icon-hetong",blueprint:"icon-lantu",code:"icon-daima",subscribe:"icon-dingyue",timeline:"icon-shijianzhou",cost:"icon-chengben",person:"icon-renyuan",warning:"icon-yujing"},K={},xs={"icon-pingtai":'<path d="M4 5h16v10H4V5Zm2 2v6h12V7H6Zm1 10h10l1 2H6l1-2Z"/>',"icon-ruanjian":'<path d="M5 4h14a1 1 0 0 1 1 1v14H4V5a1 1 0 0 1 1-1Zm1 4h12V6H6v2Zm0 2v7h12v-7H6Zm2 2h3v3H8v-3Zm5 0h3v1.5h-3V12Zm0 2.5h3V16h-3v-1.5Z"/>',"icon-yunfuwu":'<path d="M8 18a5 5 0 0 1-.7-10A6 6 0 0 1 18.8 9.7 4.2 4.2 0 0 1 18 18H8Zm0-2h10a2.2 2.2 0 0 0 .2-4.4l-1.2-.1-.3-1.1A4 4 0 0 0 9 9.2l-.4.9-1 .1A3 3 0 0 0 8 16Z"/>',"icon-zhuanli":'<path d="M6 3h9l4 4v14H6V3Zm2 2v14h9V8h-3V5H8Zm2 6h5v2h-5v-2Zm0 4h5v2h-5v-2Z"/>',"icon-banquan":'<path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 2a7 7 0 1 1 0 14 7 7 0 0 1 0-14Zm.2 3.5c1.5 0 2.7.7 3.4 1.8l-1.7 1a2 2 0 1 0 0 2.4l1.7 1a4 4 0 1 1-3.4-6.2Z"/>',"icon-shangbiao":'<path d="M5 4h14v2H5V4Zm1 4h12l-1 12H7L6 8Zm3 2 .4 8h5.2l.4-8H9Zm1-2h4l1-3H9l1 3Z"/>',"icon-wendang":'<path d="M6 3h8l4 4v14H6V3Zm2 2v14h8V8h-3V5H8Zm2 6h4v2h-4v-2Zm0 4h4v2h-4v-2Z"/>',"icon-hangye":'<path d="M4 20V8l5-3v5l5-3v5l6-4v12H4Zm2-2h3v-5H6v5Zm5 0h3v-5h-3v5Zm5 0h2v-6l-2 1.4V18Z"/>',"icon-yingjian":'<path d="M7 7h10v10H7V7Zm2 2v6h6V9H9Zm-5 1h2v2H4v-2Zm0 4h2v2H4v-2Zm14-4h2v2h-2v-2Zm0 4h2v2h-2v-2ZM10 4h2v2h-2V4Zm4 0h2v2h-2V4Zm-4 14h2v2h-2v-2Zm4 0h2v2h-2v-2Z"/>',"icon-shebei":'<path d="M6 4h12v9H6V4Zm2 2v5h8V6H8Zm-1 9h10l2 5H5l2-5Zm1.3 2-.4 1h8.2l-.4-1H8.3Z"/>',"icon-sousuo":'<path d="M10.5 4a6.5 6.5 0 0 1 5.1 10.5l4 4-1.4 1.4-4-4A6.5 6.5 0 1 1 10.5 4Zm0 2a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z"/>',"icon-tongji":'<path d="M5 19h14v2H5V3h2v16Zm4-2H7v-6h2v6Zm4 0h-2V7h2v10Zm4 0h-2v-8h2v8Zm2-12-5 4-3-2.5L7.6 10 6.2 8.6 10.8 4l3.1 2.6L17.8 3 19 5Z"/>',"icon-youjiantou":'<path d="m9 5 7 7-7 7-1.4-1.4 5.6-5.6-5.6-5.6L9 5Z"/>',"icon-guanbi":'<path d="m6.4 5 5.6 5.6L17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6L6.4 19 5 17.6l5.6-5.6L5 6.4 6.4 5Z"/>',"icon-zhili":'<path d="M12 3 4 6v6c0 4.4 3.1 7.3 8 9 4.9-1.7 8-4.6 8-9V6l-8-3Zm0 2.2L18 7.4V12c0 3.1-2.1 5.3-6 6.9-3.9-1.6-6-3.8-6-6.9V7.4l6-2.2Zm-1 4.3h2V16h-2V9.5Zm0-3h2v2h-2v-2Z"/>',"icon-renwu":'<path d="M7 4h10v3h3v14H4V7h3V4Zm2 3h6V6H9v1ZM6 9v10h12V9H6Zm2 3h2v2H8v-2Zm4 .2h4v1.6h-4v-1.6ZM8 16h2v2H8v-2Zm4 .2h4v1.6h-4v-1.6Z"/>',"icon-qudao":'<path d="M4 5h6v6H4V5Zm2 2v2h2V7H6Zm8-2h6v6h-6V5Zm2 2v2h2V7h-2ZM4 15h6v6H4v-6Zm2 2v2h2v-2H6Zm9-1h2v2h3v2h-5v-4Zm-2-4h2v3h-2v-3Zm4 0h3v2h-3v-2Z"/>',"icon-tupian":'<path d="M5 5h14v14H5V5Zm2 2v10h10V7H7Zm1 8 3-4 2 2.5 1.4-1.7L17 15H8Zm7-7.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>',"icon-dangan":'<path d="M4 6h7l2 2h7v11H4V6Zm2 4v7h12v-7H6Zm0-2h5.2l-.8-1H6v1Z"/>',"icon-xiangqing":'<path d="M5 4h14v16H5V4Zm2 2v12h10V6H7Zm2 2h6v2H9V8Zm0 4h6v2H9v-2Zm0 4h4v1H9v-1Z"/>',"icon-xiazai":'<path d="M11 4h2v8l3-3 1.4 1.4L12 15.8l-5.4-5.4L8 9l3 3V4ZM5 18h14v2H5v-2Z"/>',"icon-bofang":'<path d="M8 5v14l11-7L8 5Zm2 3.6 5.2 3.4-5.2 3.4V8.6Z"/>',"icon-kehu":'<path d="M12 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-7 11a7 7 0 0 1 14 0h-2a5 5 0 0 0-10 0H5Z"/>',"icon-xingxing":'<path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z"/>',"icon-biaoqian":'<path d="M4 5h9l7 7-8 8-8-8V5Zm2 2v4.2l6 6 5.2-5.2-5-5H6Zm3 1a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>',"icon-tuandui":'<path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm8 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6ZM3 20a5 5 0 0 1 10 0H3Zm8.5-2.5A5 5 0 0 1 21 20h-6a7 7 0 0 0-3.5-2.5Z"/>',"icon-fangan":'<path d="M5 4h14v5H5V4Zm2 2v1h10V6H7Zm-2 5h6v9H5v-9Zm2 2v5h2v-5H7Zm6-2h6v9h-6v-9Zm2 2v5h2v-5h-2Z"/>',"icon-zhuangtai":'<path d="M12 4a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm-1 3h2v4h-2V9Zm0 5h2v2h-2v-2Z"/>',"icon-rili":'<path d="M7 3h2v2h6V3h2v2h3v16H4V5h3V3Zm11 7H6v9h12v-9ZM6 8h12V7H6v1Z"/>',"icon-anli":'<path d="M8 5V3h8v2h4v16H4V5h4Zm2 0h4V4h-4v1ZM6 7v12h12V7H6Zm2 4h8v2H8v-2Zm0 4h6v2H8v-2Z"/>',"icon-zujian":'<path d="M4 4h7v7H4V4Zm2 2v3h3V6H6Zm7-2h7v7h-7V4Zm2 2v3h3V6h-3ZM4 13h7v7H4v-7Zm2 2v3h3v-3H6Zm7-2h7v7h-7v-7Zm2 2v3h3v-3h-3Z"/>',"icon-mokuai":'<path d="m12 3 8 4v10l-8 4-8-4V7l8-4Zm0 2.2L7.2 7.6 12 10l4.8-2.4L12 5.2ZM6 9.2v6.6l5 2.5v-6.6L6 9.2Zm7 9.1 5-2.5V9.2l-5 2.5v6.6Z"/>',"icon-fuzeren":'<path d="M9 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-6 10a6 6 0 0 1 10.8-3.6L12.4 18A4 4 0 0 0 5 20H3Zm14.5.2-3.2-3.2 1.4-1.4 1.8 1.8 3.8-4 1.4 1.4-5.2 5.4Z"/>',"icon-fengxian":'<path d="M12 3 22 20H2L12 3Zm0 4L5.5 18h13L12 7Zm-1 4h2v4h-2v-4Zm0 5h2v2h-2v-2Z"/>',"icon-zhengju":'<path d="M7 3h10v18H7V3Zm2 2v14h6V5H9Zm1 2h4v2h-4V7Zm0 4h4v2h-4v-2Zm0 4h3v2h-3v-2Z"/>',"icon-quanxian":'<path d="M7 10V8a5 5 0 0 1 10 0v2h2v11H5V10h2Zm2 0h6V8a3 3 0 0 0-6 0v2Zm-2 2v7h10v-7H7Zm4 2h2v3h-2v-3Z"/>',"icon-hetong":'<path d="M6 3h12v18H6V3Zm2 2v14h8V5H8Zm2 3h4v2h-4V8Zm0 4h4v2h-4v-2Zm0 4h3v1h-3v-1Z"/>',"icon-lantu":'<path d="M4 4h16v16H4V4Zm2 2v12h12V6H6Zm2 2h3v3H8V8Zm5 0h3v2h-3V8Zm0 4h3v4h-3v-4ZM8 13h3v3H8v-3Z"/>',"icon-daima":'<path d="m8.6 8.4-3.6 3.6 3.6 3.6L7.2 17 2.2 12l5-5 1.4 1.4Zm6.8 0L16.8 7l5 5-5 5-1.4-1.4 3.6-3.6-3.6-3.6ZM11 19H9l4-14h2l-4 14Z"/>',"icon-dingyue":'<path d="M6 4h12v16l-6-3-6 3V4Zm2 2v10.8l4-2 4 2V6H8Zm2 3h4v2h-4V9Z"/>',"icon-shijianzhou":'<path d="M5 5h14v2H5V5Zm2 4h10v2H7V9Zm-2 4h14v2H5v-2Zm2 4h10v2H7v-2Z"/>',"icon-chengben":'<path d="M12 3a7 7 0 0 1 7 7c0 5-7 11-7 11S5 15 5 10a7 7 0 0 1 7-7Zm0 2a5 5 0 0 0-5 5c0 2.7 3 6.5 5 8.3 2-1.8 5-5.6 5-8.3a5 5 0 0 0-5-5Zm1 3h2v2h-2v5h-2v-5H9V8h2V6h2v2Z"/>',"icon-renyuan":'<path d="M12 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-7 12a7 7 0 0 1 14 0h-2a5 5 0 0 0-10 0H5Z"/>',"icon-yujing":'<path d="M12 3 22 21H2L12 3Zm0 4-6.6 12h13.2L12 7Zm-1 4h2v4h-2v-4Zm0 5h2v2h-2v-2Z"/>'};function Es(){if(document.getElementById("local-iconfont-symbols"))return;const s=document.createElementNS("http://www.w3.org/2000/svg","svg");s.id="local-iconfont-symbols",s.setAttribute("aria-hidden","true"),s.style.cssText="position:absolute;width:0;height:0;overflow:hidden",s.innerHTML=Object.entries(xs).map(([a,t])=>`<symbol id="${a}" viewBox="0 0 24 24">${t}</symbol>`).join(""),document.body.prepend(s)}function Cs(){Es()}function i(s,a=""){const t=Ds[s]||s;return`
    <span class="icon-wrap icon-${s}" ${a?`aria-label="${a}"`:""}>
    <svg class="iconfont-svg" aria-hidden="true" data-fallback="${K[s]||""}">
      <use href="#${t}"></use>
    </svg>
    <span class="icon-fallback">${K[s]||""}</span>
    </span>
  `}Cs();const x=s=>s.join(" "),v=s=>document.getElementById(s),Ns="./assets/brand/hannao-logo-transparent.png",g=new Map,b=["./assets/photos/workstation.jpg","./assets/photos/warehouse.jpg","./assets/photos/agv.jpg","./assets/photos/display-board.jpg","./assets/photos/vision-inspection.jpg","./assets/photos/industrial-camera.jpg"],Rs=[{level:"primary",items:[{label:"公司资料",target:"docMatrix"},{label:"案例资产",target:"cases-section"},{label:"行业内容",target:"industry-section"},{label:"核心平台",target:"platform-section"},{label:"产品矩阵",target:"software-section"},{label:"SaaS应用",target:"saas-section"},{label:"场景运营库",target:"scene-section"},{label:"智能硬件",target:"hardware-section"},{label:"智能设备",target:"equipment-section"},{label:"资产治理",action:"chart"},{label:"版本留痕",action:"version"}]},{level:"secondary",items:[{label:"知识产权",target:"docMatrix"},{label:"品牌渠道",target:"docMatrix"},{label:"宣传资产",target:"docMatrix"},{label:"企业档案",target:"docMatrix"},{label:"专利软著",target:"cases-section"},{label:"产品投入",target:"software-section"},{label:"待办续费",target:"renewalTodos"},{label:"访问日志",detail:"asset-access-log"},{label:"生命周期",detail:"asset-lifecycle"},{label:"设计库",detail:"design-library"}]},{level:"tertiary",items:[{label:"ERP",target:"software-section"},{label:"MES",target:"software-section"},{label:"WMS",target:"software-section"},{label:"PLM",target:"software-section"},{label:"PDM",target:"software-section"},{label:"MRP",target:"software-section"},{label:"APS",target:"software-section"},{label:"IES",target:"software-section"},{label:"CRM",target:"software-section"},{label:"达铃",target:"saas-section"},{label:"考勤",target:"saas-section"},{label:"餐饮",target:"saas-section"},{label:"薪安",target:"saas-section"},{label:"工位机",target:"scene-section"},{label:"手持机",target:"scene-section"},{label:"大屏看板",target:"scene-section"},{label:"RFID",target:"scene-section"}]}],qs={normal:"正常",task:"有任务",risk:"异常提醒"};function ls(s,a,t,e=[]){const o=s.filter(n=>n&&!e.includes(n));return o.length?Array.from({length:t},(n,c)=>o[(a+c)%o.length]):b.slice(0,t)}function W(s){var a;return Number(((a=String(s||"").replace(/,/g,"").match(/\d+(?:\.\d+)?/))==null?void 0:a[0])||0)}function Fs(s=[]){const a=s.reduce((t,e)=>t+W(e[1]),0);return Math.max(1,Math.round(a/8))}function ps(s){const a=W(s);return Math.max(1,Math.round(a/.12))}function vs(s){return Object.entries(H).find(([,a])=>a.name===s)}function Os(s){return H[s]?[s,H[s]]:vs(s)}function B(s=[],a=""){if(s.length)return s.map(o=>{var c;const n=vs(o[0]);return{name:o[0],role:o[1],ratio:o[2],code:(n==null?void 0:n[0])||"人员编号待补",status:k(((c=n==null?void 0:n[1])==null?void 0:c.status)||"active")}});const t=Array.from(a).reduce((o,n)=>o+n.charCodeAt(0),0),e=Object.entries(H);return Array.from({length:3},(o,n)=>{const[c,l]=e[(t+n)%e.length];return{name:l.name,role:n===0?"产品规划":n===1?"研发交付":"资料治理",ratio:[42,35,23][n],code:c,status:k(l.status)}})}function us(s,a=M.currentVersion){var e,o,n,c,l;const t=((o=(e=s==null?void 0:s.costs)==null?void 0:e[0])==null?void 0:o[1])||"96万";return{days:(n=s==null?void 0:s.hours)!=null&&n.length?Fs(s.hours):ps(t),cost:t,version:((l=(c=s==null?void 0:s.versions)==null?void 0:c[0])==null?void 0:l[0])||a}}function Gs(s){var t,e,o;const a=ms(s);return{days:ps(a),cost:a,version:((o=(e=(t=s.evolution)==null?void 0:t.at(-1))==null?void 0:e.split(" "))==null?void 0:o[0])||M.currentVersion}}function Us(s){const a=Math.round(s*10)/10;return`${Number.isInteger(a)?a.toFixed(0):a.toFixed(1)}万`}function Ws(s,a){const t=W(a.cost);return B(s.contributors,s.name).map(e=>({...e,effortDays:Math.max(1,Math.round(a.days*Number(e.ratio||0)/100)),cost:Us(t*Number(e.ratio||0)/100)}))}function Bs(){return Object.fromEntries(Vs.map(s=>[s[0],s[1]]))}function X(s,a){return{source:s,visualTitle:a[0],item:s==="纺织服装"?a:[`${s}${a[0]}`,a[1],a[2]]}}function Ks(){const s=Bs(),a=(s.纺织服装||[]).map(n=>X("纺织服装",n)),t=(n,c)=>({name:n,items:c.flatMap(l=>(s[l]||[]).map(p=>X(l,p)))}),e=(n,c)=>({...n,visibleItems:n.items.slice(0,c),moreItems:n.items.slice(c)}),o=t("高端设备",["物流装备"]);return[{name:"纺织服装",items:a,visibleItems:a.slice(0,9),moreItems:a.slice(9)},e(t("汽车零部件/五金",["汽车零部件","五金"]),3),e(t("医疗食品",["医疗","食品"]),3),{...o,visibleItems:o.items.slice(0,3),moreItems:o.items},e(t("其他",["塑料","电子电气","童车","政府类"]),9)]}function Xs(){return{visibleItems:N.slice(0,9),moreItems:N.slice(9)}}function Ys(s,a,t){var l;const e=s==="saas"?as:ss,o=e[a];if(((l=o==null?void 0:o.previews)==null?void 0:l.length)>=3)return o.previews.slice(1,3);const n=o==null?void 0:o.image,c=s==="saas"?Object.values(e).map(p=>p.image):["./assets/photos/visuals/industry-government-copyright.jpg","./assets/photos/visuals/case-hardware-line.jpg","./assets/photos/visuals/case-warehouse.jpg","./assets/photos/visuals/industry-auto-copyright.jpg","./assets/photos/visuals/industry-electronics-copyright.jpg","./assets/photos/visuals/industry-plastic-copyright.jpg","./assets/photos/visuals/industry-logistics-ledger.png","./assets/photos/visuals/industry-government-case.jpg"];return ls(c,t+1,2,[n])}function _s(s,a,t,e){var c;const o=(c=R[`${s}/${a}`])==null?void 0:c.image,n=Object.values(R).map(l=>l.image);return ls(n,t*3+e+1,2,[o])}function k(s){return{active:"在岗",departed:"已离职",new:"新增"}[s]||"在岗"}function Js(s){const c=Math.max(...s.map(d=>d[1])),p=Math.max(1,c-0),u=s.map((d,m)=>{const w=48+m*584/(s.length-1),y=28+(c-d[1])*160/p;return[Number(w.toFixed(1)),Number(y.toFixed(1)),d[0],d[1]]}),$=(d=>d.map((m,w)=>{if(w===0)return`M ${m[0]} ${m[1]}`;const y=d[w-1],V=(y[0]+m[0])/2;return`C ${V} ${y[1]}, ${V} ${m[1]}, ${m[0]} ${m[1]}`}).join(" "))(u),f=`${$} L ${u[u.length-1][0]} 188 L ${u[0][0]} 188 Z`,j=[0,25,50,75,100].map(d=>Number((28+160*d/100).toFixed(1))),S=u[Math.min(5,u.length-1)];return`
    <div class="trend-line-chart">
      <svg viewBox="0 0 680 230" role="img" aria-label="累计沉淀趋势折线图">
        <defs>
          <linearGradient id="trendFill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stop-color="#60a5fa" stop-opacity="0.24"></stop>
            <stop offset="100%" stop-color="#22d3ee" stop-opacity="0.04"></stop>
          </linearGradient>
          <filter id="trendGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="12" stdDeviation="9" flood-color="#2563eb" flood-opacity="0.18"></feDropShadow>
          </filter>
        </defs>
        ${j.map(d=>`<line class="trend-grid" x1="48" y1="${d}" x2="632" y2="${d}"></line>`).join("")}
        <path class="trend-area" d="${f}"></path>
        <path class="trend-line trend-line-compare" d="${$}"></path>
        ${u.map(d=>`<g class="trend-point" transform="translate(${d[0]} ${d[1]})"><circle r="5"></circle><text y="-12">${d[3]}</text></g>`).join("")}
        <g class="trend-tooltip" transform="translate(${S[0]} ${S[1]})">
          <line y1="0" y2="${188-S[1]}"></line>
          <rect x="-22" y="-48" width="44" height="28" rx="14"></rect>
          <text y="-29">${S[3]}</text>
        </g>
      </svg>
      <div class="trend-year-axis">${s.map(d=>`<span>${d[0]}</span>`).join("")}</div>
    </div>
  `}function Qs(){const s=["cost","software","person","timeline","document","patent","hardware","saas"];return`
    <div class="chart-modal" id="chartModal" aria-hidden="true">
      <div class="chart-dialog" role="dialog" aria-modal="true" aria-labelledby="chartModalTitle">
        <div class="chart-dialog-head">
          <div>
            <h2 id="chartModalTitle">资产概览与成本看板</h2>
            <span>保留原资产结构数据，并新增投入、工时、资产沉淀的董事长关注视角</span>
          </div>
          <button class="chart-close" id="chartClose" type="button" aria-label="关闭资产概览">${i("close","关闭")}</button>
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
            ${L.totals.map((a,t)=>`<div><span>${a[0]}</span><strong>${a[1]}</strong><em class="cost-hero-icon">${i(s[t]||"chart")}</em></div>`).join("")}
          </div>
          <div class="cost-grid">
            <div class="cost-panel">
              <h3>资产投入结构</h3>
              <div class="cost-bars cost-bars-percent">
                ${L.distribution.map(a=>`<div><b>${a[0]}</b><span style="--w:${a[1]}%"></span><em>${a[1]}%</em></div>`).join("")}
              </div>
            </div>
            <div class="cost-panel">
              <h3>费用构成</h3>
              <div class="pie-panel">
                <div class="cost-pie cost-pie-fee"></div>
                <div class="pie-legend">
                  ${L.costItems.map((a,t)=>`<span><i style="--c:var(--pie-${t+1})"></i><b>${a[0]}</b><em>${a[1]}</em></span>`).join("")}
                </div>
              </div>
            </div>
            <div class="cost-panel">
              <h3>产品投入排行</h3>
              <div class="rank-list">
                ${L.rankings.map((a,t)=>`<div style="--w:${a[2]}%"><i>${t+1}</i><span>${a[0]}</span><em></em><b>${a[1]}</b></div>`).join("")}
              </div>
            </div>
            <div class="cost-panel">
              <h3>公司构成</h3>
              <div class="pie-panel">
                <div class="cost-pie cost-pie-hours"></div>
                <div class="pie-legend">
                  ${L.workHours.map((a,t)=>`<span><i style="--c:var(--pie-${t+1})"></i><b>${a[0]}</b><em>${a[1]}</em></span>`).join("")}
                </div>
              </div>
            </div>
            <div class="cost-panel trend-panel">
              <h3>累计沉淀趋势</h3>
              ${Js(L.trend)}
            </div>
            <div class="cost-panel">
              <h3>资产沉淀</h3>
              <div class="deposit-grid">
                ${L.deposits.map(a=>`<div><span>${a[0]}</span><strong>${a[1]}</strong></div>`).join("")}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  `}function zs(){return`
    <div class="detail-modal" id="detailModal" aria-hidden="true">
      <div class="detail-dialog" role="dialog" aria-modal="true" aria-labelledby="detailTitle">
        <button class="detail-close" id="detailClose" type="button" aria-label="关闭详情">${i("close","关闭")}</button>
        <div id="detailContent"></div>
      </div>
    </div>
  `}function sa(){const s=M.history.find(a=>a.version===M.currentVersion)||M.history[0];return`
    <div class="version-modal" id="versionModal" aria-hidden="true">
      <div class="version-dialog" role="dialog" aria-modal="true" aria-labelledby="versionTitle">
        <button class="detail-close" id="versionClose" type="button" aria-label="关闭版本详情">${i("close","关闭")}</button>
        <div class="version-head">
          <div class="detail-app-icon">${i("timeline")}</div>
          <div>
            <h2 id="versionTitle">版本历史</h2>
            <p>当前版本 ${M.currentVersion} · 点击版本号查看对应内容</p>
          </div>
        </div>
        <div class="version-layout">
          <div class="version-history" role="listbox" aria-label="版本历史列表">
            ${M.history.map(a=>`
              <button class="version-item ${a.version===s.version?"is-active":""}" type="button" data-version="${a.version}" aria-selected="${a.version===s.version}">
                <b>${a.version}</b>
                <span>${a.title}</span>
                <em>${a.date}</em>
              </button>
            `).join("")}
          </div>
          <div class="version-detail" id="versionDetail">
            ${hs(s)}
          </div>
        </div>
      </div>
    </div>
  `}function hs(s){if(!s)return"";const a=!!s.systemUrl;return`
    <div class="version-detail-head">
      <span class="version-state">${s.status}</span>
      <h3>${s.version} · ${s.title}</h3>
      <p>${s.date}</p>
    </div>
    <div class="version-module-list">
      ${s.modules.map(t=>`<span>${i("tag")}${t}</span>`).join("")}
    </div>
    <div class="version-change-list">
      ${s.changes.map(t=>`<div><i></i><span>${t}</span></div>`).join("")}
    </div>
    <div class="version-system-actions">
      <button class="version-system-btn${a?"":" is-disabled"}" type="button" data-system-url="${a?s.systemUrl:""}" aria-disabled="${String(!a)}">
        ${i("external")}<span>${a?"查看版本系统":"版本系统文件待提供"}</span>
      </button>
      <p class="version-system-tip">${a?"将在新标签页打开该版本对应的真实网页内容。":"该历史版本的真实 HTML 文件提供后，可在配置中补充地址。"}</p>
    </div>
  `}function aa(s){if(!s)return"";if(/^(https?:)?\/\//.test(s))return s;const a=s.replace(/^\.?\//,""),t=window.location.pathname.indexOf("/versions/"),e=t>=0?window.location.pathname.slice(0,t+1):window.location.pathname.slice(0,window.location.pathname.lastIndexOf("/")+1);return new URL(a,`${window.location.origin}${e}`).href}function ta(){return`
    <nav class="top-nav" aria-label="无形资产分类导航">
      ${Rs.map(s=>`
        <div class="top-nav-row top-nav-${s.level}">
          ${s.items.map(a=>`
            <button type="button"${a.target?` data-target="${a.target}"`:""}${a.action?` data-action="${a.action}"`:""}${a.detail?` data-detail-key="${a.detail}"`:""}>${a.label}</button>
          `).join("")}
        </div>
      `).join("")}
    </nav>
  `}function ea(){v("app").innerHTML=`
    <main class="app" style="--hero-bg: url('./assets/photos/visuals/hannao-system-map-hero.png')">
      <header class="topbar">
        <div class="brand">
          <img class="brand-logo" src="${Ns}" alt="汉脑科技">
          <div><h1>汉脑无形资产</h1></div>
        </div>
        <div class="top-meta">
          <label class="search-box top-search" id="searchBox" title="搜索案例、产品、行业、资料、硬件">
            ${i("search")}
            <input id="globalSearch" type="search" placeholder="搜索" autocomplete="off">
            <button id="clearSearch" type="button" aria-label="清空搜索">${i("close","清空")}</button>
          </label>
          <button class="search-submit top-search-submit" type="button" title="开始搜索">${i("search")}<span>搜索</span></button>
          <span class="chip search-count" id="searchCount"></span>
          <button class="chart-toggle" id="chartToggle" aria-expanded="false" title="资产概览">${i("chart")}<span>资产概览</span></button>
          <button class="version-chip" id="versionToggle" type="button" aria-expanded="false" title="查看版本历史">${i("timeline")}<span>版本 ${M.currentVersion}</span></button>
          <span class="chip time" id="clock">--:--:--</span>
        </div>
      </header>
      <div class="layout">
        <section class="main">
          ${Qs()}
          ${zs()}
          ${sa()}
          ${ta()}
          <section class="doc-matrix" id="docMatrix"></section>
          <section class="section case-hero" id="cases-section">
            <div class="head case-head">
              <div>
                <h2>${i("case")}案例资产</h2>
              </div>
              <div class="module-head-actions"><span>${E.length}项</span><button class="industry-more detail-trigger" type="button" data-detail-key="case-more">${i("detail")}更多</button></div>
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
            <div class="panel" id="software-section"><div class="head"><h2>产品软件矩阵</h2><div class="module-head-actions"><span>${C.length}项</span><button class="industry-more detail-trigger" type="button" data-detail-key="software-more">${i("detail")}更多</button></div></div><div class="software-map" id="software"></div></div>
            <div class="panel" id="saas-section"><div class="head"><h2>SaaS 产品</h2><div class="module-head-actions"><span>${N.length}项</span><button class="industry-more detail-trigger" id="saasMore" type="button" data-detail-key="saas-more">${i("detail")}更多</button></div></div><div class="saas-cloud" id="saas"></div></div>
          </section>
          <section class="section scene-section" id="scene-section"><div class="head"><h2>场景运营库</h2><div class="module-head-actions"><span>${q.length}项</span><button class="industry-more detail-trigger" type="button" data-detail-key="scene-more">${i("detail")}更多</button></div></div><div class="scene-library" id="sceneLibrary"></div></section>
          <section class="section" id="hardware-section"><div class="head"><h2>智能硬件</h2><div class="module-head-actions"><span>${F.length}项</span><button class="industry-more detail-trigger" type="button" data-detail-key="hardware-more">${i("detail")}更多</button></div></div><div class="hardware-grid" id="hardware"></div></section>
          <section class="section" id="equipment-section"><div class="head"><h2>智能装备</h2><div class="module-head-actions"><span>${O.length}项</span><button class="industry-more detail-trigger" type="button" data-detail-key="equipment-more">${i("detail")}更多</button></div></div><div class="hardware-grid" id="equipment"></div></section>
        </section>
        <aside class="side">
          <div class="doc-panel">
            <div class="todo-assets">
              <h3>${i("task")}待资产录入</h3>
              <div class="intake-grid" id="intake"></div>
            </div>
            <div class="renewal-todos" id="renewalTodos"></div>
            <div class="asset-governance">
              <h3>${i("governance")}<span class="governance-title-text">资产治理</span></h3>
              <div class="governance-card-grid">
                <div class="governance-card"><span>${i("chart")}完成度</span><b>72%</b><em>资料治理</em></div>
                <div class="governance-card"><span>${i("document")}治理项</span><b>35</b><em>待跟进</em></div>
                <div class="governance-card"><span>${i("warning")}异常项</span><b>4</b><em>需处理</em></div>
                <button class="governance-card detail-trigger" type="button" data-detail-key="asset-access-log"><span>${i("permission")}访问记录<i>${i("detail","查看详情")}</i></span><b>${ns.length}</b><em>查看详情</em></button>
                <button class="governance-card detail-trigger" type="button" data-detail-key="asset-lifecycle"><span>${i("timeline")}生命周期<i>${i("detail","查看详情")}</i></span><b>${is.length}</b><em>查看详情</em></button>
                <button class="governance-card detail-trigger is-risk" type="button" data-detail-key="asset-low-use"><span>${i("warning")}低利用率<i>${i("detail","查看详情")}</i></span><b>${os.length}</b><em>查看详情</em></button>
                <button class="governance-card detail-trigger is-idle" type="button" data-detail-key="asset-idle"><span>${i("archive")}闲置资产<i>${i("detail","查看详情")}</i></span><b>${rs.length}</b><em>查看详情</em></button>
                <button class="governance-card design-library-entry detail-trigger" type="button" data-detail-key="design-library">
                  <span>${i("blueprint")}设计库<i>${i("detail","查看详情")}</i></span>
                  <b>${cs.length}</b>
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
  `}function na(){g.clear(),ia(),ra(),da(),v("platforms").innerHTML=Zs.map((n,c)=>`
    <div class="entry search-item" id="platform-${c}" data-search="${x(n)} 核心平台">
      <div class="entry-icon">${i("platform")}</div><b>${n[1]}</b><div class="entry-count"><strong>${n[2]}</strong></div>
    </div>
  `).join(""),g.set("software-more",_("产品软件矩阵更多","产品软件矩阵","software",C,0)),v("software").innerHTML=C.map((n,c)=>G(n,"software",c)).join("");const s=Xs();g.set("saas-more",_("SaaS 产品更多","SaaS 产品","saas",ua("saas"),0)),v("saas").innerHTML=s.visibleItems.map((n,c)=>G(n,"saas",c)).join(""),ca();const a=Ks(),t=a.flatMap(n=>n.items).reduce((n,c)=>n+Number(c.item[1]||0),0),e=a.flatMap(n=>n.items).reduce((n,c)=>n+Number(c.item[2]||0),0);v("industryStats").textContent=`专利 ${t} · 软著 ${e}`,v("industries").innerHTML=`
    <div class="industry-board-grid">
      ${a.map((n,c)=>{var u,h;const l=n.visibleItems||n.items,p=`industry-more-${c}`;return(u=n.moreItems)!=null&&u.length&&g.set(p,va(n,c)),`
        <div class="zone search-item" data-search="${n.name} ${n.items.map($=>$.item.join(" ")).join(" ")} 行业">
          <div class="zone-head">
            <b>${i("industry")}${n.name}</b>
            <div class="zone-head-actions">
              <span class="zone-count">${n.items.length}项</span>
              ${(h=n.moreItems)!=null&&h.length?`<button class="industry-more detail-trigger" type="button" data-detail-key="${p}">${i("detail")}更多</button>`:""}
            </div>
          </div>
          <div class="zone-grid">
            ${l.map(($,f)=>bs(n.name,$.item,c,f,$.source,$.visualTitle)).join("")}
          </div>
        </div>
      `}).join("")}
    </div>
  `,v("intake").innerHTML=As.map(n=>`
    <div class="intake-card search-item" data-search="${x(n)} 待资产录入 待录入">
      <div class="asset-ico">${i(n[0])}</div><div><b>${n[1]}</b></div><strong>${n[3]}</strong>
    </div>
  `).join(""),oa();const o=(n,c,l,p="device")=>{const u=`${p}-${c}-${l}`;return g.set(u,ws(n,c,l)),`
      <button class="device-card search-item detail-trigger" type="button" data-detail-key="${u}" data-search="${n[0]} ${n[1]} ${c} 设备">
        <div class="scene"><img src="${n[2]}" alt="${n[0]}"></div>
        <div class="device-title"><b>${n[0]}</b><em>${i("detail")}详情</em></div>
        <span>${n[1]}</span>
      </button>
    `};g.set("hardware-more",J("智能硬件更多","智能硬件",F,0)),g.set("equipment-more",J("智能装备更多","智能装备",O.slice(8),8)),v("hardware").innerHTML=F.map((n,c)=>o(n,"智能硬件",c)).join(""),v("equipment").innerHTML=O.slice(0,8).map((n,c)=>o(n,"智能装备",c)).join(""),v("docs").innerHTML=`
    <h2 class="doc-list-title">${i("document")}公司资料</h2>
    ${Is.map((n,c)=>`
    <div class="doc-group search-item" data-search="${n[0]} 公司资料 资料资产">${i(Ma(n[0]))}${n[0]}</div>
    ${n[0]==="宣传资产"?'<div class="promo-media search-item" data-search="宣传资产 视频播放 企业照片 企业视频"><div class="promo-video"><video src="./assets/videos/promo.mp4" poster="./assets/photos/warehouse.jpg" controls muted preload="metadata"></video></div></div>':""}
    ${n[1].map((l,p)=>{const u=`side-doc-${c}-${p}`;return g.set(u,fs(n[0],l)),`
        <button class="doc search-item detail-trigger ${Number.isFinite(l[2])?"expiry-doc":""}" type="button" data-detail-key="${u}" data-search="${n[0]} ${x(l)} 公司资料 资料资产">
          <div class="doc-main"><b>${l[0]}</b><strong>${l[1]}</strong></div>
          ${Number.isFinite(l[2])?`<div class="expiry-row" title="黄色为快超期，红色为超期"><span class="expiry-pill warn">${l[2]}</span><span class="expiry-pill danger">${l[3]}</span></div>`:""}
        </button>
      `}).join("")}
  `).join("")}
  `}function ia(){g.set("asset-access-log",{type:"asset-log",title:"权限访问、点击、下载记录",subtitle:"资产概览 · 权限人操作明细",iconName:"permission",items:ns}),g.set("asset-lifecycle",{type:"asset-lifecycle",title:"无形资产生命周期详情",subtitle:"资产概览 · 立项、研发、归档、授权、复用、治理",iconName:"timeline",items:is}),g.set("asset-low-use",{type:"low-use",title:"低利用率资产明细",subtitle:"资产概览 · 投入高、调用低、复用不足",iconName:"warning",items:os}),g.set("asset-idle",{type:"idle-assets",title:"资产闲置情况明细",subtitle:"资产概览 · 闲置、低频、观察资产",iconName:"archive",items:rs}),g.set("renewal-todos",{type:"renewal-todos",title:"待办提醒明细",subtitle:"网站、证书、宽带、云资源、外购软件续费明细",iconName:"warning",items:A}),g.set("design-library",{type:"design-library",title:"设计库",subtitle:"资产治理 · 已完成设计但暂不开发的产品记录",iconName:"blueprint",items:cs})}function oa(){const s=A.reduce((e,o)=>(e[o.status]=(e[o.status]||0)+1,e),{}),a=A.slice().sort((e,o)=>e.due.localeCompare(o.due))[0],t=A.reduce((e,o)=>e+Number(o.amount.replace(/[^\d.]/g,"")||0),0);v("renewalTodos").innerHTML=`
    <div class="renewal-head">
      <h3>${i("warning")}待办提醒</h3>
      <span>${A.length}项</span>
    </div>
    <div class="renewal-summary">
      <span class="normal">正常 ${s.normal||0}</span>
      <span class="task">有任务 ${s.task||0}</span>
      <span class="risk">异常 ${s.risk||0}</span>
    </div>
    <div class="renewal-compact search-item" data-search="${A.map(e=>`${e.name} ${e.category} ${e.owner}`).join(" ")} 待办 续费 网站 证书 宽带">
      <div><span>最近到期</span><b>${(a==null?void 0:a.due)||"-"}</b></div>
      <div><span>预计费用</span><b>¥${t.toLocaleString("zh-CN")}</b></div>
      <button class="detail-trigger" type="button" data-detail-key="renewal-todos">${i("detail")}查看明细</button>
    </div>
  `}function ra(){const s=[{name:"对外使用",note:"客户展示、品牌传播、资质证明",sections:[["品牌入口",[["商标",18],["网站",3],["公众号",5],["域名",8]]],["资质证明",[["专利",41],["软著",31],["证书",6],["荣誉资质",27]]],["宣传获客",[["宣传册",36],["展会资料",11],["方案PPT",24],["客户案例",18],["企业照片",126]]]]},{name:"对内管理",note:"经营支撑、制度合同、申报归档",sections:[["经营资料",[["应用表单",17],["合同模板",23],["企业资料",29],["证照",15]]],["合规申报",[["申报中",8],["申报文件",32],["规章制度",16],["大事记",42]]],["工具资产",[["外购软件",9],["AI工具",14],["插件",22],["文案",58]]]]}];v("docMatrix").innerHTML=`
    <div class="doc-matrix-title">
      <b>${i("document")}公司资料分类</b>
      <span>点击数字查看归档详情</span>
    </div>
    <div class="doc-matrix-list">
      ${s.map((a,t)=>`
        <div class="doc-usage-card search-item" data-search="${a.name} ${a.note} ${a.sections.flat(2).join(" ")} 公司资料">
          <div class="doc-usage-head">
            <b>${i(t===0?"media":"archive")}${a.name}</b>
            <span>${a.note}</span>
          </div>
          <div class="doc-usage-sections">
            ${a.sections.map((e,o)=>`
              <div class="doc-usage-section">
                <h3>${e[0]}</h3>
                <div class="doc-matrix-items">
                  ${e[1].map((n,c)=>{const l=`doc-usage-${t}-${o}-${c}`;return g.set(l,fs(e[0],n)),`<button class="doc-matrix-item detail-trigger" type="button" data-detail-key="${l}"><span>${n[0]}</span><b>${n[1]}</b></button>`}).join("")}
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      `).join("")}
    </div>
  `}function ca(){g.set("scene-more",ga()),v("sceneLibrary").innerHTML=q.map((s,a)=>gs(s,a)).join("")}function gs(s,a,t="scene"){const e=`${t}-${a}`;return g.set(e,ba(s)),`
    <button class="scene-card search-item detail-trigger" type="button" data-detail-key="${e}" data-search="${s.name} ${s.device} ${s.scene} 场景运营库">
      <div class="scene-card-media"><img src="${s.image}" alt="${s.name}"></div>
      <div>
        <span class="scene-card-device">${i(s.device.includes("看板")?"chart":s.device.includes("RFID")?"hardware":"equipment")}${s.device}</span>
        <b>${s.name}</b>
        <span>${s.role}</span>
        <p>${s.scene}</p>
      </div>
      <em>${i("download")}资料</em>
    </button>
  `}function da(){g.set("case-more",ha()),v("caseAssets").innerHTML=la().map((s,a)=>$s(s,a)).join("")}function la(){return E}function $s(s,a,t="case"){const e=`${t}-${a}`,o=Hs[s.name]||{},n=H[s.manager],c=H[s.engineer],l=o.card||[b[a%b.length],b[(a+1)%b.length]],p=`ip-${t}-${a}-patent`,u=`ip-${t}-${a}-copyright`;return g.set(e,ya(s,o)),g.set(p,I("patent",s.name,s.patents)),g.set(u,I("copyright",s.name,s.copyrights)),g.set(`person-${s.manager}`,Q(s.manager)),g.set(`person-${s.engineer}`,Q(s.engineer)),`
    <article id="${e}" class="case-asset search-item detail-trigger status-${s.status}" data-detail-key="${e}" data-search="${s.name} ${s.industry} ${s.modules.join(" ")} ${s.components.join(" ")} 案例 资产">
      <div class="case-top">
        <div class="case-icon">${i("case")}</div>
        <div>
          <span class="case-industry">${s.industry} · 来源 ${s.sourceYear}</span>
          <h3>${s.name}</h3>
        </div>
        <span class="status-badge">${U(s.status)}</span>
      </div>
      <p>${s.intro}</p>
      <div class="case-components">
        ${s.modules.slice(0,5).map(h=>`<span>${i("module")}${h}</span>`).join("")}
      </div>
      <div class="case-ip-assets">
        <button class="asset-mini asset-strip detail-trigger" type="button" data-detail-key="${p}">专利 ${s.patents}</button>
        <button class="asset-mini asset-strip detail-trigger" type="button" data-detail-key="${u}">软著 ${s.copyrights}</button>
      </div>
      <div class="case-image">
        ${l.map((h,$)=>`<img src="${h}" alt="${s.name}图片${$+1}">`).join("")}
      </div>
      <div class="case-actions">
        <div class="case-owner-summary">
          ${Y("产品",s.manager,n,s.managerState)}
          ${Y("技术",s.engineer,c,s.engineerState)}
        </div>
        <button type="button">${i("detail")}详情</button>
      </div>
    </article>
  `}function Y(s,a,t,e){const o=k((t==null?void 0:t.status)||e),n=(t==null?void 0:t.status)==="departed"||e==="departed"?"交接预警":(t==null?void 0:t.status)==="new"||e==="new"?"补齐预警":"正常";return`
    <button class="case-owner-chip detail-trigger state-${(t==null?void 0:t.status)||e}" type="button" data-detail-key="person-${a}">
      <span>${a} · ${(t==null?void 0:t.role)||`${s}负责人`}</span>
      <b>${(t==null?void 0:t.department)||"资产责任工位"}</b>
      <em>${n} · ${o}</em>
    </button>
  `}function ms(s){return s.name.includes("象山")?"326万":s.name.includes("五金")?"214万":s.name.includes("物流")?"238万":"96万"}function G(s,a,t,e=a){const o=s[0],n=a==="saas"?"SaaS产品":"产品软件矩阵",c=a==="saas"?"saas":"software",p=(a==="saas"?as:ss)[o]||{},u=p.image||b[(t+(a==="saas"?2:0))%b.length],h=Ys(a,o,t),$=`${e}-${t}`,f=`ip-${e}-${t}-patent`,j=`ip-${e}-${t}-copyright`;return g.set($,$a(s,a,t,p,h)),g.set(f,I("patent",o,s[3])),g.set(j,I("copyright",o,s[4])),`
    <div class="industry app-card product-app search-item" id="${$}" data-search="${x(s)} ${n} 专利 软著 订阅 软件 产品">
      <div class="app-card-main">
        <div class="app-icon">${i(c)}</div>
        <div class="app-title">
          <b>${o}</b>
          <span>${n} · ${s[1]} · ${s[2]}</span>
        </div>
        <div class="app-action">
          <button class="detail-link detail-trigger" type="button" data-detail-key="${$}">${i("detail")}详情</button>
          <div class="app-assets">
            <button class="asset-mini asset-strip detail-trigger" type="button" data-detail-key="${f}">专利 ${s[3]}</button>
            <button class="asset-mini asset-strip detail-trigger" type="button" data-detail-key="${j}">软著 ${s[4]}</button>
          </div>
        </div>
      </div>
      <div class="app-metrics">
        <span>${i("star")}4.7分</span>
        <span>${i(a==="saas"?"subscribe":"download")}${a==="saas"?"订阅同步":"内部复用"}</span>
        <span>${s[1]}系统</span>
      </div>
      <div class="app-tags">
        <span>${i("tag")}${a==="saas"?"SaaS应用":"工业软件"}</span>
        <span>${s[2]}</span>
        <span>${a==="saas"?"客户同步":"标准模块"}</span>
      </div>
      <p>${p.description||`${o}面向${s[1]}业务场景，沉淀标准接口、模块能力、专利软著和可复用资料。`}</p>
      <div class="app-previews product-previews">
        <img src="${u}" alt="${o}界面图">
        <img src="${h[0]}" alt="${o}应用场景图">
        <img src="${h[1]}" alt="${o}详情图">
      </div>
    </div>
  `}function bs(s,a,t,e,o=s,n=a[0],c="industry"){const l=`${c}-${t}-${e}`,p=a[0],u=Number(a[1]||0),h=Number(a[2]||0),$=R[`${o}/${n}`]||R[`${s}/${p}`]||{},f=$.image||b[(t+e)%b.length],j=_s(o,n,t,e),S=`ip-${c}-${t}-${e}-patent`,d=`ip-${c}-${t}-${e}-copyright`;return g.set(l,pa(o,a,$,j)),g.set(S,I("patent",`${o}${p}`,u)),g.set(d,I("copyright",`${o}${p}`,h)),`
    <div class="industry app-card search-item" data-search="${s} ${x(a)} 行业 专利 软著">
      <div class="app-card-main">
        <div class="app-icon">${i("industry")}</div>
        <div class="app-title">
          <b>${p}</b>
          <span>${s} · 工业APP应用软件</span>
        </div>
        <div class="app-action">
          <button class="detail-link detail-trigger" type="button" data-detail-key="${l}">${i("detail")}详情</button>
          <div class="app-assets">
            <button class="asset-mini asset-strip detail-trigger" type="button" data-detail-key="${S}">专利 ${u}</button>
            <button class="asset-mini asset-strip detail-trigger" type="button" data-detail-key="${d}">软著 ${h}</button>
          </div>
        </div>
      </div>
      <div class="app-metrics">
        <span>${i("star")}4.8分</span>
        <span>${i("download")}9.8万次</span>
        <span>使用率 70.55%</span>
      </div>
      <div class="app-tags">
        <span>${i("tag")}数字化工厂</span>
        <span>提升效率</span>
        <span>QC巡检</span>
      </div>
      <p>${$.description||`面向${s}${p}场景的工业应用，覆盖生产协同、质量追溯、设备联动与资料资产沉淀。`}</p>
      <div class="app-previews industry-previews">
        <img src="${f}" alt="${p}界面图">
        <img src="${j[0]}" alt="${p}应用场景图">
        <img src="${j[1]}" alt="${p}详情图">
      </div>
    </div>
  `}function pa(s,a,t,e){const o=`${a[0]}工业APP应用`,n=t.image||e[0],c=es[a[0]]||ys(o);return{type:"industry",title:o,subtitle:`${s} · 数字化工厂 · 提升效率`,iconName:"industry",heroImage:n,metrics:[["评价评分","4.8","五星"],["专利",String(a[1]||0),"已归档"],["软著",String(a[2]||0),"已归档"],["使用率","70.55%","今日"]],description:t.description||`${o}面向${s}行业应用场景，整合生产计划、质量巡检、设备状态、资料沉淀与客户案例能力，帮助企业提升无形资产转化效率。`,tags:["数字化工厂","QC巡检","提升效率"],previews:[n,...e],support:["手机","工位机","电脑端","电子看板"],docs:["产品需求规格说明书","技术架构设计方案","产品演示与解决方案PPT"],profile:c,investment:us(c,M.currentVersion),contributionPeople:B([],o),appDownload:!0}}function va(s,a){return{type:"industry-more",title:`${s.name}更多行业内容`,subtitle:`隐藏模块 · ${s.moreItems.length}项 · 点击查看详情`,iconName:"industry",tags:[s.name,"更多模块","行业内容"],zoneIndex:a,items:s.moreItems}}function _(s,a,t,e,o){return{type:"product-more",title:s,subtitle:`${a} · ${e.length}项 · 点击查看详情`,iconName:t==="saas"?"saas":"software",tags:[t==="saas"?"SaaS应用":"工业软件","更多模块","产品资产"],productType:t,startIndex:o,items:e}}function ua(s){return s==="saas"?N:C}function ha(){return{type:"case-more",title:"案例资产更多",subtitle:`案例资产 · ${E.length}项 · 点击查看详情`,iconName:"case",tags:["案例资产","知识产权","项目沉淀"],items:E}}function J(s,a,t,e){return{type:"device-more",title:s,subtitle:`${a} · ${t.length}项 · 点击查看详情`,iconName:a==="智能硬件"?"hardware":"equipment",tags:[a,"设备资产","更多模块"],kind:a,startIndex:e,items:t}}function ga(){return{type:"scene-more",title:"场景运营库更多",subtitle:`场景运营库 · ${q.length}项 · 点击查看详情`,iconName:"equipment",tags:["场景运营库","现场应用","资料沉淀"],items:q}}function $a(s,a,t,e,o){const n=s[0],c=a==="saas"?"SaaS产品":"产品软件矩阵",l=a==="saas"?"saas":"software",p=e.image||b[(t+(a==="saas"?2:0))%b.length],u=es[n]||ys(n),h=e.previews||[p,...o];return{type:"product",title:`${n}${a==="saas"?" SaaS应用":" 工业软件"}`,subtitle:`${c} · ${s[1]} · ${s[2]}`,iconName:l,heroImage:p,metrics:[["评价评分",a==="saas"?"4.7":"4.8","五星"],["专利",String(s[3]||0),"已归档"],["软著",String(s[4]||0),"已归档"],[a==="saas"?"订阅状态":"复用状态",a==="saas"?"同步中":"可复用","今日"]],description:e.description||`${n}面向${s[1]}业务场景，沉淀标准接口、模块能力、专利软著和可复用资料。`,tags:[s[1],s[2],a==="saas"?"客户同步":"标准模块"],previews:h,uiGallery:js(n,h),support:a==="saas"?["手机","电脑端","企业微信","订阅门户"]:["电脑端","工位机","电子看板","接口网关"],docs:["产品需求规格说明书","技术架构设计方案","演示与解决方案PPT"],profile:u,investment:us(u,s[2]),contributionPeople:B([],n),appDownload:a==="saas"}}function ys(s){return{costs:[["累计投入","96万"],["开发费","38万"],["人工费","44万"],["实施运维","14万"]],hours:[["研发工时","1,860h"],["测试工时","420h"],["实施工时","760h"]],versions:[["V1.6","2025-10-24",`${s}移动端与看板联动增强`],["V1.2","2024-11-15","基础业务流程和资料归档能力上线"]],components:["业务组件","接口组件","资料组件","现场组件"]}}function fs(s,a){var e;const t=((e=Ts[s])==null?void 0:e[a[0]])||[];return{type:"doc",title:`${s} / ${a[0]}`,subtitle:`公司资料 · 已归档 ${a[1]} · 清单 ${t.length||a[1]} 项`,iconName:"document",tags:[s,a[0],"资料资产"],metrics:[["归档数量",String(a[1]),"当前"],["年度新增",String(Math.max(2,Math.round(a[1]*.18))),"2026"],["资料状态","已建档","治理"]],description:`${a[0]}用于支撑公司无形资产证明、项目审计、客户展示和内部复用，已纳入资料资产台账进行分类管理。`,docs:["资料清单","归档路径","责任人","更新记录"],contentList:t}}function I(s,a,t){const e=ts[s],o=e.items.filter(c=>c[2].includes(a)||a.includes(c[2])),n=ma(s,a,Number(t||0),o);return{type:"ip",title:`${a}${e.label}详情`,subtitle:`${e.label} · 数量 ${n.length||t} · 证书台账`,iconName:s==="patent"?"patent":"copyright",tags:[e.label,a,t>0?"已有关联":"申报中"],metrics:[["数量",String(t),"卡片"],["最近获得",t>0?"2025-12-18":"2026-03-22","证书"],["资料状态","已建档","治理"]],items:n}}function ma(s,a,t,e){const o=ts[s],n=Math.max(t,e.length,1),l=(e.length?e:o.items.slice(0,Math.min(o.items.length,n))).map($=>[...$]),p=s==="patent"?"HN-PAT":"HN-SR",u=o.label,h=s==="patent"?"已授权":"已登记";for(;l.length<n;){const $=l.length+1,f=2020+$%6;l.push([`${p}-${f}-${String($).padStart(3,"0")}`,`${a}${u}明细${$}`,a,`${f}-${String($%12+1).padStart(2,"0")}-${String($%24+1).padStart(2,"0")}`,$%5===0?"申报中":h])}return l.slice(0,n)}function Q(s){const a=H[s];return{type:"person",title:s,subtitle:a?`${a.role} · ${k(a.status)}`:"人员信息已登记",iconName:"person",tags:a?[a.department,a.role,k(a.status)]:["资产责任人"],person:a||{name:"张工",role:"资产责任人",department:"项目交付部",status:"new",assets:["资料资产"],note:"人员信息已纳入资产责任台账。"}}}function ba(s){return{type:"scene",title:s.name,subtitle:`${s.device} · ${s.role} · 场景运营库`,iconName:"equipment",tags:[s.device,s.role,"行业现场"],heroImage:s.image,scene:s}}function ws(s,a,t){const e=[s[2],b[(t+1)%b.length],b[(t+2)%b.length]];return{type:"device",title:s[0],subtitle:`${a} · ${s[1]} · 资产已归档`,iconName:a==="智能硬件"?"hardware":"equipment",heroImage:s[2],metrics:[["设备类型",a,"已登记"],["应用场景",s[1],"现场"],["资料状态","已归档","72%"],["维护状态","正常","可用"]],description:`${s[0]}用于${s[1]}场景，纳入无形资产工作台进行图片、资料、应用案例和知识产权关联展示。`,tags:[a,s[1],"现场资产"],previews:e,uiGallery:js(s[0],e),support:["现场终端","数据采集","资产台账","资料归档"],docs:["设备照片","应用案例","维护资料"]}}function js(s,a){var e;const t=ds[s];return{url:(t==null?void 0:t.url)||"",images:(e=t==null?void 0:t.images)!=null&&e.length?t.images.slice(0,3):a.slice(0,3)}}function ya(s,a={}){var o;const t=a.previews||[b[0],b[1],b[3]],e=Gs(s);return{type:"case",title:s.name,subtitle:`${s.industry} · 来源 ${s.sourceYear} · ${U(s.status)}`,iconName:"case",heroImage:a.hero||b[E.indexOf(s)%b.length],metrics:[["专利",String(s.patents),"已关联"],["软著",String(s.copyrights),"已关联"],["人员",String(((o=s.contributors)==null?void 0:o.length)||0),"贡献"],["成本",ms(s),"沉淀"]],description:a.detail||s.intro,tags:[s.industry,U(s.status),`${s.sourceYear}演进`],previews:t,uiGallery:fa(s,t),support:s.components,docs:["公开案例资料","知识产权台账"],modules:s.modules,components:s.components,contributors:s.contributors,investment:e,contributionPeople:Ws(s,e),evolution:s.evolution,evidence:s.evidence,owners:[["产品经理",s.manager,s.managerState],["技术负责人",s.engineer,s.engineerState]],roleAllowed:!0}}function fa(s,a){var o;const t=s.components.includes("工位机")?"工位机":s.components.includes("手持机")?"手持机":"",e=t?ds[t]:null;return{url:(e==null?void 0:e.url)||"",images:(o=e==null?void 0:e.images)!=null&&o.length?e.images.slice(0,3):a.slice(0,3)}}function U(s){return{normal:"正常",idle:"闲置",risk:"风险"}[s]||"正常"}function wa(s,a,t){const e=Os(a),o=(e==null?void 0:e[0])||a,n=e==null?void 0:e[1],c=k((n==null?void 0:n.status)||t);return`<button class="person-badge detail-trigger state-${(n==null?void 0:n.status)||t}" type="button" data-detail-key="person-${o}"><i></i><b>${s}</b><em>${(n==null?void 0:n.name)||a} · ${o} · ${c}</em></button>`}function ja(){document.querySelectorAll(".top-nav button").forEach(s=>{s.addEventListener("click",()=>{var t,e;if(s.dataset.action==="chart"){(t=v("chartToggle"))==null||t.click();return}if(s.dataset.action==="version"){(e=v("versionToggle"))==null||e.click();return}if(s.dataset.detailKey){D(!0,s.dataset.detailKey);return}const a=v(s.dataset.target);a&&a.scrollIntoView({block:"start",behavior:"smooth"})})})}function Ma(s){return{知识产权:"patent",品牌渠道:"channel",宣传资产:"media",企业档案:"archive"}[s]||"document"}const z=["杜英杰","艾总","冯小燕","秦步日","武文豪","陈良","郑玉悦","郭振"];function Sa(s){return Array.from(s).reduce((a,t)=>a*31+t.charCodeAt(0)>>>0,7).toString(36)}function P(s,a=0){const t=`${s.title||""}${s.subtitle||""}`,e=Array.from(t).reduce((o,n)=>o+n.charCodeAt(0),0);return z[(e+a)%z.length]}function Za(s,a,t="资料"){return Array.isArray(s)?[s[0]||`${t}${a+1}`,s[1]||"资料资产",s[2]||s[3]||"已归档",s[4]||s[3]||"可查看"]:[String(s||`${t}${a+1}`),"资料资产","已归档","可查看"]}function Ms(s,a){var o,n,c,l;const t=s.title||"资产详情",e=P(s);if(a==="docs"){const p=(o=s.contentList)!=null&&o.length?s.contentList:(n=s.items)!=null&&n.length?s.items.slice(0,8):[...s.docs||[],...s.evidence||[],...s.modules||[],...s.components||[]].slice(0,8);return(p.length?p.map((h,$)=>Za(h,$,"资料")):[[`${t}资料总表`,"资料资产","已归档","可查看"],[`${t}证明材料`,"审计凭证","已归档","可查看"],[`${t}复用说明`,"内部资料","已归档","可查看"]]).slice(0,10)}if(a==="path"){const p=t.replace(/[^\u4e00-\u9fa5A-Za-z0-9]+/g,"-").replace(/^-|-$/g,"");return[["资产台账主目录",`/无形资产台账/${((c=s.tags)==null?void 0:c[0])||"综合资产"}/${p||"资产"}`,e,"已同步"],["证据资料目录",`/归档资料/证据链/${p||"资产"}`,P(s,1),"已归档"],["版本快照目录",`versions/${M.currentVersion}/assets/${p||"asset"}`,P(s,2),"可追溯"]]}return a==="owner"?(l=s.owners)!=null&&l.length?s.owners.map((p,u)=>{const h=H[p[1]];return[p[0],(h==null?void 0:h.name)||p[1],(h==null?void 0:h.department)||"项目交付部",k((h==null?void 0:h.status)||p[2])]}):[["资产负责人",e,"资产治理","在岗"],["资料维护人",P(s,1),"资料归档","在岗"],["复核确认人",P(s,2),"管理复核","在岗"]]:[["2026-07-02",e,"更新资料卡片展示","已完成"],["2026-06-30",P(s,1),"补齐证据与归档路径","已完成"],["2026-06-28",P(s,2),"建立资产详情台账","已完成"]]}function Va(s,a,t,e){var o;return{type:"info-card",title:`${s.title} / ${t}`,subtitle:`${t} · ${s.subtitle||"资产详情"}`,iconName:e,tags:[t,((o=s.tags)==null?void 0:o[0])||"资料资产","可追溯"],rows:Ms(s,a)}}function T(s){if(s.type==="info-card")return"";const a=[["docs","资料清单","document"],["path","归档路径","archive"],["owner","责任人","owner"],["updates","更新记录","timeline"]],t=`info-${s.type||"detail"}-${Sa(s.title||s.subtitle||"asset")}`;return`
    <div class="detail-info-card-grid">
      ${a.map(([e,o,n])=>{const c=`${t}-${e}`,l=Ms(s,e);return g.set(c,Va(s,e,o,n)),`
          <button class="detail-info-card detail-trigger" type="button" data-detail-key="${c}">
            <span>${i(n)}${o}</span>
            <em>${l.length}项</em>
            <b>${i("detail")}查看</b>
          </button>
        `}).join("")}
    </div>
  `}function Ha(s){var a,t;return s.type==="case"?Wa(s):s.type==="doc"?La(s):s.type==="ip"?Pa(s):s.type==="person"?Aa(s):s.type==="scene"?Ia(s):s.type==="info-card"?Ta(s):s.type==="asset-log"?Da(s):s.type==="asset-lifecycle"?xa(s):s.type==="low-use"?Ea(s):s.type==="idle-assets"?Ca(s):s.type==="renewal-todos"?Na(s):s.type==="design-library"?Ra(s):s.type==="industry-more"?qa(s):s.type==="product-more"?Fa(s):s.type==="case-more"?Oa(s):s.type==="device-more"?Ga(s):s.type==="scene-more"?Ua(s):`
    <div class="detail-head">
      <div class="detail-app-icon">${i(s.iconName)}</div>
      <div>
        <h2 id="detailTitle">${s.title}</h2>
        <p>${s.subtitle}</p>
        <div class="detail-tags">${s.tags.map(e=>`<span>${i("tag")}${e}</span>`).join("")}</div>
      </div>
      <button class="detail-download" type="button">${i("download")}资料包</button>
    </div>
    <div class="detail-metrics">
      ${s.metrics.map(e=>`<div><span>${e[0]}</span><strong>${e[1]}</strong><em>${e[2]}</em></div>`).join("")}
    </div>
    <div class="detail-body">
      <section class="detail-left">
        <div class="detail-hero">
          <img src="${s.heroImage}" alt="${s.title}">
          <button type="button" aria-label="播放介绍">${i("play","播放")}</button>
        </div>
        <h3>${i("solution")}软件介绍</h3>
        <p>${s.description}</p>
        <h3>${i("image")}界面详情</h3>
        <div class="detail-previews">
          ${s.previews.map((e,o)=>`<img src="${e}" alt="${s.title}界面${o+1}">`).join("")}
        </div>
        ${s.uiGallery?Ss(s):""}
        ${T(s)}
        ${s.profile?ka(s):""}
      </section>
      <aside class="detail-side">
        <h3>${i("customer")}客户案例</h3>
        ${["华纳科技有限公司","华丽服饰有限公司","东方智造集团"].map((e,o)=>`
          <div class="case-card">
            <b>${e}</b>
            <span>${s.tags[0]} · ${o===0?"大型企业":"中型企业"}</span>
            <p>已覆盖核心应用场景，形成资料、案例与知识产权联动。</p>
            <button type="button">${i("detail")}查看详情</button>
          </div>
        `).join("")}
        <h3>${i("hardware")}支持设备</h3>
        <div class="support-list">${s.support.map(e=>`<span>${e}</span>`).join("")}</div>
        ${s.appDownload?`<h3>${i("download")}最新版本</h3><div class="download-box"><b>${s.title}</b><span>V${((t=(a=s.subtitle.match(/V[0-9.]+/))==null?void 0:a[0])==null?void 0:t.replace("V",""))||"2.0"} · 2026-05-20</span><button type="button">${i("download")}下载资料包</button></div>`:""}
      </aside>
    </div>
  `}function Ss(s){const a=s.uiGallery.url;return`
    <h3>${i("image")}UI图访问</h3>
    <div class="ui-gallery">
      ${s.uiGallery.images.map((t,e)=>`
        <a class="ui-shot" href="${a||t}" target="_blank" rel="noopener noreferrer">
          <img src="${t}" alt="${s.title}UI图${e+1}">
          <span>${a?"查看UI":"UI地址待配置"}</span>
        </a>
      `).join("")}
    </div>
    <a class="ui-link ${a?"":"is-disabled"}" href="${a||"#"}" target="_blank" rel="noopener noreferrer" aria-disabled="${String(!a)}">${i("external")}${a?"打开蓝湖UI地址":"UI地址待配置"}</a>
  `}function ka(s){var t;const a=s.profile;return`
    ${s.investment?`
      <h3>${i("cost")}投入概览</h3>
      <div class="investment-summary">
        <div><span>已有投入人天</span><strong>${s.investment.days}人天</strong></div>
        <div><span>投入成本</span><strong>${s.investment.cost}</strong></div>
        <div><span>对应版本</span><strong>${s.investment.version}</strong></div>
      </div>
    `:""}
    ${(t=s.contributionPeople)!=null&&t.length?`
      <h3>${i("person")}投入人员</h3>
      <div class="people-ledger">
        ${s.contributionPeople.map(e=>`<div><b>${e.name}</b><span>${e.role}</span><em>${e.code} · ${e.status}</em></div>`).join("")}
      </div>
    `:""}
    <h3>${i("cost")}投入成本</h3>
    <div class="cost-mini-grid">${a.costs.map(e=>`<div><span>${e[0]}</span><strong>${e[1]}</strong></div>`).join("")}</div>
    <h3>${i("task")}工时构成</h3>
    <div class="cost-mini-grid">${a.hours.map(e=>`<div><span>${e[0]}</span><strong>${e[1]}</strong></div>`).join("")}</div>
    <h3>${i("timeline")}版本历史</h3>
    <div class="version-list">${a.versions.map(e=>`<div><b>${e[0]} · ${e[1]}</b><span>${e[2]}</span></div>`).join("")}</div>
    <h3>${i("component")}累计组件</h3>
    <div class="detail-chip-grid">${a.components.map(e=>`<span>${i("component")}${e}</span>`).join("")}</div>
  `}function La(s){var a;return`
    <div class="detail-head">
      <div class="detail-app-icon">${i("document")}</div>
      <div><h2 id="detailTitle">${s.title}</h2><p>${s.subtitle}</p><div class="detail-tags">${s.tags.map(t=>`<span>${i("tag")}${t}</span>`).join("")}</div></div>
    </div>
    <div class="detail-metrics">${s.metrics.map(t=>`<div><span>${t[0]}</span><strong>${t[1]}</strong><em>${t[2]}</em></div>`).join("")}</div>
    <div class="simple-detail">
      <p>${s.description}</p>
      ${(a=s.contentList)!=null&&a.length?`
        <div class="doc-content-list">
          ${s.contentList.map(t=>`
            <div>
              <b>${t[0]}</b>
              <span>${t[1]}</span>
              <em>${t[2]}</em>
              <strong>${t[3]}</strong>
            </div>
          `).join("")}
        </div>
      `:""}
      ${T(s)}
    </div>
  `}function Pa(s){return`
    <div class="detail-head">
      <div class="detail-app-icon">${i(s.iconName)}</div>
      <div><h2 id="detailTitle">${s.title}</h2><p>${s.subtitle}</p><div class="detail-tags">${s.tags.map(a=>`<span>${i("tag")}${a}</span>`).join("")}</div></div>
    </div>
    <div class="detail-metrics">${s.metrics.map(a=>`<div><span>${a[0]}</span><strong>${a[1]}</strong><em>${a[2]}</em></div>`).join("")}</div>
    <div class="ip-table">
      ${s.items.map(a=>`<div><b>${a[1]}</b><span>${a[0]}</span><span>关联：${a[2]}</span><span>获得时间：${a[3]}</span><em>${a[4]}</em></div>`).join("")}
    </div>
    ${T(s)}
  `}function Aa(s){const a=s.person;return`
    <div class="detail-head">
      <div class="detail-app-icon">${i("person")}</div>
      <div><h2 id="detailTitle">${s.title}</h2><p>${s.subtitle}</p><div class="detail-tags">${s.tags.map(t=>`<span>${i("tag")}${t}</span>`).join("")}</div></div>
    </div>
    <div class="person-detail ${a.status==="departed"?"is-departed":""}">
      ${a.status==="departed"?`<div class="leave-alert">${i("warning")}该人员已离职，相关接口、源码、现场资料需确认交接完整性。</div>`:""}
      <div class="person-info"><span>姓名</span><b>${a.name}</b><span>岗位</span><b>${a.role}</b><span>部门</span><b>${a.department}</b><span>状态</span><b>${k(a.status)}</b></div>
      <h3>${i("case")}负责资产</h3>
      <div class="detail-chip-grid">${a.assets.map(t=>`<span>${t}</span>`).join("")}</div>
      <p>${a.note}</p>
      ${T(s)}
    </div>
  `}function Ia(s){const a=s.scene;return`
    <div class="detail-head">
      <div class="detail-app-icon">${i("equipment")}</div>
      <div><h2 id="detailTitle">${s.title}</h2><p>${s.subtitle}</p><div class="detail-tags">${s.tags.map(t=>`<span>${i("tag")}${t}</span>`).join("")}</div></div>
    </div>
    <div class="scene-detail">
      <div class="detail-hero scene-detail-hero"><img src="${s.heroImage}" alt="${s.title}"></div>
      <div class="scene-flow"><div><span>使用场景</span><b>${a.scene}</b></div><div><span>适用岗位</span><b>${a.role}</b></div><div><span>产出资料</span><b>${a.output}</b></div></div>
      ${T(s)}
    </div>
  `}function Ta(s){return`
    <div class="detail-head">
      <div class="detail-app-icon">${i(s.iconName)}</div>
      <div><h2 id="detailTitle">${s.title}</h2><p>${s.subtitle}</p><div class="detail-tags">${s.tags.map(a=>`<span>${i("tag")}${a}</span>`).join("")}</div></div>
    </div>
    <div class="info-card-detail-list">
      ${s.rows.map(a=>`
        <div>
          <b>${a[0]}</b>
          <span>${a[1]}</span>
          <em>${a[2]}</em>
          <strong>${a[3]}</strong>
        </div>
      `).join("")}
    </div>
  `}function Da(s){return`
    <div class="detail-head">
      <div class="detail-app-icon">${i("permission")}</div>
      <div><h2 id="detailTitle">${s.title}</h2><p>${s.subtitle}</p><div class="detail-tags"><span>${i("tag")}权限记录</span><span>${i("tag")}审计明细</span></div></div>
    </div>
    <div class="asset-log-table">
      <div class="asset-log-head"><span>时间</span><span>姓名</span><span>动作</span><span>资产</span><span>内容</span><span>状态</span></div>
      ${s.items.map(a=>`<div><span>${a[0]}</span><b>${a[1]}</b><em>${a[2]}</em><span>${a[3]}</span><span>${a[4]}</span><strong class="${a[5]==="异常提醒"?"risk":a[5]==="有任务"?"task":"normal"}">${a[5]}</strong></div>`).join("")}
    </div>
  `}function xa(s){return`
    <div class="detail-head">
      <div class="detail-app-icon">${i("timeline")}</div>
      <div><h2 id="detailTitle">${s.title}</h2><p>${s.subtitle}</p><div class="detail-tags"><span>${i("tag")}生命周期</span><span>${i("tag")}资产治理</span></div></div>
    </div>
    <div class="lifecycle-list">
      ${s.items.map(a=>`<div><i></i><section><b>${a[0]}</b><span>${a[1]} · ${a[3]} · ${a[4]}</span><p>${a[2]}</p></section></div>`).join("")}
    </div>
  `}function Ea(s){return`
    <div class="detail-head">
      <div class="detail-app-icon">${i("warning")}</div>
      <div><h2 id="detailTitle">${s.title}</h2><p>${s.subtitle}</p><div class="detail-tags"><span>${i("tag")}低利用率</span><span>${i("tag")}复用风险</span></div></div>
    </div>
    <div class="low-use-list">
      ${s.items.map(a=>`<div><header><b>${a[0]}</b><strong>${a[1]}</strong></header><span>累计投入 ${a[2]} · 调用量 ${a[3]}</span><p>${a[4]}</p><em>${a[5]}</em></div>`).join("")}
    </div>
  `}function Ca(s){return`
    <div class="detail-head">
      <div class="detail-app-icon">${i("archive")}</div>
      <div><h2 id="detailTitle">${s.title}</h2><p>${s.subtitle}</p><div class="detail-tags"><span>${i("tag")}闲置资产</span><span>${i("tag")}治理建议</span></div></div>
    </div>
    <div class="low-use-list idle-list">
      ${s.items.map(a=>`<div><header><b>${a[0]}</b><strong>${a[1]} · ${a[2]}</strong></header><span>累计投入 ${a[3]}</span><p>${a[4]}</p><em>${a[5]}</em></div>`).join("")}
    </div>
  `}function Na(s){return`
    <div class="detail-head">
      <div class="detail-app-icon">${i("warning")}</div>
      <div><h2 id="detailTitle">${s.title}</h2><p>${s.subtitle}</p><div class="detail-tags"><span>${i("tag")}续费待办</span><span>${i("tag")}费用提醒</span></div></div>
    </div>
    <div class="renewal-detail-list">
      ${s.items.map(a=>`
        <div class="${a.status}">
          <header><b>${a.name}</b><strong>${qs[a.status]}</strong></header>
          <span>${a.category} · 到期 ${a.due} · ${a.amount}</span>
          <p>${a.owner} · ${a.note}</p>
        </div>
      `).join("")}
    </div>
  `}function Ra(s){return`
    <div class="detail-head">
      <div class="detail-app-icon">${i("blueprint")}</div>
      <div><h2 id="detailTitle">${s.title}</h2><p>${s.subtitle}</p><div class="detail-tags"><span>${i("tag")}设计沉淀</span><span>${i("tag")}未开发产品</span><span>${i("tag")}原因留痕</span></div></div>
    </div>
    <div class="design-library-list">
      ${s.items.map(a=>`
        <div>
          <header>
            <b>${a.name}</b>
            <strong>${a.status}</strong>
          </header>
          <span>${a.category} · ${a.designDate} · ${a.designer}</span>
          <p>${a.reason}</p>
          <em>${a.reuse}</em>
        </div>
      `).join("")}
    </div>
  `}function qa(s){return`
    <div class="detail-head">
      <div class="detail-app-icon">${i("industry")}</div>
      <div><h2 id="detailTitle">${s.title}</h2><p>${s.subtitle}</p><div class="detail-tags">${s.tags.map(a=>`<span>${i("tag")}${a}</span>`).join("")}</div></div>
    </div>
    <div class="more-card-grid">
      ${s.items.map((a,t)=>{const e=t+9;return bs(s.tags[0],a.item,s.zoneIndex,e,a.source,a.visualTitle,"industry-more-card")}).join("")}
    </div>
  `}function Fa(s){return`
    <div class="detail-head">
      <div class="detail-app-icon">${i(s.iconName)}</div>
      <div><h2 id="detailTitle">${s.title}</h2><p>${s.subtitle}</p><div class="detail-tags">${s.tags.map(a=>`<span>${i("tag")}${a}</span>`).join("")}</div></div>
    </div>
    <div class="more-card-grid">
      ${s.items.map((a,t)=>{const e=s.startIndex+t;return G(a,s.productType,e,`${s.productType}-more-card`)}).join("")}
    </div>
  `}function Oa(s){return`
    <div class="detail-head">
      <div class="detail-app-icon">${i("case")}</div>
      <div><h2 id="detailTitle">${s.title}</h2><p>${s.subtitle}</p><div class="detail-tags">${s.tags.map(a=>`<span>${i("tag")}${a}</span>`).join("")}</div></div>
    </div>
    <div class="case-more-grid">
      ${s.items.map((a,t)=>$s(a,t,"case-more-card")).join("")}
    </div>
  `}function Ga(s){return`
    <div class="detail-head">
      <div class="detail-app-icon">${i(s.iconName)}</div>
      <div><h2 id="detailTitle">${s.title}</h2><p>${s.subtitle}</p><div class="detail-tags">${s.tags.map(a=>`<span>${i("tag")}${a}</span>`).join("")}</div></div>
    </div>
    <div class="device-more-grid">
      ${s.items.map((a,t)=>{const e=s.startIndex+t,o=`device-more-${s.kind}-${e}`;return g.set(o,ws(a,s.kind,e)),`
          <button class="device-card search-item detail-trigger" type="button" data-detail-key="${o}" data-search="${a[0]} ${a[1]} ${s.kind} 设备">
            <div class="scene"><img src="${a[2]}" alt="${a[0]}"></div>
            <div class="device-title"><b>${a[0]}</b><em>${i("detail")}详情</em></div>
            <span>${a[1]}</span>
          </button>
        `}).join("")}
    </div>
  `}function Ua(s){return`
    <div class="detail-head">
      <div class="detail-app-icon">${i(s.iconName)}</div>
      <div><h2 id="detailTitle">${s.title}</h2><p>${s.subtitle}</p><div class="detail-tags">${s.tags.map(a=>`<span>${i("tag")}${a}</span>`).join("")}</div></div>
    </div>
    <div class="scene-more-grid">
      ${s.items.map((a,t)=>gs(a,t,"scene-more-card")).join("")}
    </div>
  `}function Wa(s){return`
    <div class="detail-head case-detail-head">
      <div class="detail-app-icon">${i("case")}</div>
      <div>
        <h2 id="detailTitle">${s.title}</h2>
        <p>${s.subtitle}</p>
        <div class="detail-tags">${s.tags.map(a=>`<span>${i("tag")}${a}</span>`).join("")}</div>
      </div>
      <button class="detail-download" type="button">${i("download")}资料包</button>
    </div>
    <div class="detail-metrics">
      ${s.metrics.map(a=>`<div><span>${a[0]}</span><strong>${a[1]}</strong><em>${a[2]}</em></div>`).join("")}
    </div>
    <div class="case-detail-layout">
      <section class="case-detail-main">
        <div class="detail-hero">
          <img src="${s.heroImage}" alt="${s.title}">
          <button type="button" aria-label="播放介绍">${i("play","播放")}</button>
        </div>
        <h3>${i("solution")}案例价值</h3>
        <p>${s.description}</p>
        <h3>${i("timeline")}价值脉络</h3>
        <div class="case-value-flow">
          <span>${i("patent")}知识产权 ${s.metrics[0][1]}项专利 / ${s.metrics[1][1]}项软著</span>
          <span>${i("person")}人员贡献 ${s.metrics[2][1]}人协同</span>
          <span>${i("cost")}成本沉淀 ${s.metrics[3][1]}</span>
        </div>
        ${s.investment?`
          <h3>${i("cost")}投入概览</h3>
          <div class="investment-summary">
            <div><span>已有投入人天</span><strong>${s.investment.days}人天</strong></div>
            <div><span>投入成本</span><strong>${s.investment.cost}</strong></div>
            <div><span>对应版本</span><strong>${s.investment.version}</strong></div>
          </div>
        `:""}
        <h3>${i("module")}模块构成</h3>
        <div class="detail-chip-grid">${s.modules.map(a=>`<span>${i("module")}${a}</span>`).join("")}</div>
        <h3>${i("component")}标准组件</h3>
        <div class="detail-chip-grid">${s.components.map(a=>`<span>${i("component")}${a}</span>`).join("")}</div>
        <h3>${i("person")}组成人员贡献度</h3>
        <div class="contribution-list">
          ${s.contributionPeople.map(a=>`<div style="--w:${a.ratio}%"><b>${a.name}</b><span>${a.role}</span><small>${a.code} · ${a.status}</small><strong>${a.effortDays}人天 · ${a.cost}</strong><i></i><em>${a.ratio}%</em></div>`).join("")}
        </div>
        <h3>${i("timeline")}演进动线</h3>
        <div class="detail-timeline">${s.evolution.map(a=>`<span>${a}</span>`).join("")}</div>
        <h3>${i("image")}现场图片</h3>
        <div class="detail-previews">
          ${s.previews.map((a,t)=>`<img src="${a}" alt="${s.title}现场图${t+1}">`).join("")}
        </div>
        ${s.uiGallery?Ss(s):""}
      </section>
      <aside class="case-detail-side">
        <h3>${i("owner")}组织责任</h3>
        <div class="detail-owner-list">
          ${s.owners.map(a=>wa(a[0],a[1],a[2])).join("")}
        </div>
        ${T(s)}
      </aside>
    </div>
  `}function D(s,a=""){var o,n;const t=v("detailModal"),e=v("detailContent");if(s){const c=g.get(a);if(!c)return;e.innerHTML=Ha(c)}t.classList.toggle("is-open",s),t.setAttribute("aria-hidden",String(!s)),document.body.classList.toggle("modal-open",s||((o=v("chartModal"))==null?void 0:o.classList.contains("is-open"))||((n=v("versionModal"))==null?void 0:n.classList.contains("is-open")))}function Ba(){const s=v("chartModal"),a=v("chartToggle"),t=v("chartClose"),e=v("versionModal"),o=v("versionToggle"),n=v("versionClose"),c=d=>{var m;s.classList.toggle("is-open",d),s.setAttribute("aria-hidden",String(!d)),a.setAttribute("aria-expanded",String(d)),document.body.classList.toggle("modal-open",d||((m=v("detailModal"))==null?void 0:m.classList.contains("is-open"))||(e==null?void 0:e.classList.contains("is-open")))},l=d=>{var m;e.classList.toggle("is-open",d),e.setAttribute("aria-hidden",String(!d)),o.setAttribute("aria-expanded",String(d)),document.body.classList.toggle("modal-open",d||((m=v("detailModal"))==null?void 0:m.classList.contains("is-open"))||(s==null?void 0:s.classList.contains("is-open")))};a.addEventListener("click",()=>c(!s.classList.contains("is-open"))),t.addEventListener("click",()=>c(!1)),s.addEventListener("click",d=>{d.target===s&&c(!1)}),o.addEventListener("click",()=>l(!e.classList.contains("is-open"))),n.addEventListener("click",()=>l(!1)),e.addEventListener("click",d=>{d.target===e&&l(!1)}),e.addEventListener("click",d=>{const m=d.target.closest(".version-item");if(!m||!e.contains(m))return;const w=M.history.find(y=>y.version===m.dataset.version);w&&(v("versionDetail").innerHTML=hs(w),e.querySelectorAll(".version-item").forEach(y=>{const V=y===m;y.classList.toggle("is-active",V),y.setAttribute("aria-selected",String(V))}))}),e.addEventListener("click",d=>{const m=d.target.closest(".version-system-btn");if(!m||!e.contains(m))return;const w=m.dataset.systemUrl;w&&window.open(aa(w),"_blank","noopener,noreferrer")}),document.addEventListener("keydown",d=>{d.key==="Escape"&&(c(!1),D(!1),l(!1))}),v("detailClose").addEventListener("click",()=>D(!1)),v("detailModal").addEventListener("click",d=>{d.target===v("detailModal")&&D(!1)}),document.addEventListener("click",d=>{const m=d.target.closest(".detail-trigger");m&&(d.stopPropagation(),d.preventDefault(),D(!0,m.dataset.detailKey))}),document.querySelectorAll(".scene img").forEach(d=>{d.addEventListener("error",()=>{d.closest(".device-card").classList.add("is-missing"),d.remove()})});const p=v("globalSearch"),u=v("searchBox"),h=v("clearSearch"),$=document.querySelector(".search-submit"),f=v("searchCount"),j=()=>{const d=p.value.trim().toLowerCase(),m=[...document.querySelectorAll(".search-item")];if(document.body.classList.toggle("search-active",!!d),u.classList.toggle("has-value",!!d),!d){m.forEach(y=>y.classList.remove("is-match")),f.textContent="";return}let w=0;m.forEach(y=>{const V=(y.dataset.search||y.textContent).toLowerCase().includes(d);y.classList.toggle("is-match",V),V&&(w+=1)}),f.textContent=w?`命中 ${w}`:"未命中"};p.addEventListener("input",j),$.addEventListener("click",()=>{j(),p.focus()}),h.addEventListener("click",()=>{p.value="",j(),p.focus()});const S=()=>{const d=new Date;v("clock").textContent=[d.getHours(),d.getMinutes(),d.getSeconds()].map(m=>String(m).padStart(2,"0")).join(":")};S(),setInterval(S,1e3)}ea();na();ja();Ba();
