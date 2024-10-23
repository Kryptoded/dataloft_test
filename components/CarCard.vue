<template>
  <div class="card h-100">
    <img :src="props.thumbnail" class="card-img-top" :alt="fullModelName" />
    <div class="card-body">
      <h5 class="card-title">
        {{ fullModelName }} {{ props.engine_name }}
        {{ props.transmission_name }} {{ props.year }} г.
      </h5>
      <p class="card-text">
        Объем двигателя: {{ props.engine_volume }} {{ props.engine_name }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Car } from "~/interfaces/car";

const props = defineProps<Car>();

const fullModelName = computed(() => `${props.brand_name} ${props.model_name}`);
</script>
