<template>
  <div class="al2-dataTable"
       :class="[tableStatus]"
  >
    <h2 v-if="tableName" class="al2-dataTable__title">{{tableName}}</h2>
    <table class="al2-dataTable__table">
      <thead class="al2-dataTable__thead">
        <tr>
          <th class="al2-dataTable__th"
              v-for="colName in columnsArray"
              :key="colName"
              @click="sortBy(colName)">
            <span>{{colName}}</span>
          </th>
        </tr>
      </thead>
      <tbody class="al2-dataTable__tbody">
        <tr v-for="(item, index) of filteredAssets"
            :key="item.id"
            v-on:click="[selectRow(index)]"
            class="al2-dataTable__tr"
            :class="[{'al2-dataTable__tr--selected': index === currentSelectedRow}]"
        >
          <td class="al2-dataTable__td">
            <span class="al2-dataTable__responsive-label">Terms</span>
            <span>{{item.term }}</span>
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
            <span>{{item.price + getCurrency()}}</span>
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
import {mapMutations, mapState, mapGetters} from 'vuex';

export default {
  name: 'DataTable',
  props: {
    tableName: String,
    columnsArray: Array,
    assetsArray:Array,
    globalSelectedAsset: Number
  },
  data() {
    let sortOrders = {};
    this.columnsArray.forEach(function(key){
      sortOrders[key] = 1;
    });
    return {
      currentSelectedRow: null,
      sortKey: '',                  // NOTE: Is the key of the column which we want to sort
      sortOrders: sortOrders,        // NOTE: Is an array with the specified order by columns. Orders can be 1 or -1,
      lastAssetID: null
    }
  },
  computed: {
    ...mapState(['currentSelectedAssetIndex']),
    tableStatus() {
      return { 'al2-dataTable--disabled-mobile' : this.globalSelectedAsset !== null}
    },
    filteredAssets() {
      let sortKey = this.sortKey;
      let order = this.sortOrders[sortKey] || 1;
      let assetsCopy = this.assetsArray;

      if (sortKey) {
        assetsCopy = assetsCopy.slice().sort(function (a, b) {
          a = a[sortKey].toString().toLowerCase();
          b = b[sortKey].toString().toLowerCase();
          return (a === b ? 0 : a > b ? 1 : -1) * order;
        })
      }
      this.updateFilteredAssetsArray(assetsCopy);
      return assetsCopy;
    }
  },
  filters: {
    capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  },
  methods: {
    ...mapMutations(['updateFilteredAssetsArray']),
    ...mapGetters(['getCurrency']),
    sortBy(key) {
      this.sortKey = key;
      this.sortOrders[key] = this.sortOrders[key] * -1;
    },
    selectRow (index) {
      this.currentSelectedRow = index;
      this.$store.dispatch('updateSelectedAssetIndex', index);
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../styles/components/DataTable";
</style>
