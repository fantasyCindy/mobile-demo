import Vue from 'vue';
import Vuex from 'vuex';
import { setter, logger } from '@/vuex';
import * as api from '@/api';
import live from './store/live';
import debounce from 'lodash/debounce';
import { Toast } from 'vant';

Vue.use(Vuex);

const setState = (commit, path, reducer) => {
	commit('set', { path, reducer });
};

const handle = (arr) => {
	return arr.map((item) => {
		if (item.title.length > 18) {
			item._title = item.title.substr(0, 18) + '..';
		} else {
			item._title = item.title;
		}
		return item;
	});
};
const store = new Vuex.Store({
	plugins: [ logger ],
	modules: {
		live
	},
	state: {
		activeNav: 0,
		headlineList: []
	},
	mutations: {
		set: setter
	},
	actions: {
		getheadline: async function({ state, commit, dispatch }, params) {
			const res = await api.headlineList(params);
			if (res.status != 1) return;
			const back = handle(res.data.list);
			setState(commit, 'headlineList', back);
		}
	}
});
export default store;
store.dispatch('getLiveList');
store.dispatch('getheadline', { pageSize: 10 });
