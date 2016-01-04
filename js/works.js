
window.onload = function() {
	loadLeetCode();
}

function loadLeetCode() {

	var nums = [		'LeetCode127-Word Ladder', 
							'LeetCode125-Valid Palindrome',
							'LeetCode98-Merge Sorted Array', 
							'LeetCode73-Set Matrix Zeroes', 
							'LeetCode70-Climbing Stairs', 
							'LeetCode69-Sqrt(x)', 
							'LeetCode50-Pow(x,n)', 
							'LeetCode29-Divide Two Integers', 
							'LeetCode28-Implement strStr()',
							'LeetCode27-Remove Element',
							 'LeetCode26-RemoveDuplicateFromSortedArray',
							 'LeetCode24-Swap Node in Pairs',
							 'LeetCode22-Generate Parentheses',
							 'LeetCode21-Merge Two Sorted List',
							 'LeetCode20-Valid Parentheses',
							 'LeetCode19-Remove Nth Node From End of List',
							 'LeetCode17- Letter Combinations of Phone Number',
							 'LeetCode16-Three Sum Closet',
							 'LeetCode15-Three Sum',
							 'LeetCode14-Longest Common Prefix',
							 'LeetCode11-Container with Most Water',
							 'LeetCode05-Longest Palindromic Substring',
							 'LeetCode08-String to Integer',
							 'LeetCode09-Palindrome Number',
							 'LeetCode1-Two Sum' 
							 ];
							 
	var target = document.getElementById("solutionPDF");
	for(var i = 0; i<nums.length; i++) {
		var node = document.createElement('li');
		var htmlText = "<a href='works/LeetCodeSolutions/"+nums[i] + ".pdf' target='_blank'>" + nums[i] +"</a>" ;
		node.innerHTML = htmlText;
		target.appendChild(node);
	}
}