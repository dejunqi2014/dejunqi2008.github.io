
window.onload = function() {
	loadLeetCode();
}

function loadLeetCode() {

	var nums = [127, 98, 94, 73, 58, 28, 27, 26, 24, 22, 21, 20, 19, 17, 16, 15, 14, 11];
	var target = document.getElementById("solutionPDF");
	for(var i = 0; i<nums.length; i++) {
		var node = document.createElement('li');
		var htmlText = "<a href='works/LeetCodeSolutions/LeetCode"+nums[i] + ".pdf' target='_blank'>Leetcode" + nums[i] +"</a>" ;
		node.innerHTML = htmlText;
		target.appendChild(node);
	}
}