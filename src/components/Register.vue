<!-- eslint-disable -->
<template>
  <div class="h-screen">
    <div class="grid md:grid-cols-2">
      <div class="h-full bg-[#fff] flex flex-col place-content-center">
        <h1 class="text-center text-4xl text-black font-bold mt-10">Sign Up</h1>
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
              v-model="state.email"
              type="email"
              name="email"
              placeholder="Janedoe@valuehandlers.com"
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
              v-model="state.password.password"
              type="password"
              name="password"
              placeholder="*********"
              class="bg-transparent w-full border-none outline-none flex-1 p-3 mr-1"
            />
          </div>
          <div
            class="input-errors"
            v-for="error in v$.password.password.$errors"
            :key="error.$uid"
          >
            <div class="text-red-500 font-bold">{{ error.$message }}</div>
          </div>

          <h1>Confirm Password</h1>
          <div
            class="my-4 bg-[#ECECEC] rounded-md flex ring-1 ring-[#B659A2CC]"
          >
            <div
              class="icon w-12 max-h-full bg-[#B659A2] rounded-l-md grid place-content-center mr-2"
            >
              <i class="fa-solid fa-key text-white text-xl"></i>
            </div>
            <input
              v-model="state.password.confirm"
              type="password"
              name="Confirm_Password"
              placeholder="*********"
              class="bg-transparent w-full border-none outline-none flex-1 p-3 mr-1"
            />
          </div>
          <div
            class="input-errors"
            v-for="error in v$.password.confirm.$errors"
            :key="error.$uid"
          >
            <div class="text-red-500 font-bold">{{ error.$message }}</div>
          </div>

          <button
            @click="submitForm"
            class="flex justify-center items-center space-x-3 bg-[#B659A2] text-white px-8 py-3 rounded-md w-full mt-10"
            :class="isLoading ? 'cursor-not-allowed' : ''"
            :disabled="isLoading"
          >
            <div
              v-if="isLoading"
              class="h-6 w-6 rounded-full border-4 border-t-[#fff] border-r-[#fff] border-b-[#ed323730] border-l-[#ed323730] animate-spin"
            ></div>

            <div v-else class="font-bold text-xl">Sign Up</div>

          </button>
          <div
            class="text-base font-medium mt-5 flex justify-center items-start space-x-5"
          >
            <h1>Have an account?</h1>
            <router-link to="/" class="text-[#B659A2] font-semibold"
              >Login Here</router-link
            >
          </div>
        </div>
      </div>
      <div class="hidden h-screen bg-[#B659A2] md:grid place-content-center">
        <img src="@/assets/Svg/logo.svg" alt="" class="h-[260px] w-[320px]" />
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable -->

<script>
import { reactive, computed, ref } from "vue"; // "from '@vue/composition-api'" if you are using Vue 2.x
import useVuelidate from "@vuelidate/core";
import { sameAs, required, email, minLength } from "@vuelidate/validators";
import { useStore } from "@/store";
import { useRegister } from "@/store/auth";

export default {
  name: "signup",
  setup() {
    //Page Data
    const { loading } = useStore();  
    const isLoading = computed(() => loading)
    const state = reactive({
      password: {
        password: "",
        confirm: "",
      },
      email: "",
      user_type: "Super Admin",
    });
    //Form Validation
    const rules = computed(() => ({
      password: {
        password: { required, minLength: minLength(6) },
        confirm: { required, sameAs: sameAs(state.password.password) },
      }, // Matches state.lastName
      email: { required, email }, // Matches state.contact.email
    }));

//====METHODS=====
    const v$ = useVuelidate(rules, state);

    const submitForm = () => {
      v$.value.$validate(); // checks all inputs
      // console.log(v$.value);
      if (!v$.value.$error) {
        // if ANY fail validation
        useRegister({
          email: state.email,
          user_type: state.user_type,
          password: state.password.password,
        });
      } else {
        alert("Form failed validation");
      }
    };
    return { state, isLoading, v$, submitForm };
  },
};
</script>
<!-- eslint-disable -->

<style></style>
