import React, { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../components/ui/card"
import { Button } from "../components/ui/button"

export default function Permissions() {
  const roles = [
    "管理员", "销售", "区域运营", "省区经理", "运营经理", "总运营", "财务", "工程师", "供应链"
  ]
  const [activeRole, setActiveRole] = useState(1) // 销售

  const permissions = [
    { module: "工作台", perms: ["查看工作台数据"] },
    { module: "商机阶段", perms: ["查看全部商机", "查看个人商机", "新建商机", "编辑商机", "删除商机"] },
    { module: "报计划", perms: ["提交计划申请", "审核计划"] },
    { module: "调研", perms: ["填写调研信息", "自动评估评分"] },
    { module: "授权审批", perms: ["发起授权", "节点审核", "财务核算"] },
    { module: "中标结果", perms: ["登记中标结果", "上传附件"] },
    { module: "报单", perms: ["填写报单单", "核对SN码", "查看结算状态"] },
    { module: "装机/验机", perms: ["登记装机信息", "提交验机结果"] },
    { module: "基础设置", perms: ["基础数据管理", "权限管理", "系统设置"] },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-tight text-slate-800">权限与角色管理</h2>
        <Button className="bg-blue-600 hover:bg-blue-700">新增角色</Button>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Role List */}
        <div className="w-full md:w-64 bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden h-fit">
          <div className="p-4 bg-slate-50 border-b border-slate-100 font-bold text-slate-700">系统角色</div>
          <div className="divide-y divide-slate-100">
            {roles.map((role, index) => (
              <div 
                key={index}
                className={`p-4 cursor-pointer text-sm transition-colors ${activeRole === index ? 'bg-blue-50 text-blue-700 font-medium border-l-4 border-blue-600' : 'text-slate-600 hover:bg-slate-50 border-l-4 border-transparent'}`}
                onClick={() => setActiveRole(index)}
              >
                {role}
              </div>
            ))}
          </div>
        </div>

        {/* Permission Tree */}
        <div className="flex-1">
          <Card>
            <CardHeader className="border-b border-slate-100">
              <CardTitle className="text-lg">配置权限 - {roles[activeRole]}</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              {permissions.map((group, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="font-semibold text-slate-800 text-sm border-b border-slate-100 pb-2">{group.module}</div>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                    {group.perms.map((perm, pIdx) => {
                      // Mock some checked state based on role
                      const isChecked = activeRole === 0 ? true : 
                                        activeRole === 1 ? (group.module === "商机阶段" && perm !== "查看全部商机") || group.module === "工作台" || group.module === "报计划" || perm === "发起授权" : false;
                      
                      return (
                        <label key={pIdx} className="flex items-center space-x-2 text-sm text-slate-600 cursor-pointer">
                          <input 
                            type="checkbox" 
                            className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                            defaultChecked={isChecked}
                          />
                          <span>{perm}</span>
                        </label>
                      )
                    })}
                  </div>
                </div>
              ))}
            </CardContent>
            <CardFooter className="bg-slate-50 rounded-b-lg pt-6 flex justify-end">
              <Button className="bg-blue-600 hover:bg-blue-700">保存权限配置</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
