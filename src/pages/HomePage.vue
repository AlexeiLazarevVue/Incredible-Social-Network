<template>
  <div class="home-page">
    <posts-widget></posts-widget>
  </div>
</template>

<script>
import PostsWidget from "@/widgets/PostsWidget";

export default {
  components: { PostsWidget },
};
</script>

<style lang='less' scoped>
.home-page {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>