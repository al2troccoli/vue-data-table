<template>
  <div id="app">
    <!-- CUSTOM GRID -->
    <transition name="slide-fade">
        <Grid v-if="appStatus === 'success'"
          v-bind:has-footer="false"
          v-bind:has-right-col="false"
          v-bind:right-col-has-slide="true">

      <!-- HEADER -->
      <template v-slot:header>
        <Header></Header>
        {{appStatus}}
        {{user.avatar}}
      </template>

      <!-- MAIN -->
      <template v-slot:main>
        <DataTable :table-name="title"
                   :columns-array="['term', 'serial_number', 'organization', 'price', 'status']"
                   :global-selected-asset="currentSelectedAsset"
                   :assets-array="collections.assets">

        </DataTable>
        <SidePanel v-bind:is-at-right-side="true" >
          <AssetsForm></AssetsForm>
        </SidePanel>
      </template>

    </Grid>
    </transition>

    <!--LOADING -->
    <transition name="slide-fade">
        <Preloader v-if="appStatus === 'pending'"> </Preloader>
    </transition>

    <!--ERROR MESSAGE -->
    <transition name="slide-fade">
        <ErrorMessage v-if="appStatus === 'error'"></ErrorMessage>
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
import {mapState,mapGetters} from 'vuex';

export default {
  name: 'app',
  data() {
    return {
      show: true
    }
  },
  computed: {
    ...mapState(['appStatus','assets', 'title', 'currentSelectedAsset', 'collections', 'user'])
  },
  methods: {
    ...mapGetters(['getAvatarImgRetina', ['getAvatarImg']])
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
    this.$store.dispatch('fetchCollections')
                .then(console.log(this.collections));
  }
}
</script>

<style scoped lang="scss">
  #app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .flex-container {
    display: flex;
    flex-direction: row;
    z-index: z('page-wrapper');
    overflow-x: hidden;
    flex-grow: 1;
  }

  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
