<script lang="ts" setup>
import SkillsItem from "./SkillsItem.vue";
import { faDisplay, faServer, faCode, faWrench, faCodeBranch, faTableColumns, faRepublican, faS, faE, faJ, faN, faV, faDatabase, faLeaf, faPalette } from "@fortawesome/free-solid-svg-icons";

const datas = [
  {
    icon: faDisplay,
    title: "Frontend",
    description: "Modern web interfaces with React, TypeScript, and cutting-edge frameworks",
    skills: [
      { icon: faCode, label: "HTML/CSS" },
      { icon: faJ, label: "Javacript" },
      { icon: faV, label: "Vue.js" },
      { icon: faN, label: "Next.js" },
      { icon: faPalette, label: "Bootstrap" },
    ],
  },
  {
    icon: faServer,
    title: "Backend",
    description: "Scalable server architectures and robust API development",
    skills: [
      { icon: faRepublican, label: "PHP" },
      { icon: faE, label: "Express" },
      { icon: faS, label: "Slim Framework" },
      { icon: faDatabase, label: "MySQL" },
      { icon: faLeaf, label: "MongoDB" },
    ],
  },
  {
    icon: faWrench,
    title: "Development Tools",
    description: "Modern development workflow and collaboration tools",
    skills: [
      { icon: faCodeBranch, label: "Github" },
      { icon: faCode, label: "VS Code" },
      { icon: faTableColumns, label: "Trello" },
    ],
  },
];
</script>

<template>
  <section class="container-fluid">
    <div class="row justify-content-center">
      <h2>Technical Expertise</h2>
      <p class="col-12 col-sm-8 col-lg-6">Crafting digital experiences that blend beautiful design with robust functionality. 5+ years building scalable web applications.</p>
    </div>
    <div class="row justify-content-center skills">
      <SkillsItem v-for="(skill, index) in datas" :key="index" class="col-11 col-md-5 col-xl-3 mb-4" :datas="skill" />
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
