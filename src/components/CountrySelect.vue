<template>
  <u-form-field :label="label" :name="name" class="mb-2">
    <u-input-menu v-model="value" :items="options" :placeholder="placeholder" :disabled="disabled" :multiple="multiple"
      :ui="{
        tagsItem: 'px-1.5 py-1.5',
      }" label-key="text">
      <template #leading="{ modelValue }">
        <u-icon v-if="Array.isArray(modelValue) && modelValue?.length || !modelValue?.text?.length"
          name="i-material-symbols-search" class="text-gray-400 size-6" />
        <div v-if="!multiple && !Array.isArray(modelValue) && modelValue?.text"
          class="flex justify-center items-center">
          {{ getFlagEmoji(modelValue?.value as string) }}
        </div>
      </template>

      <template #tags-item-text="{ item }">
        <div class="flex justify-center items-center gap-1">
          <div>{{ getFlagEmoji(item.value) }}</div>
          <div>{{ item.text }}</div>
        </div>
      </template>
    </u-input-menu>
    <template v-for="(_, name) in ($slots as {})" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </u-form-field>
</template>

<script lang="ts" setup>
const props = defineProps({
  name: { type: String, required: true },
  modelValue: {
    type: [Array, Object, null] as PropType<{ text: string, value: string }[] | { text: string, value: string }>,
    required: true
  },
  label: { type: String, default: '' },
  placeholder: { type: String, default: '' },
  disabled: { type: Boolean, default: false },
  multiple: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['update:modelValue'])
const options = getCountryList().map(country => ({
  text: country.name,
  value: country.code
}))
const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script>
