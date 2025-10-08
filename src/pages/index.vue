<template>
  <div class="">
    <country-select v-model="state.country" name="country" placeholder="Country or region" />
    <country-select v-model="state.countries" name="countries" placeholder="Countries or region" multiple />
  </div>

</template>

<script lang="ts" setup>
const state = reactive({
  countries: [{ "text": "Latvia", "value": "LV" }, { "text": "Lithuania", "value": "LT" }],
  country: { "text": "Andorra", "value": "AD" },
})
</script>
