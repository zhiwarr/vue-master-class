import { supabase } from '@/lib/supabaseClient'
import { useAuthStore } from '@/stores/auth'
import type { LoginForm, RegisterForm } from '@/types/AuthForm'

const authStore = useAuthStore()

export const login = async (formData: LoginForm) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: formData.email,
    password: formData.password,
  })
  if (error) return console.error('Login error:', error)

  authStore.setAuth(data.session)
  return true
}

export const register = async (formData: RegisterForm) => {
  const { data, error } = await supabase.auth.signUp({
    email: formData.email,
    password: formData.password,
  })
  if (error) return console.error('Registration error:', error)

  if (data.user) {
    const { error } = await supabase.from('profiles').insert({
      id: data.user.id,
      username: formData.username,
      full_name: `${formData.first_name} ${formData.last_name}`,
    })
    if (error) {
      console.error('Profile creation error:', error)
      return
    }
  }
  authStore.setAuth(data.session)
  return true
}
