<script setup>
import { ref , onMounted} from 'vue'
import { isNationalIdentificationNumberValid } from 'taiwan-id-validator'
import RandExp from 'randexp';
let id = ref('');
let showId = ref(true);
onMounted(() =>{
  while(!isNationalIdentificationNumberValid(id.value)) {
    id.value = new RandExp(/^[A-Z][0-9]{9}$/).gen();
  }
  }
)
const gen = () => {
  id.value = '';
  showId.value = false;
  while(!isNationalIdentificationNumberValid(id.value)) {
    id.value = new RandExp(/^[A-Z][0-9]{9}$/).gen();
  }
  showId.value = true;
}
</script>

<template>
    <div class="mt-2" style="text-align:center;font-size: x-large;">
      <b-button size="sm" @click="gen" variant="primary">產生中華民國身分證</b-button>&nbsp;
      <p v-show="showId">id: {{ id }}</p>&nbsp;
    </div>
</template>

