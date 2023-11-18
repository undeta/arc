import { defineConfig } from 'unocss'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  transformers: [transformerVariantGroup(), transformerDirectives()],
  theme: {
    colors: {
      brand: {
        text: '#32302f',
        'text-light': '#494645',
        'bg-dark': '#fbfcfc',
        'bg-accent': '#eaebeb',
        border: '#ddd6d088',
        primary: '#2a62f1',
        'primary-dark': '#a48e8e',
        green: '#0ec463',
        red: '#f24441',
        pink: '#f26daa',
        'pink-light': '#f7b6d0b3',
        orange: '#fa870c',
      },

      'brand-dark': {
        text: '#32302f',
        'text-light': '#494645',
        'bg-dark': '#fbfcfc',
        'bg-accent': '#eaebeb',
        border: '#dee0e3',
        primary: '#2a62f1',
        'primary-dark': '#a48e8e',
        green: '#0ec463',
        red: '#f24441',
        orange: '#fa870c',
      },
    },

    fontSize: {
      // xs: '10px',
      // sm: '12px',
      // base: '14px',
      // lg: '16px',
      // xl: '20px',
      // '2xl': '24px',
      // '3xl': '30px',
      // '4xl': '36px',
      // '5xl': '42px',
      // '6xl': '50px',
      // '7xl': '58px',
      // '8xl': '66px',
      // '9xl': '76px',
    },
  },
})
