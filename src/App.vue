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
    <br />
    <PbDialogNew ref="pn"/>
    <button @click="toggle">toggle new dialog</button>
    <PbTag />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Pane from '../packages/Pane/index';
import PbDialog from '../packages/PbDialog/index';
import { PbDialogNew, PbTag } from './index';

@Component({
  components: {
    Pane,
    PbDialog,
    PbDialogNew,
    PbTag,
  },
})
export default class App extends Vue {
  click() {
    (this.$refs.pbD as any).alert();
  }

  close() {
    (this.$refs.pbD as any).close();
  }

  toggle() {
    (this.$refs.pn as any).toggle();
  }
}
</script>

