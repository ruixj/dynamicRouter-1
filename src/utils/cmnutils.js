export default {
	isArray(o){
		return Object.prototype.toString.call(o)=='[object Array]';
	},

	swapArray(arr, index1, index2) {
	arr[index1] = arr.splice(index2, 1, arr[index1])[0];
	return arr;
	}
}


