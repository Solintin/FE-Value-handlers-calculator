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
        class="w-[500px] hidden bg-[#ECECEC] rounded-md lg:flex ring-1 ring-[#B659A2CC]"
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

      <div class="flex items-center space-x-5">
        <div v-if="Tab === 'rate'">
          <h1>Last Update: {{ getRateUpdatedDate }}</h1>
        </div>
        <div v-else>
          <h1>Last Update: {{ getTariffUpdatedDate }}</h1>
        </div>

        <button
          @click="handleUpdateModal"
          class="flex space-x-3 items-center rounded-full px-4 py-2 text-base font-medium bg-green-600 text-white"
        >
          <span>Update</span>
          <i class="fa-solid fa-upload"></i>
        </button>
      </div>
    </div>
    <div class="mt-24 table_rate">
      <Table_Rate v-if="Tab === 'rate'" :rateData="rateData" />
      <Table_Tariff v-if="Tab === 'tarrif'" :tariffData="tariffData" />
    </div>
    <Update
      v-if="updateModal"
      :handleUpdateModal="handleUpdateModal"
      :currentTab="Tab"
    />
  </div>
</template>
<!-- eslint-disable -->

<script>
import { computed, ref } from "vue";
import axios from "@/Utils/axios.config.js";
import { useStore } from "vuex";
import Table_Rate from "../../components/Table_Rate.vue";
import Table_Tariff from "../../components/Table_Tariff.vue";
import Update from "../../components/Update.vue";
export default {
  name: "rate",
  components: { Table_Rate, Table_Tariff, Update },
  setup() {
    //Data - tate
    const store = useStore();
    const Tab = ref("rate");
    const updateModal = ref(false);
    const { loading } = store.state;
    const isLoading = computed(() => loading);
    const tariffData = ref(null);
    const rateData = ref(null);
    //Created-Like LifeCycle Component in vue 3
    (async () => {
      store.dispatch("setLoading", true);

      try {
        const [response1, response2] = await Promise.all([
          axios.get("/api/v1/tariff/"),
          axios.get("/api/v1/rate/"),
        ]);
        tariffData.value = response1.data;
        rateData.value = response2.data;

        store.dispatch("setLoading", false);
        store.dispatch("tariffList", response1.data);
        store.dispatch("rateList", response2.data);
      } catch (err) {
        store.dispatch("setLoading", false);
        console.log(err);
      }
    })();
    //Methods
    const switchTab = (currentTab) => {
      Tab.value = currentTab;
    };

    const handleUpdateModal = () => {
      updateModal.value = !updateModal.value;
    };

    const getRateUpdatedDate = computed(() => {
      if (rateData.value !== null) {
        return new Date(
          rateData.value.results[0].date_uploaded
        ).toLocaleDateString("en-GB");
      }
      return "Loading...";
    });
    const getTariffUpdatedDate = computed(() => {
      if (rateData.value !== null) {
        return new Date(
          rateData.value.results[0].date_uploaded
        ).toLocaleDateString("en-GB");
      }
      return "Loading...";
    });

    return {
      Tab,
      tariffData,
      rateData,
      isLoading,
      getRateUpdatedDate,
      getTariffUpdatedDate,
      updateModal,
      switchTab,
      handleUpdateModal,
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
