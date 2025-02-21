/*esta funcion nos permite agregar elementos al contenedor*/
function addElement() {
    const container = document.getElementById('elementContainer');
    const div = document.createElement('div');
    div.className = 'inputElement mb-2';
    div.innerHTML = `
        <input type="text" class="form-control mb-2" placeholder="Nombre elemento" required>
        <input type="number" class="form-control mb-2" placeholder="Peso" required>
        <input type="number" class="form-control" placeholder="Calorías" required>
    `;
    container.appendChild(div);
}

// Función para enviar los datos al backend
document.getElementById('elementForm').onsubmit = async function(e) {
    e.preventDefault();

    const minCalories = parseInt(document.getElementById('minCalories').value);
    const maxWeight = parseInt(document.getElementById('maxWeight').value);
    const elements = [];

    const inputs = document.querySelectorAll('#elementContainer .inputElement');
    inputs.forEach(input => {
        const name = input.children[0].value;
        const weight = parseInt(input.children[1].value);
        const calories = parseInt(input.children[2].value);
        elements.push({ name, weight, calories });
    });

    try {

        // Enviamos los datos a nuestro backend
        const response = await fetch('http://localhost:3000/findElement', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ minCalories, maxWeight, elements })
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        // procesamos la respuesta de nuestro backend
        const result = await response.json();
        const resultDiv = document.getElementById('result');

        if (result.error) {
            resultDiv.innerHTML = result.error;
            resultDiv.className = 'alert alert-danger';
        } else {
            resultDiv.innerHTML = `Elementos Permitidos: ${result.map(e => e.name).join(', ')}`;
            resultDiv.className = 'alert alert-success';
        }       

    } catch (error) {

        console.error('Error:', error);
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = "No se cumplen con los parametros de calorias minimas ni peso maximo";
        resultDiv.className = 'alert alert-danger';

    }
};