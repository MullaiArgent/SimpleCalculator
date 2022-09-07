var expression = "";
$(document).ready(function(){
    $("#calc, td, th").mouseover(function(){
        if (this.innerHTML != 'C'){
            $(this).css("background-color", "gray");
        }else{
            $(this).css("background-color", "rgb(255, 0, 0)");
        }
    });
    $("#calc, td, th").mousedown(function(){
        if (this.innerHTML != 'C'){
            $(this).css("background-color", "rgb(78, 76, 76)");
            if(this.innerHTML == 'Calculate'){
                try{
                    expression = eval(expression) + "";
                    console.log(expression);
                }catch(expression){
                    console.log("Invalid");
                    expression = "";
                }
            }
            else{
                console.log(this.innerHTML[this.innerHTML.length - 1]);
                if(['/','+','*','-'].includes(this.innerHTML)){
                    if (['/','+','*','-'].includes(expression[expression.length - 1])){
                        expression = expression.slice(0,-1);
                    }
                }
                expression += this.innerHTML;
            }
            $("#output").val(expression);
        }else{
            expression = expression.slice(0,-1);
            $("#output").val(expression);
            $(this).css("background-color", "rgb(137, 23, 23)");
        }
    }); 
    $("#calc, td, th").mouseout(function(){
        if (this.innerHTML != 'C'){
            $(this).css("background-color", "aliceblue");
        }else{
            $(this).css("background-color", "rgb(212, 91, 91)");
        }
    });
    $("#calc, td, th").mouseup(function(){
        if (this.innerHTML != 'C'){
            $(this).css("background-color", "aliceblue");
        }else{
            $(this).css("background-color", "rgb(212, 91, 91)");
        }
    }); 
    $("body").keydown(function(e){
        var key = e.key;
        if(key == 1){
            $("#keyOne").mousedown();
        }else if(key == 2){
            $("#keyTwo").mousedown();
        }else if(key == 3){
            $("#keyThree").mousedown();
        }else if(key == 4){
            $("#keyFour").mousedown();
        }else if(key == 5){
            $("#keyFive").mousedown();
        }else if(key == 6){
            $("#keySix").mousedown();
        }else if(key == 7){
            $("#keySeven").mousedown();
        }else if(key == 8){
            $("#keyEight").mousedown();
        }else if(key == 9){
            $("#keyNine").mousedown();
        }else if(key == 0){
            $("#keyZero").mousedown();
        }else if(key == '/'){
            $("#keyDivide").mousedown();
        }else if(key == '-'){
            $("#keyMinus").mousedown();
        }else if(key == '+'){
            $("#keyPlus").mousedown();
        }else if(key == '*'){
            $("#keyMultiply").mousedown();
        }else if(key == '.'){
            $("#keyDot").mousedown();
        }else if(key == 'Enter'){
            $("#keyEnter").mousedown();
        }else if(key == '='){
            $("#keyEnter").mousedown();
        }else if(key == 'Backspace'){
            $("#keyBackspace").mousedown();
        }
    });
    $("body").keyup(function(e){
        var key = e.key;
        if(key == 1){
            $("#keyOne").mouseup();
        }else if(key == 2){
            $("#keyTwo").mouseup();
        }else if(key == 3){
            $("#keyThree").mouseup();
        }else if(key == 4){
            $("#keyFour").mouseup();
        }else if(key == 5){
            $("#keyFive").mouseup();
        }else if(key == 6){
            $("#keySix").mouseup();
        }else if(key == 7){
            $("#keySeven").mouseup();
        }else if(key == 8){
            $("#keyEight").mouseup();
        }else if(key == 9){
            $("#keyNine").mouseup();
        }else if(key == 0){
            $("#keyZero").mouseup();
        }else if(key == '/'){
            $("#keyDivide").mouseup();
        }else if(key == '-'){
            $("#keyMinus").mouseup();
        }else if(key == '+'){
            $("#keyPlus").mouseup();
        }else if(key == '*'){
            $("#keyMultiply").mouseup();
        }else if(key == '.'){
            $("#keyDot").mouseup();
        }else if(key == 'Enter'){
            $("#keyEnter").mouseup();
        }else if(key == '='){
            $("#keyEnter").mouseup();
        }else if(key == 'Backspace'){
            $("#keyBackspace").mouseup();
        }
    });
});