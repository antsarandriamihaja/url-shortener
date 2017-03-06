var alphabet = "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ";
var base = alphabet.length; //58

//convert large numbers to smaller alphanumeric string using base58 encoding.
function encode(num){
    var encoded = '';
    while(num){
        var remainder = num%base;
        num = Math.floor(num/base);
       encoded = alphabet[remainder].toString()+encoded;
    }
    return encoded;
}

//convert large strings into integers (base 10)
function decode(str){
    var decoded=0;
    while(str){
        var index = alphabet.indexOf(str[0]);
        decoded = index * Math.pow(base, str.length-1);
        str = str.substring(1);
        
    }
    return decoded;
}

module.exports.encode = encode;
module.exports.decode = decode;