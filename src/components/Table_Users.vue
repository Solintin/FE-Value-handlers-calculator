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
            v-for="({ email, role }, idx) in tableData"
            :class="`${
              idx % 2 === 0 ? '' : 'bg-gray-100'
            } text-base font-medium hover:bg-gray-200`"
            :key="{ idx }"
          >
            <td class="px-3 py-5 leading-5 whitespace-nowrap text-center">
              {{ email }}
            </td>
            <td class="px-3 py-5 leading-5 whitespace-nowrap text-center">
              {{ role }}
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
import { ref } from "vue";
export default {
  setup() {
    const tableData = ref([
      {
        email: "inspiredtalhah@gmail.com",
        role: "Normal User",
       
      },
      {
        email: "inspiredtalhah@gmail.com",
        role: "Normal User",
       
      },
      {
        email: "inspiredtalhah@gmail.com",
        role: "Normal User",
       
      },
      {
        email: "inspiredtalhah@gmail.com",
        role: "Normal User",
       
      },
      {
        email: "inspiredtalhah@gmail.com",
        role: "Normal User",
       
      },
      {
        email: "inspiredtalhah@gmail.com",
        role: "Normal User",
       
      },
      {
        email: "inspiredtalhah@gmail.com",
        role: "Normal User",
       
      },
      {
        email: "inspiredtalhah@gmail.com",
        role: "Normal User",
       
      },
      {
        email: "inspiredtalhah@gmail.com",
        role: "Normal User",
       
      },
      {
        email: "inspiredtalhah@gmail.com",
        role: "Normal User",
       
      },
      {
        email: "inspiredtalhah@gmail.com",
        role: "Normal User",
       
      },
      {
        email: "inspiredtalhah@gmail.com",
        role: "Normal User",
       
      },
      {
        email: "inspiredtalhah@gmail.com",
        role: "Normal User",
       
      },
      {
        email: "inspiredtalhah@gmail.com",
        role: "Normal User",
       
      },
      {
        email: "inspiredtalhah@gmail.com",
        role: "Normal User",
       
      },
      {
        email: "inspiredtalhah@gmail.com",
        role: "Normal User",
       
      },
      {
        email: "inspiredtalhah@gmail.com",
        role: "Normal User",
       
      },
      {
        email: "inspiredtalhah@gmail.com",
        role: "Normal User",
       
      },
      {
        email: "inspiredtalhah@gmail.com",
        role: "Normal User",
       
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
