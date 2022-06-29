<!-- eslint-disable -->
<template>
  <div>
    <Loading v-if="loading" />
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
            v-for="({ email, id, user_type }, idx) in usersData.results"
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
              <button
                title="Change user role"
                @click="handleRole(id, user_type)"
                class="text-blue-600 rounded p-2 text-base cursor-pointer bg-[#EFEFEF]"
              >
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
import axios from "@/Utils/axios.config.js";

import { computed } from "vue";
import { useStore } from "vuex";
import Loading from "./Loading.vue";

export default {
  components: { Loading },
  props: { tableData: Object, loadng: Boolean },
  setup(props) {
    const store = useStore();
    const loading = computed(() => store.state.loading);
    const usersData = computed(() => props.tableData);

    const handleUserType = (userType) => {
      if (userType == "Super Admin") {
        return "Admin";
      } else {
        return "Super Admin";
      }
    };
    const handleRole = (id, user_type) => {
      const getUserType = handleUserType(user_type);
      store.dispatch("setLoading", true);

      axios
        .put(`/account/user/${id}/`, {
          user_type: getUserType,
        })
        .then((response) => {
          location.reload();
          store.dispatch("setLoading", false);
          // calculationList(response.data);
        })
        .catch((error) => {
          store.dispatch("setLoading", false);
        });
    };
    return {
      usersData,
      loading,
      handleRole,
    };
  },
};
</script>
<!-- eslint-disable -->

<style scoped></style>
