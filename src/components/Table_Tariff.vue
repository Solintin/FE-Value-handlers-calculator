<!-- eslint-disable -->
<template>
  <div>
    <div v-if="isLoading" class="text-2xl text-center">
      Loading...
    </div>
    <div
      v-else
      className="table-wrapper mb-5 w-full rounded-xl shadow-xl border overflow-x-scroll lg:overflow-x-hidden pb-6 "
    >
      <table className="w-full items-center table-auto ">
        <thead>
          <tr className="font-bold  bg-[#DBEBFF]">
            <th className="px-3 py-5 leading-5 text-center whitespace-nowrap  ">
              HSCODE DESCRIPTION
            </th>
            <th className="px-3 py-5 leading-5 text-center whitespace-nowrap  ">
              HSCODE
            </th>
            <th className="px-3 py-5 leading-5 text-center whitespace-nowrap  ">
              SU
            </th>
            <th className="px-3 py-5 leading-5 text-center whitespace-nowrap  ">
              ID
            </th>
            <th className="px-3 py-5 leading-5 text-center whitespace-nowrap  ">
              VAT
            </th>
            <th className="px-3 py-5 leading-5 text-center whitespace-nowrap  ">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="({ su, hscode_description, hscode, id_tariff, vat }, idx) in tableData.results"
            :class="`${
              idx % 2 === 0 ? '' : 'bg-gray-100'
            } text-base font-medium cursor-pointer hover:bg-gray-200`"
            :key="{ idx }"
          >
            <td class="px-3 py-5 leading-5 whitespace-nowrap text-center">
              {{ hscode_description }}
            </td>
            <td class="px-3 py-5 leading-5 whitespace-nowrap text-center">
              {{ hscode }}
            </td>
            <td class="px-3 py-5 leading-5 whitespace-nowrap text-center">
              {{ su }}
            </td>
            <td class="px-3 py-5 leading-5 whitespace-nowrap text-center">
              {{ id_tariff }}
            </td>
            <td class="px-3 py-5 leading-5 whitespace-nowrap text-center">
              {{ vat }}
            </td>
            <td class="px-3 py-5 leading-5 whitespace-nowrap text-center">
              <i class="fa-solid fa-pen-to-square"></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<!-- eslint-disable -->


<script>
import { computed } from "vue";
import { useStore } from "@/store";

export default {
  setup({tariffData}) {
    const { loading} = useStore();
    const isLoading = computed(() => loading);   
    const tableData = computed(() => tariffData);

console.log(tableData.value);
    return {
      tableData,
      isLoading,
    };
  },
};
</script>
<!-- eslint-disable -->

<style scoped></style>
