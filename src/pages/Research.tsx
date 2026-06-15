import React, { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { Badge } from "../components/ui/badge"
import { UploadCloud, FileText, Eye, Download, Clock, Check } from "lucide-react"

export default function Research() {
  const [status] = useState("区运营审核中")

  return (
    <div className="space-y-6 max-w-[1400px] mx-auto pb-10">
      <div className="flex justify-between items-center bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
        <div className="flex items-center space-x-4">
          <h2 className="text-xl font-bold tracking-tight text-slate-800">医院调研资料申请</h2>
          <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-100">{status}</Badge>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" className="text-slate-600">退回修改</Button>
          <Button variant="outline" className="text-slate-600">补充资料</Button>
          <Button className="bg-blue-600 hover:bg-blue-700">审核通过</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* 左侧：项目基础信息 */}
        <div className="lg:col-span-3 space-y-6">
          <Card className="sticky top-6">
            <CardHeader className="bg-slate-50 border-b border-slate-100 pb-4">
              <CardTitle className="text-base flex items-center">
                <span className="w-1.5 h-5 bg-blue-600 rounded-sm mr-2"></span> 项目基础信息
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-4">
              <div className="space-y-1">
                <label className="text-xs text-slate-500">项目名称</label>
                <div className="text-sm font-medium text-slate-800">北京协和医院CT采购项目</div>
              </div>
              <div className="space-y-1">
                <label className="text-xs text-slate-500">医院名称</label>
                <div className="text-sm font-medium text-slate-800">北京协和医院 (三级甲等)</div>
              </div>
              <div className="space-y-1">
                <label className="text-xs text-slate-500">科室 / 医生</label>
                <div className="text-sm font-medium text-slate-800">放射科 / 张建国</div>
              </div>
              <div className="space-y-1">
                <label className="text-xs text-slate-500">产品型号</label>
                <div className="text-sm font-medium text-slate-800">CT-7000 螺旋CT机</div>
              </div>
              <div className="space-y-1">
                <label className="text-xs text-slate-500">销售负责人</label>
                <div className="text-sm font-medium text-slate-800">李销售</div>
              </div>
              <div className="space-y-1">
                <label className="text-xs text-slate-500">申请时间</label>
                <div className="text-sm font-medium text-slate-800">2026-06-14 10:30:00</div>
              </div>
              <div className="space-y-1">
                <label className="text-xs text-slate-500">项目阶段</label>
                <div className="text-sm font-medium text-slate-800">调研阶段</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 中间：资料申请清单 */}
        <div className="lg:col-span-6 space-y-6">
          {/* 医院调研需求 */}
          <Card>
            <CardHeader className="bg-slate-50 border-b border-slate-100 pb-4">
              <CardTitle className="text-base flex items-center">
                <span className="w-1.5 h-5 bg-indigo-500 rounded-sm mr-2"></span> 医院调研需求
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">调研原因</label>
                  <select className="w-full h-9 rounded-md border border-input bg-background px-3 text-sm">
                    <option>医院准入</option>
                    <option>设备采购</option>
                    <option>招标前审核</option>
                    <option>供应商审核</option>
                    <option>新增供应商备案</option>
                    <option>其他</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">要求完成时间</label>
                  <Input type="date" className="h-9 text-sm" defaultValue="2026-06-20" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">医院要求说明</label>
                <textarea 
                  className="w-full rounded-md border border-slate-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600" 
                  rows={3} 
                  defaultValue="医院要求提供营业执照、产品注册证、代理授权书、产品彩页、产品白皮书。"
                ></textarea>
              </div>
            </CardContent>
          </Card>

          {/* 调研资料申请 */}
          <Card>
            <CardHeader className="bg-slate-50 border-b border-slate-100 pb-4">
              <CardTitle className="text-base flex items-center">
                <span className="w-1.5 h-5 bg-green-500 rounded-sm mr-2"></span> 调研资料申请
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-slate-800 mb-3 border-b pb-1">公司资质</h4>
                <div className="grid grid-cols-3 gap-3">
                  {['营业执照', '医疗器械经营许可证', 'ISO认证', '质量体系认证'].map(item => (
                    <label key={item} className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked={item === '营业执照' || item === '医疗器械经营许可证'} className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500" />
                      <span className="text-sm text-slate-700">{item}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-800 mb-3 border-b pb-1">产品资料</h4>
                <div className="grid grid-cols-3 gap-3">
                  {['产品彩页', '产品白皮书', '产品参数表', '产品注册证'].map(item => (
                    <label key={item} className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked={['产品彩页', '产品白皮书', '产品注册证'].includes(item)} className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500" />
                      <span className="text-sm text-slate-700">{item}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-800 mb-3 border-b pb-1">授权文件</h4>
                <div className="grid grid-cols-3 gap-3">
                  {['代理授权书', '厂家授权书', '临时授权函'].map(item => (
                    <label key={item} className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked={item === '代理授权书'} className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500" />
                      <span className="text-sm text-slate-700">{item}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-800 mb-3 border-b pb-1">其他资料</h4>
                <div className="grid grid-cols-3 gap-3">
                  {['成功案例', '用户名单', '学术资料', '其他附件'].map(item => (
                    <label key={item} className="flex items-center space-x-2">
                      <input type="checkbox" className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500" />
                      <span className="text-sm text-slate-700">{item}</span>
                    </label>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 特殊资料申请 */}
          <Card>
            <CardHeader className="bg-slate-50 border-b border-slate-100 pb-4">
              <CardTitle className="text-base flex items-center">
                <span className="w-1.5 h-5 bg-orange-500 rounded-sm mr-2"></span> 特殊资料申请
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-4">
               <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">资料名称</label>
                  <Input placeholder="输入特殊要求资料名称" className="h-9 text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">是否需要盖章</label>
                  <div className="flex space-x-4 h-9 items-center">
                    <label className="flex items-center"><input type="radio" name="seal" className="mr-2" />是</label>
                    <label className="flex items-center"><input type="radio" name="seal" className="mr-2" defaultChecked />否</label>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">资料说明</label>
                <Input placeholder="请详细说明特殊资料要求" className="h-9 text-sm" />
              </div>
              <div className="space-y-2 pt-2">
                <label className="text-sm font-medium text-slate-700">支持上传医院要求文件</label>
                <div className="border-2 border-dashed border-slate-200 rounded-lg p-4 flex flex-col items-center justify-center text-slate-500 hover:bg-slate-50 cursor-pointer transition-colors">
                  <UploadCloud className="w-6 h-6 mb-1 text-slate-400" />
                  <p className="text-xs">支持 PDF, Word, 图片格式</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 资料生成中心 */}
          <Card>
            <CardHeader className="bg-slate-50 border-b border-slate-100 pb-4 flex flex-row justify-between items-center">
              <CardTitle className="text-base flex items-center mt-1">
                <span className="w-1.5 h-5 bg-purple-500 rounded-sm mr-2"></span> 资料生成中心
              </CardTitle>
              <div className="flex space-x-2">
                <Button size="sm" variant="outline" className="h-8 text-xs font-medium bg-white">
                  <UploadCloud className="w-3.5 h-3.5 mr-1" /> 上传资料
                </Button>
                <Button size="sm" variant="outline" className="h-8 text-xs font-medium bg-white">生成预览包</Button>
              </div>
            </CardHeader>
            <CardContent className="pt-0 p-0">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-slate-500 bg-slate-50 border-b border-slate-100">
                  <tr>
                    <th className="px-4 py-3 font-medium">文件名称</th>
                    <th className="px-4 py-3 font-medium">类型</th>
                    <th className="px-4 py-3 font-medium">版本</th>
                    <th className="px-4 py-3 font-medium">上传人</th>
                    <th className="px-4 py-3 font-medium text-right">操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-50 hover:bg-slate-50">
                    <td className="px-4 py-3 flex items-center">
                      <FileText className="w-4 h-4 text-red-500 mr-2" />
                      北京协和CT_资质包_v1.pdf
                    </td>
                    <td className="px-4 py-3 text-slate-600">合并PDF</td>
                    <td className="px-4 py-3 text-slate-600">V1.0</td>
                    <td className="px-4 py-3 text-slate-600">系统自动</td>
                    <td className="px-4 py-3 text-right space-x-3">
                      <button className="text-blue-600 hover:text-blue-800" title="预览"><Eye className="w-4 h-4" /></button>
                      <button className="text-slate-600 hover:text-slate-800" title="下载"><Download className="w-4 h-4" /></button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>

        {/* 右侧：审批流程 */}
        <div className="lg:col-span-3 space-y-6">
          <Card className="sticky top-6">
            <CardHeader className="bg-slate-50 border-b border-slate-100 pb-4">
              <CardTitle className="text-base flex items-center">
                <span className="w-1.5 h-5 bg-teal-500 rounded-sm mr-2"></span> 审批流程
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="relative border-l border-slate-200 ml-3 space-y-8">
                
                {/* 节点1 */}
                <div className="relative pl-6">
                  <span className="absolute -left-2.5 top-1 bg-green-500 rounded-full w-5 h-5 flex items-center justify-center ring-4 ring-white">
                    <Check className="w-3 h-3 text-white" />
                  </span>
                  <div className="space-y-1">
                    <div className="flex justify-between items-center">
                      <h4 className="text-sm font-bold text-slate-800">销售提交</h4>
                      <span className="text-xs text-slate-400">06-14 10:30</span>
                    </div>
                    <div className="text-xs text-slate-600">提交人: 李销售</div>
                  </div>
                </div>

                {/* 节点2 */}
                <div className="relative pl-6">
                  <span className="absolute -left-2.5 top-1 bg-blue-500 rounded-full w-5 h-5 flex items-center justify-center ring-4 ring-white">
                    <Clock className="w-3 h-3 text-white" />
                  </span>
                  <div className="space-y-1">
                    <div className="flex justify-between items-center">
                      <h4 className="text-sm font-bold text-blue-700">区运营审核</h4>
                      <span className="text-[10px] bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded">审核中</span>
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      <div>检查要求：</div>
                      <ul className="list-disc pl-3 mt-0.5 space-y-0.5 text-slate-400">
                        <li>产品是否正确</li>
                        <li>代理是否正确</li>
                        <li>预算是否合理</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 节点3 */}
                <div className="relative pl-6 opacity-40">
                  <span className="absolute -left-2 top-1.5 bg-slate-200 rounded-full w-4 h-4 ring-4 ring-white"></span>
                  <div className="space-y-1">
                    <div className="flex justify-between items-center">
                      <h4 className="text-sm font-bold text-slate-700">省区经理审核</h4>
                    </div>
                  </div>
                </div>

                {/* 节点4 */}
                <div className="relative pl-6 opacity-40">
                  <span className="absolute -left-2 top-1.5 bg-slate-200 rounded-full w-4 h-4 ring-4 ring-white"></span>
                  <div className="space-y-1">
                    <div className="flex justify-between items-center">
                      <h4 className="text-sm font-bold text-slate-700">区运营补充资料</h4>
                    </div>
                  </div>
                </div>

                {/* 节点5 */}
                <div className="relative pl-6 opacity-40">
                  <span className="absolute -left-2 top-1.5 bg-slate-200 rounded-full w-4 h-4 ring-4 ring-white"></span>
                  <div className="space-y-1">
                    <div className="flex justify-between items-center">
                      <h4 className="text-sm font-bold text-slate-700">总运营审核</h4>
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      <div>执行任务：</div>
                      <ul className="list-disc pl-3 mt-0.5 space-y-0.5">
                        <li>上传特殊资料</li>
                        <li>资料排序</li>
                        <li>PDF合并</li>
                        <li>加盖公司公章</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 节点6 */}
                <div className="relative pl-6 opacity-40">
                  <span className="absolute -left-2 top-1.5 bg-slate-200 rounded-full w-4 h-4 ring-4 ring-white"></span>
                  <div className="space-y-1">
                    <div className="flex justify-between items-center">
                      <h4 className="text-sm font-bold text-slate-700">财务审核</h4>
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      <div>执行任务：</div>
                      <ul className="list-disc pl-3 mt-0.5 space-y-0.5">
                        <li>财务章</li>
                        <li>合同章</li>
                        <li>授权章</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 节点7 */}
                <div className="relative pl-6 opacity-40">
                  <span className="absolute -left-2 top-1.5 bg-slate-200 rounded-full w-4 h-4 ring-4 ring-white"></span>
                  <div className="space-y-1">
                    <div className="flex justify-between items-center">
                      <h4 className="text-sm font-bold text-slate-700">完成</h4>
                    </div>
                  </div>
                </div>

              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  )
}
