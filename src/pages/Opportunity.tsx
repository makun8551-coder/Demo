import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Search, Plus, Filter } from "lucide-react"
import { MOCK_PROJECTS, Project } from "../mock/data"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Badge } from "../components/ui/badge"

export default function Opportunity() {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Filter projects by stage "商机" and search term
  const projects = MOCK_PROJECTS.filter(p => 
    p.stage === "商机" && 
    (p.name.includes(searchTerm) || p.hospital.includes(searchTerm) || p.doctor.includes(searchTerm))
  )

  const getStatusVariant = (status: string) => {
    switch(status) {
      case "新建": return "default"
      case "跟进中": return "secondary"
      case "转计划": return "success"
      case "暂停": return "warning"
      case "丢单": return "destructive"
      default: return "default"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-tight text-slate-800">商机列表</h2>
        <Button onClick={() => setIsModalOpen(true)} className="bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" /> 新建商机
        </Button>
      </div>

      {/* Filter Bar */}
      <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm border border-slate-200">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
          <Input 
            placeholder="搜索项目编号、医院名称、医生..." 
            className="pl-9"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button variant="outline" className="text-slate-600">
          <Filter className="w-4 h-4 mr-2" /> 筛选
        </Button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-slate-500 bg-slate-50 border-b border-slate-200 uppercase">
              <tr>
                <th className="px-6 py-4 font-medium">项目编号</th>
                <th className="px-6 py-4 font-medium">医院名称</th>
                <th className="px-6 py-4 font-medium">科室 / 医生</th>
                <th className="px-6 py-4 font-medium">产品线</th>
                <th className="px-6 py-4 font-medium">预计金额</th>
                <th className="px-6 py-4 font-medium">负责人</th>
                <th className="px-6 py-4 font-medium">当前状态</th>
                <th className="px-6 py-4 font-medium">创建时间</th>
                <th className="px-6 py-4 font-medium text-right">操作</th>
              </tr>
            </thead>
            <tbody>
              {projects.length > 0 ? projects.map((p) => (
                <tr key={p.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-blue-600 cursor-pointer hover:underline" onClick={() => navigate(`/projects/${p.id}`)}>
                    {p.id}
                  </td>
                  <td className="px-6 py-4">{p.hospital}</td>
                  <td className="px-6 py-4 text-slate-600">
                    <div>{p.department}</div>
                    <div className="text-xs text-slate-400">{p.doctor}</div>
                  </td>
                  <td className="px-6 py-4">{p.product}</td>
                  <td className="px-6 py-4 text-orange-600 font-medium">
                    ¥{(p.amount / 10000).toFixed(2)}万
                  </td>
                  <td className="px-6 py-4">{p.manager}</td>
                  <td className="px-6 py-4">
                    <Badge variant={getStatusVariant(p.status)}>{p.status}</Badge>
                  </td>
                  <td className="px-6 py-4 text-slate-500">{p.createdAt}</td>
                  <td className="px-6 py-4 text-right">
                    <Button variant="link" className="text-blue-600 p-0 h-auto" onClick={() => navigate(`/projects/${p.id}`)}>
                      查看详情
                    </Button>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan={9} className="px-6 py-8 text-center text-slate-500">
                    未找到相关商机数据
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* New Opportunity Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b border-slate-100">
              <h3 className="text-xl font-bold text-slate-800">新建商机</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600 text-2xl leading-none">&times;</button>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">医院名称</label>
                  <Input placeholder="输入或选择医院" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">科室</label>
                  <Input placeholder="输入科室" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">医生姓名</label>
                  <Input placeholder="输入医生姓名" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">联系电话</label>
                  <Input placeholder="输入联系电话" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">产品类型</label>
                  <Input placeholder="选择产品" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">竞争品牌</label>
                  <Input placeholder="输入竞争品牌" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">预计采购金额(万)</label>
                  <Input type="number" placeholder="0.00" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">预计采购时间</label>
                  <Input type="date" />
                </div>
              </div>
              <div className="space-y-2 pt-2">
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
              <div className="space-y-2 pt-2">
                <label className="text-sm font-medium text-slate-700">项目背景</label>
                <textarea 
                  className="w-full rounded-md border border-slate-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600" 
                  rows={3} 
                  placeholder="简述该项目的背景、客户需求等..."
                ></textarea>
              </div>
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <label className="text-sm font-medium text-slate-700">附件上传</label>
                <div className="border-2 border-dashed border-slate-200 rounded-lg p-6 flex flex-col items-center justify-center text-slate-500 hover:bg-slate-50 cursor-pointer transition-colors">
                  <Plus className="w-8 h-8 mb-2 text-slate-400" />
                  <p className="text-sm">点击或拖拽文件到此处上传</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end p-6 border-t border-slate-100 space-x-3 bg-slate-50 rounded-b-xl">
              <Button variant="outline" onClick={() => setIsModalOpen(false)}>取消</Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white" onClick={() => setIsModalOpen(false)}>保存提交</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
