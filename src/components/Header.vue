<script lang="ts" setup>
import { faComment } from "@fortawesome/free-regular-svg-icons";
import Link from "./Core/Link.vue";
</script>

<template>
  <header class="container-fluid">
    <div class="row justify-content-center justify-content-md-between">
      <div class="socials d-flex justify-content-center col-11 col-md-6 mb-4 mb-md-0">
        <a href="#"><img src="/logos/malt.png" width="80" alt="Malt" /></a>
        <a href="#"><img src="/logos/linkedin.png" width="80" alt="Linkedin" /></a>
        <a href="#"><img src="/logos/github.png" width="80" alt="Github" /></a>
      </div>

      <nav class="d-flex justify-content-center col-11 col-md-6">
        <ul>
          <li><a class="link" href="#">Skills</a></li>
          <li><a class="link" href="#">Projets</a></li>
          <li>
            <Link :icon="faComment" :style="`cta`">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  border-bottom: 1px solid #efefef;

  & > .row {
    padding: 20px 0;
  }

  span {
    font-size: 1.8rem;
    font-weight: 600;
    color: $main1;
  }

  nav {
    ul {
      display: flex;
      align-items: center;
      gap: 20px;
      padding: 0;
      margin: 0;

      li {
        list-style-type: none;
        font-size: 1.4rem;

        .link {
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

.socials {
  gap: 20px;
}
</style>
