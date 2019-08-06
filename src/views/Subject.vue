<script>
import SubjectItem from '@/components/SubjectItem.vue'

export default {
  name: 'subject',
  components: { SubjectItem },
  data () {
    return {
      subjects: []
    }
  },
  created () {
    this.$api.get('/subject')
      .then(r => { this.subjects = r.data.subjects })
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
<div class="subject">
  <span class="subject__title">과목 관리</span>
  <span
    @click="push('/add/subject')"
    class="subject__add"
  >
    추가하기
  </span>
  <div class="subject__list">
    <subject-item
      :key="`subject-${i}`"
      v-for="(subject, i) in subjects"
      class="subject__item"
      :subject="subject"
    />
  </div>
</div>
</template>

<style lang="scss" scoped>
.subject {
  &__title {
    display: inline;
    font-size: 2.3rem;
    user-select: none;
  }

  &__add {
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
