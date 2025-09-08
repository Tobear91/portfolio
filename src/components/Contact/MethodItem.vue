<script lang="ts" setup>
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

type Datas = {
  icon: IconDefinition;
  title: string;
  description: string;
};

defineProps<{
  datas: Datas;
}>();
</script>

<template>
  <div class="method">
    <div class="inner">
      <div class="icon">
        <FontAwesomeIcon :icon="datas.icon" />
      </div>
      <div>
        <p class="title">{{ datas.title }}</p>
        <p class="description">{{ datas.description }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.method {
  margin-bottom: 15px;

  .inner {
    display: flex;
    gap: 10px;
    background-color: #ffffff;
    border-radius: 5px;
    border: 1px solid #e6e6e6;
    transition: all 0.1s ease-in;
    padding: 15px;

    &:hover {
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05), 0 4px 6px rgba(0, 0, 0, 0.03);

      .icon {
        background-color: $main1;
      }
    }

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

    .title {
      font-size: 1.4rem;
      font-weight: 600;
      color: #333333;
      margin: 0;
      padding: 0;
    }

    .description {
      font-size: 1.2rem;
      margin: 0;
      padding: 0;
    }
  }
}
</style>
