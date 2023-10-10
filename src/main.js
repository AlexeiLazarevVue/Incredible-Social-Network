import { createApp } from 'vue'
import App from '@/app/App.vue'
import router from '@/app/router/router'
import store from '@/app/store'
import components from '@/shared/UI'

const app = createApp(App)

components.forEach(component => {
  app.component(component.name, component)
})

app.use(store).use(router).mount('#app')
