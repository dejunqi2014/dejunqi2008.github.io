
window.onload = function() {
	loadLeetCode();
}

function loadLeetCode() {

	var nums = [		'LeetCode01-Two Sum' ,
							 'LeetCode02-Add Two Numbers',
							 'LeetCode03-Longest Substring Without Repeating Characters',
							 'LeetCode05-Longest Palindromic Substring',
							 'LeetCode07-Reverse Integer',
							 'LeetCode08-String to Integer',
							 'LeetCode09-Palindrome Number',
							  'LeetCode11-Container with Most Water',
							 'LeetCode14-Longest Common Prefix',
							 'LeetCode15-Three Sum',
							'LeetCode16-Three Sum Closet',
							'LeetCode17- Letter Combinations of Phone Number',
							'LeetCode19-Remove Nth Node From End of List',
							'LeetCode20-Valid Parentheses',
							'LeetCode21-Merge Two Sorted List',
							 'LeetCode22-Generate Parentheses',
							 'LeetCode24-Swap Node in Pairs',
							 'LeetCode26-RemoveDuplicateFromSortedArray',
							'LeetCode27-Remove Element',			
							'LeetCode28-Implement strStr()',
							'LeetCode29-Divide Two Integers', 	
							'LeetCode35-Search Insert Position'	,
							'LeetCode43-Multiply Strings',
							'LeetCode46-Permutation',
							'LeetCode50-Pow(x,n)', 	
							'LeetCode69-Sqrt(x)', 			
							'LeetCode70-Climbing Stairs', 	
							'LeetCode73-Set Matrix Zeroes', 		
							'LeetCode98-Merge Sorted Array', 		
							'LeetCode125-Valid Palindrome',			
							'LeetCode127-Word Ladder'																												
							 ];
							 
	var target = document.getElementById("solutionPDF");
	for(var i = 0; i<nums.length; i++) {
		var node = document.createElement('li');
		var htmlText = "<a href='works/LeetCodeSolutions/"+nums[i] + ".pdf' target='_blank'>" + nums[i] +"</a>" ;
		node.innerHTML = htmlText;
		target.appendChild(node);
	}
}