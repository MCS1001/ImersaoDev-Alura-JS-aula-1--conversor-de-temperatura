function Converter1() {
  var valorElemento = document.getElementById("valorCelcius");
  var valor = valorElemento.value;
  var valorCelsius = parseFloat(valor);
  var valorEmFahrenheit = valorCelsius * 1.8 + 32;
  var valorEmFahrenheitComp = valorEmFahrenheit.toFixed(1);
  console.log(valorEmFahrenheitComp);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "o resultado em Fahrenheit é " + valorEmFahrenheitComp;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function Converter2() {
  var valorElemento = document.getElementById("valorCelcius");
  var valor = valorElemento.value;
  var valorCelsius = parseFloat(valor);
  var valorEmKelvin = valorCelsius + 273;
  var valorEmKelvinComp = valorEmKelvin.toFixed(1);
  console.log(valorEmKelvinComp);

  var elementoValorConvertido = document.getElementById("valorConvertido1");
  var valorConvertido = "o resultado em Kelvin é " + valorEmKelvinComp;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function Converter3() {
  var valorElemento = document.getElementById("valorFahrenheit");
  var valor = valorElemento.value;
  var valorFahrenheit = parseFloat(valor);
  var valorEmCelsius = (valorFahrenheit - 32) / 1.8;
  var valorEmCelsiusComp = valorEmCelsius.toFixed(1);
  console.log(valorEmCelsiusComp);

  var elementoValorConvertido = document.getElementById("valorConvertido3");
  var valorConvertido = "o resultado em Celsius é " + valorEmCelsiusComp;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function Converter4() {
  var valorElemento = document.getElementById("valorFahrenheit");
  var valor = valorElemento.value;
  var valorFahrenheit = parseFloat(valor);
  var valorEmKelvinPT1 = (valorFahrenheit - 32) / 9;
  var valorEmKelvinPT2 = valorEmKelvinPT1 * 5 + 273;
  var valorEmKelvinComp = valorEmKelvinPT2.toFixed(1);
  console.log(valorEmKelvinComp);

  var elementoValorConvertido = document.getElementById("valorConvertido4");
  var valorConvertido = "o resultado em Kelvin é " + valorEmKelvinComp;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function Converter5() {
  var valorElemento = document.getElementById("valorKelvin");
  var valor = valorElemento.value;
  var valorKelvin = parseFloat(valor);
  var valorCelsius = valorKelvin - 273;
  var valorEmCelsiusComp = valorCelsius.toFixed(1);
  console.log(valorEmCelsiusComp);

  var elementoValorConvertido = document.getElementById("valorConvertido5");
  var valorConvertido = "o resultado em Celsius é " + valorEmCelsiusComp;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function Converter6() {
  var valorElemento = document.getElementById("valorKelvin");
  var valor = valorElemento.value;
  var valorKelvin = parseFloat(valor);
  var valorFahrenheit = (valorKelvin - 273) * 1.8 + 32;
  var valorEmFahrenheitComp = valorFahrenheit.toFixed(1);
  console.log(valorEmFahrenheitComp);

  var elementoValorConvertido = document.getElementById("valorConvertido6");
  var valorConvertido = "o resultado em Fahrenheit é " + valorEmFahrenheitComp;
  elementoValorConvertido.innerHTML = valorConvertido;
}
