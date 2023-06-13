<template>
  <div id="app">
    <MyComponent
      title="ls"
      content="con"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MyComponent from './packages/MyComponent.vue';

@Component({
  components: {
    MyComponent,
  },
})
export default class App extends Vue {}
</script>

