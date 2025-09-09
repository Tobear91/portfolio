<script setup lang="ts">
import Header from "./components/Header.vue";
import Presentation from "./components/Presentation.vue";
import Skills from "./components/Skills/Skills.vue";
import Discuss from "./components/Discuss.vue";
import Projects from "./components/Projects/Projects.vue";
import Contact from "./components/Contact/Contact.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Header />
  <Presentation />
  <Skills id="competences" />
  <Discuss />
  <Projects id="projets" />
  <Contact id="contact" />
  <Footer />
</template>

<style lang="scss" scoped></style>
