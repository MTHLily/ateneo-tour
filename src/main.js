import { createApp } from "vue";
import App from "./App.vue";
import "./assets/css/reset.css";
import "./assets/css/style.css";

import { Button, Card, Layout, Menu, Popover, Tooltip } from 'ant-design-vue';

const app = createApp(App)

app.config.productionTip = false;
app.use(Button);
app.use(Card);
app.use(Layout);
app.use(Menu);
app.use(Popover);
app.use(Tooltip);

app.mount("#app");
