import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {quasar, transformAssetUrls} from "@quasar/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(
            {
                template: {transformAssetUrls}
            }),
        quasar({
            sassVariables: 'src/quasar-variables.sass'
        })
    ],
    server: {
        port: 9982,
        host:"0.0.0.0",
        proxy:{
            "/inc":{
                target:'https://api.1080zyku.com/',
                changeOrigin:true,
            }
        }
    }

})
