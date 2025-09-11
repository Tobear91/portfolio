<script lang="ts" setup>
import emailjs from "@emailjs/browser";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useReCaptcha } from "vue-recaptcha-v3";
import { contact } from "../../datas/texts";
import Form from "./Form.vue";
import MethodItem from "./MethodItem.vue";
import { ref } from "vue";
const { executeRecaptcha } = useReCaptcha()!;

const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

const methods = [
  {
    icon: faEnvelope,
    title: "Email",
    description: "contact@camille-hurtaud.fr",
  },
];

const isSending = ref<boolean>(false);
const state = ref<string | null>(null);

const isRecaptchaSuccess = async () => {
  const token = await executeRecaptcha("submit");

  const respCaptcha = await fetch("https://jarvis-tau-opal.vercel.app/recaptcha-verify", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token }),
  });

  const { success } = await respCaptcha.json();
  return success;
};

const formSubmitHandle = async (event: SubmitEvent) => {
  isSending.value = true;
  if (!isRecaptchaSuccess()) return;

  const formElements = event.target as HTMLFormElement;

  const sendEmail = await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formElements, {
    publicKey: EMAILJS_PUBLIC_KEY,
  });

  if (sendEmail.status === 200) {
    state.value = "success";
    isSending.value = false;
    formElements.reset();
  } else {
    state.value = "error";
    isSending.value = false;
  }

  setTimeout(() => {
    state.value = null;
  }, 3000);
};
</script>

<template>
  <section class="container-fluid">
    <div class="row justify-content-center">
      <h2>{{ contact.title }}</h2>
      <p class="col-12 col-sm-8 col-lg-6">{{ contact.subtitle }}</p>
    </div>
    <div class="row justify-content-center">
      <div class="col-11 order-last col-lg-3 order-lg-first col-xl-2">
        <h3 class="text-center text-lg-start">Contact</h3>
        <MethodItem v-for="(method, index) in methods" :key="index" :datas="method" />
        <h4 class="text-center text-lg-start">Réseaux pro</h4>
        <div class="socials d-flex justify-content-center justify-content-lg-start">
          <a href="#"><img src="/logos/malt.png" width="70" alt="Malt" /></a>
          <a href="#"><img src="/logos/linkedin.png" width="70" alt="Linkedin" /></a>
          <a href="#"><img src="/logos/github.png" width="70" alt="Github" /></a>
        </div>
      </div>
      <div class="col-11 order-first offset-lg-1 col-lg-6 order-lg-last col-xl-4">
        <Form @submit.prevent="formSubmitHandle" :isSending="isSending" :state="state" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  margin-top: 100px;
}

form {
  margin-bottom: 80px;
}

h2 {
  font-size: 3rem;
  font-weight: 700;
  color: #333333;
  text-align: center;
}

h3 {
  font-size: 2rem;
  font-weight: 600;
  color: #333333;
  margin-bottom: 30px;
}

p {
  text-align: center;
  margin-bottom: 50px;
}

h4 {
  font-size: 1.6rem;
  font-weight: 600;
  color: #333333;
  margin: 30px 0 20px;
}

.socials {
  display: flex;
  gap: 20px;
}
</style>
