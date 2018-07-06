import Vue from 'vue'
import App from './app.vue'
import './assets/styles/test.css'
import './assets/styles/test-stylus.styl'
import './assets/images/cute_boys_girls_02.png'


const root = document.createElement('div')
document.body.appendChild(root);

new Vue({
    // render: function (createElement) {
    //     return createElement(
    //         App
    //     )
    // }
     render: (h) => h(App)
}).$mount(root)