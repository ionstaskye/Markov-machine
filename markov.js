/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    let chain = {}
    for (let i=0; i<this.words.length; i++){
      let word = this.words[i]
      let nextword = this.words[i+1] || null
      if (chain[word]){
        chain[word].push(nextword)
      }
      else {
        chain[word] = [nextword]
      }
    }
    this.chain = chain
  }

static choice(arr){
  return arr[Math.floor(Math.random() * arr.length)]
}


  /** return random text from chains */

  makeText(numWords = 100) {
    let keys = Object.keys(this.chain)
    console.log(keys)
    let key = MarkovMachine.choice(keys)
    let output = []

    while (output.length < numWords && key !== null){
      output.push(key)
      key = MarkovMachine.choice(this.chain[key])


    }
    return output.join(" ")
  }
}

__esModule.exports = {
  MarkovMachine
}