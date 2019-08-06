<script>
export default {
  name: 'brandbar',
  methods: {
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
    <span class="navbar__block">카멜레온</span>
  </div>
  <div class="navbar__logout">
    <i
      @click="logout()"
      class="fa fa-sign-out"
    />
  </div>
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
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 1.7rem;
  }

  &__icon {
    height: 2rem;
  }
}
</style>
