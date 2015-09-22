var currentNum = 10;//document.getElementById("text1").value

var factorial = 0;//keeps track of current factorial number


function calc() {
    while (true)//breaks automatically at 0.
    {
        //we start by knowing the first number.
        //each step through, multiply by next number.

        if (factorial == 0)
            factorial = currentNum;
        else
            factorial = factorial * currentNum;//5*4

        currentNum = currentNum - 1;

        if (currentNum == 0)
            break;

    }//end while loop

    document.getElementById("result").value = factorial;
}//end calc()