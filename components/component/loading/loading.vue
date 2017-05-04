/**
 * @version 1.0
 * @description 加载组件
 * @author Xxx
 */

// 'use strict';

// var Vue = require('vue');
// module.exports = Vue.component('loading', {
//     props: ['loading'],
//     template: __inline('./loading.html')
// });
<template src="./loading.html"></template>
<script>
    export default {
        props: ['loading'],
        mounted() {
            console.log('loading');
        },
    };
</script>
<style lang="scss" src="./loading.scss"></style>
