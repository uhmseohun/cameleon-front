<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
a {
  text-decoration: none;
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
</style>
