import React, { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { UploadCloud } from "lucide-react"

export default function Quote() {
  const [terminalPrice, setTerminalPrice] = useState(300)
  const [distributorCost, setDistributorCost] = useState(210)

  const margin = terminalPrice - distributorCost;

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-tight text-slate-800">项目报单与核对</h2>
        <Button className="bg-blue-600 hover:bg-blue-700">提交报单</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Module 1: Device Info */}
        <Card>
          <CardHeader className="bg-slate-50 border-b border-slate-100">
            <CardTitle className="text-lg">出库与设备信息</CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">产品型号</label>
              <Input defaultValue="CT-7000 螺旋CT机" disabled className="bg-slate-50" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">核对 SN码</label>
              <Input placeholder="扫描或输入设备 SN 码进行核对" defaultValue="SN-20260601-CT7K-0012" className="border-blue-300 focus:ring-blue-600" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">发货仓库</label>
                <select className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm">
                  <option>北京总仓</option>
                  <option>上海分仓</option>
                  <option>广州分仓</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">预计发货日期</label>
                <Input type="date" defaultValue="2026-06-12" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">最终终端收货方</label>
              <textarea 
                className="w-full rounded-md border border-slate-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-slate-50" 
                rows={2} 
                disabled
                defaultValue="北京协和医院 放射科 / 张建国 / 13800000000"
              ></textarea>
            </div>
          </CardContent>
        </Card>

        {/* Module 2: Financial Info */}
        <Card>
          <CardHeader className="bg-slate-50 border-b border-slate-100">
            <CardTitle className="text-lg">经销商结算信息 (单位: 万元)</CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">经销商/代理商名称</label>
              <Input defaultValue="北京九州医疗器械有限公司" />
            </div>
            
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">终端中标总价</label>
                <Input type="number" value={terminalPrice} onChange={(e) => setTerminalPrice(Number(e.target.value))} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">公司出库价 (提货价)</label>
                <Input type="number" value={distributorCost} onChange={(e) => setDistributorCost(Number(e.target.value))} className="border-blue-300" />
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg flex items-center justify-between border border-blue-100 mt-2">
              <span className="text-sm font-medium text-blue-800">代理商毛利差价</span>
              <span className="text-xl font-bold text-blue-600">¥ {margin.toFixed(2)} 万</span>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">首付款比例(%)</label>
                <Input type="number" defaultValue={30} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">款项结算状态</label>
                <select className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm">
                  <option>未结清</option>
                  <option>首款已到</option>
                  <option>尾款已到(已结清)</option>
                </select>
              </div>
            </div>
            
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <label className="text-sm font-medium text-slate-700">代理商打款凭证上传</label>
              <div className="border-2 border-dashed border-slate-200 rounded-lg p-4 flex flex-col items-center justify-center text-slate-500 hover:bg-slate-50 cursor-pointer transition-colors">
                <UploadCloud className="w-6 h-6 mb-1 text-slate-400" />
                <p className="text-xs">点击或拖拽上传银行回单截图</p>
              </div>
            </div>

          </CardContent>
        </Card>
      </div>
    </div>
  )
}
