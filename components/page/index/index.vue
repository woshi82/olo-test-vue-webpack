<template src="./index.html"></template>

<script>
    import Loading from 'component/loading/loading';
    import { mapState, mapActions, mapGetters } from 'vuex';
    export default {
        data(){
            return {
                a:11223311,
            }
        },
        components: {
            Loading,
        },
        created: function() {
            console.log(11122422112);
        },
        methods: {
            a: function(){
            }
        }
    }
</script>

 <style lang="scss" src="./index.scss"></style>

<!-- <style lang="scss" scoped>

$red: #b90646;
.header {
    color: $red;
    font-size: 200px;
    height: 100px;
    // box-shadow:-5px 0 5px #EEEEEE, /*左边阴影*/
    // 5px 0 5px #EEEEEE, /*右边阴影*/
    // 0 5px 5px #EEEEEE; /*底边阴影*/;
    transform: translateX(300px);
    opacity: 0.9;
    // background: url('../../../assets/images/loading.svg');
    background: url('../../../assets/images/favicon.png');

}

</style> -->

