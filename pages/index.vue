<script setup lang="ts">
useHead({
  title: 'unDeta Arc',
  htmlAttrs: {
    lang: 'en',
  },
})
</script>

<template>
  <ud-button>Default Button</ud-button>

  <ud-button type="primary">Primary Button</ud-button>

  // simple components & page, added unocss

  <ud-command-palette />
</template>
