import Vue from 'vue';

// Vue.use(vant);

import App from './comp/App.vue';
import store from './store';
new Vue({
	el: '#app',
	store,
	render: (h) => h(App)
});
