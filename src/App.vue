<template>
  <div id="app">
    <!-- CUSTOM GRID -->
    <Grid v-bind:has-footer="false"
          v-bind:has-right-col="false"
          v-bind:right-col-has-slide="true">

      <!-- HEADER -->
      <template v-slot:header>
        <Header></Header>
      </template>

      <!-- MAIN -->
      <template v-slot:main>
        <DataTable :table-name="title"
                   :columns-array="columnsNames"
                   :global-selected-asset="currentSelectedAsset"
                   :assets-array="assets">

        </DataTable>
        <SidePanel v-bind:is-at-right-side="true" >
          <AssetsForm></AssetsForm>
        </SidePanel>
      </template>

    </Grid>

  </div>
</template>

<script>
import DataTable from './components/DataTable.vue'
import SidePanel from "@/components/SidePanel";
import Header from "@/components/Header";
import AssetsForm from "@/components/AssetsForm";
import Grid from "@/components/Grid";
import {mapState} from 'vuex';

export default {
  name: 'app',
  data() {
    return {
    }
  },
  computed: {
    ...mapState(['assets', 'columnsNames', 'title', 'currentSelectedAsset'])
  },
  components: {
    AssetsForm,
    SidePanel,
    DataTable,
    Header,
    Grid
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
</style>
