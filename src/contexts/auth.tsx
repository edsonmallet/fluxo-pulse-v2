import React, { createContext, useContext, useEffect, useState } from 'react'
import * as auth from '@services/auth'
import api from '@services/api'

interface IUser {
  id: string
  name: string
  email: string
  created_at: string
  updated_at: string
}

interface AuthContextData {
  signed: boolean
  user: IUser | null
  loading: boolean
  signIn(data: Request): Promise<void>
  signOut(): void
}

interface Request {
  email: string
  password: string
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null)
  const [loading, setLoading] = useState(false)

  const loadStorageData = async () => {
    const storageUser = await window.localStorage.getItem('@Auth:user')
    const storageToken = await window.localStorage.getItem('@Auth:token')

    if (storageUser && storageToken) {
      api.defaults.headers['Authorization'] = `Bearer ${storageToken}`
      setUser(JSON.parse(storageUser))
    }
  }

  const signIn = async ({ email, password }: Request) => {
    const res = await auth.signIn({ email, password })
    setUser(res.user)

    api.defaults.headers['Authorization'] = `Bearer ${res.token}`

    window.localStorage.setItem('@Auth:user', JSON.stringify(res.user))
    window.localStorage.setItem('@Auth:token', res.token)
  }

  const signOut = () => {
    window.localStorage.clear()
    setUser(null)
  }

  useEffect(() => {
    loadStorageData()
  }, [])

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, loading, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext)

export default useAuth
