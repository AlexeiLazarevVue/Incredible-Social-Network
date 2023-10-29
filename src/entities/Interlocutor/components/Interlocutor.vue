<template>
  <div class="interlocutor" @click="$router.push(`/messages/${interlocutor.id}`)">
    <div class="interlocutor__image"></div>
    <div class="interlocutors__text-part">
      <div class="interlocutor__name">{{ interlocutor.username }}</div>
      <div class="interlocutor__last-message">
        {{ interlocutor.lastMessage }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    interlocutor: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang='less' scoped>
.interlocutor {
  display: flex;
  align-items: center;
  padding: 20px 25px;
  font-size: 20px;
  gap: 15px;
  color: #fff;
  border: 1px solid #404040;
  transition: 0.3s;
  cursor: pointer;
  &__image {
    height: 40px;
    width: 40px;
    background: #fff;
    border-radius: 100%;
    transition: 0.3s;
  }
  &__text-part {
    display: flex;
    flex-direction: column;
  }
  &__last-message {
    color: #404040;
    transition: 0.3s;
  }
  &:hover {
    background: #404040;
    .interlocutor__last-message {
      color: #b8b8b8;
    }
    .interlocutor__image {
      margin-left: 5px;
    }
  }
}
</style>