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
            <th className="px-3 py-5 leading-5 text-left whitespace-nowrap  ">
              HSCODE DESCRIPTION
            </th>
            <th className="px-3 py-5 leading-5 text-left whitespace-nowrap  ">
              HSCODE
            </th>
            <th className="px-3 py-5 leading-5 text-left whitespace-nowrap  ">
              SU
            </th>
            <th className="px-3 py-5 leading-5 text-left whitespace-nowrap  ">
              ID
            </th>
            <th className="px-3 py-5 leading-5 text-left whitespace-nowrap  ">
              VAT
            </th>
            <th className="px-3 py-5 leading-5 text-left whitespace-nowrap  ">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="({ su, hs_description, hscode, id_tariff, vat }, idx) in tableData.results"
            :class="`${
              idx % 2 === 0 ? '' : 'bg-gray-100'
            } text-base font-medium cursor-pointer hover:bg-gray-200`"
            :key="{ idx }"
          >
            <td class="px-3 py-5 leading-5 whitespace-nowrap text-left">
              {{ hs_description }}
            </td>
            <td class="px-3 py-5 leading-5 whitespace-nowrap text-left">
              {{ hscode }}
            </td>
            <td class="px-3 py-5 leading-5 whitespace-nowrap text-left">
              {{ su }}
            </td>
            <td class="px-3 py-5 leading-5 whitespace-nowrap text-left">
              {{ id_tariff }}
            </td>
            <td class="px-3 py-5 leading-5 whitespace-nowrap text-left">
              {{ vat }}
            </td>
            <td class="px-3 py-5 leading-5 whitespace-nowrap text-left">
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
import { useStore } from "vuex";
import Loading from "./Loading.vue";

export default {
  components: { Loading },
  props: { tariffData: Object, loadng: Boolean },
  setup(props) {
    const store = useStore();
    const loading = computed(() => store.state.loading); 
    const tableData = computed(() => props.tariffData); 
    
    return {
      tableData,
      loading,
    };
  },
};
</script>
<!-- eslint-disable -->

<style scoped></style>
