<template>
  <div class="interlocutors-list">
    <div class="interlocutor-list__item"  v-for="interlocutor in interlocutors" :key="interlocutor.id">
      <interlocutor :interlocutor="interlocutor"></interlocutor>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import Interlocutor from '@/entities/Interlocutor'
export default {
  components: { Interlocutor },
  setup() {
    const interlocutors = ref([
      {
        id: 0,
        username: 'Somebody once told me',
        lastMessage: 'The world is gonna roll me'
      },
      {
        id: 1,
        username: "I ain't the sharpest tool in the shed",
        lastMessage: 'She was looking kind of dumb'
      },
      {
        id: 2,
        username: 'With her finger and her thumb',
        lastMessage: 'With the shape of an L on her forehead'
      }
    ])

    return {
      interlocutors
    }
  }
}
</script>

<style>

</style>