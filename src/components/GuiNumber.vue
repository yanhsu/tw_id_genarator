<script setup>
import { ref, onMounted } from 'vue'
import { isGuiNumberValid } from 'taiwan-id-validator'
import RandExp from 'randexp';
let count = ref(10);
let showId = ref(true);
const gen = () => {
  let val = '';
  showId.value = false;
  while(!isGuiNumberValid(val, true)) {
    val = new RandExp(/^[0-9]{8}$/).gen();
  }
  showId.value = true;
  return val;
}
</script>

<template>
    <div class="mt-2" style="text-align:center;font-size: x-large;">
      <b-button size="sm" @click="gen" variant="success">營利事業統一編號</b-button>&nbsp;
      <b-row class="mt-2">
      <b-col sm="4"/>
      <b-col sm="1">
        <label>數量:</label>
      </b-col>
      <b-col sm="3">
        <b-form-input id="type-number" v-model="count" type="number"/>
      </b-col>
      <b-col sm="4"/>
    </b-row>
      <p v-for="i in Number(count)" v-if="showId">{{ gen() }}</p>&nbsp;
    </div>
</template>

