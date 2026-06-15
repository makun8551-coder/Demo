import React, { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { UploadCloud, Trophy, AlertTriangle } from "lucide-react"

export default function Bidding() {
  const [result, setResult] = useState<"win" | "loss">("win")

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-tight text-slate-800">中标结果报备</h2>
      </div>

      <Card>
        <CardHeader className="bg-slate-50 border-b border-slate-100">
          <CardTitle className="text-lg">项目信息</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4 pt-6">
          <div><span className="text-slate-500 mr-2">项目名称:</span>北京协和医院CT采购项目</div>
          <div><span className="text-slate-500 mr-2">目标医院:</span>北京协和医院</div>
          <div><span className="text-slate-500 mr-2">产品线:</span>CT-7000 螺旋CT机</div>
          <div><span className="text-slate-500 mr-2">负责人:</span>张三(销售)</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="border-b border-slate-100 pb-4">
          <CardTitle className="text-lg">开标结果</CardTitle>
        </CardHeader>
        <CardContent className="pt-6 space-y-6">
          <div className="flex space-x-6">
            <label className={`flex flex-1 items-center justify-center p-4 border rounded-lg cursor-pointer transition-colors ${result === 'win' ? 'border-green-500 bg-green-50 text-green-700' : 'border-slate-200 text-slate-600 hover:bg-slate-50'}`}>
              <input type="radio" name="bidding_result" className="hidden" checked={result === 'win'} onChange={() => setResult('win')} />
              <Trophy className="w-5 h-5 mr-2" /> 确认中标
            </label>
            <label className={`flex flex-1 items-center justify-center p-4 border rounded-lg cursor-pointer transition-colors ${result === 'loss' ? 'border-red-500 bg-red-50 text-red-700' : 'border-slate-200 text-slate-600 hover:bg-slate-50'}`}>
              <input type="radio" name="bidding_result" className="hidden" checked={result === 'loss'} onChange={() => setResult('loss')} />
              <AlertTriangle className="w-5 h-5 mr-2" /> 遗憾未中标
            </label>
          </div>

          {result === 'win' ? (
            <div className="space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">中标金额 (万)</label>
                  <Input type="number" placeholder="0.00" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">中标日期</label>
                  <Input type="date" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">合同金额 (万)</label>
                  <Input type="number" placeholder="0.00" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">预计回款日期</label>
                  <Input type="date" />
                </div>
              </div>
              <div className="space-y-2 pt-2">
                <label className="text-sm font-medium text-slate-700">中标通知书及相关附件</label>
                <div className="border-2 border-dashed border-slate-200 rounded-lg p-6 flex flex-col items-center justify-center text-slate-500 hover:bg-slate-50 cursor-pointer transition-colors">
                  <UploadCloud className="w-8 h-8 mb-2 text-slate-400" />
                  <p className="text-sm">点击或拖拽中标通知书扫描件至此处</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">最终中标厂家</label>
                  <Input placeholder="输入竞争厂家名称" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">最终中标金额 (万)</label>
                  <Input type="number" placeholder="0.00" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">失败原因分析</label>
                <select className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm">
                  <option>价格劣势</option>
                  <option>参数不满足</option>
                  <option>客情关系不到位</option>
                  <option>竞争对手恶意压价</option>
                  <option>其他</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">总结说明</label>
                <textarea 
                  className="w-full rounded-md border border-slate-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600" 
                  rows={4} 
                  placeholder="详细描述丢单原因及经验教训..."
                ></textarea>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-end bg-slate-50 rounded-b-lg pt-6">
          <Button className="bg-blue-600 hover:bg-blue-700">
            提交报备
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
