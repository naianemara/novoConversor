const selectOptions = document.querySelector(".currency-select")
const select1 = document.querySelector(".currency-select1")
const currencyToConvert = document.querySelector(".currency-to-convert")
const convertedCurrenccy = document.querySelector(".converted-currency")




function convertButton() {
  const inputElement = document.querySelector(".input-currency");
  const inputValue = parseFloat(inputElement.value);

  if(isNaN(inputValue)){
    
    currencyToConvert.innerHTML = "";
    convertedCurrenccy.innerHTML = "";
    alert("Preencha o campo!")
    return;
    
  }

  const RealToDay = 1.00
  const DolarToDay = 5.45
  const EuroToDay = 5.99
  const LibraToDay = 7.16
  const BitcoinToDay = 337.512

  let convertedValue;

  if (select1.value === "Real") {
    if (selectOptions.value === "Dolar") {
      convertedValue = inputValue / DolarToDay;
    } else if (selectOptions.value === "Euro") {
      convertedValue = inputValue / EuroToDay;
    } else if (selectOptions.value === "Libra") {
      convertedValue = inputValue / LibraToDay;
    } else if (selectOptions.value === "Bitcoin") {
      convertedValue = inputValue / BitcoinToDay;
    } else {
      convertedValue = inputValue;
    }
  } else if (select1.value === "Dolar") {
    if (selectOptions.value === "Real") {
      convertedValue = inputValue * DolarToDay / RealToDay;
    } else if (selectOptions.value === "Euro") {
      convertedValue = inputValue * DolarToDay / EuroToDay;
    } else if (selectOptions.value === "Libra") {
      convertedValue = inputValue * DolarToDay / LibraToDay;
    } else if (selectOptions.value === "Bitcoin") {
      convertedValue = inputValue * DolarToDay / BitcoinToDay;
    } else {
      convertedValue = inputValue;
    }
  } else if (select1.value === "Euro") {
    if (selectOptions.value === "Real") {
      convertedValue = inputValue * EuroToDay / RealToDay;
    } else if (selectOptions.value === "Dolar") {
      convertedValue = inputValue * EuroToDay / DolarToDay;
    } else if (selectOptions.value === "Libra") {
      convertedValue = inputValue * EuroToDay / LibraToDay;
    } else if (selectOptions.value === "Bitcoin") {
      convertedValue = inputValue * EuroToDay / BitcoinToDay;
    } else {
      convertedValue = inputValue;
    }
  } else if (select1.value === "Libra") {
    if (selectOptions.value === "Real") {
      convertedValue = inputValue * LibraToDay / RealToDay;
    } else if (selectOptions.value === "Dolar") {
      convertedValue = inputValue * LibraToDay / DolarToDay;
    } else if (selectOptions.value === "Euro") {
      convertedValue = inputValue * LibraToDay / EuroToDay;
    } else if (selectOptions.value === "Bitcoin") {
      convertedValue = inputValue * LibraToDay / BitcoinToDay;
    } else {
      convertedValue = inputValue
    }
  } else if (select1.value === "Bitcoin"){
    if (selectOptions.value === "Real") {
      convertedValue = inputValue * BitcoinToDay / RealToDay;
    } else if (selectOptions.value === "Dolar") {
      convertedValue = inputValue * BitcoinToDay / DolarToDay;
    } else if (selectOptions.value === "Euro") {
      convertedValue = inputValue * BitcoinToDay / EuroToDay;
    } else if (selectOptions.value === "Libra") {
      convertedValue = inputValue * BitcoinToDay / LibraToDay;
    } else {
      convertedValue = inputValue;
    }
  }else {
    convertedValue = inputValue;

  }

    currencyToConvert.innerHTML = inputValue.toFixed(2);
    convertedCurrenccy.innerHTML = convertedValue.toFixed(2);
}


function currencyChange() {
  const currencyName1 = document.getElementById("currency-name1")
  const currencyImag1 = document.querySelector(".img-currency1")


  if (select1.value == "Real") {
    currencyName1.innerHTML = "R$ Real brasileiro"
    currencyImag1.src = "./assets/brasil 2.png"
  }
  if (select1.value == "Dolar") {
    currencyName1.innerHTML = "US$ Dólar americano"
    currencyImag1.src = "./assets/estados-unidos (1) 1.png"
  }
  if (select1.value == "Euro") {
    currencyName1.innerHTML = "€ Euro"
    currencyImag1.src = "./assets/Design sem nome 3.png"
  }
  if (select1.value == "Libra") {
    currencyName1.innerHTML = "£ Libra"
    currencyImag1.src = "./assets/libra 1.png"
  }
  if (select1.value == "Bitcoin") {
    currencyName1.innerHTML = "₿ Bitcoin"
    currencyImag1.src = "./assets/bitcoin 1.png"
  }
  
  convertButton()

}

function changeCurrency() {
  const currencyName = document.getElementById("currency-name")
  const currencyImag = document.querySelector(".img-currency")


  if (selectOptions.value == "Real") {
    currencyName.innerHTML = "R$ Real brasileiro"
    currencyImag.src = "./assets/brasil 2.png"
  }
  if (selectOptions.value == "Dolar") {
    currencyName.innerHTML = "US$ Dólar americano"
    currencyImag.src = "./assets/estados-unidos (1) 1.png"
  }

  if (selectOptions.value == "Euro") {
    currencyName.innerHTML = "€ Euro"
    currencyImag.src = "./assets/Design sem nome 3.png"

  }
  if (selectOptions.value == "Libra") {
    currencyName.innerHTML = "£ Libra"
    currencyImag.src = "./assets/libra 1.png"

  }
  if (selectOptions.value == "Bitcoin") {
    currencyName.innerHTML = "₿ Bitcoin"
    currencyImag.src = "./assets/bitcoin 1.png"

  }

  convertButton()
}


select1.addEventListener("change", currencyChange)
selectOptions.addEventListener("change", changeCurrency)
