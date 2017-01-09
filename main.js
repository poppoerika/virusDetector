function detectVirus(input){
    input = input.toLowerCase(input);
    return "The word 'virsu' was detected at position " + input.indexOf("virus");
}

var answer = prompt("Enter a string: ");
alert(detectVirus(answer));