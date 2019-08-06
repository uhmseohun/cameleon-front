<script>
import Logo from '@/assets/logo.png'

export default {
  name: 'join',
  components: { Logo },
  data () {
    return {
      Logo,
      form: {
        name: '',
        id: '',
        password: '',
        repassword: ''
      }
    }
  },
  methods: {
    join () {
      if (this.password !== this.repassword) return

      this.$api.post('/auth/join', this.form)
        .then(async r => {
          await this.$swal('성공!', '회원가입을 성공했습니다.', 'success')
          this.$router.push('/auth/login')
        })
        .catch(e => {
          this.$swal('에러!', e.response.data.message, 'error')
        })
    }
  }
}
</script>

<template>
<div class="home">
  <div class="home__form">
    <div class="home__form__login">
      <img class="home__brand" :src="Logo">
      <input
        v-model="form.name"
        class="input__text home__form-item"
        placeholder="이름을 입력하세요"
      >
      <input
        v-model="form.id"
        class="input__text home__form-item"
        placeholder="아이디를 입력하세요"
      >
      <input
        v-model="form.password"
        type="password"
        class="input__text home__form-item"
        placeholder="비밀번호를 입력하세요"
      >
      <input
        v-model="form.repassword"
        type="password"
        class="input__text home__form-item"
        placeholder="비밀번호를 다시 입력하세요"
      >
      <span
        v-show="form.password !== form.repassword &&
          form.repassword"
        class="home__form-error"
      >
        비밀번호가 일치하지 않습니다.
      </span>
      <button
        @click="join()"
        class="home__form-button"
      >
        회원가입
      </button>
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
.home {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background: #FFAFBD;
  background: -webkit-linear-gradient(to right, #ffc3a0, #FFAFBD);
  background: linear-gradient(to right, #ffc3a0, #FFAFBD);

  &__brand {
    height: 60%;
    width: 60%;
  }

  &__form {
    text-align: center;

    background-color: white;
    min-height: 70vh;
    width: 35vw;
    padding: 2rem;

    border-radius: 20px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

    @media (max-width: 414px) {
      width: 80vw;
    }

    &__login {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    &-item {
      width: 100%;
      margin-top: 1rem;
    }

    &-error {
      margin-top: 3px;
      margin-right: auto;
      margin-left: 0.5rem;
      font-size: 0.8rem;
      color: red;
    }

    &-login-box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 30vh;
    }

    &-button {
      background: #FFAFBD;
      background: -webkit-linear-gradient(to right, #ffc3a0, #FFAFBD);
      background: linear-gradient(to right, #ffc3a0, #FFAFBD);

      border: 0;
      border-radius: 30px;

      height: 3rem;
      width: 70%;
      font-size: 1.3rem;
      color: white;

      margin-top: 3rem;
    }

    &-join {
      margin-top: 2rem;

      &-go {
        color: rgb(114, 151, 233);
      }
    }
  }
}
</style>
