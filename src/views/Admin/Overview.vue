<!-- eslint-disable -->
<template>
  <div class="py-[50px] px-[70px]">
    <div class="flex justify-between items-center">
      <div>
        <h1 class="text-2xl font-bold text-[#515352]">Recent Calculations</h1>
      </div>

      <div
        class="w-[500px] bg-[#ECECEC] rounded-md flex ring-1 ring-[#B659A2CC]"
      >
        <input
          type="text"
          name="search"
          placeholder="Keyword : User Email or Description"
          class="bg-transparent w-full border-none outline-none flex-1 p-3"
        />
        <div
          class="icon w-12 max-h-full bg-[#B659A2] rounded-r-md grid place-content-center ml-2"
        >
          <i class="fa-solid fa-search text-white text-xl"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable -->

<script>
export default {
  name: "overview",
  components: {},
};
</script>
<!-- eslint-disable -->

<style></style>
