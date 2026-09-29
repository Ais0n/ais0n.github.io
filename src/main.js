import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'ant-design-vue/dist/reset.css';
import { Avatar, Button, Tag, Badge } from 'ant-design-vue';

const app = createApp(App);
app.use(Avatar).use(Button).use(Tag).use(Badge).mount('#app')
