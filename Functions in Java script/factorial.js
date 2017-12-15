function factorial (no) {

	var ans=1
	if(no == 0) {
		return ans
	}
	for(var i=1; i<=no; i++) {
		ans = ans * i
	}

	return ans
}

factorial(4);
factorial(0);