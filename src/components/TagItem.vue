<script>
export default {
  name: 'tagitem',
  props: {
    tag: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      color: 'rgb(233, 233, 233)'
    }
  }
}
</script>

<template>
<div
  class="tag"
  :style="{
    'background-color': `rgb()`
  }"
>
  <span class="tag__name">{{ tag.name }}</span>
  <span class="tag__intro">{{ tag.introduce }}</span>
</div>
</template>

<style lang="scss" scoped>
.tag {
  display: flex;
  align-items: center;
  height: 3rem;
  border-radius: 8px;
  padding: 10px;
  background-color: rgb(233, 233, 233);

  &__name {
    display: block;
    font-size: 1.2rem;
  }
}
</style>
