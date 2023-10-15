<template>
  <header class="header">
    <h1 class="header__page-name">{{ pageName }}</h1>
  </header>
</template>

<script>
export default {
  props: {
    pageName: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang='less' scoped>
.header {
  padding: 20px 60px;
  border: 1px solid #494949;
  &__page-name {
    color: #fff;
    font-size: 20px;
  }
}
</style>