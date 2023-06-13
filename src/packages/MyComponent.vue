<template>
  <div class="my-component">
    v0.1.4
    <h1>{{ title }}</h1>
    <p>{{ content }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
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
}
</script>

<style lang="less" scoped>

</style>

