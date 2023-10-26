<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      <post :post="post"></post>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Post from '@/entities/Post';

export default {
  components: { Post },
  setup() {
    const posts = ref([
      {
        id: 1,
        userId: 1473958347952,
        title: "How to make social network in one day",
        content: "Do not do it for a week",
        image: "",
        likes: 380183,
        date: '5 minutes ago'
      },
      {
        id: 2,
        userId: 2,
        title: "How to make social network in one day",
        content: "Do not do it for a week",
        image: "",
        likes: 100290293,
        date: '5 minutes ago'
      },
      {
        id: 3,
        userId: 3,
        title: "How to make social network in one day",
        content: "Do not do it for a week",
        image: "",
        likes: 347935,
        date: '5 minutes ago'
      },
    ]);

    return {
      posts,
    };
  },
};
</script>

<style lang='less' scoped>
.post-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
</style>