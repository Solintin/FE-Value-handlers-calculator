<!-- eslint-disable -->
<template>
  <div class="h-screen">
    <div class="grid md:grid-cols-2">
      <div class="hidden h-screen bg-[#B659A2] md:grid place-content-center">
        <img src="@/assets/Svg/logo.svg" alt="" class="h-[260px] w-[320px]" />
      </div>
      <div class="h-full bg-[#fff]">
        <h1 class="text-center text-4xl text-black font-bold mt-10">
          Sign In
        </h1>
        <div class="w-10/12 container mx-auto mt-16 ">
          <h1>Email</h1>
          <div class="my-4 bg-[#ECECEC] rounded-md flex ring-1 ring-[#B659A2CC]">
            <div
              class="icon w-12 max-h-full bg-[#B659A2] rounded-l-md grid place-content-center mr-2"
            >
              <i class="fa-solid fa-envelope text-white text-xl"></i>
            </div>
            <input
              type="email"
              name="email"
              class="bg-transparent w-full border-none outline-none flex-1 p-3 mr-1"
            />
          </div>

          <h1>Password</h1>
          <div class="my-4 bg-[#ECECEC] rounded-md flex ring-1 ring-[#B659A2CC]">
            <div
              class="icon w-12 max-h-full bg-[#B659A2] rounded-l-md grid place-content-center mr-2"
            >
              <i class="fa-solid fa-key text-white text-xl"></i>
            </div>
            <input
              type="password"
              name="password"
              class="bg-transparent w-full border-none outline-none flex-1 p-3 mr-1"
            />
          </div>

          <div class="mt-5 flex justify-between items-start">
            <div class="flex items-center">
              <input type="checkbox" name="" id="" class="mr-2" />
              <h2 class="font-bold text-sm">Remember Me</h2>
            </div>
            <div>
              <router-link
                to="/forgot_password"
                class="text-gray-500 font-medium text-sm"
                >Forgot Password?</router-link
              >
            </div>
          </div>

          <button class="flex justify-center space-x-3 bg-[#B659A2] text-white px-8 py-2 rounded-md w-full  mt-10">
            <span class="font-bold">Login</span>
            <span
              ><i class="fa-solid fa-arrow-right-long text-white text-xl"></i
            ></span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable -->

<script>
export default {};
</script>
<!-- eslint-disable -->

<style></style>
