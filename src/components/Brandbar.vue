<script>
import Logout from '@/assets/logout.png'

export default {
  name: 'brandbar',
  data () {
    return {
      Logout
    }
  },
  methods: {
    push (to) {
      this.$router.push(to)
    },
    logout () {
      delete localStorage.token
      delete this.$api.defaults.headers.common['authorization']
      this.$router.push('/auth/login')
    }
  }
}
</script>

<template>
<div class="navbar">
  <div class="navbar__brand">
    <span
      @click="push('/')"
      class="navbar__block"
    >
      카멜레온
    </span>
  </div>
  <img
    class="navbar__logout"
    @click="logout()"
    :src="Logout"
  />
</div>
</template>

<style lang="scss" scoped>
.navbar {
  height: 1.5rem;
  margin: 17px 15px;

  &__brand {
    float: left;
    font-size: 1.3rem;
    user-select: none;
  }

  &__block {
    display: block;
  }

  &__logout {
    float: right;
    height: 1.7rem;
    display: flex;
    align-items: center;
  }

  &__icon {
    height: 2rem;
  }
}
</style>
