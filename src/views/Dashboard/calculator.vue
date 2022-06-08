<!-- eslint-disable -->
<template>
  <div class="py-[50px]">
    <div class="mb-3 border-b border-purple-200 pl-10">
      <div class="flex text-xl space-x-5 container mx-auto">
        <button
          @click="switchTab('help')"
          class="outline-none"
          :class="
            Tab === 'help'
              ? 'border-b-2 border-[#DB44C9] px-1 text-[#DB44C9] transform-translate duration-300'
              : 'text-gray-500'
          "
        >
          Help
        </button>
        <button
          @click="switchTab('calculator')"
          class="outline-none"
          :class="
            Tab === 'calculator'
              ? 'border-b-2 border-[#DB44C9] px-1 text-[#DB44C9] transform-translate duration-300'
              : 'text-gray-500'
          "
        >
          Calculator
        </button>
      </div>
    </div>

    <Guide v-if="Tab === 'help'" />
    <Calculator v-else />
  </div>
</template>
<!-- eslint-disable -->

<script>
import { ref } from "vue";
import Guide from "../../components/Guide.vue";
import Calculator from "../../components/MainCalculator.vue";
export default {
  name: "calculator-app",
  components: { Guide, Calculator },

  setup() {
    //Data - tate
    const Tab = ref("help");

    //Methods
    const switchTab = (currentTab) => {
      Tab.value = currentTab;
    };

    return {
      Tab,
      switchTab,
    };
  },
};
</script>
<!-- eslint-disable -->

<style>
.table_calculator {
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
}
</style>
