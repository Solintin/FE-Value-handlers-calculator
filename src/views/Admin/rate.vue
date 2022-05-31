<!-- eslint-disable -->
<template>
  <div class="py-[50px] px-[70px]">
    <div class="flex justify-between items-center">
      <div class="flex space-x-5">
        <button
          class="rounded-full px-4 py-2 text-base font-medium"
          @click="switchTab('rate')"
          :class="
            Tab === 'rate' ? 'bg-[#B659A2] text-white' : ' bg-white text-black'
          "
        >
          RATE
        </button>
        <button
          class="rounded-full px-4 py-2 text-base font-medium"
          @click="switchTab('tarrif')"
          :class="
            Tab === 'tarrif'
              ? 'bg-[#B659A2] text-white'
              : ' bg-white text-black'
          "
        >
          TARIFFS
        </button>
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

      <div class="flex space-x-5">
        <h1>Last Update: 24/09/2020</h1>

        <button
          class="flex space-x-3 items-center rounded-full px-4 py-2 text-base font-medium bg-green-600 text-white"
        >
          <span>Update</span>
          <i class="fa-solid fa-upload"></i>
        </button>
      </div>
    </div>
    <div class="mt-24 table_rate">
      <Table_Rate v-if="Tab === 'rate'" />
      <Table_Tariff v-if="Tab === 'tarrif'" />
    </div>
  </div>
</template>
<!-- eslint-disable -->

<script>
import { ref } from "vue";
import Table_Rate from "../../components/Table_Rate.vue";
import Table_Tariff from "../../components/Table_Tariff.vue";
export default {
  name: "overview",
  components: { Table_Rate, Table_Tariff },
  setup() {
    //Data - tate
    const Tab = ref("rate");

    //Methods
    const switchTab = (currentTab) => {
      Tab.value = currentTab;
    };

    return {
      Tab,
      switchTab,
    };
  },
};
</script>
<!-- eslint-disable -->

<style scoped>
.table_rate {
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
}
</style>
