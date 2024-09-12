// 1. Check if a String is a Palindrome
function isPalindrome(str){
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');

}

console.log('## 1. Check if a String is a Palindrome');
console.log(isPalindrome('A man, a plan, a canal, Panama'));
console.log(isPalindrome('Was it a car or a cat I saw?'));
console.log(isPalindrome('Hello, World!'));

// 2. Reverse a String
function reverseString(str){
    return str.split('').reverse().join('');
}

console.log('## 2. Reverse a String');
console.log(reverseString('Hello, World!'));



// 3. Find the Longest Palindromic Substring
function longestPalindromicSubstring(s) {
    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return s.substring(left + 1, right);
    }

    let longest = "";
    for (let i = 0; i < s.length; i++) {
        let palindrome1 = expandAroundCenter(i, i); 
        let palindrome2 = expandAroundCenter(i, i + 1);
        if (palindrome1.length > longest.length) {
            longest = palindrome1;
        }
        if (palindrome2.length > longest.length) {
            longest = palindrome2;
        }
    }

    return longest;
}

console.log('## 3. Find the Longest Palindromic Substring')
console.log(longestPalindromicSubstring('babad'));
console.log(longestPalindromicSubstring('cbbd'));
console.log(longestPalindromicSubstring('ababa'));



// 4. Check if Tow Strings are Anagrams
function areAnagrams(str1, str2) {
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}

console.log('## 4. Check if Two Strings are Anagrams');
console.log(areAnagrams("listen", "silent"));
console.log(areAnagrams("hello", "world"));


// 5. Remove Duplicates from a String
function removeDuplicates(str) {
    return [...new Set(str)].join('');
}

console.log('## 5. Remove Duplicates from a String');
console.log(removeDuplicates('programming'));
console.log(removeDuplicates('Hello, World!'));
console.log(removeDuplicates('aaaaa'));
console.log(removeDuplicates('abcd'));
console.log(removeDuplicates('aabbcc'));


// 6. Count Palindromes in a String
function countPalindromes(str) {
    const uniquePalindromes = new Set();

    function expandAroundCenter(left, right) {
        while (left >= 0 && right < str.length && str[left] === str[right]) {
            uniquePalindromes.add(str.slice(left, right + 1));
            left--;
            right++;
        }
    }

    for (let i = 0; i < str.length; i++) {
        expandAroundCenter(i, i); // Odd length palindromes
        expandAroundCenter(i, i + 1); // Even length palindromes
    }

    return uniquePalindromes.size;
}

console.log('## 6. Count Palindromes in a String');
console.log(countPalindromes('ababa'));
console.log(countPalindromes('racecar'));
console.log(countPalindromes('aabb'));
console.log(countPalindromes('a'));
console.log(countPalindromes('abc'));


// 7. Longest Common Prefix
function longestCommonPrefix(strs) {
    if (!strs.length) return '';

    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1);
            if (prefix === '') return '';
        }
    }

    return prefix;
}

console.log('## 7. Longest Common Prefix')
console.log(longestCommonPrefix(['flower' ,'flow', 'flight']))
console.log(longestCommonPrefix(['dog' ,'racecar', 'car']))
console.log(longestCommonPrefix(['interspecies' ,'interstellar', 'interstate']))
console.log(longestCommonPrefix(['prefix' ,'prefixes', 'preform']))
console.log(longestCommonPrefix(['apple' ,'banana', 'cherry']))


// 8. Longest Common Prefix
function isPalindrome(str){
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
}
console.log(isPalindrome('A man, a plan, a canal: Panama'));




function isPalindromeCaseInsensitive(str) {
    const cleaned = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    return cleaned === cleaned.split('').reverse().join('');
}

console.log('## 8. Case Insensitive Palindrome')
console.log(isPalindromeCaseInsensitive('Aba'))
console.log(isPalindromeCaseInsensitive('Racecar'))
console.log(isPalindromeCaseInsensitive('Palindrome'))
console.log(isPalindromeCaseInsensitive('Madam'))
console.log(isPalindromeCaseInsensitive('Hello'))


