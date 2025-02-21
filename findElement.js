/* esta funcion nos permite encontrar los elementos de acuerdo a su minimo de calorias y peso maximo permitido*/

function findElements(minCalories, maxWeight, elements) {

    let numberElements = elements.length;
    let table = Array.from({ length: numberElements + 1 }, () =>  Array( maxWeight + 1 ).fill(0));

    for ( let i = 1; i <= numberElements; i++){
        for ( let w = 0; w <= maxWeight; w++){
            if (elements[i - 1].weight <= w){
                table[i][w] = Math.max(table[i - 1][w], table[i - 1][w - elements[i - 1].weight] + elements[i - 1].calories);
            } else {
                table[i][w] = table[i - 1][w];
            }
        }
    }

    if (table[numberElements][maxWeight] < minCalories){

        return "no es posible alcanzar el minimo de calorias con el peso maximo.";

    }

    let w = maxWeight;
    let selectedElements = [];
    for (let i = numberElements; i > 0 ; i--){
        if (table[i][w] !== table[i - 1][w]){
            selectedElements.push(elements[ i - 1]);
            w -= elements [i - 1].weight
        }

    }

    return selectedElements.reverse();

}

module.exports = { findElements }