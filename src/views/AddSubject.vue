<script>
export default {
  name: 'addsubject',
  data () {
    return {
      form: {
        name: '',
        introduce: '',
        grade: null,
        class: null,
        students: [],
        president: [],
        colors: {}
      }
    }
  },
  methods: {
    add () {
      this.$api.post('/class', this.form)
        .then(async () => {
          await this.$swal('성공!', '성공적으로 새로운 교실을 만들었습니다.', 'success')

          this.form = {
            name: '',
            introduce: '',
            grade: null,
            class: null,
            students: [],
            president: [],
            colors: {}
          }

          this.$router.push('/class')
        })
        .catch(e => this.$swal('에러!', e.response.data.message, 'error'))
    }
  }
}
</script>

<template>
<div class="color">
  <span class="color__title">새로운 교실 추가</span>
  <div class="color__form">
    <input
      v-model="form.name"
      class="input__text color__form-item"
      placeholder="교실 이름을 입력하세요"
    >
    <input
      v-model="form.introduce"
      class="input__text color__form-item"
      placeholder="교실 소개를 입력하세요"
    >
    <input
      v-model.number="form.grade"
      class="input__text color__form-item"
      placeholder="학년을 입력하세요"
    >
    <input
      v-model.number="form.class"
      class="input__text color__form-item"
      placeholder="반을 입력하세요"
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
