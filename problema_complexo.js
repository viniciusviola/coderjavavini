let var_a = parseInt(prompt("Informe o valor de 'a': "))
let var_b = parseInt(prompt("Informe o valor de 'b': "))
let var_c = parseInt(prompt("Informe o valor de 'c': "))


function checa_a(num) {
    if (num > 1){
        return `${num}x²`
    } else if (num === 1){
        return `x²`
    } else if (num === -1){
        return `-x²`
    } else if (num < -1){
        return `${num}x²`
    } else if (num === 0){
        return ``
    }
}

function checa_b(num) {
    if (num > 1){
        return `+${num}x`
    } else if (num === 1){
        return `+x`
    } else if (num === -1){
        return `-x`
    } else if (num < -1){
        return `${num}x`
    } else if (num === 0){
        return ``
    }
}

function checa_c(num) {
    if (num >= 1){
        return `+${num}`
    } else if (num <= -1){
        return `${num}`
    } else if (num === 0){
        return ``
    }
}


alert("A expressão indicada é: " + checa_a(var_a) + checa_b(var_b) + checa_c(var_c))

const bhaskara = (num1, num2, num3) => {
    delta = (num2 ** 2)-4*num1*num3

    if (delta < 0){
        return alert("Delta é negativo e não possui raízes reais"+ delta)
    }else{
        if (num2 < 0){
            x1 = ((num2*-1) + Math.sqrt(delta))/2*num1
            x2 = ((num2*-1) - Math.sqrt(delta))/2*num1
            return alert("As raízes da expressão passada são x1= "+ x1.toFixed(2)+ ', x2= ' +  x2.toFixed(2))
        } else{
            x1 = (num2 + Math.sqrt(delta))/2*num1
            x2 = (num2 - Math.sqrt(delta))/2*num1
            return alert("As raízes da expressão passada são x1= "+ x1.toFixed(2)+ ', x2= ' +  x2.toFixed(2))
        }
        
    }
}
bhaskara(var_a, var_b, var_c)