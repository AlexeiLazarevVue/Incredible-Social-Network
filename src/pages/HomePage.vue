<template>
  <div class="home-page">
    <create-post-form></create-post-form>
    <posts-widget></posts-widget>
  </div>
</template>

<script>
import CreatePostForm from '@/widgets/CreatePostForm';
import PostsWidget from "@/widgets/PostsWidget";

export default {
  components: { CreatePostForm, PostsWidget },
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