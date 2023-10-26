<template>
  <aside class="recommendations">
    <div class="headline">
      <h1 class="headline__text">Recommended to you</h1>
    </div>
    <div class="recommended-users">
      <div v-for="user in recommendedUsers" :key="user.id" class="recommended-user">
        <recommended-user :user="user"></recommended-user>
      </div>
    </div>
  </aside>
</template>

<script>
import { ref } from 'vue'
import RecommendedUser from '@/entities/RecommendedUser';

export default {
  components: { RecommendedUser },
  setup() {
    const recommendedUsers = ref([
      { id: 0, username: "User_not_found" },
      { id: 1, username: "Found_not_user" },
    ]);

    return {
      recommendedUsers
    }
  },
};
</script>

<style lang='less' scoped>
.recommendations {
  min-width: 330px;
  border: 1px solid #494949;
  .headline {
    width: 100%;
    padding: 19px 0;
    border-bottom: 1px solid #494949;
    text-align: center;
    &__text {
      font-size: 20px;
      color: #fff;
    }
  }
}
</style>