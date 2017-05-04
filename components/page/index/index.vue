<template src="./index.html"></template>
<script type="text/javascript">
import Loading from 'component/loading/loading';
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
    data() {
        return {
            a: 11223311,
        };
    },
    components: {
        Loading,
    },
    created() {

        // this.a();
    },
    mounted() {
        this.v();
    },
    methods: {
        v() {
            console.log('222222ww');

        },
    },
};
</script>
 <style lang="scss" src="./index.scss"></style>

