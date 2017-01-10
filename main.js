function detectVirus(input){
    input = input.toLowerCase(input);
    if(input.indexOf("virus") > 0){
        return "There is no 'virus' in the input.";
    }
    return "There is 'virus' in the input.";
}

var answer = prompt("Enter a string: ");
alert(detectVirus(answer));