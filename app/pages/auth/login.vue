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
        </div>

        <div>
          <BaseInput
            v-model="form.password"
            label="Password"
            type="password"
            placeholder="*******"
            class="text-gray-500"
          />
        </div>

        <div class="text-sm">
          <a href="#" class="text-blue-500 hover:underline">Forgot password?</a>
        </div>

        <PrimaryButton type="submit"> Login </PrimaryButton>
      </form>
    </template>

    <!--    <p class="mt-6 text-center text-sm text-gray-600">-->
    <!--      Don’t have an account?-->
    <!--      <Nuxt-link to="/guest/register" class="text-blue-500 hover:underline">Sign up</Nuxt-link>-->
    <!--    </p>-->
  </FormLayout>
</template>

<script setup>
  // import FormLayout from "~/layouts/Guest/FormLayout.vue";
  // import login from '~/pages/auth/login.vue'
  // const auth = useAuthStore();
  import FormLayout from '~/layouts/guest/FormLayout.vue'

  const form = reactive({
    email: 'khan@gmail.com',
    password: 'password',
  })

  const handleLogin = async () => {
    // await auth.attemptLogin(form);
    console.log(form)
  }
</script>
