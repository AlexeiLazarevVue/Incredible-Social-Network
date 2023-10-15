<template>
<div class="container">
  <menu-widget></menu-widget>
  <div class="main-content">
    <header-widget :pageName='"Home"'></header-widget>
    <router-view />
  </div>
</div>
  
</template>

<script>
import MenuWidget from "@/widgets/MenuWidget";
import HeaderWidget from "@/widgets/HeaderWidget";

export default {
  components: { MenuWidget, HeaderWidget },
};
</script>

<style lang="less">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  background: #000;
  font-family: "Montserrat", sans-serif;
}
.container {
  display: flex;
  .main-content {
    width: 100%;
  }
}
</style>
