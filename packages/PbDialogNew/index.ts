import PbDialogNew from './src/PbDialogNew.vue';

(PbDialogNew as any).install = function(Vue: any) {
  Vue.component(PbDialogNew.name, PbDialogNew);
}

export default PbDialogNew;