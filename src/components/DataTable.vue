<template>
  <div class="al2-dataTable">
    <h2 v-if="tableName" class="al2-dataTable__title">{{tableName}}</h2>
    <table class="al2-dataTable__table">
      <thead class="al2-dataTable__thead">
        <tr>
          <th class="al2-dataTable__th"><span>TERMS</span></th>
          <th class="al2-dataTable__th"><span>Serial number</span></th>
          <th class="al2-dataTable__th"><span>Organization</span></th>
          <th class="al2-dataTable__th"><span>Price</span></th>
          <th class="al2-dataTable__th"><span>Status</span></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) of assets" :key="item.id" v-on:click="selectItem(index)">
          <td class="al2-dataTable__td"> {{item.term}}</td>
          <td class="al2-dataTable__td"> {{item.serial_number}}</td>
          <td class="al2-dataTable__td"> {{item.organization}}</td>
          <td class="al2-dataTable__td"> {{item.price}}</td>
          <td class="al2-dataTable__td">
            <span v-if="item.status" class="al2-dataTable__status-green"></span>
            <span v-else="" class="al2-dataTable__status-red"></span>
          </td>
        </tr>
      </tbody>
    </table>
    <span>current selected item: {{currentSelectedAsset}}</span>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';

export default {
  name: 'DataTable',
  data() {
    return {
      currentSelectedRow: null
    }
  },
  props: {
    tableName: String
  },
  computed: {
    ...mapState(['assets', 'currentSelectedAsset'])
  },
  methods: {
    ...mapMutations(['selectItem']),
    sortPrice() {
      //return this.assets.sort((a, b) => b.price - a.price);
    }
  },
  created() {
    //this.data.localAssets = this.computed.assets;
  }
}
</script>

<style scoped lang="scss">
  @import "../styles/components/DataTable";
</style>
