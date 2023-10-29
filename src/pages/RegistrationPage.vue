<template>
  <div class="registration-page">
    <registration-form></registration-form>
  </div>
</template>

<script>
import RegistrationForm from '@/widgets/RegistrationForm'

export default {
  components: { RegistrationForm }
}
</script>

<style lang='less'>
.registration-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 66px);
}
</style>