<template>
  <div id="app">
    <Pane
      title="ls"
      content="con"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Pane from '../packages/Pane/index.js';

@Component({
  components: {
    Pane,
  },
})
export default class App extends Vue {}
</script>

