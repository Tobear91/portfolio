<script lang="ts" setup>
import { faComment } from "@fortawesome/free-regular-svg-icons";
import Link from "./Core/Link.vue";
import { discuss } from "../datas/texts";
</script>

<template>
  <section class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-10 col-md-9 col-lg-7 col-xl-5 inner">
        <h2>{{ discuss.title }}</h2>
        <p>{{ discuss.subtitle }}</p>
        <Link href="#contact" :icon="faComment" :style="`cta`">{{ discuss.button }}</Link>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  margin-top: 100px;
}

.inner {
  background: linear-gradient(135deg, rgba($main1, 0.1) 0%, rgba($main5, 0.1) 50%, rgba($main3, 0.1) 100%);
  text-align: center;
  border-radius: 20px;
  padding: 30px;
}

h2 {
  font-size: 3rem;
  font-weight: 700;
  color: #333333;
}

p {
  margin-bottom: 30px;
}

a {
  display: inline-block;
}
</style>
