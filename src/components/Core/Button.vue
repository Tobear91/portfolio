<script lang="ts" setup>
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const { iconLeft = true, style = "light" } = defineProps<{
  icon?: IconDefinition;
  iconLeft?: boolean;
  style?: string;
}>();
</script>

<template>
  <button v-if="iconLeft" :class="style"><FontAwesomeIcon v-if="icon" class="me-4" :icon="icon" /><slot></slot></button>
  <button v-else :class="style"><slot></slot><FontAwesomeIcon v-if="icon" class="ms-4" :icon="icon" /></button>
</template>

<style lang="scss" scoped>
button {
  align-self: center;
  padding: 10px 25px;
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.3s ease-in;

  &.light {
    background-color: transparent;
    color: $main1 !important;
    border: 1px solid #e6e6e6;

    &:hover {
      background-color: #f5f5f5;
    }
  }

  &.cta {
    background-color: $main5;
    color: #ffffff !important;
    border: 1px solid $main5;

    &:hover {
      background-color: transparent;
      color: $main5 !important;
      border: 1px solid $main5;
    }
  }
}
</style>
