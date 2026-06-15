import React from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Badge } from "../components/ui/badge"
import { ArrowRight, CheckCircle, Clock } from "lucide-react"
import { MOCK_PROJECTS, STAGES } from "../mock/data"

export default function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = MOCK_PROJECTS.find(p => p.id === id) || MOCK_PROJECTS[0]

  const currentStageIndex = STAGES.indexOf(project.stage) >= 0 ? STAGES.indexOf(project.stage) : 0

  const history = [
    { time: "2026-06-10 10:00", action: "新建商机", operator: "张三", detail: "录入基础信息" },
    { time: "2026-06-11 14:20", action: "提交计划", operator: "张三", detail: "上传科室采购申请单" },
    { time: "2026-06-12 09:15", action: "完成调研", operator: "李四", detail: "系统自动评分 85分" },
    { time: "2026-06-12 16:40", action: "发起授权审批", operator: "张三", detail: "等待区域经理审核" },
  ]

  const getStagePath = (stage: string) => {
    switch(stage) {
      case "商机": return "/projects/opportunity"
      case "计划": return "/projects/plan"
      case "调研": return "/projects/research"
      case "授权": return "/projects/auth"
      case "中标": return "/projects/bidding"
      case "报单": return "/projects/quote"
      case "装机": return "/projects/install"
      case "验机": return "/projects/verify"
      default: return "/projects/opportunity"
    }
  }

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <div className="flex items-center space-x-3 mb-1">
            <h2 className="text-2xl font-bold tracking-tight text-slate-800">{project.name}</h2>
            <Badge variant="secondary">{project.status}</Badge>
          </div>
          <p className="text-sm text-slate-500">项目编号: {project.id}</p>
        </div>
        <Button onClick={() => navigate(getStagePath(project.stage))} className="bg-blue-600 hover:bg-blue-700">
          前往 {project.stage} 节点处理 <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          {/* Base Info */}
          <Card>
            <CardHeader className="bg-slate-50 border-b border-slate-100">
              <CardTitle className="text-lg">基础信息</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-y-4 pt-6">
              <div><span className="text-slate-500 mr-2">目标医院:</span><span className="font-medium">{project.hospital}</span></div>
              <div><span className="text-slate-500 mr-2">需求科室:</span><span className="font-medium">{project.department}</span></div>
              <div><span className="text-slate-500 mr-2">关键医生:</span><span className="font-medium">{project.doctor}</span></div>
              <div><span className="text-slate-500 mr-2">意向产品:</span><span className="font-medium">{project.product}</span></div>
              <div><span className="text-slate-500 mr-2">预计金额:</span><span className="font-medium text-orange-600">¥{(project.amount / 10000).toFixed(2)}万</span></div>
              <div><span className="text-slate-500 mr-2">负责人:</span><span className="font-medium">{project.manager}</span></div>
            </CardContent>
          </Card>

          {/* Process Bar */}
          <Card>
            <CardHeader className="bg-slate-50 border-b border-slate-100">
              <CardTitle className="text-lg">项目进度</CardTitle>
            </CardHeader>
            <CardContent className="pt-8 pb-8">
              <div className="relative">
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-100 -translate-y-1/2"></div>
                <div 
                  className="absolute top-1/2 left-0 h-1 bg-blue-500 -translate-y-1/2 transition-all duration-500"
                  style={{ width: `${(currentStageIndex / (STAGES.length - 1)) * 100}%` }}
                ></div>
                
                <div className="relative flex justify-between">
                  {STAGES.map((stage, index) => {
                    const isCompleted = index < currentStageIndex
                    const isCurrent = index === currentStageIndex
                    
                    return (
                      <div key={stage} className="flex flex-col items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 mb-2 bg-white z-10 transition-colors
                          ${isCompleted ? 'border-blue-500 text-blue-500' : 
                            isCurrent ? 'border-blue-600 bg-blue-50 text-blue-600' : 'border-slate-200 text-slate-300'}`}
                        >
                          {isCompleted ? <CheckCircle className="w-4 h-4" /> : 
                           isCurrent ? <Clock className="w-4 h-4" /> : 
                           <span className="text-xs">{index + 1}</span>}
                        </div>
                        <div className={`text-sm ${isCurrent ? 'font-bold text-blue-700' : isCompleted ? 'text-slate-700' : 'text-slate-400'}`}>
                          {stage}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Timeline */}
        <div className="md:col-span-1">
          <Card className="h-full">
            <CardHeader className="bg-slate-50 border-b border-slate-100">
              <CardTitle className="text-lg">操作记录</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="relative border-l-2 border-slate-200 ml-3 space-y-6">
                {history.map((record, index) => (
                  <div key={index} className="relative pl-6">
                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 border-white bg-slate-300"></div>
                    <div>
                      <div className="text-sm font-medium text-slate-800">{record.action}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{record.time} · {record.operator}</div>
                      <div className="text-sm text-slate-600 bg-slate-50 p-2 mt-2 rounded border border-slate-100">
                        {record.detail}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
