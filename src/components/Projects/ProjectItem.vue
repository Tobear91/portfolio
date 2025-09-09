<script lang="ts" setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUpRightFromSquare, faCodeBranch } from "@fortawesome/free-solid-svg-icons";

type Datas = {
  image: string;
  width?: string;
  title: string;
  description: string;
  skills: Array<string>;
  github?: string;
  demo?: string;
};

defineProps<{
  datas: Datas;
}>();
</script>

<template>
  <div class="skill-card">
    <div class="inner">
      <div class="image" :class="datas.width ? 'align-items-center' : 'align-items-start'">
        <img :src="datas.image" :alt="datas.title" :width="datas.width ?? '100%'" :height="datas.width ? 'auto' : '100%'" />
      </div>
      <div class="infos">
        <p class="title">{{ datas.title }}</p>
        <p class="description">{{ datas.description }}</p>
        <div class="skills">
          <span v-for="(skill, index) in datas.skills" :key="index">{{ skill }}</span>
        </div>
        <div class="links">
          <a v-if="datas.github" :href="datas.github" target="_blank"><FontAwesomeIcon :icon="faCodeBranch" />Github</a>
          <a v-if="datas.demo" :href="datas.demo" target="_blank"><FontAwesomeIcon :icon="faUpRightFromSquare" />Démo</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.skill-card {
  .inner {
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: #ffffff;
    border-radius: 5px;
    transition: all 0.1s ease-in;
    border: 1px solid #e6e6e6;

    &:hover {
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05), 0 4px 6px rgba(0, 0, 0, 0.03);

      .title {
        .icon {
          background-color: $main1;
        }
      }
    }

    .image {
      display: flex;
      justify-content: center;
      overflow: hidden;
      height: 180px;
      background: linear-gradient(135deg, rgba($main1, 0.1) 0%, rgba($main5, 0.1) 50%, rgba($main3, 0.1) 100%);

      img {
        object-fit: cover;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
      }
    }

    .infos {
      padding: 20px;

      .title {
        font-size: 1.8rem;
        font-weight: 600;
        color: #333333;
        margin: 0;
      }

      .description {
        font-size: 1.4rem;
        margin: 10px 0;
      }

      .skills {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 20px;

        span {
          background: #f5f5f5;
          font-size: 1.1rem;
          font-weight: 600;
          color: #333333;
          padding: 2px 5px;
        }
      }

      .links {
        display: flex;
        gap: 10px;
        margin-top: 10px;

        a {
          font-size: 1.2rem;
          color: #737373;
          text-decoration: none;

          &:hover {
            color: #333333;
          }
        }
      }
    }
  }
}
</style>
