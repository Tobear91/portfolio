<script lang="ts" setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faEnvelope, faCircleCheck, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import Button from "../Core/Button.vue";

const { isSending = false, state = null } = defineProps<{
  isSending?: boolean;
  state?: string | null;
}>();
</script>

<template>
  <form class="row">
    <input type="text" name="company" style="display: none" />
    <div class="col">
      <label for="name" class="form-label">Contact *</label>
      <input type="text" class="form-control" id="name" autocomplete="off" name="name" required />
    </div>
    <div class="col">
      <label for="email" class="form-label">Email *</label>
      <input type="email" class="form-control" id="email" autocomplete="off" name="email" required />
    </div>
    <div class="col-12">
      <label for="subject" class="form-label">Sujet *</label>
      <input type="text" class="form-control" id="subject" autocomplete="off" name="subject" required />
    </div>
    <div class="col-12">
      <label for="message" class="form-label">Message *</label>
      <textarea class="form-control" id="message" rows="3" name="message" required></textarea>
    </div>
    <div class="col-12 notifications">
      <div v-if="state === 'success'" class="alert alert-success" role="alert"><FontAwesomeIcon class="me-4" :icon="faCircleCheck" />Le message est envoyé</div>
      <div v-if="state === 'danger'" class="alert alert-danger" role="alert"><FontAwesomeIcon class="me-4" :icon="faCircleXmark" />Une erreur est survenue</div>
    </div>
    <div class="col-12">
      <Button v-if="isSending" type="submit" :style="`cta`"><span v-if="isSending" class="loader"></span>Envoi en cours</Button>
      <Button v-else type="submit" :icon="faEnvelope" :style="`cta`">Envoyer le message</Button>
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

.loader {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  display: inline-block;
  border-top: 3px solid #fff;
  border-right: 3px solid transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

button {
  display: flex;
  align-items: center;
  justify-content: center;

  .loader {
    margin-right: 15px;
  }

  &:hover {
    .loader {
      border-top: 3px solid $main5;
    }
  }
}
</style>
