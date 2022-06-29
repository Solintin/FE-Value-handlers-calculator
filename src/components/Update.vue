<!-- eslint-disable -->

<template>
  <div class="layout">
    <div class="update_box space-y-8">
      <h1 class="text-xl font-medium">
        Select The File To Be Uploaded From Your Computer
      </h1>
      <input
        @change="handleImageUpload($event)"
        type="file"
        name=""
        accept=".csv, .xls"
        id="fileUpload"
        hidden
      />

      <div
        class="w-[4/12] bg-[#ECECEC] rounded-md flex ring-1 ring-[#B659A2CC]"
      >
        <div
          class="bg-transparent w-full border-none outline-none flex-1 p-3 truncate"
        >
          {{ fileName }}
        </div>
        <label
          for="fileUpload"
          class="cursor-pointer icon w-12 max-h-full bg-[#B659A2] rounded-r-md grid place-content-center ml-2"
        >
          <i class="fa-solid fa-upload text-white text-xl"></i>
        </label>
      </div>

      <div class="flex item-center space-x-5 justify-center py-2">
        <button
          :disabled="fileUpdate == null"
          :class="
            fileUpdate == null
              ? 'cursor-not-allowed bg-green-300'
              : 'bg-green-600'
          "
          class="flex justify-center max-w-max rounded-full px-5 py-2 text-base font-medium text-white"
        >
          <span>Upload Now</span>
        </button>
        <button
          @click="handleUpdateModal"
          class="flex justify-center max-w-max rounded-full px-5 py-2 text-base font-medium bg-red-600 text-white"
        >
          <span>Cancel</span>
        </button>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable -->

<script setup>
import { ref, computed } from "vue";
const props = defineProps({
  handleUpdateModal: Function,
});
const handleUpdateModal = computed(() => props.handleUpdateModal);
const fileName = ref("Choose a file to upload....");
const fileUpdate = ref(null);
const handleImageUpload = (event) => {
  fileName.value = event.target.files[0].name;
  fileUpdate.value = event.target.files[0];
};
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
  width: max-content;
  display: grid;
  place-content: center;
}
</style>
