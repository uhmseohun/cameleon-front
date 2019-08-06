<script>
import BrandBar from '@/components/Brandbar.vue'
import MenuBar from '@/components/Menubar.vue'

export default {
  name: 'app',
  components: { BrandBar, MenuBar },
  computed: {
    showBars () {
      const path = this.$route.path
      return !path.includes('/auth')
    }
  }
}
</script>

<template>
  <div id="app" class="app">
    <brand-bar
      v-show="showBars"
    />
    <router-view class="app__content" />
    <menu-bar
      v-show="showBars"
      class="app__menubar"
    />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Gothic+A1&display=swap');

a {
  text-decoration: none;
  color: black;
}

html,
body {
  height: 100%;
}

.app {
  height: 100%;

  &__content {
    font-family: 'Gothic A1', sans-serif;
    margin: 0 auto;
    padding: 1rem 15px 5rem 15px;

    @media (min-width: 650px) {
      padding: 3rem 10rem 5rem 10rem;
    }
  }

  &__menubar {
    width: -webkit-fill-available;
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
}

.input {
  &__text {
    background-color: rgb(233, 233, 233);
    border-radius: 15px;
    border: 0;
    outline: none;
    height: 2.3rem;
    padding-left: 1rem;
    font-size: 1rem;
    &::placeholder {
      font-size: 1rem;
    }
  }

  &__button {
    background-color: rgb(233, 233, 233);
    border-radius: 15px;
    border: 0;
    height: 2.3rem;
    padding-left: 1rem;
    font-size: 1rem;
  }
}
</style>
