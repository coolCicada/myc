import PbTag from './src/PbTag.vue';

(PbTag as any).install = function(Vue: any) {
  Vue.component(PbTag.name, PbTag);
}

export default PbTag;