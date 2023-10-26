<template>
<form action="" class="create-post-form">
  <textarea
      v-model="content"
      @input="(event) => {
          resizeTextarea(event);
        }"
      placeholder="Something new? Share it :)"
      type="text"
      class="create-post-form__content-field"
    ></textarea>
    <div class="create-post-form__buttons">
      <half-round-button>Add photo</half-round-button>
      <half-round-button>Create post</half-round-button>
    </div>
</form>
</template>

<script>
import { resizeTextarea } from '@/shared/lib/resizeTextarea/resizeTextarea'
export default {
  setup() {
    return {
      resizeTextarea
    }
  }
}
</script>

<style lang='less'>
.create-post-form {
  width: 100%;
  border: 1px solid #494949;
  &__content-field {
    width: 100%;
    background: none;
    padding: 23px;
    font-size: 24px;
    font-weight: 500;
    color: #fff;
    border: none;
    resize: none;
    &:focus {
      outline: 0;
    }
    &::-ms-input-placeholder {
      color: #4A4B54;
    }
  }
  &__buttons {
    display: flex;
    justify-content: space-between;
    padding: 23px;
  }
}
@media screen and (max-width: 600px) {
  .create-post-form {
    &__content-field {
      font-size: 19px;
    }
  }
}
</style>