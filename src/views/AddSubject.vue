<script>
export default {
  name: 'addsubject',
  data () {
    return {
      form: {
        name: '',
        color: ''
      },
      colors: []
    }
  },
  methods: {
    add () {
      this.$api.post('/subject', this.form)
        .then(async () => {
          await this.$swal('성공!', '성공적으로 새로운 과목을 만들었습니다.', 'success')

          this.form = {
            name: '',
            color: ''
          }

          this.$router.push('/subject')
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
<div class="subject">
  <span class="subject__title">새로운 과목 추가</span>
  <div class="subject__form">
    <input
      v-model="form.name"
      class="input__text subject__form-item"
      placeholder="과목 이름을 입력하세요"
    >
    <select
      v-model="form.color"
      class="input__text subject__form-item"
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
      class="input__button subject__form-item subject__form-button"
    >
      추가하기
    </button>
  </div>
</div>
</template>

<style lang="scss" scoped>
.subject {
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
