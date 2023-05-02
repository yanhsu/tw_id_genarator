<script setup>
import { ref, onMounted } from 'vue'
import { isOriginalResidentCertificateNumberValid } from 'taiwan-id-validator'
import RandExp from 'randexp';
let id = ref('');
let showId = ref(true);
onMounted(() =>{
  while(!isOriginalResidentCertificateNumberValid(id.value, true)) {
    id.value = new RandExp(/^[A-Z][A-D][0-9]{8}$/).gen();
  }
  }
)
const gen = () => {
  id.value = '';
  showId.value = false;
  while(!isOriginalResidentCertificateNumberValid(id.value, true)) {
    id.value = new RandExp(/^[A-Z][A-D][0-9]{8}$/).gen();
  }
  showId.value = true;
}
</script>

<template>
    <div class="mt-2" style="text-align:center;font-size: x-large;">
      <b-button size="sm" @click="gen" variant="primary">舊式居留證編號</b-button>&nbsp;
      <p v-show="showId">id: {{ id }}</p>&nbsp;
    </div>
</template>

