function add (numbers){

    var numbers = numbers.replace(/\n|;|\/|\\|[.*]|[%]|[$]/g,",");

    try {
    if(numbers == "")
    {
    return 0;
    }
    if(numbers.includes("-"))
    {
        var number_Array = numbers.split(",");
        var sumcalculations = sum(number_Array);
        return sumcalculation;
    }
    if(numbers.includes(","||"\n"))
    {
        var number_Array = numbers.split(",");
        return sum(number_Array, ',');
    }
    else
    return parseInt(numbers);
    }
    catch(error_Message)
    {
        return error_Message;
    }
}
function sum(number_Array)
{
    var total = 0;
    var negativeArray = [];
    for(var i=0 ; i < number_Array.length ; i++)
    {
        var n = parseInt(number_Array[i]);
        if(n > 1000 || isNaN(n))
            {
            console.log(n[i]);
            n = 0;
            
            }
        total += parseInt(n);
        if(n < 0 )
        {
            negativeArray.push(n);
        }
        }

        if(negativeArray.length != 0)
        {
            negativeNumbers(negativeArray);
        }
        
    return total;
}

function negativeNumbers(negativeArray) {

    var error_Message = 'Negatives not allowed : ';
    for(var i = 0; i < negativeArray.length; i++) {
        error_Message += negativeArray[i]
        if(i != negativeArray.length - 1) {
            error_Message += ',';
        }
    }
    

    throw error_Message;
}

module.exports = add;