import Cookies from 'js-cookie'
import { useMutation } from 'react-query'
import { API } from '../services/api'
import { useNavigate } from 'react-router-dom'
import { Toast } from '../components/toast'

interface LoginData {
  email: string
  password: string
}

const UseLogin = () => {
  const navigate = useNavigate()

  const roleRedirectMap: any = {
    STUDENT: '/aluno/painel',
    ADMIN: '/admin/painel',
    TEACHER: '/admin/painel',
  }

  return useMutation({
    mutationFn: async ({ loginData }: { loginData: LoginData }) => {
      const response = await API.post('/auth', loginData)
      return response.data
    },
    onSuccess: (data: any) => {
      Cookies.set('token', data.token)
      Cookies.set('role', data.role)
      Cookies.set('userId', data.userId)
      Cookies.set('enrollmentNumber', data.enrollmentNumber)
      Cookies.set('employeeNumber', data.employeeNumber)

      const redirectPath = roleRedirectMap[data.role]

      if (redirectPath) navigate(redirectPath)
    },
    onError: (error: any) => {
      if (error.response.data.message === 'Account is blocked. Please contact support.') {
        Toast({
          message: 'Conta bloqueada! entre em contacto com o sector administrativo',
          theme: 'colored',
          toastType: 'error',
        })
      } else if (error.response.data.message === 'Invalid credentials.') {
        Toast({
          message: 'Credências incorrectas',
          theme: 'colored',
          toastType: 'error',
        })
      } else if (error.response.data.message === 'User not found') {
        Toast({
          message: 'Usuário não encontrado',
          theme: 'colored',
          toastType: 'error',
        })
      } else if (error.response.data.message === 'Account blocked due to multiple failed login attempts.') {
        Toast({
          message:
            'Conta bloqueada devido a várias tentativas de login mal sucedidas! Entre em contacto com o sector administrativo',
          theme: 'colored',
          toastType: 'error',
        })
      }
    },
  })
}

export { UseLogin }
