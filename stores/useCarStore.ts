import { defineStore } from 'pinia'
import type { Car } from '~/interfaces/car'
export const useCarsStore = defineStore('cars', {
  state: () => {
    return { cars: [] as Car[]}
  },
  actions: {
    async getCars() {
      const {error, data} = await useAsyncData<Car[]>(
        'cars', 
        () => $fetch('https://am111.05.testing.place/api/v1/cars/list', 
        {
          method: 'GET',
        }))
        if (!error.value && data.value != null) {
          this.cars = data.value
        }
        return {error}
    },
  },
})