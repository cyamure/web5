/*jslint browser */
function calculateTotal(event) {
    "use strict";
    event.preventDefault();

    const quantityInput = document.getElementById("quantity");
    const productSelect = document.getElementById("product");
    const resultElement = document.getElementById("result");
    const errorElement = document.getElementById("error-message");

    const quantityStr = quantityInput.value.trim();
    const match = quantityStr.match(/^\d+$/);

    if (match === null) {
        errorElement.textContent = (
            "Ошибка: введите корректное количество (только цифры)."
        );
        resultElement.textContent = "";
        return;
    }

    const quantity = parseInt(quantityStr, 10);
    if (quantity <= 0) {
        errorElement.textContent = (
            "Ошибка: количество товара должно быть больше нуля."
        );
        resultElement.textContent = "";
        return;
    }

    const price = parseInt(productSelect.value, 10);
    const total = price * quantity;

    errorElement.textContent = "";
    resultElement.textContent = "Стоимость заказа: " + total + " руб.";
}

function clearError() {
    "use strict";
    const errorElement = document.getElementById("error-message");
    if (errorElement !== null) {
        errorElement.textContent = "";
    }
}

window.addEventListener("DOMContentLoaded", function () {
    "use strict";
    const button = document.getElementById("calculate-btn");
    const form = document.getElementById("order-form");
    const quantityInput = document.getElementById("quantity");

    button.addEventListener("click", calculateTotal);
    if (form !== null) {
        form.addEventListener("submit", calculateTotal);
    }
    if (quantityInput !== null) {
        quantityInput.addEventListener("input", clearError);
    }
});
