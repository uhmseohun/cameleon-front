<script>
export default {
  name: 'classitem',
  props: {
    klass: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
<div class="klass">
  <span class="klass__name">{{ klass.name }}</span>
  <span class="klass__intro">{{ klass.introduce }}</span>
</div>
</template>

<style lang="scss" scoped>
.klass {
  vertical-align: middle;
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
