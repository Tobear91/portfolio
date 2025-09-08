<script lang="ts" setup>
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import Link from "./Core/Link.vue";
</script>

<template>
  <section class="container-fluid">
    <div class="row justify-content-center">
      <div id="avatar">
        <img src="/camille_hurtaud.jpeg" alt="Camille Hurtaud" />
      </div>
      <h1>Camille Hurtaud</h1>
      <h2>Full-Stack Developer & UI/UX Designer</h2>
      <p class="col-12 col-sm-8 col-lg-6">Crafting digital experiences that blend beautiful design with robust functionality. 5+ years building scalable web applications.</p>
      <div id="cta" class="flex-column flex-md-row">
        <Link :icon="faComment" :style="`cta`">Let's work together</Link>
        <Link :icon="faArrowRight" :iconLeft="false">View projects</Link>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  text-align: center;
}

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
}

#cta {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
}
</style>
