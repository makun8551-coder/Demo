import React, { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Plus, Search, Edit2, Trash2 } from "lucide-react"
import { Input } from "../components/ui/input"

export default function BasicData() {
  const tabs = ["产品管理", "医院管理", "科室管理", "区域管理", "竞争品牌"]
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-tight text-slate-800">基础数据管理</h2>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-slate-200">
        <div className="flex border-b border-slate-200">
          {tabs.map((tab, index) => (
            <div 
              key={index} 
              className={`px-6 py-4 cursor-pointer text-sm font-medium transition-colors border-b-2
                ${activeTab === index ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-800'}`}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </div>
          ))}
        </div>

        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="relative w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
              <Input placeholder={`搜索${tabs[activeTab]}...`} className="pl-9" />
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-2" /> 新增记录
            </Button>
          </div>

          {activeTab === 0 && (
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-slate-500 bg-slate-50 border-y border-slate-200 uppercase">
                <tr>
                  <th className="px-6 py-3">产品编码</th>
                  <th className="px-6 py-3">产品名称</th>
                  <th className="px-6 py-3">产品线</th>
                  <th className="px-6 py-3">标准指导价</th>
                  <th className="px-6 py-3">状态</th>
                  <th className="px-6 py-3 text-right">操作</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="px-6 py-4">PRD-CT-001</td>
                  <td className="px-6 py-4">CT-7000 螺旋CT机</td>
                  <td className="px-6 py-4">影像设备</td>
                  <td className="px-6 py-4">¥350.00万</td>
                  <td className="px-6 py-4"><span className="text-green-600 bg-green-50 px-2 py-1 rounded">在售</span></td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <Button variant="ghost" size="icon" className="text-blue-600 h-8 w-8"><Edit2 className="w-4 h-4" /></Button>
                    <Button variant="ghost" size="icon" className="text-red-600 h-8 w-8"><Trash2 className="w-4 h-4" /></Button>
                  </td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="px-6 py-4">PRD-MR-002</td>
                  <td className="px-6 py-4">MR-8000 核磁共振</td>
                  <td className="px-6 py-4">影像设备</td>
                  <td className="px-6 py-4">¥800.00万</td>
                  <td className="px-6 py-4"><span className="text-green-600 bg-green-50 px-2 py-1 rounded">在售</span></td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <Button variant="ghost" size="icon" className="text-blue-600 h-8 w-8"><Edit2 className="w-4 h-4" /></Button>
                    <Button variant="ghost" size="icon" className="text-red-600 h-8 w-8"><Trash2 className="w-4 h-4" /></Button>
                  </td>
                </tr>
              </tbody>
            </table>
          )}

          {activeTab !== 0 && (
            <div className="text-center py-12 text-slate-500">
              数据加载中... (Mock演示)
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
