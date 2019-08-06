<script>
import ClassItem from '@/components/ClassItem.vue'

export default {
  name: 'class',
  components: { ClassItem },
  data () {
    return {
      classes: []
    }
  },
  created () {
    this.$api.get('/class')
      .then(r => { this.classes = r.data.classes })
      .catch(e => this.$swal('에러!', e.response.data.message, 'error'))
  },
  methods: {
    push (to) {
      this.$router.push(to)
    }
  }
}
</script>

<template>
<div class="class">
  <span class="class__title">교실 관리&nbsp;</span>
  <span
    @click="push('/add/class')"
    class="class__add"
  >
    추가하기
  </span>
  <div class="class__list">
    <class-item
      :key="`klass-${i}`"
      v-for="(klass, i) in classes"
      class="class__item"
      :klass="klass"
    />
  </div>
</div>
</template>

<style lang="scss" scoped>
.class {
  &__title {
    display: inline;
    font-size: 2.3rem;
    user-select: none;
  }

  &__add {
    background: #FFAFBD;
    background: -webkit-linear-gradient(to right, #ffc3a0, #FFAFBD);
    background: linear-gradient(to right, #ffc3a0, #FFAFBD);

    border: 0;
    border-radius: 30px;
    padding: 5px;

    width: 70%;
    color: white;
    user-select: none;
  }

  &__list {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__item {
    width: calc(100% - 20px);
    margin-top: 1rem;
  }
}
</style>
