function printReverse(arr) {
	
	for(var i=arr.length-1; i>=0; i--) {
		console.log(arr[i])
	}
}

function findMax(arr) {

	var max = arr[0];
	for (var i=1; i < arr.length; i++) {
		if(max < arr[i]) {
			max = arr[i];
		}
	}
	return max;
}


function isUniform(arr) {

	var temp = arr[0];
	for(var i=1; i<arr.length; i++) {
		if(temp!=arr[i]) {
			return false;
		}
	}
	return true;
}