import Pane from './src/Pane.vue';

(Pane as any).install = function(Vue: any) {
  Vue.component(Pane.name, Pane);
}

export default Pane;