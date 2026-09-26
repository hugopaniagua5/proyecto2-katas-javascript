// 1.1 Añadir botón dinámicamente con id btnToClick y evento click
const clickBtn = document.createElement('button');
clickBtn.id = 'btnToClick';
clickBtn.textContent = 'Haz clic aquí';
document.body.appendChild(clickBtn);

clickBtn.addEventListener('click', (event) => {
  console.log('Información del evento click:', event);
});

// 1.2 Evento 'focus' que muestre el valor del input .focus
const focusInput = document.querySelector('input.focus');
if (focusInput) {
  focusInput.addEventListener('focus', (event) => {
    console.log('Valor del input (focus):', event.target.value);
  });
}

// 1.3 Evento 'input' que muestre el valor del input .value
const valueInput = document.querySelector('input.value');
if (valueInput) {
  valueInput.addEventListener('input', (event) => {
    console.log('Valor del input (escribiendo):', event.target.value);
  });
}