<template>
  <div class="">
    <country-select v-model="state.country" name="country" placeholder="Country or region" />
    <country-select v-model="state.countries" name="countries" placeholder="Countries or region" multiple />
  </div>
</template>

<script lang="ts" setup>

const state = reactive({
  countries: [],
  country: null,
})
</script>
