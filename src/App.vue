<template>
  <div id="app" class="test">
    <Header></Header>
    <main class="flex-container">
      <div class="table-wrapper">
        <DataTable tableName="Hubble's Assets"></DataTable>
      </div>
      <SidePanel isAtRightSide>
        <AssetsForm></AssetsForm>
      </SidePanel>
    </main>
  </div>
</template>

<script>
import DataTable from './components/DataTable.vue'
import Firebase from 'firebase';
import SidePanel from "@/components/SidePanel";
import Header from "@/components/Header";
import AssetsForm from "@/components/AssetsForm";

const firebaseConfig = {
  apiKey: "AIzaSyANX2ukJmRoWI7JysXss-F9LvBQ5JX8b_Q",
  authDomain: "datatabletest.firebaseapp.com",
  databaseURL: "https://datatabletest.firebaseio.com",
  projectId: "datatabletest",
  storageBucket: "datatabletest.appspot.com",
  messagingSenderId: "213782361963"
};

let firebaseApp = Firebase.initializeApp(firebaseConfig);
let db = firebaseApp.database();
let assetsRef = db.ref('assets');

export default {
  name: 'app',
  components: {
    AssetsForm,
    SidePanel,
    DataTable,
    Header
  },
  firebase: {
    assets: assetsRef
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

  .table-wrapper {
    padding: 40px;
    width: 100%;
  }
</style>
