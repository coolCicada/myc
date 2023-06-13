<template>
  <div class="my-component">
    {{ cnt }}
    <h1>{{ title }}</h1>
    <p>{{ content }}</p>
    <button @click="add">btn</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  name: 'cool-p'
})
export default class MyComponent extends Vue {
  @Prop({
    type: String,
    required: true,
  })
  title!: string

  @Prop({
    type: String,
    required: true,
  })
  content!: string

  cnt = 0

  add() {
    this.cnt ++;
  }
}
</script>

<style lang="less" scoped>

</style>

