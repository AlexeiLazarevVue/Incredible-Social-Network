<template>
  <button class="round-button"><slot></slot></button>
</template>

<script>
export default {
  name: "round-button",
};
</script>

<style lang="less" scoped>
.round-button {
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 43px;
  min-width: 43px;
  font-size: 36px;
  border-radius: 100%;
  background: #5b4fe1;
  color: #fff;
  font-family: 'Montserrat';
  font-weight: 400;
  border: none;
  transition: 0.3s;
  &:hover {
    background: #151515;
    cursor: pointer;
  }
}
</style>