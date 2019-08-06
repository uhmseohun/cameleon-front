<script>
export default {
  name: 'coloritem',
  props: {
    color: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
<div
  class="color"
  :style="{
    'background-color': `#${color.rgb}`
  }"
>
  <span class="color__name">{{ color.name }}</span>
  <span class="color__intro">{{ color.introduce }}</span>
</div>
</template>

<style lang="scss" scoped>
.color {
  vertical-align: middle;
  height: 3rem;
  border-radius: 8px;
  padding: 10px;

  &__name {
    display: block;
    font-size: 1.2rem;
  }
}
</style>
