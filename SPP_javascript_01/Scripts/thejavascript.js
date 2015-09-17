function doStuff(count) {
    var factorial = 1;

    for (x = 1; x <= count; x++)
    {
        factorial = factorial * x;
    }

    var output = "The factorial of " + count + " is " + factorial + ".";

    document.getElementById("output").innerHTML = output;
}

function testInt() {
    var x = document.getElementById("userInput").value

    if(isNaN(x))
    {
        
        document.getElementById("output").innerHTML = "Insert only a valid number";
        return;
    }
    else
    {
        var input = parseInt(x);

        doStuff(input);
    }
}

5

5*4 * 3