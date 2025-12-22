export default function (url, options = {}) {
  options.headers = options.headers || {}

  const token = useCookie('XSRF-TOKEN')
  const accessToken = useCookie('access_token')
  const config = useRuntimeConfig()
  const baseURL = config.public.apiBase

  if (token.value) {
    options.headers['X-XSRF-TOKEN'] = token.value
  }
  if (accessToken.value) {
    options.headers['Authorization'] = `Bearer ${accessToken.value}`
  }

  return useFetch(baseURL + url, {
    ...options,
    credentials: 'include',
    headers: {
      ...options.headers,
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...useRequestHeaders(['cookie']),
      referer: 'http://localhost:3000',
    },
  })
}
