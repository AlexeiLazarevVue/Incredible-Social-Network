<template>
  <menu-widget></menu-widget>
  <router-view />
</template>

<script>
import MenuWidget from "@/widgets/MenuWidget";

export default {
  components: { MenuWidget },
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
</style>
