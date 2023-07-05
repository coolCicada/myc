<template>
  <div>
    <van-tag type="primary">标签</van-tag>
    <van-tag type="success">标签</van-tag>
    <van-tag type="danger">标签</van-tag>
    <van-tag type="warning">标签</van-tag>
    {{ cnt }}
    <button @click="add">add</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Tag } from 'vant';

@Component({
  name: 'pbTag',
  components: {
    [Tag.name]: Tag,
  }
})
export default class PbTag extends Vue {
  cnt = 0

  add() {
    this.cnt ++;
  }
}
</script>

<style lang="less" scoped>

</style>
