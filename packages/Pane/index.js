import Pane from './src/Pane.vue';

Pane.install = function(Vue) {
  Vue.component(Pane.name, Pane);
}

export default Pane;