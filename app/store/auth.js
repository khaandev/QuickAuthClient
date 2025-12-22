import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { authApi } from '~/composables/authApi'
import { useCommonStore } from '~/store/common.js'
import { useCookie } from '#app'

export const useAuthStore = defineStore('auth', () => {
  // --------------------
  // STATE
  // --------------------
  const user = ref(null)
  const isAdmin = ref(false)
  const isAuthLoading = ref(true)
  const common = useCommonStore()

  // --------------------
  // GETTERS
  // --------------------
  const isLoggedIn = computed(() => !!user.value)

  // --------------------
  // ACTIONS
  // --------------------

  // Register a new user
  async function registerUser(data) {
    try {
      common.validationError = null
      await authApi.getCsrfCookie()
      await authApi.register(data)
      return true
    } catch (err) {
      if (err.status === 422) common.validationError = err.data.errors
      return false
    }
  }

  // Login user
  async function loginUser(data) {
    try {
      common.validationError = null
      common.Invalid = null

      await authApi.getCsrfCookie()
      const response = await authApi.login(data)

      if (response?.token && response?.user) {
        // set token cookie
        const tokenCookie = useCookie('auth_token', {
          maxAge: 60 * 60 * 24,
          sameSite: 'lax',
          secure: false,
        })
        tokenCookie.value = response.token

        isAdmin.value = false

        isAuthLoading.value = false
        await fetchCurrentUser(response.token)

        return navigateTo('/', { replace: true })
      }
    } catch (err) {
      if (err.status === 422) common.validationError = err.data.errors
      else if (err.status === 400) common.Invalid = err.data.message
      throw err
    }
  }

  // Fetch current logged-in user
  async function fetchCurrentUser(token) {
    if (!token) return clearAuthState()

    try {
      isAuthLoading.value = true
      const data = await authApi.fetchUser(token)
      user.value = data
      isAdmin.value = !!data.is_admin
    } catch (err) {
      clearAuthState()
    } finally {
      isAuthLoading.value = false
    }
  }

  // Logout user
  async function logoutUser() {
    try {
      const token = useCookie('auth_token').value
      if (token) await authApi.logout(token)
    } catch (err) {
      console.error('Logout error:', err)
    } finally {
      clearAuthState()
      window.location.href = '/guest/login'
    }
  }

  // Clear all auth state
  function clearAuthState() {
    user.value = null
    isAdmin.value = false
    useCookie('auth_token').value = null
    common.validationError = null
    common.Invalid = null
  }

  // --------------------
  // RETURN
  // --------------------
  return {
    // State
    user,
    isLoggedIn,
    isAdmin,
    isAuthLoading,

    // Actions
    registerUser,
    loginUser,
    fetchCurrentUser,
    logoutUser,
    clearAuthState,
  }
})
