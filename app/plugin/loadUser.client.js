// plugins/loadUser.client.js
import { useCookie } from '#app'
import { useAuthStore } from '~/store/auth.js'

export default defineNuxtPlugin(async () => {
  const auth = useAuthStore()
  const token = useCookie('auth_token')

  console.log('Plugin loaded, token:', token.value)

  if (token.value) {
    console.log('Fetching user...')
    await auth.fetchCurrentUser(token.value)
    console.log('User after fetch:', auth.user)
  } else {
    auth.isAuthLoading = false
  }
})
