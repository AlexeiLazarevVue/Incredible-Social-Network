<template>
  <div class="recommended-user">
    <div class="recommended-user__image"></div>
    <h2 class="recommended-user__name">{{user.username}}</h2>
    <round-button>+</round-button>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang='less' scoped>
.recommended-user {
  display: flex;
  padding: 25px;
  align-items: center;
  justify-content: space-between;
  &__image {
    min-height: 43px;
    min-width: 43px;
    border-radius: 100%;
    background: #404040;
  }
  &__name {
    font-size: 20px;
    color: #fff;
  }
}
</style>