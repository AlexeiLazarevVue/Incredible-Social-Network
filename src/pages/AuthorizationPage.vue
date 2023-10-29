<template>
  <div class="authorization-page">
    <authorization-form></authorization-form>
  </div>
</template>

<script>
import AuthorizationForm from '@/widgets/AuthorizationForm'

export default {
  components: { AuthorizationForm }
}
</script>

<style lang='less'>
.authorization-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 66px);
}
</style>