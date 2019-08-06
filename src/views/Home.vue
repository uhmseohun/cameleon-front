<script>
import Logo from '@/assets/logo.png'

export default {
  name: 'home',
  data () {
    return {
      Logo,
      form: {
        id: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      this.$api.post('/auth/login', this.form)
        .then(r => {
          const token = r.data.accessToken
          localStorage.token = token
          this.$api.defaults.headers.common['authorization'] = token
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
    <img class="home__brand" :src="Logo"/>
    <div class="home__form__login">
      <input
        v-model="form.id"
        @keyup.enter="login()"
        class="input__text home__form-item"
        placeholder="아이디를 입력하세요"
      >
      <input
        v-model="form.password"
        @keyup.enter="login()"
        class="input__text home__form-item"
        placeholder="비밀번호를 입력하세요"
      >
    </div>
    <div class="home__form-login-box">
      <button
        @click="login()"
        class="home__form-button"
      >
        로그인
      </button>
      <span class="home__form-join">
        계정이 없다면?&nbsp;
        <router-link
          class="home__form-join-go"
          to="/join"
        >
          회원가입
        </router-link>
      </span>
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
    height: 20vh;
    width: 100%;
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

      height: 30vh;
    }

    &-item {
      width: 100%;
      margin-top: 5px;
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
