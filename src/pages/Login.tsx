import { useNavigate } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Activity } from "lucide-react"

export default function Login() {
  const navigate = useNavigate()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    navigate("/")
  }

  return (
    <div className="min-h-screen w-full flex bg-white">
      {/* Left Form Side */}
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
              <Activity className="text-white w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">M-CRM</h2>
          </div>
          <h2 className="mt-8 text-2xl font-bold tracking-tight text-slate-900">
            登录您的账户
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            医疗设备商机全生命周期管理系统演示
          </p>

          <div className="mt-10">
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-medium leading-6 text-slate-900">
                  用户名
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    defaultValue="admin"
                    className="block w-full rounded-md border-0 py-1.5 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium leading-6 text-slate-900">
                  密码
                </label>
                <div className="mt-2">
                  <input
                    type="password"
                    defaultValue="123456"
                    className="block w-full rounded-md border-0 py-1.5 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-600"
                  />
                  <label htmlFor="remember-me" className="ml-3 block text-sm leading-6 text-slate-900">
                    记住密码
                  </label>
                </div>

                <div className="text-sm leading-6">
                  <a href="#" className="font-semibold text-blue-600 hover:text-blue-500">
                    忘记密码?
                  </a>
                </div>
              </div>

              <div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white">
                  登录系统
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      {/* Right Illustration Side */}
      <div className="hidden lg:flex lg:flex-1 bg-slate-50 items-center justify-center border-l border-slate-200">
        <div className="max-w-2xl text-center px-10">
          <Activity className="w-48 h-48 mx-auto text-blue-100" />
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900">
            赋能医疗科技，提升商机转化
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            从线索发现到最终验机，一站式追踪项目全生命周期，打破信息孤岛，实现高效协同与精准管理。
          </p>
        </div>
      </div>
    </div>
  )
}
