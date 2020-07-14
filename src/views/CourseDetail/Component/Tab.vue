<template>
    <div>
        <cube-tab-bar
                v-model="selectedLabelSlots"
                show-slider
        >
            <cube-tab v-for="(item, index) in tabs" :label="item.label" :key="item.label">
            </cube-tab>
        </cube-tab-bar>
        <component :videoInfo="videoInfo" :videoDetailInfo="videoDetailInfo" :is='selectedLabelSlots == "简介"?"Summary":"CataLog"'></component>
    </div>
</template>

<script>
    import Summary from './Summary'
    import CataLog from './CataLog'
    export default {
        name: "Tab",
        props:{
          videoInfo:{
              type: Object,
              required: true
          },
          videoDetailInfo:{
              type: Array,
              required: true
          }
        },
        data () {
            return {
                selectedLabelSlots: '简介',
                tabs: [{
                    label: '简介',
                }, {
                    label: '目录',
                }]
            }
        },
        components:{
            Summary,
            CataLog
        }
    }
</script>

<style lang="scss" scoped>

</style>