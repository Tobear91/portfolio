<script lang="ts" setup>
import ProjectItem from "./ProjectItem.vue";
import { projects } from "../../datas/texts";
</script>

<template>
  <section class="container-fluid">
    <div class="row justify-content-center">
      <h2>{{ projects.title }}</h2>
      <p class="col-12 col-sm-8 col-lg-6">{{ projects.description }}</p>
    </div>
    <div class="row justify-content-center skills">
      <ProjectItem v-for="(projet, index) in projects.projects" :key="index" class="col-11 col-md-5 col-xl-3 mb-4" :datas="projet" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  margin-top: 100px;
}

h2 {
  font-size: 3rem;
  font-weight: 700;
  color: #333333;
  text-align: center;
}

p {
  text-align: center;
}

.skills {
  margin-top: 50px;
}
</style>
