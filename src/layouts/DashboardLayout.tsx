import { Outlet, Link, useLocation } from "react-router-dom"
import { LayoutDashboard, FileText, Settings, UserCircle, Bell, ChevronDown, Database, Shield } from "lucide-react"

export default function DashboardLayout() {
  const location = useLocation()

  const navItems = [
    { name: "工作台", path: "/", icon: <LayoutDashboard className="w-5 h-5" /> },
    { name: "商机阶段", path: "/projects/opportunity", icon: <FileText className="w-5 h-5" /> },
    { name: "报计划", path: "/projects/plan", icon: <FileText className="w-5 h-5" /> },
    { name: "调研", path: "/projects/research", icon: <FileText className="w-5 h-5" /> },
    { name: "授权", path: "/projects/auth", icon: <FileText className="w-5 h-5" /> },
    { name: "中标结果", path: "/projects/bidding", icon: <FileText className="w-5 h-5" /> },
    { name: "报单", path: "/projects/quote", icon: <FileText className="w-5 h-5" /> },
    { name: "装机", path: "/projects/install", icon: <FileText className="w-5 h-5" /> },
    { name: "验机", path: "/projects/verify", icon: <FileText className="w-5 h-5" /> },
    { name: "基础数据", path: "/settings/data", icon: <Database className="w-5 h-5" /> },
    { name: "权限管理", path: "/settings/permissions", icon: <Shield className="w-5 h-5" /> },
    { name: "系统设置", path: "/settings/system", icon: <Settings className="w-5 h-5" /> },
  ]

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-slate-200">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center mr-3">
            <span className="text-white font-bold text-lg">M</span>
          </div>
          <h1 className="text-lg font-bold text-slate-800">医疗CRM演示</h1>
        </div>
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || (location.pathname.startsWith('/projects/') && item.path === '/projects' && location.pathname !== '/projects');
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                {item.name}
              </Link>
            )
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6">
          <div className="text-lg font-medium text-slate-800">
            {navItems.find(item => item.path === location.pathname)?.name || "控制台"}
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-slate-500 hover:text-slate-700">
              <Bell className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-2 cursor-pointer">
              <UserCircle className="w-8 h-8 text-slate-400" />
              <span className="text-sm font-medium text-slate-700">Admin</span>
              <ChevronDown className="w-4 h-4 text-slate-500" />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-auto p-6">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
