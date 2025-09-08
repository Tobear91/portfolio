<script lang="ts" setup>
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

type Datas = {
  icon: IconDefinition;
  title: string;
  description: string;
  skills: Array<{ icon: IconDefinition; label: string }>;
};

defineProps<{
  datas: Datas;
}>();
</script>

<template>
  <div class="skill-card">
    <div class="inner">
      <div class="title">
        <div class="icon">
          <FontAwesomeIcon :icon="datas.icon" />
        </div>
        <p>{{ datas.title }}</p>
      </div>
      <p class="description">{{ datas.description }}</p>
      <div class="skills">
        <span v-for="(skill, index) in datas.skills" :key="index"><FontAwesomeIcon :icon="skill.icon" />{{ skill.label }}</span>
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
    padding: 20px;
    border-radius: 5px;
    border: 1px solid #e6e6e6;
    transition: all 0.1s ease-in;

    &:hover {
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05), 0 4px 6px rgba(0, 0, 0, 0.03);

      .title {
        .icon {
          background-color: $main1;
        }
      }
    }

    .title {
      display: flex;
      align-items: center;
      gap: 10px;

      .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 0 0 40px;
        height: 40px;
        background-color: $main2;
        border-radius: 4px;
        transition: all 0.1s ease-in;

        svg {
          color: #ffffff;
        }
      }

      p {
        font-size: 1.4rem;
        font-weight: 600;
        color: #333333;
        margin: 0;
      }
    }

    .description {
      font-size: 1.2rem;
      margin: 10px 0;
    }

    .skills {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: auto;

      span {
        display: flex;
        align-items: center;
        gap: 5px;
        flex: 0 0 calc(50% - 10px);
        font-size: 1.2rem;
      }
    }
  }
}
</style>
