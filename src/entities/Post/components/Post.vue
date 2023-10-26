<template>
  <div class="post">
    <div class="post__top">
      <div class="author">
        <div class="author__logo" alt=""></div>
        <h3 class="author__username">{{ post.userId }}</h3>
      </div>
    </div>
    <div class="post__image" alt="" srcset=""></div>
    <div class="post__bottom">
      <div class="details">
        <h3 class="details__likes">Likes: {{ post.likes }}</h3>
        <h3 class="details__date">
          {{ post.date }}
        </h3>
      </div>
      <div class="description">
        <p class="description__text">
          {{ post.content }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang='less' scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap");

.post {
  margin: 40px;
  width: 800px;
  border-radius: 20px;
  background: #2d2d2e;
  box-shadow: 0 0 86px 86px #00000025;
  overflow: hidden;
  &__top {
    .author {
      display: flex;
      gap: 15px;
      padding: 15px;
      color: #fff;
      &__logo {
        height: 30px;
        width: 30px;
        border-radius: 100%;
        background: #d9d9d9;
      }
      &__username {
        display: flex;
        align-items: center;
        font-size: 20px;
        font-weight: 600;
      }
    }
  }
  &__image {
    background: #0d0c0f;
    height: 680px;
    width: 100%;
    object-fit: cover;
  }
  &__bottom {
    padding: 10px 15px;
    .details {
      display: flex;
      justify-content: space-between;
      &__likes {
        font-size: 20px;
        font-weight: 600;
        color: #fff;
      }
      &__date {
        color: #9a9a9a;
        font-size: 20px;
        font-weight: 600;
      }
    }
    .description {
      padding: 10px 0;
      font-weight: 300;
      font-size: 20px;
      color: #fff;
    }
  }
  &__action-buttons {
    display: flex;
    overflow: hidden;
    gap: 1px;
    button {
      width: 100%;
    }
  }
}
@media screen and (max-width: 1000px) {
  .post {
    width: 79.5vw;
    &__top {
      .author {
        gap: 12px;
        padding: 12px;
        &__logo {
          height: 24px;
          width: 24px;
        }
        &__username {
          font-size: 16px;
        }
      }
    }
    &__image {
      height: 67.5vw;
    }
    &__bottom {
      padding: 8px 12px;
      .details {
        &__likes {
          font-size: 16px;
          font-weight: 600;
          color: #fff;
        }
        &__date {
          color: #9a9a9a;
          font-size: 16px;
          font-weight: 600;
        }
      }
      .description {
        padding: 8px 0;
        font-weight: 300;
        font-size: 16px;
        color: #fff;
      }
    }
  }
}
</style>