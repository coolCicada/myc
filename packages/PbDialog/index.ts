import PbDialog from './src/PbDialog.vue';

(PbDialog as any).install = function(Vue: any) {
  Vue.component(PbDialog.name, PbDialog);
}

export default PbDialog;