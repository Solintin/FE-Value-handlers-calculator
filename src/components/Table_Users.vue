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
              User Email
            </th>
            <th className="px-3 py-5 leading-5 text-center whitespace-nowrap  ">
              Item Role
            </th>
            <th className="px-3 py-5 leading-5 text-center whitespace-nowrap  ">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="({ email, user_type }, idx) in usersData"
            :class="`${
              idx % 2 === 0 ? '' : 'bg-gray-100'
            } text-base font-medium hover:bg-gray-200`"
            :key="{ idx }"
          >
            <td class="px-3 py-5 leading-5 whitespace-nowrap text-center">
              {{ email }}
            </td>
            <td class="px-3 py-5 leading-5 whitespace-nowrap text-center">
              {{ user_type }}
            </td>
            <td class="px-3 py-5 leading-5 whitespace-nowrap text-center">
              <button class="text-blue-600 rounded p-2 text-base bg-[#EFEFEF]">
                CHANGE ROLE
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<!-- eslint-disable -->

<script>
import {  ref } from "vue";


export default {
  setup({tableData}) {
     const { loading } = useStore();
    const isLoading = ref(loading);
    const usersData = ref(() => tableData);

    console.log(usersData);
    return {
      usersData,
      isLoading
    };
  },
};
</script>
<!-- eslint-disable -->

<style scoped></style>
