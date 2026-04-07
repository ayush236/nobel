'use client'

import { useActionState, useState } from 'react'
import { Eye, EyeOff, LogIn } from 'lucide-react'

const initialState = { error: '' }

interface Props {
  action: (state: { error: string }, formData: FormData) => Promise<{ error: string }>
}

export default function LoginForm({ action }: Props) {
  const [state, formAction, pending] = useActionState(action, initialState)
  const [show, setShow] = useState(false)

  return (
    <form action={formAction} className="space-y-4">
      {state.error && (
        <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-lg">
          {state.error}
        </div>
      )}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Username</label>
        <input
          type="text"
          name="username"
          required
          autoComplete="username"
          placeholder="Enter username"
          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Password</label>
        <div className="relative">
          <input
            type={show ? 'text' : 'password'}
            name="password"
            required
            autoComplete="current-password"
            placeholder="Enter password"
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
          />
          <button
            type="button"
            onClick={() => setShow((s) => !s)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
      </div>
      <button
        type="submit"
        disabled={pending}
        className="w-full flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 disabled:bg-green-400 text-white font-bold py-2.5 rounded-lg transition-colors duration-300 text-sm mt-2"
      >
        <LogIn className="w-4 h-4" />
        {pending ? 'Signing in...' : 'Sign In'}
      </button>
    </form>
  )
}
