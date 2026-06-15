import React from "react"
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Check, Clock, X, ArrowRight } from "lucide-react"

export default function Auth() {
  const steps = [
    { role: "销售", name: "张三", time: "2026-06-10 10:00", status: "approved", comment: "项目基本情况已核实，申请项目授权。" },
    { role: "区域运营", name: "李四", time: "2026-06-10 14:30", status: "approved", comment: "区域额度充足，同意推进。" },
    { role: "省区经理", name: "王五", time: "2026-06-11 09:15", status: "approved", comment: "项目利润达标，同意。" },
    { role: "运营经理", name: "赵六", time: "2026-06-11 16:45", status: "approved", comment: "已核准配置清单及成本。" },
    { role: "总运营", name: "孙七", time: "", status: "pending", comment: "" },
    { role: "财务", name: "周八", time: "", status: "waiting", comment: "" },
  ]

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-tight text-slate-800">项目授权审批</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Timeline */}
        <div className="md:col-span-2">
          <Card>
            <CardHeader className="border-b border-slate-100">
              <CardTitle className="text-lg">审批流程</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="relative border-l-2 border-slate-200 ml-4 space-y-8">
                {steps.map((step, index) => (
                  <div key={index} className="relative pl-8">
                    <div className={`absolute -left-[11px] top-1 w-5 h-5 rounded-full flex items-center justify-center border-2 bg-white
                      ${step.status === 'approved' ? 'border-green-500 text-green-500' : 
                        step.status === 'pending' ? 'border-blue-500 text-blue-500' : 'border-slate-300 text-slate-300'}`}
                    >
                      {step.status === 'approved' && <Check className="w-3 h-3" />}
                      {step.status === 'pending' && <Clock className="w-3 h-3" />}
                    </div>
                    <div>
                      <div className="flex justify-between items-start mb-1">
                        <div className="font-medium text-slate-800">
                          {step.role} <span className="text-slate-500 text-sm font-normal ml-2">{step.name}</span>
                        </div>
                        <div className="text-xs text-slate-400">{step.time}</div>
                      </div>
                      {step.comment ? (
                        <div className="bg-slate-50 p-3 rounded-md text-sm text-slate-600 mt-2 border border-slate-100">
                          {step.comment}
                        </div>
                      ) : step.status === 'pending' ? (
                        <div className="text-sm text-blue-600 mt-2">待审批中...</div>
                      ) : (
                        <div className="text-sm text-slate-400 mt-2">尚未到达该节点</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Panel */}
        <div className="md:col-span-1">
          <Card className="sticky top-6">
            <CardHeader className="bg-slate-50 border-b border-slate-100">
              <CardTitle className="text-lg">当前审批处理</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg">
                <div className="text-sm font-medium text-blue-800 mb-1">当前节点：总运营审批</div>
                <div className="text-xs text-blue-600">请核实项目最终定价体系及利润情况。</div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">审批意见</label>
                <textarea 
                  className="w-full rounded-md border border-slate-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600" 
                  rows={4} 
                  placeholder="请输入审批意见..."
                  defaultValue="同意授权，请财务最终核算。"
                ></textarea>
              </div>

              <div className="grid grid-cols-1 gap-3 pt-4">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center">
                  <Check className="w-4 h-4 mr-2" /> 同意
                </Button>
                <Button variant="destructive" className="w-full flex items-center justify-center">
                  <X className="w-4 h-4 mr-2" /> 驳回
                </Button>
                <Button variant="outline" className="w-full flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 mr-2" /> 退回修改
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
