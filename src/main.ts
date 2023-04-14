import { createApp } from 'vue'
import App from './App.vue'
import {Quasar} from "quasar";
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import quasarLang from 'quasar/lang/zh-CN'
import {router} from "./routes/route";
let app = createApp(App);
app.use(
    Quasar,{
        plugins:{},
        lang:quasarLang,
    }
)
app.use(router)
app.mount('#app')
