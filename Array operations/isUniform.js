function isUniform(arr) {

	var temp = arr[0];
	for(var i=1; i<arr.length; i++) {
		if(temp!=arr[i]) {
			return false;
		}
	}
	return true;
}