<template>
  <q-page class="row items-center justify-evenly">
    <pre>
      Subreddit: {{ route.params.sub }}
      <hr>
      {{ JSON.stringify(data, null, 2) }}
    </pre>
  </q-page>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { api } from 'src/boot/axios';

const route = useRoute();
const data = ref(null);

onMounted(async () => {
  const response = await api.get('/', { params: { sub: route.params.sub } });
  data.value = response.data;
});
</script>
