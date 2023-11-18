<script setup lang="ts">
import dayjs from 'dayjs'

const date = ref(dayjs().format('H:MM:ss A MMM D'))

onMounted(() => {
  setInterval(() => (date.value = dayjs().format('H:MM:ss A MMM D')), 1000)
})
</script>

<template>
  <div class="fixed bottom-8 top-8 right-8 left-8 flex flex-col items-center">
    <ud-command-search />

    <div
      class="flex gap-2 border border-light-900 rounded-xl p-2 shadow shadow-xl shadow-black/5 select-none"
    >
      <div
        class="h-8 bg-light-800 px-4 flex items-center rounded-lg <sm:hidden"
      >
        {{ date }}
      </div>

      <button class="h-8 w-8 rounded-lg bg-light-800 grid place-items-center">
        D
      </button>
    </div>
  </div>
</template>
