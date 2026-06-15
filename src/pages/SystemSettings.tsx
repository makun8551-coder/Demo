import React from "react"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { UploadCloud, Save } from "lucide-react"

export default function SystemSettings() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-tight text-slate-800">系统全局设置</h2>
      </div>

      <div className="grid gap-6">
        {/* Basic Settings */}
        <Card>
          <CardHeader className="bg-slate-50 border-b border-slate-100">
            <CardTitle className="text-lg">基本设置</CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">系统名称</label>
                <Input defaultValue="医疗设备商机全生命周期管理系统" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">系统简称</label>
                <Input defaultValue="M-CRM" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">企业 LOGO</label>
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">M</span>
                </div>
                <div className="flex-1 border-2 border-dashed border-slate-200 rounded-lg p-4 flex flex-col items-center justify-center text-slate-500 hover:bg-slate-50 cursor-pointer transition-colors">
                  <UploadCloud className="w-6 h-6 mb-1 text-slate-400" />
                  <p className="text-xs">点击更换 LOGO</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card>
          <CardHeader className="bg-slate-50 border-b border-slate-100">
            <CardTitle className="text-lg">通知与工作流</CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg bg-white">
              <div>
                <div className="font-medium text-slate-800">企业微信/钉钉消息推送</div>
                <div className="text-sm text-slate-500 mt-1">审批待办、阶段变更等消息自动推送到企业通讯软件</div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg bg-white">
              <div>
                <div className="font-medium text-slate-800">邮件通知通知</div>
                <div className="text-sm text-slate-500 mt-1">重要流程（如中标、合同审批）同时发送邮件给相关负责人</div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg bg-white">
              <div>
                <div className="font-medium text-slate-800">自动逾期提醒</div>
                <div className="text-sm text-slate-500 mt-1">项目在同一阶段停留超过指定天数自动触发告警</div>
              </div>
              <div className="flex items-center space-x-3">
                <Input type="number" defaultValue={15} className="w-20" /> <span className="text-sm text-slate-500">天</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </CardContent>
          <CardFooter className="bg-slate-50 rounded-b-lg pt-6 flex justify-end">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Save className="w-4 h-4 mr-2" /> 保存全部设置
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
