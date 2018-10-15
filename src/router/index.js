import Vue from 'vue'
import Router from 'vue-router'
import config from './routerConfig'
import * as Pages from './routerComponent'

Vue.use(Router)

function toRouter(name, component) {
    let obj = config[name]
    return {...obj, component}
}

let routes = [
    toRouter('redirect', Pages.Home),
    toRouter('home', Pages.Home),
    toRouter('member', Pages.Member),
    toRouter('cart', Pages.Cart),
    toRouter('search', Pages.Search)
]

export default new Router({
    routes,
    linkActiveClass: 'mui-active'
})