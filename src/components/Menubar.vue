<script>
export default {
  name: 'menubar',
  data () {
    return {
      menus: [
        {
          title: '과목',
          route: '/subject'
        },
        {
          title: '색 온도',
          route: '/color'
        },
        {
          title: '교실',
          route: '/class'
        },
        {
          title: '태그',
          route: '/tag'
        }
      ]
    }
  },
  computed: {
    currentMenu () {
      const route = this.$route.path
      if (route.includes('/subject')) return 0
      if (route.includes('/color')) return 1
      if (route.includes('/class')) return 2
      if (route.includes('/tag')) return 3
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
  >
    <router-link
      :class="{
        'menubar__menu': true,
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
    color: rgb(150, 150, 150) !important;

    &-selected {
      color: black !important;
      font-weight: bold;
    }
  }
}
</style>
