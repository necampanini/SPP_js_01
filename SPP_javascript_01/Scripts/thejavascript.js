function doStuff(count) {
    var factorial = 1;

    //calculates factorial of given number
    for (x = 1; x <= count; x++)
    {
        factorial = factorial * x;
    }

    
    var output = "The factorial of " + count + " is " + factorial + ".";

    //prints factorial message to output div
    document.getElementById("output").innerHTML = output;
}

function testInt() {
    //gets user input
    var x = document.getElementById("userInput").value

    //if user input not a number
    if(isNaN(x) || x < 1)
    {
        //inform the dumbass they didn't insert a number greater than 0...
        document.getElementById("output").innerHTML = "NaN greater than 0";
        //exit function
        return;
    }
    //if user is smrt
    else
    {
        //parses text value to int value
        var input = parseInt(x);

        //calls this function and passes parameter 'input'
        doStuff(input);
    }
}