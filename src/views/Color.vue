<script>
import ColorItem from '@/components/ColorItem.vue'

export default {
  name: 'color',
  components: { ColorItem },
  data () {
    return {
      colors: []
    }
  },
  created () {
    this.$api.get('/color')
      .then(r => { this.colors = r.data.colors })
      .catch(e => this.$swal('에러!', e.response.data.message, 'error'))
  },
  methods: {
    push (to) {
      this.$router.push(to)
    }
  }
}
</script>

<template>
<div class="color">
  <span class="color__title">조명 색상 관리</span>
  <span
    @click="push('/add/color')"
    class="color__add"
  >
    추가하기
  </span>
  <div class="color__list">
    <color-item
      class="color__item"
      :key="`color-${i}`"
      v-for="(color, i) in colors"
      :color="color"
    />
  </div>
</div>
</template>

<style lang="scss" scoped>
.color {
  &__title {
    display: inline;
    font-size: 2.3rem;
    user-select: none;
  }

  &__add {
    user-select: none;
  }

  &__list {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__item {
    width: calc(100% - 20px);
    margin-top: 1rem;
  }
}
</style>
