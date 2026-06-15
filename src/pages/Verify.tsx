import React, { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { UploadCloud, CheckCircle2, Circle } from "lucide-react"

export default function Verify() {
  const checklistItems = [
    "设备外包装完好，无破损",
    "设备主机及配件外观无划痕、变形",
    "设备通电自检正常，无报警提示",
    "软件系统运行稳定，各项功能模块测试通过",
    "校准模体扫描图像质量达标",
    "产品说明书、合格证、保修卡齐全",
    "现场操作人员基础使用培训完成",
  ]

  const [checkedItems, setCheckedItems] = useState<number[]>([])

  const toggleCheck = (index: number) => {
    if (checkedItems.includes(index)) {
      setCheckedItems(checkedItems.filter(i => i !== index))
    } else {
      setCheckedItems([...checkedItems, index])
    }
  }

  const isAllChecked = checkedItems.length === checklistItems.length

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-tight text-slate-800">设备最终验机</h2>
      </div>

      <Card>
        <CardHeader className="bg-slate-50 border-b border-slate-100">
          <CardTitle className="text-lg">验机 Checklist</CardTitle>
        </CardHeader>
        <CardContent className="pt-6 space-y-4">
          <div className="space-y-3">
            {checklistItems.map((item, index) => {
              const isChecked = checkedItems.includes(index)
              return (
                <div 
                  key={index} 
                  className={`flex items-start p-3 rounded-lg border cursor-pointer transition-colors
                    ${isChecked ? 'bg-green-50 border-green-200' : 'bg-white border-slate-200 hover:bg-slate-50'}`}
                  onClick={() => toggleCheck(index)}
                >
                  <div className="mt-0.5 mr-3">
                    {isChecked ? (
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                    ) : (
                      <Circle className="w-5 h-5 text-slate-300" />
                    )}
                  </div>
                  <div className={`text-sm ${isChecked ? 'text-green-800 font-medium' : 'text-slate-700'}`}>
                    {item}
                  </div>
                </div>
              )
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-slate-100">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">验机结果确认</label>
              <select className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm">
                <option>验收合格</option>
                <option>条件接收 (遗留部分小问题)</option>
                <option>验收不合格</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">验机遗留问题及备注</label>
              <textarea 
                className="w-full rounded-md border border-slate-200 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600" 
                rows={1}
                placeholder="无"
              ></textarea>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">验机报告扫描件 (需客户签字盖章)</label>
              <div className="border-2 border-dashed border-slate-200 rounded-lg p-6 flex flex-col items-center justify-center text-slate-500 hover:bg-slate-50 cursor-pointer transition-colors">
                <UploadCloud className="w-8 h-8 mb-2 text-slate-400" />
                <p className="text-sm">上传客户签字版验机报告</p>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">装机合影/设备运行照片</label>
              <div className="border-2 border-dashed border-slate-200 rounded-lg p-6 flex flex-col items-center justify-center text-slate-500 hover:bg-slate-50 cursor-pointer transition-colors">
                <UploadCloud className="w-8 h-8 mb-2 text-slate-400" />
                <p className="text-sm">上传结项相关影像资料</p>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center bg-slate-50 rounded-b-lg pt-6">
          <div className="text-sm text-slate-500">
            完成度: <span className="font-bold text-slate-800">{checkedItems.length} / {checklistItems.length}</span>
          </div>
          <Button 
            className={`${isAllChecked ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'}`}
          >
            提交验机结果并结项
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
