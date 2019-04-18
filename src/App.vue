<template>
    <div id="app">
        <!-- CUSTOM GRID -->
        <transition name="slide-fade">
            <Grid v-bind:has-footer="false"
                  v-bind:has-right-col="false"
                  v-bind:right-col-has-slide="true">

                <!-- HEADER -->
                <template v-slot:header>
                    <Header></Header>
                </template>

                <!-- MAIN -->
                <template v-slot:main>
                    <transition name="slide-fade" mode="out-in">
                        <!--ERROR MESSAGE-->
                        <ErrorMessage v-if="appStatus === 'error'"></ErrorMessage>

                        <!--DATATABLE-->
                        <span v-else-if="appStatus === 'success'" class="al2-main__group">
                            <DataTable :table-name="title"
                                       :columns-array="['term', 'serial_number', 'organization', 'price', 'status']"
                                       :global-selected-asset="currentSelectedAssetIndex"
                                       :assets-array="assets">
                            </DataTable>

                            <SidePanel v-bind:is-at-right-side="true"
                                       v-if="appStatus === 'success'">
                                <AssetsForm></AssetsForm>
                            </SidePanel>
                        </span>

                        <!--PRELOADER-->
                        <Preloader v-if="appStatus === 'pending'"></Preloader>
                    </transition>
                </template>
            </Grid>
        </transition>
    </div>
</template>

<script>
    import DataTable from './components/DataTable.vue'
    import SidePanel from "@/components/SidePanel";
    import Header from "@/components/Header";
    import AssetsForm from "@/components/AssetsForm";
    import Grid from "@/components/Grid";
    import Preloader from "@/components/Preloader";
    import ErrorMessage from "@/components/ErrorMessage";
    import {mapState} from 'vuex';

    export default {
        name: 'app',
        data() {
            return {
                show: true
            }
        },
        computed: {
            ...mapState(['appStatus', 'assets', 'title', 'currentSelectedAssetIndex'])
        },
        methods: {
        },
        components: {
            ErrorMessage,
            AssetsForm,
            SidePanel,
            DataTable,
            Header,
            Grid,
            Preloader
        },
        mounted() {
            // NOTE: Retrieving data
            this.$store.dispatch('fetchCollections');
        }
    }
</script>

<style scoped lang="scss">
    @import "./styles/views/Main";
</style>
