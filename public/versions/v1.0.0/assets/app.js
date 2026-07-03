(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();const R=[["platform","汉脑工业联网平台",100],["platform","内网工业互联网平台",200],["platform","AI安全数据底座",0],["platform","企业级工业底座",0]],B=[["ERP","经营","V4.2",9,6],["MES","制造","V3.8",11,8],["WMS","仓储","V3.1",7,5],["PLM","研发","V2.9",5,4],["PDM","数据","V2.6",4,4],["MRP","物料","V2.4",3,3],["APS","排程","V2.2",6,4],["IES","能效","V1.8",4,3],["CRM","增长","V3.0",5,4]],O=[["达铃","协同","V2.1",2,1],["考勤","人事","V3.4",3,2],["餐饮","后勤","V2.8",2,1],["薪安","薪资","V1.9",2,2],["万加","服务","V2.2",1,1],["鉴富宝","核验","V1.6",2,1],["标识解析","追溯","V3.0",4,3],["优羽","协同","V1.8",1,1],["CRM","增长","V2.7",3,2],["工资条","薪酬","V1.5",1,1],["e维保","维保","V2.4",2,2],["扩展","生态","V1.0",1,1]],F=[{name:"象山锦秀服装产业大脑",industry:"纺织服装",sourceYear:"1999",status:"normal",manager:"HN-PM-001",engineer:"HN-TECH-001",managerState:"active",engineerState:"active",patents:8,copyrights:6,calls:"12.8万",modules:["ERP经营","MES制造","WMS仓储","质量追溯","电子看板"],components:["工位机","手持机","RFID","电子看板"],evolution:["1999 服装管理软件","2012 生产协同平台","2020 产业大脑","2026 无形资产沉淀"],evidence:["项目合同","蓝图方案","验收资料","研发工时","软著证书"],access:["sales","presales","tech"],intro:"从早期服装项目演进为产业大脑案例，沉淀生产、仓储、质量和设备联动组件。"},{name:"五金离散制造数字工厂",industry:"五金",sourceYear:"2016",status:"risk",manager:"HN-PM-002",engineer:"HN-TECH-002",managerState:"new",engineerState:"active",patents:5,copyrights:4,calls:"8.6万",modules:["MES制造","APS排程","设备采集","质量检测"],components:["工业相机","边缘计算机","机械臂"],evolution:["2016 车间联网","2020 设备数据平台","2024 数字工厂","2026 资产治理"],evidence:["需求规格说明","设备接口表","现场照片","专利台账"],access:["sales","presales","tech"],intro:"覆盖离散制造排程、采集、质检和设备联动，当前需要补齐双负责人机制。"},{name:"物流装备智能仓储案例",industry:"物流装备",sourceYear:"2020",status:"normal",manager:"HN-PM-003",engineer:"HN-TECH-003",managerState:"active",engineerState:"active",patents:7,copyrights:5,calls:"10.2万",modules:["WMS仓储","AGV调度","立体库管理","设备监控"],components:["AGV","提升机","穿梭车","立体库"],evolution:["2020 仓储数字化","2022 AGV接入","2025 立体库联动","2026 资料归档"],evidence:["项目合同","设备清单","调试记录","验收报告"],access:["sales","presales","tech"],intro:"以仓储和物流装备为核心，形成软件、硬件、设备与项目凭证的完整资料归档。"}],w=[["专利台账",0,0],["软著沉淀",0,0],["案例资料",0,0]],T=[["纺织服装",[["男装",2,1],["女装",3,2],["裘皮",1,1],["皮革",1,1],["针织运动",4,3],["羊毛衫",2,1],["牛仔",2,2],["羽绒服",3,2],["童装",1,1],["林业",1,1],["无纺布",2,1],["扩展",0,0]]],["五金",w],["医疗",w],["汽车零部件",w],["童车",w],["电子电气",w],["食品",w],["塑料",w],["政府类",w],["物流装备",w]],c=s=>`./assets/photos/visuals/${s}`,es={象山锦秀服装产业大脑:{hero:c("case-xiangshan.jpg"),card:[c("case-xiangshan-line.jpg"),c("case-xiangshan-dashboard.jpg")],previews:[c("case-xiangshan.jpg"),c("case-xiangshan-line.jpg"),c("case-xiangshan-dashboard.jpg")],detail:"以服装智能车间、生产看板和产业大脑图像为主视觉，突出象山锦秀服装从生产协同到产业数据沉淀的演进。"},五金离散制造数字工厂:{hero:c("case-hardware.jpg"),card:[c("case-hardware-line.jpg"),c("case-hardware-quality.jpg")],previews:[c("case-hardware.jpg"),c("case-hardware-line.jpg"),c("case-hardware-quality.jpg")],detail:"以五金加工产线、设备联网和视觉质检图像呈现离散制造数字工厂的现场特征。"},物流装备智能仓储案例:{hero:c("case-warehouse.jpg"),card:[c("case-warehouse-agv.jpg"),c("case-warehouse-control.jpg")],previews:[c("case-warehouse.jpg"),c("case-warehouse-agv.jpg"),c("case-warehouse-control.jpg")],detail:"以智能仓储、AGV调度和WMS控制界面作为主视觉，体现物流装备软硬件联动。"}},ns=[["男装","industry-menswear.jpg","男装生产线与版型协同场景，适配订单排产、工序跟踪和质检归档。"],["女装","industry-womenswear.jpg","女装制衣与柔性生产场景，突出款式变化、批次管理和生产协同。"],["裘皮","industry-fur.jpg","裘皮加工与高价值物料管理场景，适配质量追溯和工艺沉淀。"],["皮革","industry-leather.jpg","皮革制品生产与工序流转场景，强调物料批次、裁剪和成品质检。"],["针织运动","industry-knit-sports.jpg","针织运动服生产场景，适配快速订单、设备联动和过程看板。"],["羊毛衫","industry-wool-sweater.jpg","羊毛衫针织生产场景，适配织造、套口、整烫和成品追溯。"],["牛仔","industry-denim.jpg","牛仔服装生产场景，覆盖洗水、缝制、质检和批次追溯。"],["羽绒服","industry-down-jacket.jpg","羽绒服制造场景，突出充绒、缝制、防钻绒检测和订单交付。"],["童装","industry-kidswear.jpg","童装生产场景，适配多尺码、多颜色和安全标准资料沉淀。"],["林业","industry-forestry.jpg","林业数字化管理场景，适配资源台账、巡检记录和数据看板。"],["无纺布","industry-nonwoven.jpg","无纺布产线场景，适配连续制造、能耗监控和质量追溯。"],["扩展","industry-expansion.jpg","行业扩展应用场景，作为新行业、新客户和新组件接入入口。"]].map(([s,a,e])=>[`纺织服装/${s}`,{image:c(a),description:e}]),is={五金:["industry-hardware-ledger.jpg","industry-hardware-copyright.jpg","industry-hardware-case.jpg"],医疗:["industry-medical-ledger.jpg","industry-medical-copyright.jpg","industry-medical-case.jpg"],汽车零部件:["industry-auto-ledger.jpg","industry-auto-copyright.jpg","industry-auto-case.jpg"],童车:["industry-stroller-ledger.jpg","industry-stroller-copyright.jpg","industry-stroller-case.jpg"],电子电气:["industry-electronics-ledger.jpg","industry-electronics-copyright.jpg","industry-electronics-case.jpg"],食品:["industry-food-ledger.jpg","industry-food-copyright.jpg","industry-food-case.jpg"],塑料:["industry-plastic-ledger.jpg","industry-plastic-copyright.jpg","industry-plastic-case.jpg"],政府类:["industry-government-ledger.png","industry-government-copyright.jpg","industry-government-case.jpg"],物流装备:["industry-logistics-ledger.png","industry-logistics-copyright.jpg","industry-logistics-case.png"]},os=Object.entries(is).flatMap(([s,a])=>w.map(([e],t)=>[`${s}/${e}`,{image:c(a[t]),description:`${s}${e}内容用于承接案例、知识产权、软件著作权和行业资料归档。`}])),E=Object.fromEntries([...ns,...os]),G={ERP:{image:c("software-erp.jpg"),previews:[c("software-erp.jpg"),c("industry-government-copyright.jpg"),c("industry-food-copyright.jpg")],description:"经营管理、订单合同、财务协同与经营指标看板。"},MES:{image:c("software-mes.jpg"),previews:[c("software-mes.jpg"),c("case-hardware-line.jpg"),c("case-xiangshan-line.jpg")],description:"生产制造、工序报工、质量追溯与现场执行管理。"},WMS:{image:c("software-wms.jpg"),previews:[c("software-wms.jpg"),c("case-warehouse.jpg"),c("case-warehouse-agv.jpg")],description:"仓储收发、库存库位、条码作业与智能仓储联动。"},PLM:{image:c("software-plm.jpg"),previews:[c("software-plm.jpg"),c("industry-auto-copyright.jpg"),c("industry-medical-copyright.jpg")],description:"研发过程、产品结构、变更评审与生命周期资料沉淀。"},PDM:{image:c("software-pdm.jpg"),previews:[c("software-pdm.jpg"),c("industry-electronics-copyright.jpg"),c("industry-stroller-copyright.jpg")],description:"图文档、BOM、版本和研发数据统一管理。"},MRP:{image:c("software-mrp.jpg"),previews:[c("software-mrp.jpg"),c("industry-plastic-copyright.jpg"),c("industry-nonwoven.jpg")],description:"物料需求计划、采购建议、库存占用和交期测算。"},APS:{image:c("software-aps-official-top.png"),previews:[c("software-aps-official-top.png"),c("software-aps-official-01.png"),c("software-aps-official-02.png"),c("software-aps-official-03.png"),c("software-aps-official-04.png")],description:"汉脑APS智能排产系统，采用人工智能算法进行计划推演、计划排产、计划发布和计划执行。"},IES:{image:c("software-ies.jpg"),previews:[c("software-ies.jpg"),c("industry-logistics-ledger.png"),c("industry-hardware-ledger.jpg")],description:"能源采集、能耗分析、设备效率和节能指标看板。"},CRM:{image:c("software-crm.jpg"),previews:[c("software-crm.jpg"),c("industry-government-case.jpg"),c("saas-crm.jpg")],description:"客户线索、商机跟进、合同回款和服务闭环。"}},U=Object.fromEntries([["达铃","saas-daling.jpg","企业协同、即时沟通、任务通知和组织在线。"],["考勤","saas-attendance.jpg","人员考勤、排班、请假和异常处理。"],["餐饮","saas-catering.jpg","后勤餐饮、订餐、取餐和消费记录管理。"],["薪安","saas-xinan.jpg","薪资核算、薪酬发放、个税和人事数据同步。"],["万加","saas-wanjia.png","服务工单、客户反馈、处理进度和服务评价。"],["鉴富宝","saas-jianfubao.png","身份核验、风控校验、授权记录和风险留痕。"],["标识解析","saas-identifier.jpg","标识注册、解析追溯、数据采集和产业链协同。"],["优羽","saas-youyu.jpg","移动协同、轻量审批、消息触达和团队任务。"],["CRM","saas-crm.jpg","SaaS化客户管理、线索转化、商机跟进和续费服务。"],["工资条","saas-payslip.jpg","电子工资条、薪酬确认、消息送达和员工自助查询。"],["e维保","saas-maintenance.jpg","设备报修、维保计划、巡检记录和工单闭环。"],["扩展","saas-expansion.jpg","SaaS扩展应用、客户订阅、生态接入和能力编排。"]].map(([s,a,e])=>[s,{image:c(a),description:e}])),rs=[["copyright","软著","本月登记",8],["patent","专利","授权归集",12],["trademark","商标","品牌关联",6],["document","案例","素材沉淀",9]],W=[["工位机","现场终端","./assets/photos/workstation.jpg"],["手持机","移动作业","./assets/photos/handheld.jpg"],["打印机","标签单据","./assets/photos/printer.jpg"],["广告机","信息发布","./assets/photos/ad-screen.jpg"],["取餐机","自助终端","./assets/photos/meal-kiosk.jpg"],["RFID","自动识别","./assets/photos/rfid.jpg"],["边缘计算机","现场网关","./assets/photos/edge-computer.jpg"],["硬件扩展","预留接入","./assets/photos/hardware-plus.jpg"]],K=[["无源相控阵出入库管控装置","入库管控","./assets/photos/phased-array.jpg"],["AGV","智能物流","./assets/photos/agv.jpg"],["提升机","仓储提升","./assets/photos/lifter.jpg"],["穿梭车","库内搬运","./assets/photos/shuttle.jpg"],["机械臂","自动作业","./assets/photos/robot-arm.jpg"],["立体库","仓储系统","./assets/photos/warehouse.jpg"],["视觉检测设备","质量检测","./assets/photos/vision-inspection.jpg"],["工业相机","图像采集","./assets/photos/industrial-camera.jpg"],["电子看板","现场展示","./assets/photos/display-board.jpg"],["装备扩展","预留接入","./assets/photos/equipment-plus.jpg"]],X=[["知识产权",[["商标",18,2,1],["专利",41,5,2],["软著",31,3,1]]],["品牌渠道",[["网站",3,1,0],["公众号",5,1,0],["域名",8,2,1],["证书",6,1,2],["外购软件",9,2,1],["AI工具",14,3,1],["插件",22,4,2]]],["宣传资产",[["宣传资料",36],["展会资料",11],["文案",58],["企业照片",126],["企业视频",18]]],["企业档案",[["应用表单",17],["合同模板",23],["企业资料",29],["申报文件",32],["规章制度",16],["荣誉资质",27],["证照",15],["大事记",42]]]],cs={知识产权:{商标:[["汉脑科技","第42类软件服务商标","2024-09-18","已注册"],["汉脑工业互联网","工业软件品牌标识","2025-03-12","已受理"],["HNAO","英文品牌标识","2025-11-26","已注册"]],专利:[["一种服装生产工位数据采集方法","发明专利","2024-12-20","已授权"],["多工厂排产协同数据处理装置","实用新型","2025-06-18","已授权"],["基于 RFID 的仓储追溯设备","实用新型","2025-10-09","已授权"]],软著:[["汉脑 MES 生产执行系统 V3.8","生产制造","2025-08-16","已登记"],["汉脑 WMS 仓储管理系统 V3.1","仓储物流","2025-09-22","已登记"],["汉脑 APS 高级排产系统 V2.2","计划排程","2025-11-18","已登记"]],授权证书:[["软件产品证书","ERP/MES/WMS 产品线","2025-04-28","有效"],["信息安全管理证书","研发与运维管理","2025-07-15","有效"],["工业互联网服务能力证书","平台与集成服务","2025-12-06","有效"]],申报中:[["工位机报工交互方法","发明专利","2026-03-22","申报中"],["产业大脑资产治理平台","软著","2026-04-18","材料提交"],["设备状态看板可视化系统","软著","2026-05-09","受理中"]]},品牌渠道:{网站:[["汉脑科技官网","https://www.hnao.cn","公司品牌、产品介绍、案例展示","运行中"],["产品中心 APS 页面","https://www.hnao.cn/product/aps","APS 产品介绍与线索承接","运行中"],["无形资产工作台","https://fanciful-bubblegum-81c4af.netlify.app/","资产展示与内部汇报","运行中"]],公众号:[["汉脑科技","企业服务号","品牌新闻、产品动态","运营中"],["汉脑工业互联网","行业内容号","解决方案、案例文章","运营中"],["汉脑数字工厂","客户服务号","项目交付、培训通知","运营中"],["达铃协同","SaaS 产品号","协同办公与移动应用","运营中"],["薪安服务","SaaS 服务号","薪资、考勤与员工服务","运营中"]],域名:[["hnao.cn","主官网域名","2026-11-18","已备案"],["hnao.com.cn","品牌保护域名","2026-09-30","已备案"],["hnao.net","技术服务备用域名","2026-08-12","已持有"],["hanoai.cn","AI 产品线域名","2027-01-05","已持有"],["daling.cn","达铃产品域名","2026-10-26","已备案"],["xinan-saas.cn","薪安产品域名","2026-12-03","已持有"],["industrybrain.cn","产业大脑专题域名","2027-02-14","已持有"],["factoryos.cn","数字工厂产品域名","2026-07-21","已持有"]],证书:[["ICP备案主体证书","官网与产品站","2025-05-16","有效"],["SSL 通配符证书","*.hnao.cn","2026-04-30","有效"],["等保备案回执","项目管理与资产平台","2025-12-20","有效"],["软件企业证书","企业资质","2025-09-18","有效"]],外购软件:[["Adobe Creative Cloud","宣传图、视频、品牌物料制作","2026-01-12","年度授权"],["Axure RP","产品原型与需求评审","2025-12-01","年度授权"],["JetBrains All Products","研发 IDE","2026-02-28","年度授权"],["Navicat Premium","数据库管理","2025-11-20","授权中"],["OmniPlan","项目计划与排期","2025-10-10","授权中"],["WPS 商业版","文档、表格、汇报材料","2026-03-31","授权中"]],AI工具:[["Codex","代码生成、页面修改、资料整理","2026-06-30","使用中"],["ChatGPT Team","方案撰写、需求分析、知识检索","2026-05-18","使用中"],["通义千问","中文资料整理与行业内容生成","2026-04-22","使用中"],["Kimi","长文档阅读、会议纪要整理","2026-04-09","使用中"],["即梦 AI","宣传素材图生成","2026-03-15","使用中"],["剪映 AI","企业视频剪辑与字幕","2026-02-26","使用中"]],插件:[["Vite","单页应用构建","前端工程","使用中"],["Lucide Icons","页面图标体系","UI 组件","使用中"],["ESBuild","构建加速","前端工程","使用中"],["Browser 控制插件","本地页面验证","测试验证","使用中"],["Chrome 控制插件","浏览器调试","测试验证","备用"],["PDF 工具插件","资料 PDF 读取与生成","资料治理","备用"]]},宣传资产:{宣传资料:[["汉脑科技公司介绍 PPT","品牌介绍","2026-01-18","已归档"],["数字工厂解决方案手册","售前资料","2026-03-12","已归档"],["工业互联网平台白皮书","行业资料","2025-12-08","已归档"]],展会资料:[["服装数字工厂展板","展会海报","2025-09-20","已归档"],["智能制造展产品单页","宣传单页","2025-10-16","已归档"],["产业大脑演示脚本","现场讲解","2026-04-28","已归档"]],文案:[["官网首页品牌文案","网站内容","2026-02-09","已发布"],["APS 产品介绍文案","产品页面","2026-03-06","已发布"],["SaaS 应用矩阵文案","产品资料","2026-05-21","已归档"]],企业照片:[["办公室环境照片","企业形象","2025-11-19","已归档"],["项目实施现场照片","案例资料","2026-01-14","已归档"],["设备联调现场照片","硬件资料","2026-04-10","已归档"]],企业视频:[["汉脑科技宣传片","品牌视频","2025-12-30","已归档"],["智能工厂演示视频","方案视频","2026-03-18","已归档"],["工位机报工演示视频","产品视频","2026-05-11","已归档"]]},企业档案:{应用表单:[["项目立项申请表","项目管理","2026-01-05","已归档"],["客户需求确认表","售前交付","2026-02-12","已归档"],["上线验收确认表","实施交付","2026-04-22","已归档"]],合同模板:[["软件实施服务合同模板","销售合同","2025-12-01","已启用"],["SaaS 订阅服务协议","订阅合同","2026-01-20","已启用"],["硬件设备采购合同模板","采购合同","2026-03-08","已启用"]],企业资料:[["营业执照扫描件","主体资料","2026-01-02","有效"],["开户许可证资料","财务资料","2026-01-02","有效"],["公司介绍标准版","对外资料","2026-04-16","已更新"]],申报文件:[["高新技术企业申报材料","资质申报","2025-09-26","已归档"],["软件企业评估材料","资质申报","2025-11-15","已归档"],["工业互联网服务商申报材料","资质申报","2026-03-30","已归档"]],规章制度:[["研发资料归档制度","研发管理","2026-02-01","执行中"],["知识产权管理制度","资产治理","2026-02-15","执行中"],["信息安全管理制度","安全管理","2026-03-01","执行中"]],荣誉资质:[["高新技术企业证书","企业资质","2025-12-18","有效"],["软件企业证书","企业资质","2025-09-18","有效"],["优秀工业互联网服务商","荣誉证书","2026-01-25","有效"]],证照:[["营业执照","企业证照","长期","有效"],["开户许可证","财务证照","长期","有效"],["社保登记资料","人事证照","2026-01-08","有效"]],大事记:[["1999 服装行业软件项目启动","历史资产","1999-06-18","已归档"],["2020 产业大脑项目建设","案例资产","2020-09-12","已归档"],["2026 无形资产工作台上线","资产治理","2026-06-30","已归档"]]}},Y={"HN-PM-001":{name:"杜英杰",role:"产品经理",department:"产品与解决方案部",status:"active",assets:["象山锦秀服装产业大脑","服装行业应用组件"],note:"负责服装行业产品规划、资料归档和客户价值梳理。"},"HN-TECH-001":{name:"艾总",role:"技术负责人",department:"工业软件研发部",status:"active",assets:["MES制造","WMS仓储","电子看板"],note:"负责核心模块架构、接口联调和版本发布。"},"HN-PM-002":{name:"冯小燕",role:"产品经理",department:"行业应用部",status:"new",assets:["五金离散制造数字工厂"],note:"新增负责人，正在补齐项目证据链和知识产权归属资料。"},"HN-TECH-002":{name:"秦步日",role:"技术负责人",department:"现场交付部",status:"departed",assets:["设备采集","质量检测"],note:"已离职，涉及接口文档、设备协议和现场调试记录需重点交接。"},"HN-PM-003":{name:"武文豪",role:"产品经理",department:"物流装备事业部",status:"active",assets:["物流装备智能仓储案例"],note:"负责智能仓储案例、客户资料和设备清单沉淀。"},"HN-TECH-003":{name:"陈良",role:"技术负责人",department:"智能装备研发部",status:"active",assets:["AGV调度","立体库管理","设备监控"],note:"负责仓储装备联动、任务调度和设备监控能力。"}},ds=[["知识产权",[["商标",18],["专利",41],["软著",31],["授权证书",6],["申报中",8]]],["品牌渠道",[["网站",3],["公众号",5],["域名",8],["证书",6],["外购软件",9],["AI工具",14],["插件",22]]],["企业档案",[["应用表单",17],["合同模板",23],["企业资料",29],["申报文件",32],["规章制度",16],["荣誉资质",27],["证照",15],["大事记",42]]],["宣传资料",[["宣传册",36],["展会资料",11],["文案",58],["企业照片",126],["方案PPT",24],["客户案例",18]]]],ls={patent:{label:"专利",items:[["HN-PAT-2020-001","服装生产数据联动方法","象山锦秀服装产业大脑","2020-09-18","已授权"],["HN-PAT-2021-004","设备采集与异常预警装置","五金离散制造数字工厂","2021-12-06","证书归档"],["HN-PAT-2024-007","智能仓储任务调度方法","物流装备智能仓储案例","2024-05-22","已授权"]]},copyright:{label:"软著",items:[["HN-SR-2019-ERP","汉脑ERP经营管理软件","ERP","2019-08-12","已登记"],["HN-SR-2021-MES","汉脑MES制造执行软件","MES","2021-04-20","已登记"],["HN-SR-2024-APS","汉脑APS智能排产系统","APS","2024-10-16","已登记"]]}},Q={ERP:{costs:[["累计投入","286万"],["开发费","118万"],["人工费","132万"],["实施运维","36万"]],hours:[["研发工时","5,420h"],["测试工时","1,180h"],["实施工时","2,360h"]],versions:[["V4.2","2025-11-18","经营指标、合同回款、客户台账增强"],["V3.6","2024-06-12","财务协同与订单流转优化"],["V2.8","2022-09-26","基础经营模块标准化"]],components:["客户台账","合同回款","经营看板","主数据接口"]},MES:{costs:[["累计投入","364万"],["开发费","156万"],["人工费","172万"],["现场调试","36万"]],hours:[["研发工时","6,880h"],["测试工时","1,520h"],["实施工时","3,140h"]],versions:[["V3.8","2025-12-08","工序报工、质量追溯和看板联动"],["V3.1","2024-03-21","设备采集与异常处理"],["V2.5","2022-07-15","车间任务流标准化"]],components:["工序报工","质量追溯","设备采集","电子工票"]},WMS:{costs:[["累计投入","238万"],["开发费","96万"],["人工费","108万"],["设备联调","34万"]],hours:[["研发工时","4,260h"],["测试工时","960h"],["实施工时","2,780h"]],versions:[["V3.1","2025-08-28","库位、条码和AGV任务联动"],["V2.7","2023-12-19","收发存标准流程"],["V2.0","2021-10-11","基础仓储台账"]],components:["库位管理","条码作业","AGV接口","库存看板"]},APS:{costs:[["累计投入","326万"],["算法开发","142万"],["人工费","146万"],["排产模型","38万"]],hours:[["研发工时","5,960h"],["测试工时","1,240h"],["实施工时","2,180h"]],versions:[["V2.2","2026-03-10","计划推演、计划排产、计划发布和计划执行"],["V1.8","2025-05-23","插单、撤单、改单调度"],["V1.2","2024-01-09","订单交期推演"]],components:["计划推演","约束排程","工位任务发布","产能日历"]},达铃:{costs:[["累计投入","118万"],["开发费","46万"],["人工费","54万"],["SaaS运维","18万"]],hours:[["研发工时","2,180h"],["运维工时","620h"],["客户支持","480h"]],versions:[["V2.1","2025-09-05","消息协同、任务通知和组织在线"],["V1.7","2024-08-20","移动端提醒"],["V1.0","2023-04-18","基础协同"]],components:["消息中心","组织通讯录","任务提醒","移动端"]}},_=[{name:"手持机收发作业",device:"手持机",image:c("scene-handheld-warehouse.jpg"),scene:"仓库收货、发货、盘点、移库",role:"仓管员",output:"扫码记录、库存异动、盘点差异表",docs:["手持机作业SOP","WMS扫码操作说明","盘点模板"]},{name:"工位机生产报工",device:"工位机",image:c("scene-workstation-reporting-upload.png"),scene:"缝制工位、组装工位、质检工位",role:"车间员工",output:"工序报工、工时记录、质量异常",docs:["工位机报工说明","MES工序配置表","异常处理流程"]},{name:"大屏看板现场调度",device:"电子看板",image:c("scene-dashboard-dispatch.jpg"),scene:"车间产线、仓库月台、管理驾驶舱",role:"车间主管",output:"产量达成、异常预警、交付风险",docs:["看板指标口径","大屏部署说明","班组日报模板"]},{name:"RFID批次追溯",device:"RFID",image:c("scene-rfid-trace.jpg"),scene:"裁片流转、吊挂绑定、成衣入库",role:"物料员",output:"批次追溯、流转节点、异常定位",docs:["RFID绑定规则","追溯字段说明","标签打印模板"]}],S={totals:[["累计投入","1,846万"],["产品开发费","742万"],["人工费","816万"],["累计工时","38,420h"],["资料治理费","86万"],["知识产权费","54万"],["硬件样机费","92万"],["云资源费","56万"]],distribution:[["软件产品",38],["SaaS应用",18],["行业案例",17],["资料资产",11],["硬件装备",10],["知识产权",6]],rankings:[["MES","364万",100],["APS","326万",90],["ERP","286万",79],["WMS","238万",65],["PLM","168万",46],["达铃","118万",32]],trend:[["2019",18],["2020",32],["2021",48],["2022",56],["2023",68],["2024",76],["2025",84],["2026",92]],costItems:[["开发投入","742万",40],["人工费用","816万",44],["实施交付","196万",11],["运维云资源","92万",5]],workHours:[["研发","21,640h",56],["测试","5,420h",14],["实施","8,960h",23],["运维","2,400h",7]],deposits:[["复用组件","86个"],["项目证据","214份"],["版本记录","43条"],["专利软著","72项"],["场景资料","38套"],["客户案例","18个"]]},H={currentVersion:"v1.0.0",history:[{version:"v1.0.2",date:"2026-07-03",title:"当前资产展示与分类交互优化版",status:"最新版本",systemUrl:"/versions/v1.0.2/index.html",modules:["顶部导航","公司资料","案例资产","行业内容","产品矩阵","场景运营库","资产治理"],changes:["公司资料按对外使用、对内管理重新分类展示，保留资料详情查看能力。","顶部搜索、资产概览和分类导航优化为更清晰的入口样式。","案例资产补充负责人岗位、员工工位和预警状态展示，并优化详情入口位置。","行业内容、产品矩阵、SaaS应用、场景运营库、智能硬件和智能设备增加统计数与更多弹窗。","资产治理入口补充查看详情提示，方便继续查看访问日志、生命周期和闲置资产等明细。"]},{version:"v1.0.1",date:"2026-07-02",title:"资产展示与治理看板优化版",status:"历史版本",systemUrl:"/versions/v1.0.1/index.html",modules:["顶部导航","公司资料","案例资产","资产概览","待办提醒"],changes:["顶部分类导航调整为网站式展示，移除数量展示，提升页面浏览入口清晰度。","公司资料分类改为截图样式的四行浅色容器与胶囊入口，删除知识产权、品牌渠道、企业档案、宣传资料分组文字。","案例资产关联专利、人员及成本，形成价值脉络，并在案例详情中展示UI图和访问地址。","资产概览新增访问日志、生命周期、低利用率资产和资产闲置情况明细。","右侧待办提醒简化为统计摘要，网站、证书、宽带等续费明细改为弹窗查看。"]},{version:"v1.0.0",date:"2026-07-01",title:"无形资产工作台基础版",status:"当前版本",systemUrl:"/versions/v1.0.0/index.html",modules:["资产概览","公司资料","案例资产","产品矩阵","场景运营库"],changes:["建立汉脑无形资产工作台首页，统一展示案例、行业内容、核心平台、产品矩阵、SaaS应用和设备资产。","新增资产概览与成本看板，展示投入费用、工时、资产沉淀趋势和成本结构。","公司资料支持知识产权、品牌渠道、宣传资产、企业档案等资料清单查看。","产品、行业、SaaS和案例资产支持专利/软著详情入口。"]},{version:"v0.9.0",date:"2026-06-30",title:"资产治理与资料清单完善",status:"历史版本",systemUrl:"",modules:["公司资料","知识产权","品牌渠道","详情弹窗"],changes:["补充品牌渠道的网站、公众号、域名、证书、外购软件、AI工具和插件清单。","完善知识产权、宣传资产、企业档案的具体内容台账。","优化右侧公司资料排序和资产治理展示。"]},{version:"v0.8.0",date:"2026-06-29",title:"成本看板与图形概览升级",status:"历史版本",systemUrl:"",modules:["资产概览","成本看板","图表样式"],changes:["资产概览弹窗升级为全屏成本看板。","新增费用构成、公司构成、产品投入排行和累计沉淀趋势。","保留原产品资产分布、行业覆盖指数、资料完成度和资产补齐进度图形。"]},{version:"v0.7.0",date:"2026-06-28",title:"案例与产品资产详情增强",status:"历史版本",systemUrl:"",modules:["案例资产","行业内容","产品矩阵","SaaS应用"],changes:["案例资产补充人员工号、责任人信息和离职提示。","产品详情补充版本历史、投入费用、工时和累计组件。","行业内容、产品矩阵、SaaS应用补充专利和软著入口。"]}]},ps={platform:"icon-pingtai",software:"icon-ruanjian",saas:"icon-yunfuwu",patent:"icon-zhuanli",copyright:"icon-banquan",trademark:"icon-shangbiao",document:"icon-wendang",industry:"icon-hangye",hardware:"icon-yingjian",equipment:"icon-shebei",search:"icon-sousuo",chart:"icon-tongji",arrow:"icon-youjiantou",close:"icon-guanbi",governance:"icon-zhili",task:"icon-renwu",channel:"icon-qudao",media:"icon-tupian",archive:"icon-dangan",detail:"icon-xiangqing",download:"icon-xiazai",play:"icon-bofang",customer:"icon-kehu",star:"icon-xingxing",tag:"icon-biaoqian",image:"icon-tupian",team:"icon-tuandui",solution:"icon-fangan",status:"icon-zhuangtai",calendar:"icon-rili",case:"icon-anli",component:"icon-zujian",module:"icon-mokuai",owner:"icon-fuzeren",risk:"icon-fengxian",evidence:"icon-zhengju",permission:"icon-quanxian",contract:"icon-hetong",blueprint:"icon-lantu",code:"icon-daima",subscribe:"icon-dingyue",timeline:"icon-shijianzhou",cost:"icon-chengben",person:"icon-renyuan",warning:"icon-yujing"},D={},vs={"icon-pingtai":'<path d="M4 5h16v10H4V5Zm2 2v6h12V7H6Zm1 10h10l1 2H6l1-2Z"/>',"icon-ruanjian":'<path d="M5 4h14a1 1 0 0 1 1 1v14H4V5a1 1 0 0 1 1-1Zm1 4h12V6H6v2Zm0 2v7h12v-7H6Zm2 2h3v3H8v-3Zm5 0h3v1.5h-3V12Zm0 2.5h3V16h-3v-1.5Z"/>',"icon-yunfuwu":'<path d="M8 18a5 5 0 0 1-.7-10A6 6 0 0 1 18.8 9.7 4.2 4.2 0 0 1 18 18H8Zm0-2h10a2.2 2.2 0 0 0 .2-4.4l-1.2-.1-.3-1.1A4 4 0 0 0 9 9.2l-.4.9-1 .1A3 3 0 0 0 8 16Z"/>',"icon-zhuanli":'<path d="M6 3h9l4 4v14H6V3Zm2 2v14h9V8h-3V5H8Zm2 6h5v2h-5v-2Zm0 4h5v2h-5v-2Z"/>',"icon-banquan":'<path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 2a7 7 0 1 1 0 14 7 7 0 0 1 0-14Zm.2 3.5c1.5 0 2.7.7 3.4 1.8l-1.7 1a2 2 0 1 0 0 2.4l1.7 1a4 4 0 1 1-3.4-6.2Z"/>',"icon-shangbiao":'<path d="M5 4h14v2H5V4Zm1 4h12l-1 12H7L6 8Zm3 2 .4 8h5.2l.4-8H9Zm1-2h4l1-3H9l1 3Z"/>',"icon-wendang":'<path d="M6 3h8l4 4v14H6V3Zm2 2v14h8V8h-3V5H8Zm2 6h4v2h-4v-2Zm0 4h4v2h-4v-2Z"/>',"icon-hangye":'<path d="M4 20V8l5-3v5l5-3v5l6-4v12H4Zm2-2h3v-5H6v5Zm5 0h3v-5h-3v5Zm5 0h2v-6l-2 1.4V18Z"/>',"icon-yingjian":'<path d="M7 7h10v10H7V7Zm2 2v6h6V9H9Zm-5 1h2v2H4v-2Zm0 4h2v2H4v-2Zm14-4h2v2h-2v-2Zm0 4h2v2h-2v-2ZM10 4h2v2h-2V4Zm4 0h2v2h-2V4Zm-4 14h2v2h-2v-2Zm4 0h2v2h-2v-2Z"/>',"icon-shebei":'<path d="M6 4h12v9H6V4Zm2 2v5h8V6H8Zm-1 9h10l2 5H5l2-5Zm1.3 2-.4 1h8.2l-.4-1H8.3Z"/>',"icon-sousuo":'<path d="M10.5 4a6.5 6.5 0 0 1 5.1 10.5l4 4-1.4 1.4-4-4A6.5 6.5 0 1 1 10.5 4Zm0 2a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z"/>',"icon-tongji":'<path d="M5 19h14v2H5V3h2v16Zm4-2H7v-6h2v6Zm4 0h-2V7h2v10Zm4 0h-2v-8h2v8Zm2-12-5 4-3-2.5L7.6 10 6.2 8.6 10.8 4l3.1 2.6L17.8 3 19 5Z"/>',"icon-youjiantou":'<path d="m9 5 7 7-7 7-1.4-1.4 5.6-5.6-5.6-5.6L9 5Z"/>',"icon-guanbi":'<path d="m6.4 5 5.6 5.6L17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6L6.4 19 5 17.6l5.6-5.6L5 6.4 6.4 5Z"/>',"icon-zhili":'<path d="M12 3 4 6v6c0 4.4 3.1 7.3 8 9 4.9-1.7 8-4.6 8-9V6l-8-3Zm0 2.2L18 7.4V12c0 3.1-2.1 5.3-6 6.9-3.9-1.6-6-3.8-6-6.9V7.4l6-2.2Zm-1 4.3h2V16h-2V9.5Zm0-3h2v2h-2v-2Z"/>',"icon-renwu":'<path d="M7 4h10v3h3v14H4V7h3V4Zm2 3h6V6H9v1ZM6 9v10h12V9H6Zm2 3h2v2H8v-2Zm4 .2h4v1.6h-4v-1.6ZM8 16h2v2H8v-2Zm4 .2h4v1.6h-4v-1.6Z"/>',"icon-qudao":'<path d="M4 5h6v6H4V5Zm2 2v2h2V7H6Zm8-2h6v6h-6V5Zm2 2v2h2V7h-2ZM4 15h6v6H4v-6Zm2 2v2h2v-2H6Zm9-1h2v2h3v2h-5v-4Zm-2-4h2v3h-2v-3Zm4 0h3v2h-3v-2Z"/>',"icon-tupian":'<path d="M5 5h14v14H5V5Zm2 2v10h10V7H7Zm1 8 3-4 2 2.5 1.4-1.7L17 15H8Zm7-7.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>',"icon-dangan":'<path d="M4 6h7l2 2h7v11H4V6Zm2 4v7h12v-7H6Zm0-2h5.2l-.8-1H6v1Z"/>',"icon-xiangqing":'<path d="M5 4h14v16H5V4Zm2 2v12h10V6H7Zm2 2h6v2H9V8Zm0 4h6v2H9v-2Zm0 4h4v1H9v-1Z"/>',"icon-xiazai":'<path d="M11 4h2v8l3-3 1.4 1.4L12 15.8l-5.4-5.4L8 9l3 3V4ZM5 18h14v2H5v-2Z"/>',"icon-bofang":'<path d="M8 5v14l11-7L8 5Zm2 3.6 5.2 3.4-5.2 3.4V8.6Z"/>',"icon-kehu":'<path d="M12 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-7 11a7 7 0 0 1 14 0h-2a5 5 0 0 0-10 0H5Z"/>',"icon-xingxing":'<path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z"/>',"icon-biaoqian":'<path d="M4 5h9l7 7-8 8-8-8V5Zm2 2v4.2l6 6 5.2-5.2-5-5H6Zm3 1a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>',"icon-tuandui":'<path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm8 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6ZM3 20a5 5 0 0 1 10 0H3Zm8.5-2.5A5 5 0 0 1 21 20h-6a7 7 0 0 0-3.5-2.5Z"/>',"icon-fangan":'<path d="M5 4h14v5H5V4Zm2 2v1h10V6H7Zm-2 5h6v9H5v-9Zm2 2v5h2v-5H7Zm6-2h6v9h-6v-9Zm2 2v5h2v-5h-2Z"/>',"icon-zhuangtai":'<path d="M12 4a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm-1 3h2v4h-2V9Zm0 5h2v2h-2v-2Z"/>',"icon-rili":'<path d="M7 3h2v2h6V3h2v2h3v16H4V5h3V3Zm11 7H6v9h12v-9ZM6 8h12V7H6v1Z"/>',"icon-anli":'<path d="M8 5V3h8v2h4v16H4V5h4Zm2 0h4V4h-4v1ZM6 7v12h12V7H6Zm2 4h8v2H8v-2Zm0 4h6v2H8v-2Z"/>',"icon-zujian":'<path d="M4 4h7v7H4V4Zm2 2v3h3V6H6Zm7-2h7v7h-7V4Zm2 2v3h3V6h-3ZM4 13h7v7H4v-7Zm2 2v3h3v-3H6Zm7-2h7v7h-7v-7Zm2 2v3h3v-3h-3Z"/>',"icon-mokuai":'<path d="m12 3 8 4v10l-8 4-8-4V7l8-4Zm0 2.2L7.2 7.6 12 10l4.8-2.4L12 5.2ZM6 9.2v6.6l5 2.5v-6.6L6 9.2Zm7 9.1 5-2.5V9.2l-5 2.5v6.6Z"/>',"icon-fuzeren":'<path d="M9 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-6 10a6 6 0 0 1 10.8-3.6L12.4 18A4 4 0 0 0 5 20H3Zm14.5.2-3.2-3.2 1.4-1.4 1.8 1.8 3.8-4 1.4 1.4-5.2 5.4Z"/>',"icon-fengxian":'<path d="M12 3 22 20H2L12 3Zm0 4L5.5 18h13L12 7Zm-1 4h2v4h-2v-4Zm0 5h2v2h-2v-2Z"/>',"icon-zhengju":'<path d="M7 3h10v18H7V3Zm2 2v14h6V5H9Zm1 2h4v2h-4V7Zm0 4h4v2h-4v-2Zm0 4h3v2h-3v-2Z"/>',"icon-quanxian":'<path d="M7 10V8a5 5 0 0 1 10 0v2h2v11H5V10h2Zm2 0h6V8a3 3 0 0 0-6 0v2Zm-2 2v7h10v-7H7Zm4 2h2v3h-2v-3Z"/>',"icon-hetong":'<path d="M6 3h12v18H6V3Zm2 2v14h8V5H8Zm2 3h4v2h-4V8Zm0 4h4v2h-4v-2Zm0 4h3v1h-3v-1Z"/>',"icon-lantu":'<path d="M4 4h16v16H4V4Zm2 2v12h12V6H6Zm2 2h3v3H8V8Zm5 0h3v2h-3V8Zm0 4h3v4h-3v-4ZM8 13h3v3H8v-3Z"/>',"icon-daima":'<path d="m8.6 8.4-3.6 3.6 3.6 3.6L7.2 17 2.2 12l5-5 1.4 1.4Zm6.8 0L16.8 7l5 5-5 5-1.4-1.4 3.6-3.6-3.6-3.6ZM11 19H9l4-14h2l-4 14Z"/>',"icon-dingyue":'<path d="M6 4h12v16l-6-3-6 3V4Zm2 2v10.8l4-2 4 2V6H8Zm2 3h4v2h-4V9Z"/>',"icon-shijianzhou":'<path d="M5 5h14v2H5V5Zm2 4h10v2H7V9Zm-2 4h14v2H5v-2Zm2 4h10v2H7v-2Z"/>',"icon-chengben":'<path d="M12 3a7 7 0 0 1 7 7c0 5-7 11-7 11S5 15 5 10a7 7 0 0 1 7-7Zm0 2a5 5 0 0 0-5 5c0 2.7 3 6.5 5 8.3 2-1.8 5-5.6 5-8.3a5 5 0 0 0-5-5Zm1 3h2v2h-2v5h-2v-5H9V8h2V6h2v2Z"/>',"icon-renyuan":'<path d="M12 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-7 12a7 7 0 0 1 14 0h-2a5 5 0 0 0-10 0H5Z"/>',"icon-yujing":'<path d="M12 3 22 21H2L12 3Zm0 4-6.6 12h13.2L12 7Zm-1 4h2v4h-2v-4Zm0 5h2v2h-2v-2Z"/>'};function hs(){if(document.getElementById("local-iconfont-symbols"))return;const s=document.createElementNS("http://www.w3.org/2000/svg","svg");s.id="local-iconfont-symbols",s.setAttribute("aria-hidden","true"),s.style.cssText="position:absolute;width:0;height:0;overflow:hidden",s.innerHTML=Object.entries(vs).map(([a,e])=>`<symbol id="${a}" viewBox="0 0 24 24">${e}</symbol>`).join(""),document.body.prepend(s)}function us(){hs()}function n(s,a=""){const e=ps[s]||s;return`
    <span class="icon-wrap icon-${s}" ${a?`aria-label="${a}"`:""}>
    <svg class="iconfont-svg" aria-hidden="true" data-fallback="${D[s]||""}">
      <use href="#${e}"></use>
    </svg>
    <span class="icon-fallback">${D[s]||""}</span>
    </span>
  `}us();const P=s=>s.join(" "),d=s=>document.getElementById(s),gs="./assets/brand/hannao-logo-transparent.png",b=new Map,m=["./assets/photos/workstation.jpg","./assets/photos/warehouse.jpg","./assets/photos/agv.jpg","./assets/photos/display-board.jpg","./assets/photos/vision-inspection.jpg","./assets/photos/industrial-camera.jpg"];function z(s,a,e,t=[]){const i=s.filter(o=>o&&!t.includes(o));return i.length?Array.from({length:e},(o,l)=>i[(a+l)%i.length]):m.slice(0,e)}function ms(s,a,e){var v;const t=s==="saas"?U:G,i=t[a];if(((v=i==null?void 0:i.previews)==null?void 0:v.length)>=3)return i.previews.slice(1,3);const o=i==null?void 0:i.image,l=s==="saas"?Object.values(t).map(h=>h.image):["./assets/photos/visuals/industry-government-copyright.jpg","./assets/photos/visuals/case-hardware-line.jpg","./assets/photos/visuals/case-warehouse.jpg","./assets/photos/visuals/industry-auto-copyright.jpg","./assets/photos/visuals/industry-electronics-copyright.jpg","./assets/photos/visuals/industry-plastic-copyright.jpg","./assets/photos/visuals/industry-logistics-ledger.png","./assets/photos/visuals/industry-government-case.jpg"];return z(l,e+1,2,[o])}function $s(s,a,e,t){var l;const i=(l=E[`${s}/${a}`])==null?void 0:l.image,o=Object.values(E).map(v=>v.image);return z(o,e*3+t+1,2,[i])}function x(s){return{active:"在岗",departed:"已离职",new:"新增"}[s]||"在岗"}function bs(s){const l=Math.max(...s.map(r=>r[1])),h=Math.max(1,l-0),$=s.map((r,p)=>{const g=48+p*584/(s.length-1),u=28+(l-r[1])*160/h;return[Number(g.toFixed(1)),Number(u.toFixed(1)),r[0],r[1]]}),f=(r=>r.map((p,g)=>{if(g===0)return`M ${p[0]} ${p[1]}`;const u=r[g-1],M=(u[0]+p[0])/2;return`C ${M} ${u[1]}, ${M} ${p[1]}, ${p[0]} ${p[1]}`}).join(" "))($),j=`${f} L ${$[$.length-1][0]} 188 L ${$[0][0]} 188 Z`,k=[0,25,50,75,100].map(r=>Number((28+160*r/100).toFixed(1))),V=$[Math.min(5,$.length-1)];return`
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
        ${k.map(r=>`<line class="trend-grid" x1="48" y1="${r}" x2="632" y2="${r}"></line>`).join("")}
        <path class="trend-area" d="${j}"></path>
        <path class="trend-line trend-line-compare" d="${f}"></path>
        ${$.map(r=>`<g class="trend-point" transform="translate(${r[0]} ${r[1]})"><circle r="5"></circle><text y="-12">${r[3]}</text></g>`).join("")}
        <g class="trend-tooltip" transform="translate(${V[0]} ${V[1]})">
          <line y1="0" y2="${188-V[1]}"></line>
          <rect x="-22" y="-48" width="44" height="28" rx="14"></rect>
          <text y="-29">${V[3]}</text>
        </g>
      </svg>
      <div class="trend-year-axis">${s.map(r=>`<span>${r[0]}</span>`).join("")}</div>
    </div>
  `}function ys(){const s=["cost","software","person","timeline","document","patent","hardware","saas"];return`
    <div class="chart-modal" id="chartModal" aria-hidden="true">
      <div class="chart-dialog" role="dialog" aria-modal="true" aria-labelledby="chartModalTitle">
        <div class="chart-dialog-head">
          <div>
            <h2 id="chartModalTitle">资产概览与成本看板</h2>
            <span>保留原资产结构数据，并新增投入、工时、资产沉淀的董事长关注视角</span>
          </div>
          <button class="chart-close" id="chartClose" type="button" aria-label="关闭资产概览">${n("close","关闭")}</button>
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
            ${S.totals.map((a,e)=>`<div><span>${a[0]}</span><strong>${a[1]}</strong><em class="cost-hero-icon">${n(s[e]||"chart")}</em></div>`).join("")}
          </div>
          <div class="cost-grid">
            <div class="cost-panel">
              <h3>资产投入结构</h3>
              <div class="cost-bars cost-bars-percent">
                ${S.distribution.map(a=>`<div><b>${a[0]}</b><span style="--w:${a[1]}%"></span><em>${a[1]}%</em></div>`).join("")}
              </div>
            </div>
            <div class="cost-panel">
              <h3>费用构成</h3>
              <div class="pie-panel">
                <div class="cost-pie cost-pie-fee"></div>
                <div class="pie-legend">
                  ${S.costItems.map((a,e)=>`<span><i style="--c:var(--pie-${e+1})"></i><b>${a[0]}</b><em>${a[1]}</em></span>`).join("")}
                </div>
              </div>
            </div>
            <div class="cost-panel">
              <h3>产品投入排行</h3>
              <div class="rank-list">
                ${S.rankings.map((a,e)=>`<div style="--w:${a[2]}%"><i>${e+1}</i><span>${a[0]}</span><em></em><b>${a[1]}</b></div>`).join("")}
              </div>
            </div>
            <div class="cost-panel">
              <h3>公司构成</h3>
              <div class="pie-panel">
                <div class="cost-pie cost-pie-hours"></div>
                <div class="pie-legend">
                  ${S.workHours.map((a,e)=>`<span><i style="--c:var(--pie-${e+1})"></i><b>${a[0]}</b><em>${a[1]}</em></span>`).join("")}
                </div>
              </div>
            </div>
            <div class="cost-panel trend-panel">
              <h3>累计沉淀趋势</h3>
              ${bs(S.trend)}
            </div>
            <div class="cost-panel">
              <h3>资产沉淀</h3>
              <div class="deposit-grid">
                ${S.deposits.map(a=>`<div><span>${a[0]}</span><strong>${a[1]}</strong></div>`).join("")}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  `}function fs(){return`
    <div class="detail-modal" id="detailModal" aria-hidden="true">
      <div class="detail-dialog" role="dialog" aria-modal="true" aria-labelledby="detailTitle">
        <button class="detail-close" id="detailClose" type="button" aria-label="关闭详情">${n("close","关闭")}</button>
        <div id="detailContent"></div>
      </div>
    </div>
  `}function js(){const s=H.history.find(a=>a.version===H.currentVersion)||H.history[0];return`
    <div class="version-modal" id="versionModal" aria-hidden="true">
      <div class="version-dialog" role="dialog" aria-modal="true" aria-labelledby="versionTitle">
        <button class="detail-close" id="versionClose" type="button" aria-label="关闭版本详情">${n("close","关闭")}</button>
        <div class="version-head">
          <div class="detail-app-icon">${n("timeline")}</div>
          <div>
            <h2 id="versionTitle">版本历史</h2>
            <p>当前版本 ${H.currentVersion} · 点击版本号查看对应内容</p>
          </div>
        </div>
        <div class="version-layout">
          <div class="version-history" role="listbox" aria-label="版本历史列表">
            ${H.history.map(a=>`
              <button class="version-item ${a.version===s.version?"is-active":""}" type="button" data-version="${a.version}" aria-selected="${a.version===s.version}">
                <b>${a.version}</b>
                <span>${a.title}</span>
                <em>${a.date}</em>
              </button>
            `).join("")}
          </div>
          <div class="version-detail" id="versionDetail">
            ${J(s)}
          </div>
        </div>
      </div>
    </div>
  `}function J(s){if(!s)return"";const a=!!s.systemUrl;return`
    <div class="version-detail-head">
      <span class="version-state">${s.status}</span>
      <h3>${s.version} · ${s.title}</h3>
      <p>${s.date}</p>
    </div>
    <div class="version-module-list">
      ${s.modules.map(e=>`<span>${n("tag")}${e}</span>`).join("")}
    </div>
    <div class="version-change-list">
      ${s.changes.map(e=>`<div><i></i><span>${e}</span></div>`).join("")}
    </div>
    <div class="version-system-actions">
      <button class="version-system-btn${a?"":" is-disabled"}" type="button" data-system-url="${a?s.systemUrl:""}" aria-disabled="${String(!a)}">
        ${n("external")}<span>${a?"查看版本系统":"版本系统文件待提供"}</span>
      </button>
      <p class="version-system-tip">${a?"将在新标签页打开该版本对应的真实网页内容。":"该历史版本的真实 HTML 文件提供后，可在配置中补充地址。"}</p>
    </div>
  `}function ws(){d("app").innerHTML=`
    <main class="app">
      <header class="topbar">
        <div class="brand">
          <img class="brand-logo" src="${gs}" alt="汉脑科技">
          <div><h1>汉脑无形资产</h1></div>
        </div>
        <div class="top-meta">
          <label class="search-box" id="searchBox" title="搜索案例、产品、行业、资料、硬件">
            ${n("search")}
            <input id="globalSearch" type="search" placeholder="请输入" autocomplete="off">
            <button id="clearSearch" type="button" aria-label="清空搜索">${n("close","清空")}</button>
          </label>
          <button class="search-submit" type="button">${n("search")}开始搜索</button>
          <span class="chip search-count" id="searchCount"></span>
          <button class="chart-toggle" id="chartToggle" aria-expanded="false" title="资产概览" data-tip="资产概览">${n("chart")}</button>
          <button class="version-chip" id="versionToggle" type="button" aria-expanded="false" title="查看版本历史">${n("timeline")}<span>版本 ${H.currentVersion}</span></button>
          <span class="chip time" id="clock">--:--:--</span>
        </div>
      </header>
      <div class="layout">
        <section class="main">
          ${ys()}
          ${fs()}
          ${js()}
          <section class="doc-matrix" id="docMatrix"></section>
          <nav class="quick-nav" aria-label="无形资产导航" id="quickNav">
            ${[["cases","案例资产"],["industry","行业内容"],["platform","核心平台"],["software","产品矩阵"],["saas","SaaS应用"],["scene","场景运营库"],["docs","资料资产"],["hardware","智能硬件"],["equipment","智能设备"]].map(s=>`
              <div class="nav-item">
                <button class="nav-trigger" type="button" data-menu="${s[0]}"><span>${s[1]}</span>${n("arrow","展开")}</button>
                <div class="nav-menu" id="nav-${s[0]}"></div>
              </div>
            `).join("")}
          </nav>
          <section class="section case-hero" id="cases-section">
            <div class="head case-head">
              <div>
                <h2>${n("case")}案例资产</h2>
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
              <h3>${n("task")}待资产录入</h3>
              <div class="intake-grid" id="intake"></div>
            </div>
            <div class="asset-governance">
              <h3>${n("governance")}<span class="governance-title-text">资产治理</span></h3>
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
  `}function Zs(){b.clear(),Ms(),Ss(),d("platforms").innerHTML=R.map((t,i)=>`
    <div class="entry search-item" id="platform-${i}" data-search="${P(t)} 核心平台">
      <div class="entry-icon">${n("platform")}</div><b>${t[1]}</b><div class="entry-count"><strong>${t[2]}</strong></div>
    </div>
  `).join(""),d("software").innerHTML=B.map((t,i)=>q(t,"software",i)).join(""),d("saas").innerHTML=O.map((t,i)=>q(t,"saas",i)).join(""),Vs();const s=T.flatMap(t=>t[1]).reduce((t,i)=>t+Number(i[1]||0),0),a=T.flatMap(t=>t[1]).reduce((t,i)=>t+Number(i[2]||0),0);d("industryStats").textContent=`专利 ${s} · 软著 ${a}`,d("industries").innerHTML=`
    <div class="industry-board-grid">
      ${T.map((t,i)=>`
        <div class="zone search-item" data-search="${t[0]} ${t[1].flat().join(" ")} 行业">
          <div class="zone-head"><b>${n("industry")}${t[0]}</b><span>${t[1].length}项</span></div>
          <div class="zone-grid">
            ${t[1].map((o,l)=>Ls(t[0],o,i,l)).join("")}
          </div>
        </div>
      `).join("")}
    </div>
  `,d("intake").innerHTML=rs.map(t=>`
    <div class="intake-card search-item" data-search="${P(t)} 待资产录入 待录入">
      <div class="asset-ico">${n(t[0])}</div><div><b>${t[1]}</b></div><strong>${t[3]}</strong>
    </div>
  `).join("");const e=(t,i,o)=>{const l=`device-${i}-${o}`;return b.set(l,Ts(t,i,o)),`
      <button class="device-card search-item detail-trigger" type="button" data-detail-key="${l}" data-search="${t[0]} ${t[1]} ${i} 设备">
        <div class="scene"><img src="${t[2]}" alt="${t[0]}"></div>
        <div class="device-title"><b>${t[0]}</b><em>${n("detail")}详情</em></div>
        <span>${t[1]}</span>
      </button>
    `};d("hardware").innerHTML=W.map((t,i)=>e(t,"智能硬件",i)).join(""),d("equipment").innerHTML=K.map((t,i)=>e(t,"智能装备",i)).join(""),d("docs").innerHTML=`
    <h2 class="doc-list-title">${n("document")}公司资料</h2>
    ${X.map((t,i)=>`
    <div class="doc-group search-item" data-search="${t[0]} 公司资料 资料资产">${n(Cs(t[0]))}${t[0]}</div>
    ${t[0]==="宣传资产"?'<div class="promo-media search-item" data-search="宣传资产 视频播放 企业照片 企业视频"><div class="promo-video"><video src="./assets/videos/promo.mp4" poster="./assets/photos/warehouse.jpg" controls muted preload="metadata"></video></div></div>':""}
    ${t[1].map((o,l)=>{const v=`side-doc-${i}-${l}`;return b.set(v,ts(t[0],o)),`
        <button class="doc search-item detail-trigger ${Number.isFinite(o[2])?"expiry-doc":""}" type="button" data-detail-key="${v}" data-search="${t[0]} ${P(o)} 公司资料 资料资产">
          <div class="doc-main"><b>${o[0]}</b><strong>${o[1]}</strong></div>
          ${Number.isFinite(o[2])?`<div class="expiry-row" title="黄色为快超期，红色为超期"><span class="expiry-pill warn">${o[2]}</span><span class="expiry-pill danger">${o[3]}</span></div>`:""}
        </button>
      `}).join("")}
  `).join("")}
  `}function Ms(){d("docMatrix").innerHTML=`
    <div class="doc-matrix-title">
      <b>${n("document")}公司资料分类</b>
      <span>点击数字查看归档详情</span>
    </div>
    <div class="doc-matrix-list">
      ${ds.map((s,a)=>`
        <div class="doc-matrix-row search-item" data-search="${s[0]} ${s[1].flat().join(" ")} 公司资料">
          <div class="doc-matrix-label">${s[0]}${n("arrow")}</div>
          <div class="doc-matrix-items">
            ${s[1].map((e,t)=>{const i=`doc-${a}-${t}`;return b.set(i,ts(s[0],e)),`<button class="doc-matrix-item detail-trigger" type="button" data-detail-key="${i}"><span>${e[0]}</span><b>${e[1]}</b></button>`}).join("")}
          </div>
        </div>
      `).join("")}
    </div>
  `}function Vs(){d("sceneLibrary").innerHTML=_.map((s,a)=>{const e=`scene-${a}`;return b.set(e,As(s)),`
      <button class="scene-card search-item detail-trigger" type="button" data-detail-key="${e}" data-search="${s.name} ${s.device} ${s.scene} 场景运营库">
        <div class="scene-card-media"><img src="${s.image}" alt="${s.name}"></div>
        <div>
          <span class="scene-card-device">${n(s.device.includes("看板")?"chart":s.device.includes("RFID")?"hardware":"equipment")}${s.device}</span>
          <b>${s.name}</b>
          <span>${s.role}</span>
          <p>${s.scene}</p>
        </div>
        <em>${n("download")}资料</em>
      </button>
    `}).join("")}function Ss(){d("caseAssets").innerHTML=ss().map((s,a)=>Hs(s,a)).join("")}function ss(){return F}function Hs(s,a){const e=`case-${a}`,t=s.manager===s.engineer,i=es[s.name]||{},o=i.card||[m[a%m.length],m[(a+1)%m.length]],l=`ip-case-${a}-patent`,v=`ip-case-${a}-copyright`;return b.set(e,xs(s,i)),b.set(l,L("patent",s.name,s.patents)),b.set(v,L("copyright",s.name,s.copyrights)),b.set(`person-${s.manager}`,N(s.manager)),b.set(`person-${s.engineer}`,N(s.engineer)),`
    <article id="${e}" class="case-asset search-item detail-trigger status-${s.status}" data-detail-key="${e}" data-search="${s.name} ${s.industry} ${s.modules.join(" ")} ${s.components.join(" ")} 案例 资产">
      <div class="case-top">
        <div class="case-icon">${n("case")}</div>
        <div>
          <span class="case-industry">${s.industry} · 来源 ${s.sourceYear}</span>
          <h3>${s.name}</h3>
        </div>
        <span class="status-badge">${C(s.status)}</span>
      </div>
      <p>${s.intro}</p>
      <div class="case-components">
        ${s.modules.slice(0,5).map(h=>`<span>${n("module")}${h}</span>`).join("")}
      </div>
      <div class="case-ip-assets">
        <button class="asset-mini asset-strip detail-trigger" type="button" data-detail-key="${l}">专利 ${s.patents}</button>
        <button class="asset-mini asset-strip detail-trigger" type="button" data-detail-key="${v}">软著 ${s.copyrights}</button>
      </div>
      <div class="case-image">
        ${o.map((h,$)=>`<img src="${h}" alt="${s.name}图片${$+1}">`).join("")}
      </div>
      <div class="case-actions">
        <div class="case-owner">
          ${I("产品",s.manager,s.managerState)}
          ${I("技术",s.engineer,s.engineerState)}
          ${t?`<span class="owner-warning">${n("warning")}单人负责</span>`:""}
        </div>
        <button type="button">${n("detail")}详情</button>
      </div>
    </article>
  `}function q(s,a,e){const t=s[0],i=a==="saas"?"SaaS产品":"产品软件矩阵",o=a==="saas"?"saas":"software",v=(a==="saas"?U:G)[t]||{},h=v.image||m[(e+(a==="saas"?2:0))%m.length],$=ms(a,t,e),y=`${a}-${e}`,f=`ip-${a}-${e}-patent`,j=`ip-${a}-${e}-copyright`;return b.set(y,Ps(s,a,e,v,$)),b.set(f,L("patent",t,s[3])),b.set(j,L("copyright",t,s[4])),`
    <div class="industry app-card product-app search-item" id="${y}" data-search="${P(s)} ${i} 专利 软著 订阅 软件 产品">
      <div class="app-card-main">
        <div class="app-icon">${n(o)}</div>
        <div class="app-title">
          <b>${t}</b>
          <span>${i} · ${s[1]} · ${s[2]}</span>
        </div>
        <div class="app-action">
          <button class="detail-link detail-trigger" type="button" data-detail-key="${y}">${n("detail")}详情</button>
          <div class="app-assets">
            <button class="asset-mini asset-strip detail-trigger" type="button" data-detail-key="${f}">专利 ${s[3]}</button>
            <button class="asset-mini asset-strip detail-trigger" type="button" data-detail-key="${j}">软著 ${s[4]}</button>
          </div>
        </div>
      </div>
      <div class="app-metrics">
        <span>${n("star")}4.7分</span>
        <span>${n(a==="saas"?"subscribe":"download")}${a==="saas"?"订阅同步":"内部复用"}</span>
        <span>${s[1]}系统</span>
      </div>
      <div class="app-tags">
        <span>${n("tag")}${a==="saas"?"SaaS应用":"工业软件"}</span>
        <span>${s[2]}</span>
        <span>${a==="saas"?"客户同步":"标准模块"}</span>
      </div>
      <p>${v.description||`${t}面向${s[1]}业务场景，沉淀标准接口、模块能力、专利软著和可复用资料。`}</p>
      <div class="app-previews product-previews">
        <img src="${h}" alt="${t}界面图">
        <img src="${$[0]}" alt="${t}应用场景图">
        <img src="${$[1]}" alt="${t}详情图">
      </div>
    </div>
  `}function Ls(s,a,e,t){const i=`industry-${e}-${t}`,o=a[0],l=Number(a[1]||0),v=Number(a[2]||0),h=E[`${s}/${o}`]||{},$=h.image||m[(e+t)%m.length],y=$s(s,o,e,t),f=`ip-industry-${e}-${t}-patent`,j=`ip-industry-${e}-${t}-copyright`;return b.set(i,ks(s,a,h,y)),b.set(f,L("patent",`${s}${o}`,l)),b.set(j,L("copyright",`${s}${o}`,v)),`
    <div class="industry app-card search-item" data-search="${s} ${P(a)} 行业 专利 软著">
      <div class="app-card-main">
        <div class="app-icon">${n("industry")}</div>
        <div class="app-title">
          <b>${o}</b>
          <span>${s} · 工业APP应用软件</span>
        </div>
        <div class="app-action">
          <button class="detail-link detail-trigger" type="button" data-detail-key="${i}">${n("detail")}详情</button>
          <div class="app-assets">
            <button class="asset-mini asset-strip detail-trigger" type="button" data-detail-key="${f}">专利 ${l}</button>
            <button class="asset-mini asset-strip detail-trigger" type="button" data-detail-key="${j}">软著 ${v}</button>
          </div>
        </div>
      </div>
      <div class="app-metrics">
        <span>${n("star")}4.8分</span>
        <span>${n("download")}9.8万次</span>
        <span>使用率 70.55%</span>
      </div>
      <div class="app-tags">
        <span>${n("tag")}数字化工厂</span>
        <span>提升效率</span>
        <span>QC巡检</span>
      </div>
      <p>${h.description||`面向${s}${o}场景的工业应用，覆盖生产协同、质量追溯、设备联动与资料资产沉淀。`}</p>
      <div class="app-previews industry-previews">
        <img src="${$}" alt="${o}界面图">
        <img src="${y[0]}" alt="${o}应用场景图">
        <img src="${y[1]}" alt="${o}详情图">
      </div>
    </div>
  `}function ks(s,a,e,t){const i=`${a[0]}工业APP应用`,o=e.image||t[0],l=Q[a[0]]||as(i);return{type:"industry",title:i,subtitle:`${s} · 数字化工厂 · 提升效率`,iconName:"industry",heroImage:o,metrics:[["评价评分","4.8","五星"],["专利",String(a[1]||0),"已归档"],["软著",String(a[2]||0),"已归档"],["使用率","70.55%","今日"]],description:e.description||`${i}面向${s}行业应用场景，整合生产计划、质量巡检、设备状态、资料沉淀与客户案例能力，帮助企业提升无形资产转化效率。`,tags:["数字化工厂","QC巡检","提升效率"],previews:[o,...t],support:["手机","工位机","电脑端","电子看板"],docs:["产品需求规格说明书","技术架构设计方案","产品演示与解决方案PPT"],profile:l,appDownload:!0}}function Ps(s,a,e,t,i){const o=s[0],l=a==="saas"?"SaaS产品":"产品软件矩阵",v=a==="saas"?"saas":"software",h=t.image||m[(e+(a==="saas"?2:0))%m.length],$=Q[o]||as(o);return{type:"product",title:`${o}${a==="saas"?" SaaS应用":" 工业软件"}`,subtitle:`${l} · ${s[1]} · ${s[2]}`,iconName:v,heroImage:h,metrics:[["评价评分",a==="saas"?"4.7":"4.8","五星"],["专利",String(s[3]||0),"已归档"],["软著",String(s[4]||0),"已归档"],[a==="saas"?"订阅状态":"复用状态",a==="saas"?"同步中":"可复用","今日"]],description:t.description||`${o}面向${s[1]}业务场景，沉淀标准接口、模块能力、专利软著和可复用资料。`,tags:[s[1],s[2],a==="saas"?"客户同步":"标准模块"],previews:t.previews||[h,...i],support:a==="saas"?["手机","电脑端","企业微信","订阅门户"]:["电脑端","工位机","电子看板","接口网关"],docs:["产品需求规格说明书","技术架构设计方案","演示与解决方案PPT"],profile:$,appDownload:a==="saas"}}function as(s){return{costs:[["累计投入","96万"],["开发费","38万"],["人工费","44万"],["实施运维","14万"]],hours:[["研发工时","1,860h"],["测试工时","420h"],["实施工时","760h"]],versions:[["V1.6","2025-10-24",`${s}移动端与看板联动增强`],["V1.2","2024-11-15","基础业务流程和资料归档能力上线"]],components:["业务组件","接口组件","资料组件","现场组件"]}}function ts(s,a){var t;const e=((t=cs[s])==null?void 0:t[a[0]])||[];return{type:"doc",title:`${s} / ${a[0]}`,subtitle:`公司资料 · 已归档 ${a[1]} · 清单 ${e.length||a[1]} 项`,iconName:"document",tags:[s,a[0],"资料资产"],metrics:[["归档数量",String(a[1]),"当前"],["年度新增",String(Math.max(2,Math.round(a[1]*.18))),"2026"],["资料状态","已建档","治理"]],description:`${a[0]}用于支撑公司无形资产证明、项目审计、客户展示和内部复用，已纳入资料资产台账进行分类管理。`,docs:["资料清单","归档路径","责任人","更新记录"],contentList:e}}function L(s,a,e){const t=ls[s],i=t.items.filter(o=>o[2].includes(a)||a.includes(o[2])).slice(0,3);return{type:"ip",title:`${a}${t.label}详情`,subtitle:`${t.label} · 数量 ${e} · 证书台账`,iconName:s==="patent"?"patent":"copyright",tags:[t.label,a,e>0?"已有关联":"申报中"],metrics:[["数量",String(e),"卡片"],["最近获得",e>0?"2025-12-18":"2026-03-22","证书"],["资料状态","已建档","治理"]],items:i.length?i:[["HN-IP-2026-009",`${a}${t.label}资产登记`,a,"2026-03-22","申报中"]]}}function N(s){const a=Y[s];return{type:"person",title:s,subtitle:a?`${a.role} · ${x(a.status)}`:"人员信息已登记",iconName:"person",tags:a?[a.department,a.role,x(a.status)]:["资产责任人"],person:a||{name:"张工",role:"资产责任人",department:"项目交付部",status:"new",assets:["资料资产"],note:"人员信息已纳入资产责任台账。"}}}function As(s){return{type:"scene",title:s.name,subtitle:`${s.device} · ${s.role} · 场景运营库`,iconName:"equipment",tags:[s.device,s.role,"行业现场"],heroImage:s.image,scene:s}}function Ts(s,a,e){return{type:"device",title:s[0],subtitle:`${a} · ${s[1]} · 资产已归档`,iconName:a==="智能硬件"?"hardware":"equipment",heroImage:s[2],metrics:[["设备类型",a,"已登记"],["应用场景",s[1],"现场"],["资料状态","已归档","72%"],["维护状态","正常","可用"]],description:`${s[0]}用于${s[1]}场景，纳入无形资产工作台进行图片、资料、应用案例和知识产权关联展示。`,tags:[a,s[1],"现场资产"],previews:[s[2],m[(e+1)%m.length],m[(e+2)%m.length]],support:["现场终端","数据采集","资产台账","资料归档"],docs:["设备照片","应用案例","维护资料"]}}function xs(s,a={}){return{type:"case",title:s.name,subtitle:`${s.industry} · 来源 ${s.sourceYear} · ${C(s.status)}`,iconName:"case",heroImage:a.hero||m[F.indexOf(s)%m.length],metrics:[["专利",String(s.patents),"已关联"],["软著",String(s.copyrights),"已关联"],["调用活跃度",s.calls,"累计"]],description:a.detail||s.intro,tags:[s.industry,C(s.status),`${s.sourceYear}演进`],previews:a.previews||[m[0],m[1],m[3]],support:s.components,docs:["公开案例资料","知识产权台账"],modules:s.modules,components:s.components,evolution:s.evolution,evidence:s.evidence,owners:[["产品经理",s.manager,s.managerState],["技术负责人",s.engineer,s.engineerState]],roleAllowed:!0}}function C(s){return{normal:"正常",idle:"闲置",risk:"风险"}[s]||"正常"}function I(s,a,e){const t=Y[a],i=x((t==null?void 0:t.status)||e);return`<button class="person-badge detail-trigger state-${(t==null?void 0:t.status)||e}" type="button" data-detail-key="person-${a}"><i></i><b>${s}</b><em>${a} · ${i}</em></button>`}function Es(){d("nav-cases").innerHTML=ss().map((s,a)=>Z(`case-${a}`,s.name,s.industry,"case")).join(""),d("nav-platform").innerHTML=R.map((s,a)=>Z(`platform-${a}`,s[1],s[2],"platform")).join(""),d("nav-software").innerHTML=B.map((s,a)=>Z(`software-${a}`,s[0],s[2],"software")).join(""),d("nav-saas").innerHTML=O.map((s,a)=>Z(`saas-${a}`,s[0],s[2],"saas")).join(""),d("nav-scene").innerHTML=_.map(s=>Z("scene-section",s.name,s.device,"equipment")).join(""),d("nav-industry").innerHTML=T.map(s=>Z("industry-section",s[0],s[1].length,"industry")).join(""),d("nav-docs").innerHTML=X.map(s=>Z("docs",s[0],s[1].length,"document")).join(""),d("nav-hardware").innerHTML=W.map(s=>Z("hardware-section",s[0],s[1],"hardware")).join(""),d("nav-equipment").innerHTML=K.map(s=>Z("equipment-section",s[0],s[1],"equipment")).join("")}function Cs(s){return{知识产权:"patent",品牌渠道:"channel",宣传资产:"media",企业档案:"archive"}[s]||"document"}function Z(s,a,e,t){return`<button type="button" data-target="${s}"><span>${n(t)}${a}</span><small>${e}</small></button>`}function Is(s){var a,e;return s.type==="case"?Os(s):s.type==="doc"?qs(s):s.type==="ip"?Ns(s):s.type==="person"?Rs(s):s.type==="scene"?Bs(s):`
    <div class="detail-head">
      <div class="detail-app-icon">${n(s.iconName)}</div>
      <div>
        <h2 id="detailTitle">${s.title}</h2>
        <p>${s.subtitle}</p>
        <div class="detail-tags">${s.tags.map(t=>`<span>${n("tag")}${t}</span>`).join("")}</div>
      </div>
      <button class="detail-download" type="button">${n("download")}资料包</button>
    </div>
    <div class="detail-metrics">
      ${s.metrics.map(t=>`<div><span>${t[0]}</span><strong>${t[1]}</strong><em>${t[2]}</em></div>`).join("")}
    </div>
    <div class="detail-body">
      <section class="detail-left">
        <div class="detail-hero">
          <img src="${s.heroImage}" alt="${s.title}">
          <button type="button" aria-label="播放介绍">${n("play","播放")}</button>
        </div>
        <h3>${n("solution")}软件介绍</h3>
        <p>${s.description}</p>
        <h3>${n("image")}界面详情</h3>
        <div class="detail-previews">
          ${s.previews.map((t,i)=>`<img src="${t}" alt="${s.title}界面${i+1}">`).join("")}
        </div>
        <h3>${n("document")}相关文档</h3>
        <div class="detail-docs">
          ${s.docs.map(t=>`<div><span>${n("document")}${t}</span><button type="button">${n("download")}下载</button></div>`).join("")}
        </div>
        ${s.profile?Ds(s):""}
      </section>
      <aside class="detail-side">
        <h3>${n("customer")}客户案例</h3>
        ${["华纳科技有限公司","华丽服饰有限公司","东方智造集团"].map((t,i)=>`
          <div class="case-card">
            <b>${t}</b>
            <span>${s.tags[0]} · ${i===0?"大型企业":"中型企业"}</span>
            <p>已覆盖核心应用场景，形成资料、案例与知识产权联动。</p>
            <button type="button">${n("detail")}查看详情</button>
          </div>
        `).join("")}
        <h3>${n("hardware")}支持设备</h3>
        <div class="support-list">${s.support.map(t=>`<span>${t}</span>`).join("")}</div>
        ${s.appDownload?`<h3>${n("download")}最新版本</h3><div class="download-box"><b>${s.title}</b><span>V${((e=(a=s.subtitle.match(/V[0-9.]+/))==null?void 0:a[0])==null?void 0:e.replace("V",""))||"2.0"} · 2026-05-20</span><button type="button">${n("download")}下载资料包</button></div>`:""}
      </aside>
    </div>
  `}function Ds(s){const a=s.profile;return`
    <h3>${n("cost")}投入成本</h3>
    <div class="cost-mini-grid">${a.costs.map(e=>`<div><span>${e[0]}</span><strong>${e[1]}</strong></div>`).join("")}</div>
    <h3>${n("task")}工时构成</h3>
    <div class="cost-mini-grid">${a.hours.map(e=>`<div><span>${e[0]}</span><strong>${e[1]}</strong></div>`).join("")}</div>
    <h3>${n("timeline")}版本历史</h3>
    <div class="version-list">${a.versions.map(e=>`<div><b>${e[0]} · ${e[1]}</b><span>${e[2]}</span></div>`).join("")}</div>
    <h3>${n("component")}累计组件</h3>
    <div class="detail-chip-grid">${a.components.map(e=>`<span>${n("component")}${e}</span>`).join("")}</div>
  `}function qs(s){var a;return`
    <div class="detail-head">
      <div class="detail-app-icon">${n("document")}</div>
      <div><h2 id="detailTitle">${s.title}</h2><p>${s.subtitle}</p><div class="detail-tags">${s.tags.map(e=>`<span>${n("tag")}${e}</span>`).join("")}</div></div>
    </div>
    <div class="detail-metrics">${s.metrics.map(e=>`<div><span>${e[0]}</span><strong>${e[1]}</strong><em>${e[2]}</em></div>`).join("")}</div>
    <div class="simple-detail">
      <p>${s.description}</p>
      ${(a=s.contentList)!=null&&a.length?`
        <div class="doc-content-list">
          ${s.contentList.map(e=>`
            <div>
              <b>${e[0]}</b>
              <span>${e[1]}</span>
              <em>${e[2]}</em>
              <strong>${e[3]}</strong>
            </div>
          `).join("")}
        </div>
      `:""}
      <div class="detail-docs">${s.docs.map(e=>`<div><span>${n("document")}${e}</span><button type="button">${n("detail")}查看</button></div>`).join("")}</div>
    </div>
  `}function Ns(s){return`
    <div class="detail-head">
      <div class="detail-app-icon">${n(s.iconName)}</div>
      <div><h2 id="detailTitle">${s.title}</h2><p>${s.subtitle}</p><div class="detail-tags">${s.tags.map(a=>`<span>${n("tag")}${a}</span>`).join("")}</div></div>
    </div>
    <div class="detail-metrics">${s.metrics.map(a=>`<div><span>${a[0]}</span><strong>${a[1]}</strong><em>${a[2]}</em></div>`).join("")}</div>
    <div class="ip-table">
      ${s.items.map(a=>`<div><b>${a[1]}</b><span>${a[0]}</span><span>关联：${a[2]}</span><span>获得时间：${a[3]}</span><em>${a[4]}</em></div>`).join("")}
    </div>
  `}function Rs(s){const a=s.person;return`
    <div class="detail-head">
      <div class="detail-app-icon">${n("person")}</div>
      <div><h2 id="detailTitle">${s.title}</h2><p>${s.subtitle}</p><div class="detail-tags">${s.tags.map(e=>`<span>${n("tag")}${e}</span>`).join("")}</div></div>
    </div>
    <div class="person-detail ${a.status==="departed"?"is-departed":""}">
      ${a.status==="departed"?`<div class="leave-alert">${n("warning")}该人员已离职，相关接口、源码、现场资料需确认交接完整性。</div>`:""}
      <div class="person-info"><span>姓名</span><b>${a.name}</b><span>岗位</span><b>${a.role}</b><span>部门</span><b>${a.department}</b><span>状态</span><b>${x(a.status)}</b></div>
      <h3>${n("case")}负责资产</h3>
      <div class="detail-chip-grid">${a.assets.map(e=>`<span>${e}</span>`).join("")}</div>
      <p>${a.note}</p>
    </div>
  `}function Bs(s){const a=s.scene;return`
    <div class="detail-head">
      <div class="detail-app-icon">${n("equipment")}</div>
      <div><h2 id="detailTitle">${s.title}</h2><p>${s.subtitle}</p><div class="detail-tags">${s.tags.map(e=>`<span>${n("tag")}${e}</span>`).join("")}</div></div>
    </div>
    <div class="scene-detail">
      <div class="detail-hero scene-detail-hero"><img src="${s.heroImage}" alt="${s.title}"></div>
      <div class="scene-flow"><div><span>使用场景</span><b>${a.scene}</b></div><div><span>适用岗位</span><b>${a.role}</b></div><div><span>产出资料</span><b>${a.output}</b></div></div>
      <h3>${n("document")}资料下载</h3>
      <div class="detail-docs">${a.docs.map(e=>`<div><span>${n("document")}${e}</span><button type="button">${n("download")}下载</button></div>`).join("")}</div>
    </div>
  `}function Os(s){return`
    <div class="detail-head case-detail-head">
      <div class="detail-app-icon">${n("case")}</div>
      <div>
        <h2 id="detailTitle">${s.title}</h2>
        <p>${s.subtitle}</p>
        <div class="detail-tags">${s.tags.map(a=>`<span>${n("tag")}${a}</span>`).join("")}</div>
      </div>
      <button class="detail-download" type="button">${n("download")}资料包</button>
    </div>
    <div class="detail-metrics">
      ${s.metrics.map(a=>`<div><span>${a[0]}</span><strong>${a[1]}</strong><em>${a[2]}</em></div>`).join("")}
    </div>
    <div class="case-detail-layout">
      <section class="case-detail-main">
        <div class="detail-hero">
          <img src="${s.heroImage}" alt="${s.title}">
          <button type="button" aria-label="播放介绍">${n("play","播放")}</button>
        </div>
        <h3>${n("solution")}案例价值</h3>
        <p>${s.description}</p>
        <h3>${n("module")}模块构成</h3>
        <div class="detail-chip-grid">${s.modules.map(a=>`<span>${n("module")}${a}</span>`).join("")}</div>
        <h3>${n("component")}标准组件</h3>
        <div class="detail-chip-grid">${s.components.map(a=>`<span>${n("component")}${a}</span>`).join("")}</div>
        <h3>${n("timeline")}演进动线</h3>
        <div class="detail-timeline">${s.evolution.map(a=>`<span>${a}</span>`).join("")}</div>
        <h3>${n("image")}现场图片</h3>
        <div class="detail-previews">
          ${s.previews.map((a,e)=>`<img src="${a}" alt="${s.title}现场图${e+1}">`).join("")}
        </div>
      </section>
      <aside class="case-detail-side">
        <h3>${n("owner")}组织责任</h3>
        <div class="detail-owner-list">
          ${s.owners.map(a=>I(a[0],a[1],a[2])).join("")}
        </div>
        <h3>${n("document")}相关资料</h3>
        <div class="detail-docs">
          ${s.evidence.map(a=>`<div><span>${n("contract")}${a}</span><button type="button">${n("detail")}追溯</button></div>`).join("")}
        </div>
        <h3>${n("permission")}角色可见资料</h3>
        <div class="detail-docs">
          ${s.docs.map(a=>`<div><span>${n(a.includes("代码")||a.includes("接口")?"code":a.includes("合同")?"contract":a.includes("蓝图")?"blueprint":"document")}${a}</span><button type="button">${n("download")}下载</button></div>`).join("")}
        </div>
      </aside>
    </div>
  `}function A(s,a=""){var i,o;const e=d("detailModal"),t=d("detailContent");if(s){const l=b.get(a);if(!l)return;t.innerHTML=Is(l)}e.classList.toggle("is-open",s),e.setAttribute("aria-hidden",String(!s)),document.body.classList.toggle("modal-open",s||((i=d("chartModal"))==null?void 0:i.classList.contains("is-open"))||((o=d("versionModal"))==null?void 0:o.classList.contains("is-open")))}function Fs(){const s=d("chartModal"),a=d("chartToggle"),e=d("chartClose"),t=d("versionModal"),i=d("versionToggle"),o=d("versionClose"),l=r=>{var p;s.classList.toggle("is-open",r),s.setAttribute("aria-hidden",String(!r)),a.setAttribute("aria-expanded",String(r)),document.body.classList.toggle("modal-open",r||((p=d("detailModal"))==null?void 0:p.classList.contains("is-open"))||(t==null?void 0:t.classList.contains("is-open")))},v=r=>{var p;t.classList.toggle("is-open",r),t.setAttribute("aria-hidden",String(!r)),i.setAttribute("aria-expanded",String(r)),document.body.classList.toggle("modal-open",r||((p=d("detailModal"))==null?void 0:p.classList.contains("is-open"))||(s==null?void 0:s.classList.contains("is-open")))};a.addEventListener("click",()=>l(!s.classList.contains("is-open"))),e.addEventListener("click",()=>l(!1)),s.addEventListener("click",r=>{r.target===s&&l(!1)}),i.addEventListener("click",()=>v(!t.classList.contains("is-open"))),o.addEventListener("click",()=>v(!1)),t.addEventListener("click",r=>{r.target===t&&v(!1)}),t.addEventListener("click",r=>{const p=r.target.closest(".version-item");if(!p||!t.contains(p))return;const g=H.history.find(u=>u.version===p.dataset.version);g&&(d("versionDetail").innerHTML=J(g),t.querySelectorAll(".version-item").forEach(u=>{const M=u===p;u.classList.toggle("is-active",M),u.setAttribute("aria-selected",String(M))}))}),t.addEventListener("click",r=>{const p=r.target.closest(".version-system-btn");if(!p||!t.contains(p))return;const g=p.dataset.systemUrl;g&&window.open(g,"_blank","noopener,noreferrer")}),document.addEventListener("keydown",r=>{r.key==="Escape"&&(l(!1),A(!1),v(!1))}),d("detailClose").addEventListener("click",()=>A(!1)),d("detailModal").addEventListener("click",r=>{r.target===d("detailModal")&&A(!1)}),document.addEventListener("click",r=>{const p=r.target.closest(".detail-trigger");p&&(r.stopPropagation(),r.preventDefault(),A(!0,p.dataset.detailKey))}),document.querySelectorAll(".nav-trigger").forEach(r=>{r.addEventListener("click",p=>{const g=p.currentTarget.closest(".nav-item");document.querySelectorAll(".nav-item").forEach(u=>{u!==g&&u.classList.remove("is-open")}),g.classList.toggle("is-open")})}),document.querySelectorAll(".nav-menu button").forEach(r=>{r.addEventListener("click",p=>{const g=d(p.currentTarget.dataset.target);document.querySelectorAll(".nav-item").forEach(u=>u.classList.remove("is-open")),g&&g.scrollIntoView({block:"center",behavior:"smooth"})})}),document.addEventListener("click",r=>{r.target.closest(".quick-nav")||document.querySelectorAll(".nav-item").forEach(p=>p.classList.remove("is-open"))}),document.querySelectorAll(".scene img").forEach(r=>{r.addEventListener("error",()=>{r.closest(".device-card").classList.add("is-missing"),r.remove()})});const h=d("globalSearch"),$=d("searchBox"),y=d("clearSearch"),f=document.querySelector(".search-submit"),j=d("searchCount"),k=()=>{const r=h.value.trim().toLowerCase(),p=[...document.querySelectorAll(".search-item")];if(document.body.classList.toggle("search-active",!!r),$.classList.toggle("has-value",!!r),!r){p.forEach(u=>u.classList.remove("is-match")),j.textContent="";return}let g=0;p.forEach(u=>{const M=(u.dataset.search||u.textContent).toLowerCase().includes(r);u.classList.toggle("is-match",M),M&&(g+=1)}),j.textContent=g?`命中 ${g}`:"未命中"};h.addEventListener("input",k),f.addEventListener("click",()=>{k(),h.focus()}),y.addEventListener("click",()=>{h.value="",k(),h.focus()});const V=()=>{const r=new Date;d("clock").textContent=[r.getHours(),r.getMinutes(),r.getSeconds()].map(p=>String(p).padStart(2,"0")).join(":")};V(),setInterval(V,1e3)}ws();Zs();Es();Fs();
