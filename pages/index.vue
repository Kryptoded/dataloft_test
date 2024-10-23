<template>
  <main class="bg-light">
    <div class="container py-5">
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div class="col" v-for="car in carsStore.cars" :key="car.id">
          <CarCard
            :brand_name="car.brand_name"
            :engine_name="car.engine_name"
            :id="car.id"
            :engine_volume="car.engine_volume"
            :thumbnail="car.thumbnail"
            :model_name="car.model_name"
            :transmission_name="car.transmission_name"
            :year="car.year"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
// import { useCarsStore } from '~/stores/useCarStore';

const carsStore = useCarsStore();
const { error } = await carsStore.getCars();
</script>
