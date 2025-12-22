export const $api = (url, options = {}, headers = {}) => {
  const token = useCookie('XSRF-TOKEN')
  const config = useRuntimeConfig()
  const baseURL = config.public.apiBase
  // Add CSRF token header if available
  if (token.value) {
    headers['X-XSRF-TOKEN'] = token.value
  }

  const isFormData = options.body instanceof FormData

  const allHeaders = {
    Accept: 'application/json',
    ...headers,
    ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
  }

  const apiFetch = $fetch.create({
    baseURL: baseURL,
    headers: allHeaders,
    credentials: 'include',
  })

  return apiFetch(url, {
    ...options,
  })
}
