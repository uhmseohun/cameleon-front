<script>
import kelvinToRgb from 'kelvin-to-rgb'

export default {
  name: 'addcolor',
  data () {
    return {
      form: {
        name: '',
        introduce: '',
        kelvin: null
      }
    }
  },
  methods: {
    add () {
      function componentToHex (c) {
        let hex = c.toString(16)
        return hex.length === 1 ? '0' + hex : hex
      }

      function rgbToHex (r, g, b) {
        return componentToHex(r) + componentToHex(g) + componentToHex(b)
      }

      const rgb = kelvinToRgb(this.form.kelvin)

      this.form.rgb = rgbToHex(rgb[0], rgb[1], rgb[2])

      console.log(this.form)

      this.$api.post('/color', this.form)
        .then(() => this.$swal('성공!', '성공적으로 색상을 만들었습니다.', 'success'))
        .catch(e => this.$swal('에러!', e.response.data.message, 'error'))
    }
  }
}
</script>

<template>
<div class="color">
  <span class="color__title">조명 색상 추가</span>
  <div class="color__form">
    <input
      v-model="form.name"
      class="input__text color__form-item"
      placeholder="색상 이름을 입력하세요"
    >
    <input
      v-model="form.introduce"
      class="input__text color__form-item"
      placeholder="색상 소개를 입력하세요"
    >
    <input
      v-model.number="form.kelvin"
      class="input__text color__form-item"
      placeholder="색 온도를 입력하세요"
    >
    <button
      @click="add()"
      class="input__button color__form-item color__form-button"
    >
      추가하기
    </button>
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

  &__form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &-item {
      width: 100%;
      margin-top: 1rem;
    }
    &-button {
      width: 40%;
    }
  }
}
</style>
