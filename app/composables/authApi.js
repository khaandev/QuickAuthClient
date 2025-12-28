import { $api } from './api'

export const authApi = {
  register: (data) => $api('/api/register', { method: 'POST', body: data }),
  login: (data) => $api('/api/login', { method: 'POST', body: data }),

  logout: (token) =>
    $api('/api/logout', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
    }),

  fetchUser: (token) =>
    $api('/api/user', {
      headers: { Authorization: `Bearer ${token}` },
    }),
}