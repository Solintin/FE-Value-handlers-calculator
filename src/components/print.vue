<!-- eslint-disable -->

<template>
  <v-container
    style="
    background-image: url('/img/Letterhead.jpg');
    background-size: contain;
    height: 1100px
    "
    class="fill"
  >
    <v-container
      class="topMargin"
    >
      <v-row>
        <v-col
          cols="3"
        >
          <p
            class="font-weight-black"
          >
            HSCODE:
          </p>
        </v-col>
        <v-col
          cols="9"
        >
          {{ hsCode }}
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="3"
        >
          <p
            class="font-weight-black"
          >
            HSCODE Description:
          </p>
        </v-col>
        <v-col
          cols="9"
        >
          {{ hsDescription }}
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="3"
        >
          <p
            class="font-weight-black"
          >
            Item Description:
          </p>
        </v-col>
        <v-col
          cols="9"
        >
          {{ itemDescription }}
        </v-col>
      </v-row>
      <v-row
        class="padding"
      >
        <v-col>
          FOB: {{ FOB }} {{ inputCurrency }}
        </v-col>
        <v-col>
          Insurance: {{ Insurance }} {{ inputCurrency }}
        </v-col>
        <v-col>
          Freight: {{ Freight }} {{ inputCurrency }}
        </v-col>
      </v-row>
      <v-container>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Result</th>
                <th class="text-left">{{ outputCurrency }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in result" :key="item.name">
                <td>{{ item.name }}</td>
                <td>{{ item.value }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-container>
      <v-row>
        <v-col
          cols="5"
        >
          <p
            class="font-weight-black"
          >
            TOTAL IMPORT DUTY PAYABLE:
          </p>
        </v-col>
        <v-col
          cols="7"
        >
          {{ importDuty }} {{ outputCurrency }}
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="5"
        >
          <p
            class="font-weight-black"
          >
            SUM TOTAL:
          </p>
        </v-col>
        <v-col
          cols="7"
        >
          {{ sumTotal }} {{ outputCurrency }}
        </v-col>
      </v-row>
      <p
        class="success padding2"
      >
        Rates used for this calculation are based on last updated value at {{dateTime}}
      </p>
    </v-container>
  </v-container>
</template>
<!-- eslint-disable -->


<script>
export default {
  name: 'ResultCmp',
  props: {
    result: Array,
    hsCode: String,
    hsDescription: String,
    itemDescription: String,
    FOB: Number,
    Freight: Number,
    Insurance: Number,
    importDuty: Number,
    sumTotal: Number,
    inputCurrency: String,
    outputCurrency: String,
    dateTime: String,
  },
};
</script>
<!-- eslint-disable -->

<style scoped>
  .fill{
    margin: 0;
    padding: 0;
  }
  .topMargin{
    padding-top: 110px;
  }
  .padding{
    padding-top: 40px;
  }
  .padding2{
    padding-top: 200px;
    color: red;
  }
</style>
