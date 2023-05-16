const sumar = function(a,b) {
    return a + b;
}
// esto se llama uina funcion expresada, su nombre ya esta declarado en la variable suma

const restar = function(a,b) {
    return a - b;
}
const multiplicar = function(a,b) {
    return a * b;
}

const division = function(a,b) {
    return a / b;
}

module.exports = {sumar, restar, multiplicar, division}