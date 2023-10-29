<template>
  <form action="" class="authorization-form">
    <input placeholder="Username" type="text" class="authorization-form__field" />
    <input placeholder="Password" type="text" class="authorization-form__field"/>
    <rounded-button @click.prevent="authorize()" type="submit">Sign In</rounded-button>
  </form>
</template>

<script>
export default {};
</script>

<style lang='less' scoped>
.authorization-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #0D0C0F;
  padding: 37px 60px;
  border-radius: 30px;
  gap: 30px;
  &__field {
    width: 350px;
    padding: 15px 25px;
    font-size: 20px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    background: none;
    color: #fff;
    border: 1px solid #D9D9D9;
    border-radius: 10px;
  }
}
</style>