export const HOSPITALS = [
  "北京协和医院", "中国人民解放军总医院", "上海交通大学医学院附属瑞金医院",
  "复旦大学附属中山医院", "中山大学附属第一医院", "华中科技大学附属第一医院",
  "四川大学同济医院", "浙江大学华西医院", "中南大学湘雅医院", "山东大学附属医院",
  "江苏省人民医院", "南京大学第一附属医院", "广州市第一人民医院", "深圳市人民医院",
  "广东省人民医院", "重庆市人民医院", "天津市第一人民医院", "武汉市中心医院",
  "成都市第一人民医院", "杭州市人民医院"
]

export const DOCTORS = [
  "张建国", "李志伟", "王明远", "赵海燕", "刘晓峰",
  "陈丽华", "杨伟民", "黄红梅", "吴建华", "周晓明",
  "徐国强", "孙丽丽", "朱志刚", "马小玲", "胡建平",
  "林晓华", "郭建军", "何小红", "高红兵", "罗建明",
  "郑晓云", "梁红伟", "谢小强", "宋建国", "唐小林",
  "许丽萍", "邓志强", "冯小梅", "韩红军", "彭小燕"
]

export const PRODUCTS = [
  "CT-7000 螺旋CT机", "MR-8000 核磁共振", "US-5000 彩超仪",
  "DR-3000 数字化X线机", "XR-2000 移动X光机", "MO-1000 监护仪",
  "VE-4000 呼吸机", "AN-6000 麻醉机", "SU-9000 手术床", "LI-1500 无影灯"
]

export const DEPARTMENTS = [
  "放射科", "影像中心", "心内科", "急诊科", "重症医学科(ICU)", "麻醉科", "手术室", "超声科"
]

export const STAGES = [
  "商机", "计划", "调研", "授权", "中标", "报单", "装机", "验机"
]

export const STAGE_DESCRIPTIONS: Record<string, string> = {
  "商机": "发现并录入潜在采购意向，建立初步联系",
  "计划": "制定项目跟进策略与计划，明确销售目标",
  "调研": "深入医院了解需求参数，考察竞争对手环境",
  "授权": "申请厂家授权书与底价支持，准备投标资质",
  "中标": "参与招投标流程，确认我方成功中标",
  "报单": "与医院签订正式合同，向厂家或系统提交订单",
  "装机": "设备到货，工程师入场进行硬件安装与调试",
  "验机": "医院科室对设备进行验收测试，最终确认并签字回款"
}

export const OPPORTUNITY_STATUS = ["新建", "跟进中", "转计划", "暂停", "丢单"]

export type Project = {
  id: string;
  name: string;
  hospital: string;
  department: string;
  doctor: string;
  product: string;
  amount: number;
  manager: string;
  stage: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  
  // 新增明细字段
  currentHandler: string;
  daysInCurrentStage: number;
  isStuck: boolean;
}

const MANAGERS = ["张三(销售)", "李四(销售)", "王五(销售)", "赵六(销售)"];
const HANDLERS = {
  "商机": MANAGERS,
  "计划": MANAGERS,
  "调研": MANAGERS,
  "授权": ["审批员-王总", "渠道专员-小林"],
  "中标": MANAGERS,
  "报单": ["商务-陈姐", "商务-刘哥"],
  "装机": ["工程师-老李", "工程师-小赵"],
  "验机": MANAGERS,
}

export const generateMockProjects = (count: number): Project[] => {
  const projects: Project[] = [];
  for (let i = 1; i <= count; i++) {
    const stage = STAGES[Math.floor(Math.random() * STAGES.length)];
    let status = "跟进中";
    if (stage === "商机") {
      status = OPPORTUNITY_STATUS[Math.floor(Math.random() * OPPORTUNITY_STATUS.length)];
    } else if (stage === "验机") {
      status = "已完成";
    }

    const manager = MANAGERS[i % MANAGERS.length];
    
    // 生成当前阶段的负责人
    const possibleHandlers = HANDLERS[stage as keyof typeof HANDLERS] || [manager];
    const currentHandler = possibleHandlers[Math.floor(Math.random() * possibleHandlers.length)];
    
    // 生成停留天数
    const daysInCurrentStage = Math.floor(Math.random() * 45); // 0-45天
    
    // 判定是否卡住
    let isStuck = false;
    if (status === "暂停" || status === "丢单") {
      isStuck = true;
    } else if (daysInCurrentStage > 15 && stage !== "验机" && status !== "已完成") {
      // 停留超过15天算作卡住预警
      isStuck = true;
    }

    projects.push({
      id: `PRJ-2026-${String(i).padStart(4, '0')}`,
      name: `${HOSPITALS[i % HOSPITALS.length]}${PRODUCTS[i % PRODUCTS.length]}采购项目`,
      hospital: HOSPITALS[i % HOSPITALS.length],
      department: DEPARTMENTS[i % DEPARTMENTS.length],
      doctor: DOCTORS[i % DOCTORS.length],
      product: PRODUCTS[i % PRODUCTS.length],
      amount: Math.floor(Math.random() * 500) * 10000 + 50000, // 50w - 500w
      manager: manager,
      stage: stage,
      status: status,
      createdAt: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString().split('T')[0],
      updatedAt: new Date().toISOString().split('T')[0],
      currentHandler,
      daysInCurrentStage,
      isStuck
    });
  }
  return projects.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
}

export const MOCK_PROJECTS = generateMockProjects(50);
