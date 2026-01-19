<template>
  <q-page class="row items-center justify-evenly">
    <pre>
      {{ JSON.stringify(data) }}
    </pre>
  </q-page>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { api } from 'src/boot/axios';

const data = ref({});

onMounted(async () => {
  const response = await api.get('/', { params: { sub: 'brdev' } });
  data.value = response.data.data;
});
</script>
