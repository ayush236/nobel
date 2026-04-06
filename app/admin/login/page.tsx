import { FC } from 'react'
import { adminLogin } from '@/app/actions/adminAuth'
import LoginForm from '@/app/admin/login/LoginForm'

const AdminLoginPage: FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-950 to-green-900 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">

        {/* Logo / Brand */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
            </svg>
          </div>
          <h1 className="text-white text-xl font-bold">Nobel Environment Academy</h1>
          <p className="text-green-300 text-sm mt-1">Admin Portal</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <h2 className="text-gray-900 font-bold text-lg mb-1">Sign in</h2>
          <p className="text-gray-400 text-sm mb-6">Enter your credentials to continue</p>
          <LoginForm action={adminLogin} />
        </div>

        <p className="text-center text-green-400/50 text-xs mt-6">
          Restricted access — authorized personnel only
        </p>
      </div>
    </div>
  )
}

export default AdminLoginPage
