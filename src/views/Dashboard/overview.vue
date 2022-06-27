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
    <div class="mt-24 table_overview">
      <Table_Overview :tableData="calculationsList" :loading="loading" />
    </div>
  </div>
</template>
<!-- eslint-disable -->

<script>
import { ref } from "vue";
import axios from "@/Utils/axios.config.js";
import { useStore } from "@/store";
import Table_Overview from "../../components/Table_Overview.vue";
export default {
  name: "overview",
  components: { Table_Overview },
  setup() {
    const { calculationList, calculationsList, setLoading } = useStore();
    const tableData = ref(undefined);
    const loading = ref(false);
    //Created-Like LifeCycle Component in vue 3
    (async () => {
      setLoading(true);
      loading.value = true;
      console.log(loading.value);

      await axios
        .get("/api/v1/calculation/")
        .then((response) => {
          setLoading(false);
          loading.value = false;
          console.log(loading.value);
          calculationList(response.data);
          tableData.value = response.data;
        })
        .catch((error) => {
          loading.value = false;

          setLoading(false);
          console.log(error);
        });
    })();
    console.log(calculationsList);
    return {
      tableData,
      calculationsList,
      loading,
    };
  },
};
</script>
<!-- eslint-disable -->

<style scoped>
.table_overview {
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
}
</style>
