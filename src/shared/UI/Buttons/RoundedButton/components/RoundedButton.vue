<template>
  <button class="rounded-button"><slot></slot></button>
</template>

<script>
export default {
  name: "rounded-button",
};
</script>

<style lang="less" scoped>
.rounded-button {
  width: fit-content;
  padding: 17px;
  font-size: 16px;
  border-radius: 10px;
  background: #5b4fe1;
  color: #fff;
  font-family: 'Montserrat';
  font-weight: 700;
  border: none;
  transition: 0.3s;
  &:hover {
    background: #151515;
    cursor: pointer;
  }
}
</style>