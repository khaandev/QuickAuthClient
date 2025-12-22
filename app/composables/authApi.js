import { $api } from './api'

export const authApi = {
  getCsrfCookie: async () => await $api('/sanctum/csrf-cookie'),
  register: async (data) => await $api('/api/register', { method: 'POST', body: data }),
  login: async (data) => await $api('/api/login', { method: 'POST', body: data }),
  logout: async (token) =>
    await $api('/api/logout', { method: 'POST', headers: { Authorization: `Bearer ${token}` } }),
  fetchUser: async (token) =>
    await $api('/api/user', { headers: { Authorization: `Bearer ${token}` } }),
}
