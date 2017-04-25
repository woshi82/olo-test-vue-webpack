import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
// import App from './App';
Vue.use(VueRouter);
Vue.use(VueResource);


var router = new VueRouter({
    routes: [
        {
            path: '/index',
            component: require('page/index/index')
        },
        { path: '*', redirect: '/index' }
    ]
});


var vm = new Vue({
    el: '#app',
    router: router,
    render: function(createElement){
        return createElement(
            'router-view'
        )
    }
    // render: h => h(App)
});

