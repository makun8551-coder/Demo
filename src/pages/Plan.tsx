import React from "react"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { UploadCloud, Save, Send } from "lucide-react"

export default function Plan() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-tight text-slate-800">采购计划申请</h2>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">项目基础信息</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-sm text-slate-500">目标医院</label>
            <div className="font-medium">北京协和医院</div>
          </div>
          <div className="space-y-1">
            <label className="text-sm text-slate-500">科室</label>
            <div className="font-medium">放射科</div>
          </div>
          <div className="space-y-1">
            <label className="text-sm text-slate-500">医生</label>
            <div className="font-medium">张建国</div>
          </div>
          <div className="space-y-1">
            <label className="text-sm text-slate-500">意向产品</label>
            <div className="font-medium">CT-7000 螺旋CT机</div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">计划填报</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">采购目的</label>
            <Input placeholder="输入采购目的，例如：科室设备更新换代" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">采购数量</label>
              <Input type="number" defaultValue={1} />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">预算金额 (万)</label>
              <Input type="number" placeholder="输入预算金额" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">计划采购时间</label>
            <Input type="date" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">需要资源</label>
            <div className="flex flex-wrap gap-4 mt-1">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500" />
                <span className="text-sm text-slate-700">研究、论文</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500" />
                <span className="text-sm text-slate-700">市场（活动）</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500" />
                <span className="text-sm text-slate-700">品牌</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500" />
                <span className="text-sm text-slate-700">样机</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500" />
                <span className="text-sm text-slate-700">其它</span>
              </label>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">需求描述</label>
            <textarea 
              className="w-full rounded-md border border-slate-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600" 
              rows={4} 
              placeholder="详细描述客户的具体参数需求..."
            ></textarea>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">附件上传</label>
            <div className="border-2 border-dashed border-slate-200 rounded-lg p-6 flex flex-col items-center justify-center text-slate-500 hover:bg-slate-50 cursor-pointer transition-colors">
              <UploadCloud className="w-8 h-8 mb-2 text-slate-400" />
              <p className="text-sm">点击或拖拽立项书、可研报告等到此处</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end space-x-3 bg-slate-50 rounded-b-lg pt-6">
          <Button variant="outline" className="text-slate-600">
            <Save className="w-4 h-4 mr-2" /> 保存草稿
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Send className="w-4 h-4 mr-2" /> 提交计划
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
