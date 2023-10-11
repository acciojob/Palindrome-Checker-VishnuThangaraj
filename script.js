// complete the given function

function palindrome(str){
	let start = 0, end = str.length-1;

	while(start < end){
		if(str[start++] != str[end--]){
			return false; // not a palindrome
		}
	}
	return true; // its a palindrome
}
module.exports = palindrome
