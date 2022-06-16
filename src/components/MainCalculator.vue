<!-- eslint-disable -->
<template>
  <div class="px-10 container mx-auto">
    <div class="table_calculator">
      <h1 class="my-2 text-center text-[#B659A2] text-2xl font-bold">
        Duty Calculator
      </h1>
      <div class="my-3 grid grid-cols-2 gap-6">
        <div>
          <label for="hscode" class="font-medium text-base">HS-CODE</label>
          <div
            class="mt-2 w-full cursor-pointer items-center relative px-4 py-3 rounded-md border border-[#DB44C9] bg-[#ECD0E9] outline-none"
          >
            <div class="flex justify-between w-full">
              <input
                @focus="setShowHscode('focus')"
                type="number"
                min="0"
                placeholder="Select HSCODE Code"
                class="text-xl truncate outline-none w-full bg-transparent"
                v-model="selectedCode.code"
              />
              <button
                @click="setShowHscode"
                class="outline-none transform transform-translate duration-500"
                :class="showHscode ? 'rotate-180' : 'rotate-0'"
              >
                <i class="fa-solid fa-caret-down text-3xl text-[#777]"></i>
              </button>
            </div>
            <div
              v-if="showHscode"
              class="absolute bg-gray-50 rounded top-[56px] inset-x-0 max-h-[200px] scrollbar-thin overflow-y-auto overflow-x-hidden flex flex-col"
            >
              <div v-if="filteredCetcode.length > 0">
                <div
                  v-for="(item, idx) in filteredCetcode"
                  :key="idx"
                  @click="setHscode(item)"
                  class="p-4 mt-1 bg-gray-100 hover:bg-gray-300"
                >
                  {{ item.code }}
                </div>
              </div>
              <div v-else class="p-4 mt-1 bg-gray-100 hover:bg-gray-300">
                No data available
              </div>
            </div>
          </div>
        </div>
        <div>
          <label for="hscode" class="font-medium text-base"
            >HS-CODE Description</label
          >
          <div
            class="mt-2 w-full cursor-pointer items-center relative px-4 py-3 rounded-md border border-[#DB44C9] bg-[#ECD0E9] outline-none"
          >
            <div class="flex justify-between w-full">
              <input
                @focus="setShowHscodeDesc('focus')"
                placeholder="HS Description"
                type="text"
                class="text-xl truncate outline-none w-full bg-transparent"
                v-model="selectedCode.description"
              />

              <button
                @click="setShowHscodeDesc"
                class="outline-none transform transform-translate duration-500"
                :class="showHscodeDesc ? 'rotate-180' : 'rotate-0'"
              >
                <i class="fa-solid fa-caret-down text-3xl text-[#777]"></i>
              </button>
            </div>
            <div
              v-if="showHscodeDesc"
              class="absolute bg-gray-50 rounded top-[56px] inset-x-0 max-h-[200px] scrollbar-thin overflow-y-auto overflow-x-hidden flex flex-col"
            >
              <div v-if="filteredCetcode.length > 0">
                <div
                  v-for="(item, idx) in filteredCetcode"
                  :key="idx"
                  @click="setHscode(item)"
                  class="p-4 mt-1 bg-gray-100 hover:bg-gray-300"
                >
                  {{ item.description }}
                </div>
              </div>
              <div v-else class="p-4 mt-1 bg-gray-100 hover:bg-gray-300">
                No data available
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-5 w-full cursor-pointer flex flex-col space-y-4">
        <label for="hscode" class="font-medium text-base"
          >Item Description</label
        >

        <input
          placeholder="Item description"
          type="text"
          class="text-xl truncate w-full px-4 py-3 rounded-md border border-[#DB44C9] bg-[#ECD0E9] outline-none"
          v-model="item.description"
        />
      </div>

      <div class="mt-6 border-t-2 border-[#ECD0E9] w-full py-4 space-y-4">
        <div class="my-3 grid grid-cols-2 gap-6">
          <div>
            <label for="hscode" class="font-medium text-base uppercase"
              >Currency</label
            >
            <div
              class="mt-2 w-full cursor-pointer items-center relative px-4 py-3 rounded-md border border-[#DB44C9] bg-[#ECD0E9] outline-none"
            >
              <div class="flex justify-between w-full">
                <input
                  type="text"
                  @focus="setShowCurrency('focus')"
                  placeholder="Click to select currency"
                  class="text-xl truncate outline-none w-full bg-transparent"
                  v-model="selectedCurrency.currency_name"
                />
                <button
                  @click="setShowCurrency"
                  class="outline-none transform transform-translate duration-500"
                  :class="showCurrency ? 'rotate-180' : 'rotate-0'"
                >
                  <i class="fa-solid fa-caret-down text-3xl text-[#777]"></i>
                </button>
              </div>
              <div
                v-if="showCurrency"
                class="absolute z-50 bg-gray-50 rounded top-[56px] inset-x-0 max-h-[200px] scrollbar-thin overflow-y-auto overflow-x-hidden flex flex-col"
              >
                <div v-if="filteredCurrency.length > 0">
                  <div
                    v-for="(item, idx) in filteredCurrency"
                    :key="idx"
                    @click="setCurrency(item)"
                    class="p-4 mt-1 bg-gray-100 hover:bg-gray-300"
                  >
                    {{ item }}
                  </div>
                </div>
                <div v-else class="p-4 mt-1 bg-gray-100 hover:bg-gray-300">
                  No data available
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="flex items-center justify-between mb-2">
              <label for="hscode" class="font-medium text-base uppercase"
                >Insurance ({{ insuranceType }})
              </label>
              <div class="flex items-center gap-3">
                <div class="flex items-center">
                  <div
                    @click="handleInsuranceType"
                    :class="
                      insuranceType == 'percentage'
                        ? 'bg-red-300'
                        : 'bg-gray-200'
                    "
                    class="cursor-pointer w-14 h-8 rounded-[25px] p-1 transform transition-all duration-300"
                  >
                    <div
                      @click="handleInsuranceType"
                      :class="
                        insuranceType == 'actual'
                          ? ' bg-pink-500'
                          : 'translate-x-6 bg-gray-600'
                      "
                      class="transform transition-all duration-300 w-6 h-6 rounded-full"
                    ></div>
                  </div>
                </div>

                <div
                  title="Switch between insurance value or insurance percentage"
                  class="pr-2"
                >
                  <i class="fa fa-info-circle text-3xl" aria-hidden="true"></i>
                </div>
              </div>
            </div>
            <input
              placeholder="0"
              type="number"
              min="0"
              class="text-xl truncate w-full px-4 py-3 rounded-md border border-[#DB44C9] bg-[#ECD0E9] outline-none"
              v-model="item.insurance"
            />
          </div>
        </div>

        <div class="my-3 grid grid-cols-2 gap-6">
          <div>
            <label for="hscode" class="font-medium text-base uppercase"
              >FOB</label
            >
            <input
              placeholder="0"
              type="number"
              min="0"
              class="text-xl truncate w-full px-4 py-3 rounded-md border border-[#DB44C9] bg-[#ECD0E9] outline-none"
              v-model="item.fob"
            />
          </div>
          <div>
            <label for="hscode" class="font-medium text-base uppercase"
              >FREIGHT</label
            >

            <input
              placeholder="0"
              type="number"
              min="0"
              class="text-xl truncate w-full px-4 py-3 rounded-md border border-[#DB44C9] bg-[#ECD0E9] outline-none"
              v-model="item.freight"
            />
          </div>
        </div>
      </div>

      <div class="my-10 flex justify-center">
        <button
          class="bg-[#B659A2] text-white px-8 py-3 rounded-md max-w-max font-medium uppercase text-base"
        >
          Calculate
        </button>
      </div>
    </div>
  </div>
</template>

<!-- eslint-disable -->
<script>
import { ref, reactive, computed, watch } from "vue";
export default {
  setup() {
    const CETCODE = ref([
      {
        code: "0101210000",
        description: "Live Purebred breeding horses",
      },
      {
        code: "0101290000",
        description: "Live Horses other than pure bred",
      },
      {
        code: "0101301000",
        description: "Live Purebred breeding asses",
      },
      {
        code: "0101309000",
        description: "Live Assses other than pure bred",
      },
      {
        code: "0101900000",
        description: "Live Purebred breeding assess",
      },
      {
        code: "0101210000",
        description: "Live Bufalo other than pure bred",
      },
      {
        code: "0133340000",
        description: "Other, containing alkaloids or derivatives thereof",
      },
    ]);
    const showCurrency = ref(false);
    const showHscode = ref(false);
    const showHscodeDesc = ref(false);
    const insuranceToggle = ref(false);
    const insuranceType = ref("actual");
    const selectedCurrency = reactive({ currency_name: "" });
    const selectedCode = reactive({
      code: "",
      description: "",
    });
    const Currency = ref([
      "NGN",
      "AUD",
      "AED",
      "BRL",
      "CAD",
      "CHF",
      "CNY",
      "CZK",
      "CFA",
      "EGP",
      "USD",
      "EUR",
    ]);
    const item = reactive({
      description: null,
      fob: null,
      freight: null,
      insurance: null,
    });
    const setShowHscode = (state) => {
      if (state === "focus") {
        showHscode.value = true;
      } else if (state === "blur") {
        showHscode.value = false;
      } else {
        showHscode.value = !showHscode.value;
      }
    };
    const setShowHscodeDesc = (state) => {
      if (state === "focus") {
        showHscodeDesc.value = true;
      } else if (state === "blur") {
        showHscodeDesc.value = false;
      } else {
        showHscodeDesc.value = !showHscodeDesc.value;
      }
    };
    const setShowCurrency = (state) => {
      if (state === "focus") {
        showCurrency.value = true;
      } else if (state === "blur") {
        showCurrency.value = false;
      } else {
        showCurrency.value = !showCurrency.value;
      }
    };

    const setHscode = (value) => {
      selectedCode.code = value.code;
      selectedCode.description = value.description;
      if (showHscode.value) {
        showHscode.value = !showHscode.value;
      }
      if (showHscodeDesc.value) {
        showHscodeDesc.value = !showHscodeDesc.value;
      }
    };
    const setCurrency = (value) => {
      selectedCurrency.currency_name = value;
      if (showCurrency.value) {
        showCurrency.value = !showCurrency.value;
      }
    };
    const handleInsuranceType = () => {
      insuranceToggle.value = !insuranceToggle.value;
      insuranceType.value = insuranceToggle.value ? "actual" : "percentage";
    };

    const filteredCetcode = computed(() =>
      CETCODE.value.filter((item) =>
        selectedCode.description.length > 0
          ? item.description
              .toLowerCase()
              .includes(selectedCode.description.toLowerCase())
          : item.code.includes(selectedCode.code)
      )
    );
    const filteredCurrency = computed(() =>
      Currency.value.filter((item) =>
        item
          .toLowerCase()
          .includes(selectedCurrency.currency_name.toLowerCase())
      )
    );

    // watch(filteredCetcode, () => console.log(filteredCetcode.value));

    return {
      showHscode,
      showCurrency,
      showHscodeDesc,
      selectedCode,
      CETCODE,
      filteredCetcode,
      filteredCurrency,
      selectedCurrency,
      item,
      insuranceType,
      setShowCurrency,
      handleInsuranceType,
      setShowHscode,
      setShowHscodeDesc,
      setCurrency,
      setHscode,
    };
  },
};
</script>
<!-- eslint-disable -->

<style scoped>
.table_calculator {
  margin: 1rem;
  padding: 1rem;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
}

.scrollbar-thin::-webkit-scrollbar {
  width: 4px;
}
.scrollbar-thin::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background: #b659a270;
}
</style>
