<script>
import TagItem from '@/components/TagItem.vue'

export default {
  name: 'tag',
  components: { TagItem },
  data () {
    return {
      tags: []
    }
  },
  created () {
    this.$api.get('/tag')
      .then(r => { this.tags = r.data.tags })
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
<div class="tag">
  <span class="tag__title">태그 관리&nbsp;</span>
  <span
    @click="push('/add/tag')"
    class="tag__add"
  >
    추가하기
  </span>
  <div class="tag__list">
    <tag-item
      :key="`tag-${i}`"
      v-for="(tag, i) in tags"
      class="tag__item"
      :tag="tag"
    />
  </div>
</div>
</template>

<style lang="scss" scoped>
.tag {
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
