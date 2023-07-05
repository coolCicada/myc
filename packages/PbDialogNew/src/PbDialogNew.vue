<template>
  <div>
    <van-dialog
      v-model="show"
      title="标题"
      show-cancel-button
    >
      <img width="20" src="https://img01.yzcdn.cn/vant/apple-3.jpg" />
    </van-dialog>
    <button @click="toggle">toggle</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Dialog } from 'vant';

@Component({
  name: 'PbDialogNew',
  components: {
    'van-dialog': Dialog.Component,
  }
})
export default class PbDialogNew extends Vue {
  show = false

  toggle() {
    this.show = !this.show;
  }
}
</script>

<style lang="less" scoped>

</style>
