function ketQua() {
    let amount = document.getElementById("amount").value;
    let fromCurrency = document.getElementById("fromCurrency").value;
    let toCurrency = document.getElementById("toCurrency").value;
    if (fromCurrency === "VND" && toCurrency === "USD") {
        let result = Number(amount) / 23000;
        document.getElementById("result").innerHTML = result.toFixed(3);
    }
    if (fromCurrency === "USD" && toCurrency === "VND") {
        let result = Number(amount) * 23000;
        document.getElementById("result").innerHTML = result.toFixed(3);
    }
}