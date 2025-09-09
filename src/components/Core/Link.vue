<script lang="ts" setup>
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const { iconLeft = true, style = "light" } = defineProps<{
  icon?: IconDefinition;
  iconLeft?: boolean;
  style?: string;
  href: string;
}>();
</script>

<template>
  <a v-if="iconLeft" :class="style" :href="href"><FontAwesomeIcon v-if="icon" class="me-4" :icon="icon" /><slot></slot></a>
  <a v-else :class="style" :href="href"><slot></slot><FontAwesomeIcon v-if="icon" class="ms-4" :icon="icon" /></a>
</template>

<style lang="scss" scoped>
a {
  display: block;
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
