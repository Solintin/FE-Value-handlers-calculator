<!-- eslint-disable -->
<template>
  <div class="h-screen">
    <div class="grid md:grid-cols-2">
      <div class="hidden h-screen bg-[#B659A2] md:grid place-content-center">
        <img src="@/assets/Svg/logo.svg" alt="" class="h-[260px] w-[320px]" />
      </div>
      <div class="h-full bg-[#fff] flex flex-col place-content-center">
        <h1 class="text-center text-4xl text-black font-bold mt-10">Sign In</h1>
        <div class="w-10/12 container mx-auto mt-16">
          <h1>Email</h1>
          <div
            class="my-4 bg-[#ECECEC] rounded-md flex ring-1 ring-[#B659A2CC]"
          >
            <div
              class="icon w-12 max-h-full bg-[#B659A2] rounded-l-md grid place-content-center mr-2"
            >
              <i class="fa-solid fa-envelope text-white text-xl"></i>
            </div>
            <input
              type="email"
              name="email"
              v-model.trim="state.email"
              class="bg-transparent w-full border-none outline-none flex-1 p-3 mr-1"
            />
          </div>
          <div
            class="input-errors"
            v-for="error in v$.email.$errors"
            :key="error.$uid"
          >
            <div class="text-red-500 font-bold">{{ error.$message }}</div>
          </div>

          <h1>Password</h1>
          <div
            class="my-4 bg-[#ECECEC] rounded-md flex ring-1 ring-[#B659A2CC]"
          >
            <div
              class="icon w-12 max-h-full bg-[#B659A2] rounded-l-md grid place-content-center mr-2"
            >
              <i class="fa-solid fa-key text-white text-xl"></i>
            </div>
            <input
              type="password"
              name="password"
              v-model.trim="state.password"
              @keypress.enter="submitForm"
              class="bg-transparent w-full border-none outline-none flex-1 p-3 mr-1"
            />
          </div>
          <div
            class="input-errors"
            v-for="error of v$.password.$errors"
            :key="error.$uid"
          >
            <div class="text-red-500 font-bold">{{ error.$message }}</div>
          </div>

          <div class="mt-5 flex justify-between items-start">
            <div class="flex items-center">
              <input type="checkbox" name="" id="" class="mr-2" />
              <h2 class="font-bold text-sm">Remember Me</h2>
            </div>
            <div>
              <router-link to="#" class="text-gray-500 font-medium text-sm"
                >Forgot Password?</router-link
              >
            </div>
          </div>

          <button
            @click="submitForm"
            class="flex justify-center items-center space-x-3 bg-[#B659A2] text-white px-8 py-3 rounded-md w-full mt-10"
            :class="loading ? 'cursor-not-allowed' : ''"
            :disabled="loading"
          >
            <div
              v-if="loading"
              class="h-6 w-6 rounded-full border-4 border-t-[#fff] border-r-[#fff] border-b-[#ed323730] border-l-[#ed323730] animate-spin"
            ></div>

            <div v-else class="font-bold text-xl">Login In</div>

            <i class="fa-solid fa-arrow-right-long text-white text-xl mt-1"></i>
          </button>
          <div
            class="text-base font-medium mt-5 flex justify-center items-start space-x-5"
          >
            <h1>New User?</h1>
            <router-link to="/register" class="text-[#B659A2] font-semibold"
              >Register Here</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable -->

<script setup>
import { reactive, computed  } from "vue"; // "from '@vue/composition-api'" if you are using Vue 2.x
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import { useStore } from "vuex";
import { useLogin } from "@/Utils/useAuth";

const store = useStore();

const loading = computed(() => store.state.loading);
const state = reactive({
  password: "",
  email: "",
});
const rules = computed(() => ({
  password: { required }, // Matches state.lastName
  email: { required, email }, // Matches state.contact.email
}));

const v$ = useVuelidate(rules, state);

const submitForm = () => {
  v$.value.$validate(); // checks all inputs
  if (!v$.value.$error) {
    //Login Logic
    const credentials = state;
    useLogin(credentials, store);
  } else {
    alert("Form failed validation");
  }
};
</script>
<!-- eslint-disable -->

<style></style>
