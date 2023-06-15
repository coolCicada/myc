<template>
  <div id="app">
    <Pane
      title="ls"
      content="con"
    />
    <PbDialog
      ref="pbD"
      title="joj"
      desc="ddd"
    />
    <button @click="click">打开dialog</button>
    <button @click="close">关闭dialog</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Pane from '../packages/Pane/index';
import PbDialog from '../packages/PbDialog/index';

@Component({
  components: {
    Pane,
    PbDialog,
  },
})
export default class App extends Vue {
  click() {
    (this.$refs.pbD as any).alert();
  }

  close() {
    (this.$refs.pbD as any).close();
  }
}
</script>

