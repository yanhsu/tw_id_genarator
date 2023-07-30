<script setup>
import { ref, onMounted, reactive } from 'vue'
import { isOriginalResidentCertificateNumberValid } from 'taiwan-id-validator'
import RandExp from 'randexp';
let count = ref(10);
let showId = ref(true);
let ids = reactive([]);
onMounted(()=> {
  gen();
})
const gen = () => {
  ids.length = 0;
  showId.value = false;
  for(let i = 0; i < count.value; i++) {
    let val = '';
    while(!isOriginalResidentCertificateNumberValid(val, true)) {
    val = new RandExp(/^[A-Z][A-D][0-9]{8}$/).gen();
    }
    ids.push(val);
  }
  showId.value = true;
}
</script>

<template>
    <div class="mt-2" style="text-align:center;font-size: x-large;">
      <b-button size="sm" @click="gen" variant="success">舊式居留證編號</b-button>&nbsp;
      <b-row class="mt-2">
      <b-col sm="4"/>
      <b-col sm="1">
        <label>數量:</label>
      </b-col>
      <b-col sm="3">
        <b-form-input id="type-number" min="1" v-model="count" type="number" @input="gen"/>
      </b-col>
      <b-col sm="4"/>
    </b-row>
      <p v-for="i in ids" v-show="showId">{{ i }}</p>
    </div>
</template>

