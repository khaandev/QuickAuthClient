<template>
  <FormLayout>
    <template #heading>Login</template>
    <template #main>
      <form class="space-y-4" @submit.prevent="handleLogin">
        <div>
          <BaseInput
            v-model="form.email"
            label="Email"
            type="email"
            placeholder="examlpe@gmail.com"
            class="text-gray-500"
          />
          <ValidationError field="email" />
        </div>

        <div>
          <BaseInput
            v-model="form.password"
            label="Password"
            type="password"
            placeholder="*******"
            class="text-gray-500"
          />
          <ValidationError field="password" />
        </div>

        <div class="text-sm">
          <a href="#" class="text-blue-500 hover:underline">Forgot password?</a>
        </div>

        <PrimaryButton type="submit"> Login </PrimaryButton>
      </form>
      <p class="mt-6 text-center text-sm text-gray-600">
        Don’t have an account?
        <Nuxt-link to="/auth/register" class="text-blue-500 hover:underline">Sign up</Nuxt-link>
      </p>
    </template>
  </FormLayout>
</template>

<script setup lang="ts">
  import FormLayout from '~/layouts/guest/FormLayout.vue'
  import { useAuthStore } from '~/store/auth'
  const auth = useAuthStore()

  const form = reactive({
    email: 'khan@gmail.com',
    password: 'password',
  })

  const handleLogin = async () => {
    await auth.loginUser(form)
  }
</script>
