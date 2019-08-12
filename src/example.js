import Vue from 'vue'
import Welcome from './components/Welcome'
import ButtonCounter from './components/ButtonCounter'
import VueCarousel from './components/VueCarousel'

// Define a new component called welcome
Vue.component('welcome', {
    render: h => h(Welcome)
})

// Define a new component called button-counter
Vue.component('button-counter', {
    render: h => h(ButtonCounter)
})

// Define a new component called vue-carousel
Vue.component('vue-carousel', {
    render: h => h(VueCarousel)
})

new Vue({ el: '#app' })