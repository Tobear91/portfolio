<script lang="ts" setup>
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import MethodItem from "./MethodItem.vue";
import Form from "./Form.vue";
import emailjs from "@emailjs/browser";

const EMAILJS_KEY = import.meta.env.VITE_EMAILJS_KEY;
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

const methods = [
  {
    icon: faEnvelope,
    title: "Email",
    description: "contact@camille-hurtaud.fr",
  },
];

const formSubmitHandle = async (event: SubmitEvent) => {
  const formElements = event.target as HTMLFormElement;
  const formData = new FormData(formElements);
  const formDataObj = Object.fromEntries(formData.entries());

  if (!formDataObj.company) {
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formElements, {
        publicKey: EMAILJS_KEY,
      });
      console.log("Success !!");
    } catch (error) {
      console.log("FAILED...", error);
    }
  }
};
</script>

<template>
  <section class="container-fluid">
    <div class="row justify-content-center">
      <h2>Get In Touch</h2>
      <p class="col-12 col-sm-8 col-lg-6">Multiple ways to connect and start our collaboration</p>
    </div>
    <div class="row justify-content-center">
      <div class="col-11 order-last col-lg-3 order-lg-first col-xl-2">
        <h3 class="text-center text-lg-start">Contact Methods</h3>
        <MethodItem v-for="(method, index) in methods" :key="index" :datas="method" />
        <h4 class="text-center text-lg-start">Social links</h4>
        <div class="socials d-flex justify-content-center justify-content-lg-start">
          <a href="#"><img src="/logos/malt.png" width="70" alt="Malt" /></a>
          <a href="#"><img src="/logos/linkedin.png" width="70" alt="Linkedin" /></a>
          <a href="#"><img src="/logos/github.png" width="70" alt="Github" /></a>
        </div>
      </div>
      <div class="col-11 order-first offset-lg-1 col-lg-6 order-lg-last col-xl-4">
        <Form @submit.prevent="formSubmitHandle" />
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
