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
    <router-view />
    <menu-bar
      v-show="showBars"
      class="app__menubar"
    />
  </div>
</template>

<style lang="scss">
a {
  text-decoration: none;
  color: black;
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
}

.app {
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
</style>
