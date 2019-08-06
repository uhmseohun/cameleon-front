<script>
export default {
  name: 'subjectitem',
  props: {
    subject: {
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
  class="subject"
  :style="{
    'background-color': `rgb()`
  }"
>
  <span class="subject__name">{{ subject.name }}</span>
  <span class="subject__intro">{{ subject.introduce }}</span>
</div>
</template>

<style lang="scss" scoped>
.subject {
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
