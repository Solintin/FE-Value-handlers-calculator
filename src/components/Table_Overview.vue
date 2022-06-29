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
              { duty, user, description, cost }, idx
            ) in calculationsData.results"
            :class="`${
              idx % 2 === 0 ? '' : 'bg-gray-100'
            } text-base font-medium cursor-pointer hover:bg-gray-200`"
            :key="{ idx }"
          >
            <td class="px-3 py-5 leading-5 whitespace-nowrap text-center">
              {{ user.email }}
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
import { computed } from "vue";
import { useStore } from "vuex";
import Loading from "./Loading.vue";

export default {
  components: { Loading },
  props: { tableData: Object, loadng: Boolean },
  setup(props) {
    const store = useStore();
    const loading = computed(() => store.state.loading);
    const calculationsData = computed(() => props.tableData);

    return {
      calculationsData,
      loading,
    };
  },
};
</script>
<!-- eslint-disable -->

<style scoped></style>
