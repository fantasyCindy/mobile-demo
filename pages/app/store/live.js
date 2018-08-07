import { setter } from '@/vuex';
import * as api from '@/api';
import * as fn from '@/fn';
import { Toast } from 'vant';

/*处理数据*/
const handleData = (arr) => {
	return arr.map((item) => {
		item._teacherPhoto = __path + item.teacherPhoto;
		item._speciality = fn.getspeciality(item.specialty, 3);
		item.liveText = !item.status ? '直播中' : '未直播';
		return item;
	});
};

const state = {
	teachersById: [],
	activeRoom: [],
	popularRoom: []
};

/*合并state中的旧对象*/
const mergeToById = (state, arr) => {
	const byId = arr.reduce((acc, cur) => {
		const id = cur.teacherid;
		const old = state.teachersById[id];
		acc[id] = Object.assign({}, old, cur);
		return acc;
	}, {});
	return Object.assign({}, state.teachersById, byId);
};

const mutations = {
	liveSetState: setter
};

const setStateLive = (commit, path, reducer) => {
	commit('liveSetState', { path, reducer });
};

const actions = {
	getLiveList: async function({ state, commit, dispatch }, params) {
		const res = await api.getPopLive(params);
		if (res.status != 1) return;
		const back = res.data;
		setStateLive(commit, 'teachersById', mergeToById(state, handleData(back)));
		setStateLive(commit, 'activeRoom', handleData(back));
	}
};

export default {
	actions,
	mutations,
	state
};
