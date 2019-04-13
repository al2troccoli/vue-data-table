<template>
  <span>
    <table class="al2-dataTable">
      <thead>
        <th>TERMS</th>
        <th>Serial number</th>
        <th>Organization</th>
        <th>Price</th>
        <th>Status</th>
      </thead>
      <tbody>
        <tr v-for="(item, index) of sortPrice()" :key="item.id" v-on:click="selectItem(index)">
          <td> {{item.term}}</td>
          <td> {{item.serial_number}}</td>
          <td> {{item.organization}}</td>
          <td> {{item.price}}</td>
          <td> {{item.description}}</td>
        </tr>
      </tbody>
    </table>
    <span>current selected item: {{currentSelectedAsset}}</span>
  </span>
</template>

<script>
import {mapState, mapMutations} from 'vuex';

export default {
  name: 'DataTable',
  data() {
    titulo: "test"
  },
  computed: {
    ...mapState(['assets', 'currentSelectedAsset'])
  },
  methods: {
    ...mapMutations(['selectItem']),
    sortPrice() {
      return this.assets.sort((a, b) => b.price - a.price);
    }
  },
  created() {
    this.data.localAssets = this.computed.assets;
  }
}
</script>

<style scoped lang="scss">
  @import "../styles/components/DataTable";
</style>
