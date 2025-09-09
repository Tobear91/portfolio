<script lang="ts" setup>
import SkillsItem from "./SkillsItem.vue";
import { skills } from "../../datas/texts";
</script>

<template>
  <section class="container-fluid">
    <div class="row justify-content-center">
      <h2>{{ skills.title }}</h2>
      <p class="col-12 col-sm-8 col-lg-6">{{ skills.description }}</p>
    </div>
    <div class="row justify-content-center skills">
      <SkillsItem v-for="(skill, index) in skills.blocs" :key="index" class="col-11 col-md-5 col-lg-3 mb-4" :datas="skill" />
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
