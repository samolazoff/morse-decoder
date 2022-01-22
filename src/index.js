const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    ' ': ' ',
};

function decode(expr) {
    let rez='';
    for(let i=0;i<expr.length;i+=10){
      let word=expr.slice(i,i+10);
      let arr=[];
      for(let i=0;i<10;i+=2){
        if(word=='**********'){
          arr.push(' ');
          break;
        }
        if(word[i]!=0){
          arr.push(word.slice(i,i+2)=='11'?'-':'.');
        }
      }
      rez=rez+MORSE_TABLE[arr.join('')]
    }
    
    return rez;
}

module.exports = {
    decode
}