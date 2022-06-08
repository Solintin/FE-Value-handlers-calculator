<!-- eslint-disable -->
<template>
  <div class="px-10 container mx-auto">
    <div class="table_calculator">
      <h1 class="my-2 text-center text-[#B659A2] text-2xl font-bold">
        Duty Calculator
      </h1>
      <div class="mt-3 grid grid-cols-2 gap-6">
        <div>
          <label for="hscode">HSCODE</label>
          <div
            @click="setShowHscode"
            class="w-full cursor-pointer items-center relative px-4 py-3 rounded-md border border-[#DB44C9] bg-[#ECD0E9] outline-none"
          >
            <div class="flex justify-between w-full">
              <div class="text-gray-500">{{ selectedCode }}</div>
              <i class="fa-solid fa-caret-down text-3xl"></i>
            </div>
            <div
              v-if="showHscode"
              class="absolute rounded top-[56px] inset-x-0 max-h-[200px] overflow-y-auto flex flex-col"
            >
              <div @click="setHscode('A')"  class="p-4 mb-1 bg-blue-300">0101334566</div>
              <div @click="setHscode('A')"  class="p-4 mb-1 bg-blue-300">0101334245</div>
              <div @click="setHscode('A')"  class="p-4 mb-1 bg-blue-300">0109876543</div>
              <div @click="setHscode('A')"  class="p-4 mb-1 bg-blue-300">0101334245</div>
              <div @click="setHscode('A')"  class="p-4 mb-1 bg-blue-300">0109876543</div>
              <div @click="setHscode('A')"  class="p-4 mb-1 bg-blue-300">0101334566</div>
              <div @click="setHscode('A')"  class="p-4 mb-1 bg-blue-300">0101334245</div>
              <div @click="setHscode('A')"  class="p-4 mb-1 bg-blue-300">0109876543</div>
              <div @click="setHscode('A')"  class="p-4 mb-1 bg-blue-300">0101334245</div>
              <div @click="setHscode('A')"  class="p-4 mb-1 bg-blue-300">0109876543</div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<!-- eslint-disable -->
<script>
import { ref } from "vue";
export default {
  setup() {
    const showHscode = ref(false);
    const selectedCode = ref("Select HSCODE Code");
    const setShowHscode = () => {
      showHscode.value = !showHscode.value;
    };
    const setHscode = (code) => {
      selectedCode.value = code;
    };

    return {
      showHscode,
      setShowHscode,
      selectedCode,
      setHscode,
    };
  },
};
</script>
<!-- eslint-disable -->

<style>
.table_calculator {
  margin: 1rem;
  padding: 1rem;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
}
</style>
