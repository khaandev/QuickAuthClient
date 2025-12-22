<template>
  <FormLayout>
    <template #heading>Register</template>
    <template #main>
      <form class="space-y-4" @submit.prevent="handleRegister">
        <div>
          <BaseInput
            v-model="form.name"
            label="Full Name"
            type="text"
            class="text-gray-500"
            placeholder="John Doe"
          />
          <ValidationError field="name" />
        </div>

        <div>
          <BaseInput
            v-model="form.email"
            label="Email"
            class="text-gray-500"
            type="email"
            placeholder="example@gmail.com"
          />
          <ValidationError field="email" />
        </div>
        <div>
          <BaseInput
            v-model="form.password"
            label="Password"
            class="text-gray-500"
            type="password"
            placeholder="********"
          />
          <ValidationError field="password" />
        </div>
        <div>
          <div>
            <BaseInput
              v-model="form.password_confirmation"
              class="text-gray-500"
              label="Re-type Password"
              type="password"
              placeholder="********"
            />
          </div>
        </div>

        <PrimaryButton type="submit"> Register </PrimaryButton>
      </form>
      <p class="mt-6 text-center text-sm text-gray-600">
        Already have an account?
        <Nuxt-link to="/auth/login" class="text-blue-500 hover:underline">Log in</Nuxt-link>
      </p>
    </template>
  </FormLayout>
</template>

<script setup>
  import FormLayout from '~/layouts/guest/FormLayout.vue'
  import { useAuthStore } from '~/store/auth.js'
  const auth = useAuthStore()

  const form = reactive({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  })
  const handleRegister = async () => {
    await auth.registerUser(form)
    console.log(form)
  }

  //
  // const handleRegister = async () => {
  //   const data = {
  //     name: form.name,
  //     username: form.name,
  //     email: form.email,
  //     password: form.password,
  //     password_confirmation: form.c_password,
  //   };
  //
  //   loading.value = true;
  //   const isSuccess = await auth.attemptRegister(data);
  //   loading.value = false;
  //   if (isSuccess) {
  //     form.name = '';
  //     form.email = '';
  //     form.password = '';
  //     form.c_password = '';
  //   }
  //
  // };
  // definePageMeta({
  //   middleware: ["guest"],
  // });
</script>
