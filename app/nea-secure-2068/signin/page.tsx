import { FC } from 'react'
import { adminLogin } from '@/app/actions/adminAuth'
import LoginForm from '@/app/nea-secure-2068/signin/LoginForm'

const AdminLoginPage: FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-950 to-green-900 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <img src="/logo.png" alt="Nobel Environment Academy" className="w-16 h-16 rounded-2xl" />
          </div>
          <h1 className="text-white text-xl font-bold">Nobel Environment Academy</h1>
          <p className="text-green-300 text-sm mt-1">Admin Portal</p>
        </div>
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <h2 className="text-gray-900 font-bold text-lg mb-1">Sign in</h2>
          <p className="text-gray-500 text-sm mb-6">Enter your credentials to continue</p>
          <LoginForm action={adminLogin} />
        </div>
        <p className="text-center text-green-400/50 text-xs mt-6 uppercase tracking-widest">
          Restricted access — authorized personnel only
        </p>
      </div>
    </div>
  )
}

export default AdminLoginPage
