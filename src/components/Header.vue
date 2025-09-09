<script lang="ts" setup>
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { navs } from "../datas/navs";
import { socials } from "../datas/socials";
import Link from "./Core/Link.vue";
</script>

<template>
  <header class="container-fluid">
    <div class="row justify-content-center py-4">
      <div class="d-flex justify-content-center col-11 col-md-6 mb-4 mb-md-0">
        <a v-for="(social, index) in socials" :href="social.href" :key="index" target="_blank"><img :src="social.src" :alt="social.alt" /></a>
      </div>

      <nav class="d-flex justify-content-center col-11 col-md-6">
        <ul class="d-flex align-items-center m-0 p-0">
          <li v-for="(nav, index) in navs" :key="index">
            <a :href="nav.href">{{ nav.name }}</a>
          </li>
          <li>
            <Link href="#contact" :icon="faComment" :style="`cta`">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
$gap: 20px;
$logo-width: 80px;

header {
  border-bottom: 1px solid #efefef;

  // Socials
  & > .row > div:first-child {
    gap: $gap;

    img {
      width: $logo-width;
    }
  }

  // Navigation
  nav {
    ul {
      gap: $gap;

      li {
        list-style-type: none;
        font-size: 1.4rem;

        a {
          color: $main2;
          transition: all 0.1s ease-in;
          text-decoration: none;

          &:hover {
            color: $main1;
          }
        }

        &:last-child {
          a {
            padding: 4px 10px;
          }
        }
      }
    }
  }
}
</style>
