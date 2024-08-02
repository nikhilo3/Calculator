const inputs = (val)=>{
    document.getElementById("txt").value += val
    console.log(val);
    return val;
}

const clears = ()=>{
    document.getElementById("txt").value = ''
    console.log("clear")
}

const solve = ()=>{
    let x = document.getElementById("txt").value
    let result = evalutexpression(x);
    document.getElementById("txt").value = result;
    console.log("solve")
    console.log("result = " + result);
}
function evalutexpression(expression){
    return Function('"use strict"; return ('+expression+')')();
}