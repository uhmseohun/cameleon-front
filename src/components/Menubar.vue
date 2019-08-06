<script>
export default {
  name: 'menubar',
  data () {
    return {
      menus: [
        {
          title: '과목 관리',
          route: '/subject'
        },
        {
          title: '교실 관리',
          route: '/class'
        },
        {
          title: '색상 관리',
          route: '/color'
        },
        {
          title: '설정',
          route: '/setting'
        }
      ]
    }
  },
  computed: {
    currentMenu () {
      const route = this.$route.path
      if (route === '/subject') return 0
      if (route === '/class') return 1
      if (route === '/setting') return 2
      return -1
    }
  }
}
</script>

<template>
<div class="menubar">
  <div
    :key="`menu-${i}`"
    v-for="(menu, i) in menus"
    class="menubar__menu"
  >
    <router-link
      :class="{
        'menubar__menu-selected': currentMenu === i
      }"
      :to="menu.route"
    >
      {{ menu.title}}
    </router-link>
  </div>
</div>
</template>

<style lang="scss" scoped>
.menubar {
  height: 1.3rem;
  padding: 1rem 2rem;
  background-color: rgba(255, 255, 255, 0.9);

  display: flex;
  justify-content: space-around;

  &__menu {
    font-size: 1.3rem;
    color: black;
  }

  &__menu-selected {
    color: rgb(100, 100, 100) !important;
  }
}
</style>
