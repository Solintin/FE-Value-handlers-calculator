<!-- eslint-disable -->
<template>
  <div>
    <div v-if="calculationsData != undefined" class="text-2xl text-center">Loading...</div>
    <div
      v-else
      className="table-wrapper mb-5 w-full rounded-xl shadow-xl border overflow-x-scroll lg:overflow-x-hidden pb-6 "
    >
      <table className="w-full items-center table-auto ">
        <thead>
          <tr className="font-bold  bg-[#DBEBFF]">
            <th className="px-3 py-5 leading-5 text-center whitespace-nowrap  ">
              User Email
            </th>
            <th className="px-3 py-5 leading-5 text-center whitespace-nowrap  ">
              Item Description
            </th>
            <th className="px-3 py-5 leading-5 text-center whitespace-nowrap  ">
              Custom Duty
            </th>
            <th className="px-3 py-5 leading-5 text-center whitespace-nowrap  ">
              Total Cost
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(
              { duty, email, description, cost }, idx
            ) in calculationsData.results"
            :class="`${
              idx % 2 === 0 ? '' : 'bg-gray-100'
            } text-base font-medium cursor-pointer hover:bg-gray-200`"
            :key="{ idx }"
          >
            <td class="px-3 py-5 leading-5 whitespace-nowrap text-center">
              {{ email }}
            </td>
            <td class="px-3 py-5 leading-5 whitespace-nowrap text-center">
              {{ description }}
            </td>
            <td class="px-3 py-5 leading-5 whitespace-nowrap text-center">
              {{ duty }}
            </td>
            <td class="px-3 py-5 leading-5 whitespace-nowrap text-center">
              {{ cost }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<!-- eslint-disable -->
<script>
import { computed,toRefs } from "vue";
import axios from "@/Utils/axios.config.js";
import { useStore } from "@/store";

export default {
  props: { tableData: Object, loading : Boolean },
  setup(props) {
    const {loadingState, loading, calculationsList } = useStore();
    const isLoading = computed(()=> loadingState.value);
    const calculationsData = computed(() => calculationsList);

    // console.log(useStore().loadingState.value);
    console.log(calculationsData.value);
    return {
      calculationsData,
      isLoading,
    };
  },
};
</script>
<!-- eslint-disable -->

<style scoped></style>
