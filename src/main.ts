import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { createApp } from "vue";
import App from "./App.vue";
import { VueReCaptcha } from "vue-recaptcha-v3";
import "./assets/scss/core.scss";

const app = createApp(App);

app.use(VueReCaptcha, {
  siteKey: import.meta.env.VITE_RECAPTCHA_PUBLIC_KEY,
  loaderOptions: {
    useRecaptchaNet: true,
    autoHideBadge: true,
  },
});

app.mount("body");
