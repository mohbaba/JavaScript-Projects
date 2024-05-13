let input_field = document.getElementById('result')
let field_values = ""
// values = []
field_clear = false;
continueAdd = false;
continueSub = false;
result = 0;


function display(value) {

    // if (continueAdd) {
    //     input_field.value = value;
    //     continueAdd = false;
    // }else if (continueSub) {
    //     input_field.value = value;
    //     continueSub = false;    
    // }else{
        input_field.value += value;
        field_values += value;

    // }
    
}

// function checkAdd() {

//     if (continueAdd) {
//         input_field.value = value;
//         continueAdd = false;
//     }
// }

// function checkSub() {
//     if (continueSub){
//         input_field.value = value;
//         continueSub = false;
//     }
// }

function clear_field() {
    input_field.value = "";
    field_clear = true;
}

function check_clear_field() {
    if (field_clear) {
        result = 0;
        field_clear = false;
    }
}

function add() {
    // check_clear_field()
    // let valueToAdd = parseInt(input_field.value)
    // result += valueToAdd
    // input_field.value = result
    // continueAdd = true;
    values = input_field.value.split("+")
    for (let index = 0; index < values.length; index++) {
        result += values[index] 
        
    }

}

function subtract() {
    // check_clear_field();
    // let valueToSubtract = parseInt(input_field.value);
    
    // if (!continueSub) {
    //     input_field.value = valueToSubtract
    //     result = valueToSubtract;
    //     // input_field.value = result;
    // } else {
    //     result -= valueToSubtract;
    //     input_field.value = result;
    // }
    // // input_field.value = result;
    // continueSub = true;
    values = input_field.value.split("-")
    for (let index = 0; index < values.length; index++) {
        result -= values[index] 
        
    }
    
}

function evaluate_result(){
    // add()
    // subtract()
    values = []
    if (input_field.value.includes("+")) {
        values = input_field.value.split('+')
        for (let index = 0; index < values.length; index++) {
            result += Number(values[index]) 
            
        }
    }
    input_field.value = result
    console.log(input_field.value)
}