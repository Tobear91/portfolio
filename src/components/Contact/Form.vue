<script lang="ts" setup>
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Button from "../Core/Button.vue";
</script>

<template>
  <form class="row">
    <div class="col">
      <label for="name" class="form-label">Nom *</label>
      <input type="text" class="form-control" id="name" autocomplete="off" />
    </div>
    <div class="col">
      <label for="email" class="form-label">Email *</label>
      <input type="email" class="form-control" id="email" autocomplete="off" />
    </div>
    <div class="col-12">
      <label for="subject" class="form-label">Sujet *</label>
      <input type="text" class="form-control" id="subject" autocomplete="off" />
    </div>
    <div class="col-12">
      <label for="message" class="form-label">Message *</label>
      <textarea class="form-control" id="message" rows="3"></textarea>
    </div>
    <div class="col-12">
      <Button type="submit" :icon="faEnvelope" :style="`cta`">Send Message</Button>
    </div>
  </form>
</template>

<style lang="scss" scoped>
form {
  display: flex;
  gap: 10px;
  background-color: #ffffff;
  border-radius: 5px;
  border: 1px solid #e6e6e6;
  transition: all 0.1s ease-in;
  padding: 15px;

  button {
    width: 100%;
  }
}

*:focus {
  border: 1px solid $main5;
  box-shadow: none;
}
</style>
