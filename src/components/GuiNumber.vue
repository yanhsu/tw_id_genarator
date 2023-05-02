<script setup>
import { ref, onMounted } from 'vue'
import { isGuiNumberValid } from 'taiwan-id-validator'
import RandExp from 'randexp';
let id = ref('');
let showId = ref(true);
onMounted(() =>{
  while(!isGuiNumberValid(id.value, true)) {
    id.value = new RandExp(/^[0-9]{8}$/).gen();
  }
  }
)
const gen = () => {
  id.value = '';
  showId.value = false;
  while(!isGuiNumberValid(id.value, true)) {
    id.value = new RandExp(/^[0-9]{8}$/).gen();
  }
  showId.value = true;
}
</script>

<template>
    <div class="mt-2" style="text-align:center;font-size: x-large;">
      <b-button size="sm" @click="gen" variant="primary">產生營利事業統一編號</b-button>&nbsp;
      <p v-show="showId">id: {{ id }}</p>&nbsp;
    </div>
</template>

