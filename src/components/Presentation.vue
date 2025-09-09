<script lang="ts" setup>
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { presentation } from "../datas/texts";
import Link from "./Core/Link.vue";
</script>

<template>
  <section class="container-fluid text-center">
    <div class="row justify-content-center">
      <div id="avatar">
        <img :src="presentation.avatar" :alt="presentation.title" />
      </div>
      <h1>{{ presentation.title }}</h1>
      <h2>{{ presentation.subtitle }}</h2>
      <p class="col-11 col-sm-8 col-lg-6">{{ presentation.description }}</p>
      <div id="cta" class="flex-column flex-md-row">
        <Link href="#contact" :icon="faComment" :style="`cta`">{{ presentation.button1 }}</Link>
        <Link href="#projets" :icon="faArrowRight" :iconLeft="false">{{ presentation.button2 }}</Link>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #ffffff;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -4px rgba(0, 0, 0, 0.2);
  margin: 30px auto;
  padding: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

h1 {
  font-size: 4.8rem;
  font-weight: 700;
  background: linear-gradient(90deg, $main2 40%, $main5 50%, $main2 60%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 20px;
}

h2 {
  font-size: 2rem;
  font-weight: 600;
}

#cta {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
}
</style>
