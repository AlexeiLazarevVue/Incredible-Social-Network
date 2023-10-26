<template>
<div class="container">
  <menu-widget></menu-widget>
  <div class="main-content">
    <header-widget :pageName='"Home"'></header-widget>
    <router-view />
  </div>
  <recommendations-widget></recommendations-widget>
</div>
  
</template>

<script>
import MenuWidget from "@/widgets/MenuWidget";
import HeaderWidget from "@/widgets/HeaderWidget";
import RecommendationsWidget from "@/widgets/RecommendationsWidget";

export default {
  components: { MenuWidget, HeaderWidget, RecommendationsWidget },
};
</script>

<style lang="less">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  background: #000;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  border: 1px solid #494949;
  min-width: 360px;
}
.container {
  display: flex;
  .main-content {
    width: 100%;
  }
}
</style>
