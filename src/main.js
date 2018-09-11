// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueQuillEditor from 'vue-quill-editor'
import App from './App'
import router from './router'
import 'iview/dist/styles/iview.css'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import {
  Button,
  Table,
  Input,
  RadioGroup,
  Radio,
  Select,
  Option,
  Form,
  FormItem,
  Icon,
  Message,
  Page,
  Spin,
  Modal,
  Menu,
  Submenu,
  MenuItem,
  Row,
  Col,
  Divider,
  Upload
} from 'iview'
Vue.component('Button', Button)
Vue.component('Table', Table)
Vue.component('Input', Input)
Vue.component('Radio', Radio)
Vue.component('RadioGroup', RadioGroup)
Vue.component('Option', Option)
Vue.component('Select', Select)
Vue.component('Form', Form)
Vue.component('FormItem', FormItem)
Vue.component('Icon', Icon)
Vue.component('Page', Page)
Vue.component('Spin', Spin)
Vue.component('Menu', Menu)
Vue.component('Submenu', Submenu)
Vue.component('MenuItem', MenuItem)
Vue.component('Row', Row)
Vue.component('Col', Col)
Vue.component('Divider', Divider)
Vue.component('Upload', Upload)
Vue.config.productionTip = false
Vue.use(VueQuillEditor)
Vue.prototype.$Message = Message
Vue.prototype.$Modal = Modal
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
