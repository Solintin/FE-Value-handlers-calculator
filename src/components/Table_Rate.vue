<!-- eslint-disable -->
<template>
  <div>
    <div
      className="table-wrapper mb-5 w-full rounded-xl shadow-xl border overflow-x-scroll lg:overflow-x-hidden pb-6 "
    >
      <table className="w-full items-center table-auto ">
        <thead>
          <tr className="font-bold  bg-[#DBEBFF]">
            <th className="px-3 py-5 leading-5 text-center whitespace-nowrap  ">
              Currency Name
            </th>
            <th className="px-3 py-5 leading-5 text-center whitespace-nowrap  ">
              Currency Code
            </th>
            <th className="px-3 py-5 leading-5 text-center whitespace-nowrap  ">
              Exchange rate (₦)
            </th>
            <th className="px-3 py-5 leading-5 text-center whitespace-nowrap  ">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(
              { exchange_rate, currency_name, currency_code }, idx
            ) in tableData"
            :class="`${
              idx % 2 === 0 ? '' : 'bg-gray-100'
            } text-base font-medium cursor-pointer hover:bg-gray-200`"
            :key="{ idx }"
          >
            <td class="px-3 py-5 leading-5 whitespace-nowrap text-center">
              {{ currency_name }}
            </td>
            <td class="px-3 py-5 leading-5 whitespace-nowrap text-center">
              {{ currency_code }}
            </td>
            <td class="px-3 py-5 leading-5 whitespace-nowrap text-center">
              {{ exchange_rate }}
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
import { ref } from "vue";
export default {
  setup() {
    const tableData = ref([
      {
        currency_name: "Canada Dollar",
        currency_code: "AED",
        exchange_rate: "77707.79",
      },
      {
        currency_name: "Canada Dollar",
        currency_code: "AED",
        exchange_rate: "77707.79",
      },
      {
        currency_name: "Canada Dollar",
        currency_code: "AED",
        exchange_rate: "77707.79",
      },
      {
        currency_name: "Canada Dollar",
        currency_code: "AED",
        exchange_rate: "77707.79",
      },
      {
        currency_name: "Canada Dollar",
        currency_code: "AED",
        exchange_rate: "77707.79",
      },
      {
        currency_name: "Canada Dollar",
        currency_code: "AED",
        exchange_rate: "77707.79",
      },
      {
        currency_name: "Canada Dollar",
        currency_code: "AED",
        exchange_rate: "77707.79",
      },
      {
        currency_name: "Canada Dollar",
        currency_code: "AED",
        exchange_rate: "77707.79",
      },
      {
        currency_name: "Canada Dollar",
        currency_code: "AED",
        exchange_rate: "77707.79",
      },
      {
        currency_name: "Canada Dollar",
        currency_code: "AED",
        exchange_rate: "77707.79",
      },
      {
        currency_name: "Canada Dollar",
        currency_code: "AED",
        exchange_rate: "77707.79",
      },
      {
        currency_name: "Canada Dollar",
        currency_code: "AED",
        exchange_rate: "77707.79",
      },
      {
        currency_name: "Canada Dollar",
        currency_code: "AED",
        exchange_rate: "77707.79",
      },
      {
        currency_name: "Canada Dollar",
        currency_code: "AED",
        exchange_rate: "77707.79",
      },
      {
        currency_name: "Canada Dollar",
        currency_code: "AED",
        exchange_rate: "77707.79",
      },
      {
        currency_name: "Canada Dollar",
        currency_code: "AED",
        exchange_rate: "77707.79",
      },
    ]);

    return {
      tableData,
    };
  },
};
</script>
<!-- eslint-disable -->

<style scoped></style>
