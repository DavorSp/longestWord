function findLongestWord(sentence) {
  
  const words = sentence.split(/[ ,]+/);
  

 
    let longestWord = '';
  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    word = word.replace(/[^a-zA-Z]/g, '');


    if (word.length > longestWord.length || (word.length === longestWord.length && countVowels(word) > countVowels(longestWord))) {
      longestWord = word;
    }
  }
return longestWord;
}

function countVowels(word) {
  const vowels = 'aeiouAEIOU';
  let count = 0;

  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      count++;
    }
  }
  return count;
}
