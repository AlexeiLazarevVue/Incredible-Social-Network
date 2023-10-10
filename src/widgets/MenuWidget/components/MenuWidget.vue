<template>
  <aside class="menu">
    <div class="logo">
      <h1 class="logo__headline">Logo</h1>
    </div>
    <nav class="navigation">
      <router-link class="navigation__link" to="/">Home</router-link>
      <router-link class="navigation__link" to="/">Messages</router-link>
      <router-link class="navigation__link" to="/">Profile</router-link>
      <router-link class="navigation__link" to="/">Friends</router-link>
      <router-link class="navigation__link" to="/">Settings</router-link>
    </nav>
    <rounded-button class="create-post-button">Create post</rounded-button>
  </aside>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.menu {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 23vw;
  text-align: center;
  border: 1px solid #494949;
  .logo {
  &__headline {
    padding: 34px;
    font-size: 48px;
    color: #5B4FE1;
    border-bottom: 1px solid #494949;
  }
  }
  .navigation {
    display: flex;
    flex-direction: column;
    padding: 25px 0;
    &__link {
      padding: 14px;
      font-size: 20px;
      color: #fff;
      text-decoration: none;
    }
  }
  .create-post-button {
      display: flex;
      align-self: center;
    }
}
</style>