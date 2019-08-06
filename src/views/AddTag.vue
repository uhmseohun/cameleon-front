<script>
export default {
  name: 'addtag',
  data () {
    return {
      colors: [],
      form: {
        name: '',
        payload: null,
        color: null
      }
    }
  },
  methods: {
    add () {
      this.$api.post('/tag', this.form)
        .then(async () => {
          await this.$swal('성공!', '성공적으로 새로운 태그를 만들었습니다.', 'success')

          this.form = {
            name: '',
            payload: null,
            color: null
          }

          this.$router.push('/tag')
        })
        .catch(e => this.$swal('에러!', e.response.data.message, 'error'))
    }
  },
  created () {
    this.$api.get('/color')
      .then(r => { this.colors = r.data.colors })
      .catch(e => this.$swal('에러!', e.response.data.message, 'error'))
  }
}
</script>

<template>
<div class="tag">
  <span class="tag__title">새로운 태그 추가</span>
  <div class="tag__form">
    <input
      v-model="form.name"
      class="input__text tag__form-item"
      placeholder="태그 이름을 입력하세요"
    >
    <input
      v-model.number="form.payload"
      class="input__text tag__form-item"
      placeholder="태그 페이로드를 입력하세요"
    >
    <select
      v-model="form.color"
      class="input__text tag__form-item"
    >
      <option
        :key="`color-${i}`"
        v-for="(color, i) in colors"
        :value="color._id"
      >
        {{ color.name }} 색 온도
      </option>
    </select>
    <button
      @click="add()"
      class="input__button tag__form-item tag__form-button"
    >
      추가하기
    </button>
  </div>
</div>
</template>

<style lang="scss" scoped>
.tag {
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
