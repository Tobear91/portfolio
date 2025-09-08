<script lang="ts" setup>
import ProjectItem from "./ProjectItem.vue";

const datas = [
  {
    image: "/music_city.png",
    title: "Frontend",
    description: "Modern web interfaces with React, TypeScript, and cutting-edge frameworks",
    skills: ["HTML/CSS", "Javacript", "Vue.js"],
    github: "fqsdfqs",
    demo: "dfss",
  },
  {
    image: "https://fastly.picsum.photos/id/6/5000/3333.jpg?hmac=pq9FRpg2xkAQ7J9JTrBtyFcp9-qvlu8ycAi7bUHlL7I",
    title: "Frontend",
    description: "Modern web interfaces with React, TypeScript, and cutting-edge frameworks",
    skills: ["HTML/CSS", "Javacript", "Vue.js"],
    github: "fqsdfqs",
    demo: "dfss",
  },
];
</script>

<template>
  <section class="container-fluid">
    <div class="row justify-content-center">
      <h2>Featured Projects</h2>
      <p class="col-12 col-sm-8 col-lg-6">Recent work showcasing various technologies and design approaches</p>
    </div>
    <div class="row justify-content-center skills">
      <ProjectItem v-for="(skill, index) in datas" :key="index" class="col-11 col-md-5 col-xl-3 mb-4" :datas="skill" />
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
