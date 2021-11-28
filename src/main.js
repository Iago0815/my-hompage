import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Modal from "./components/UI/Modal.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const app = createApp(App);

app.use(router);
app.use(store);

app.component("modal-modal", Modal);

app.mount("#app");
