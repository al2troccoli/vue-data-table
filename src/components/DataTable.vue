<template>
  <div class="al2-dataTable">
    <h2 v-if="tableName" class="al2-dataTable__title">{{tableName}}</h2>
    <table class="al2-dataTable__table">
      <thead class="al2-dataTable__thead">
        <tr>
          <th class="al2-dataTable__th"><span>TERMS</span></th>
          <th class="al2-dataTable__th"><span>Serial number</span></th>
          <th class="al2-dataTable__th"><span>Organisation</span></th>
          <th class="al2-dataTable__th"><span>Price</span></th>
          <th class="al2-dataTable__th"><span>Status</span></th>
        </tr>
      </thead>
      <tbody class="al2-dataTable__tbody">
        <tr v-for="(item, index) of assets" :key="item.id" v-on:click="selectItem(index)">

          <td class="al2-dataTable__td">
            <span class="al2-dataTable__responsive-label">Terms</span>
            <span>{{item.term}}</span>
          </td>

          <td class="al2-dataTable__td">
            <span class="al2-dataTable__responsive-label">Serial number</span>
            <span>{{item.serial_number}}</span>
          </td>

          <td class="al2-dataTable__td">
            <span class="al2-dataTable__responsive-label">Organisation</span>
            <span>{{item.organization}}</span>
          </td>

          <td class="al2-dataTable__td">
            <span class="al2-dataTable__responsive-label">Price</span>
            <span>{{item.price}}</span>
          </td>

          <td class="al2-dataTable__td al2-dataTable__td--flex-row-mobile">
            <span class="al2-dataTable__responsive-label">Status</span>
            <span v-if="item.status" class="al2-dataTable__status-green"></span>
            <span v-else="" class="al2-dataTable__status-red"></span>
          </td>
        </tr>
      </tbody>
    </table>
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
