<script setup lang="ts">
type Size = 'default' | 'small' | 'large'
type Type = 'default' | 'primary' | 'ghost'

type Props = {
  size?: Size
  type?: Type
}

const SIZES: Record<Size, string> = {
  default: 'px-6 py-3 rounded-xl',
  small: 'px-3 py-1.5 rounded-xl',
  large: '',
}

const TYPES: Record<Type, string> = {
  default: 'border-4 border-brand-border bg-brand-bg-dark outline-brand-border',
  primary:
    'border-4 border-[#f7b6d0b3] bg-brand-pink text-white outline-brand-pink',
  ghost: '',
}

const props = defineProps<Props>()
const classes = computed(() => {
  const result: string[] = []

  result.push(SIZES[props.size || 'default'])
  result.push(TYPES[props.type || 'default'])

  return result
})
</script>

<template>
  <button :class="classes" type="button" :style="{ outlineOffset: '4px' }">
    <slot />
  </button>
</template>
