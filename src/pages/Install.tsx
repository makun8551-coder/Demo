import React from "react"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { UploadCloud, CheckCircle, Package } from "lucide-react"

export default function Install() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-tight text-slate-800">设备装机实施</h2>
      </div>

      <Card>
        <CardHeader className="bg-slate-50 border-b border-slate-100">
          <CardTitle className="text-lg flex items-center">
            <Package className="w-5 h-5 mr-2 text-blue-600" /> 发货与设备信息
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4 pt-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">产品型号</label>
            <Input defaultValue="CT-7000 螺旋CT机" disabled className="bg-slate-50" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">设备SN序列号</label>
            <Input defaultValue="SN-20260601-CT7K-0012" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">物流单号</label>
            <Input defaultValue="SF1234567890" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">预计到货时间</label>
            <Input type="date" defaultValue="2026-06-15" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="border-b border-slate-100 pb-4">
          <CardTitle className="text-lg">装机信息登记</CardTitle>
        </CardHeader>
        <CardContent className="pt-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">装机开始时间</label>
              <Input type="date" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">预计完成时间</label>
              <Input type="date" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">实施工程师</label>
              <select className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm">
                <option>王大锤 (CT产线工程师)</option>
                <option>李建国 (CT产线工程师)</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">联系电话</label>
              <Input defaultValue="13800000000" />
            </div>
            <div className="space-y-2 col-span-2">
              <label className="text-sm font-medium text-slate-700">装机科室位置</label>
              <Input defaultValue="北京协和医院 门诊楼B1层 放射科2号机房" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">装机现场照片</label>
              <div className="border-2 border-dashed border-slate-200 rounded-lg p-6 flex flex-col items-center justify-center text-slate-500 hover:bg-slate-50 cursor-pointer transition-colors">
                <UploadCloud className="w-8 h-8 mb-2 text-slate-400" />
                <p className="text-sm">上传设备就位及安装过程照片</p>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">装机记录报告</label>
              <div className="border-2 border-dashed border-slate-200 rounded-lg p-6 flex flex-col items-center justify-center text-slate-500 hover:bg-slate-50 cursor-pointer transition-colors">
                <UploadCloud className="w-8 h-8 mb-2 text-slate-400" />
                <p className="text-sm">上传工程师签字的装机服务报告</p>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end bg-slate-50 rounded-b-lg pt-6">
          <Button className="bg-blue-600 hover:bg-blue-700">
            <CheckCircle className="w-4 h-4 mr-2" /> 确认装机完成
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
