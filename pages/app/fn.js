/*取老师N个特长*/
export const getspeciality = (str, num) => {
	if (!str) return [];
	return str.split(',').filter((v, i) => i < num);
};
