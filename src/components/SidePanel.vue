<template>
    <div class="al2-sidePanel__overlay" :class="[panelState]" id="someElementId">
        <div class="al2-sidePanel"
             :class="[showPanel, setUpPanel]">
            <div class="al2-sidePanel__close-btn" @click="closePanel"> X </div>
            <slot></slot>
        </div>
    </div>

</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: 'SidePanel',
        data() {
            return {
                currentSelectedRow: null
            }
        },
        props: {
            isAtRightSide: Boolean
        },
        computed: {
            ...mapState(['currentSelectedAssetIndex']),
            showPanel() {
                return {'al2-sidePanel--active': this.currentSelectedAssetIndex !== null}
            },
            setUpPanel() {
                return {' al2-sidePanel--at-right': this.isAtRightSide}
            },
            panelState() {
                return {'al2-sidePanel__overlay--active': this.currentSelectedAssetIndex !== null}
            }
        },
        methods: {
            closePanel() {
                this.$store.dispatch('resetSelectedAssetIndex');
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../styles/components/SidePanel";
</style>
