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
            v-for="({ su, hscode_desc, hscode, id, vat }, idx) in tableData"
            :class="`${
              idx % 2 === 0 ? '' : 'bg-gray-100'
            } text-base font-medium cursor-pointer hover:bg-gray-200`"
            :key="{ idx }"
          >
            <td class="px-3 py-5 leading-5 whitespace-nowrap text-center">
              {{ hscode_desc }}
            </td>
            <td class="px-3 py-5 leading-5 whitespace-nowrap text-center">
              {{ hscode }}
            </td>
            <td class="px-3 py-5 leading-5 whitespace-nowrap text-center">
              {{ su }}
            </td>
            <td class="px-3 py-5 leading-5 whitespace-nowrap text-center">
              {{ id }}
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
import { ref } from "vue";
export default {
  setup() {
    const tableData = ref([
      {
        hscode_desc: "Canada Dollar",
        hscode: "AED",
        su: "SU",
        id: "10",
        vat: "0",
      },
      {
        hscode_desc: "Canada Dollar",
        hscode: "AED",
        su: "SU",
        id: "10",
        vat: "0",
      },
      {
        hscode_desc: "Canada Dollar",
        hscode: "AED",
        su: "SU",
        id: "10",
        vat: "0",
      },
      {
        hscode_desc: "Canada Dollar",
        hscode: "AED",
        su: "SU",
        id: "10",
        vat: "0",
      },
      {
        hscode_desc: "Canada Dollar",
        hscode: "AED",
        su: "SU",
        id: "10",
        vat: "0",
      },
      {
        hscode_desc: "Canada Dollar",
        hscode: "AED",
        su: "SU",
        id: "10",
        vat: "0",
      },
      {
        hscode_desc: "Canada Dollar",
        hscode: "AED",
        su: "SU",
        id: "10",
        vat: "0",
      },
      {
        hscode_desc: "Canada Dollar",
        hscode: "AED",
        su: "SU",
        id: "10",
        vat: "0",
      },
      {
        hscode_desc: "Canada Dollar",
        hscode: "AED",
        su: "SU",
        id: "10",
        vat: "0",
      },
      {
        hscode_desc: "Canada Dollar",
        hscode: "AED",
        su: "SU",
        id: "10",
        vat: "0",
      },
      {
        hscode_desc: "Canada Dollar",
        hscode: "AED",
        su: "SU",
        id: "10",
        vat: "0",
      },
      {
        hscode_desc: "Canada Dollar",
        hscode: "AED",
        su: "SU",
        id: "10",
        vat: "0",
      },
      {
        hscode_desc: "Canada Dollar",
        hscode: "AED",
        su: "SU",
        id: "10",
        vat: "0",
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
