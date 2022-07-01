<!-- eslint-disable -->

<template>
  <div class="layout">
    <div class="update_box space-y-8">
      <h1 class="text-xl font-medium text-center mb-3 underline">Calculation Details</h1>

      <div class="divide-y-4 capitalize text-lg font-medium">
        <div class="flex justify-between items-center py-4">
          <div class="">Total import duty payable</div>
          <div>NGN {{ digitFormatter(result.details.detail.result) }}</div>
        </div>
        <div class="flex justify-between items-center py-4">
          <div class="">Sum Total</div>
          <div>NGN {{ digitFormatter(result.details.detail.total) }}</div>
        </div>
        <div class="flex justify-between items-center py-4">
          <div class="">Total import duty payable</div>
          <div>{{currency}} {{ digitFormatter(result.details.detail.result_NGN) }}</div>
        </div>
        <div class="flex justify-between items-center py-4">
          <div class="">Sum Total</div>
          <div>{{currency}} {{ digitFormatter(result.details.detail.total_NGN) }}</div>
        </div>
      </div>

      <div class="flex item-center space-x-10 justify-center py-2">
        <button
          @click="upload"
          class="bg-green-600 flex justify-center items-center space-x-2 max-w-max rounded-md px-5 py-2 text-base font-medium text-white"
        >
          <div>Print Result</div>
          <i class="fa-solid fa-print text-xl"></i>
        </button>
        <button
          @click="setShowResult"
          class="flex justify-center max-w-max rounded-md px-5 py-2 text-base font-medium bg-red-600 text-white"
        >
          <span>Cancel</span>
        </button>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable -->

<script setup>
import LvProgressBar from "lightvue/progress-bar";
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { digitFormatter } from "@/Utils/helper_function";

// import the component
// Register the component locally

const props = defineProps({
  setShowResult: Function,
  result: Object,
  currency : String
});

const store = useStore();
const loading = computed(() => store.state.loading);
const setShowResult = computed(() => props.setShowResult);
const result = computed(() => props.result);
const currency = computed(() => props.currency);
</script>
<!-- eslint-disable -->

<style scoped>
.layout {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.65);
  display: grid;
  place-content: center;
  /* pointer-events: none; */
}
.update_box {
  @apply shadow-lg bg-white rounded-lg;
  z-index: 2;
  padding: 2rem;
  width: 500px;
}
</style>
