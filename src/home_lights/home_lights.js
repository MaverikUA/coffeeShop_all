import './home_lights.scss';



var activeClass = 'active'  
// вариант в том, чтобы менять только один класс в css (active) на каждом огне. 

function switchOffAllLights(selector) { 
  var lights = document.querySelectorAll(selector)

  for (var i = 0; i < lights.length; i += 1) {
    if (lights[i].classList.contains(activeClass)) lights[i].classList.remove(activeClass)
  }
}

function toggleLight(selector) { 
  // метод которы отвечает за изменения  light_item класса active
  var light = document.querySelector(selector)

  switchOffAllLights('.light_item') 
  // перед добавлением следующего activeClass удалаем везде activeClass. Так делать проще, потому что не надо выщитывать и помнить где был activeClass в предыдущей иттерации. 

  light.classList.add(activeClass) // добавляем в текущий нужный селектор activeClass
}

function initTrafficLight() {
  var trafficLightSelectors = ['.light-red', '.light-yellow', '.light-green']
  var i = 0;

  setInterval(function () {
    if (i < 3) {
      toggleLight(trafficLightSelectors[i]) 
      // в toggleLight передаем нужный селектор через каждую секудну light-red, потом light-yellow, потом light-green
      i += 1; // обновляем индекс для того чтобы взять нужный эллемент с массива trafficLightSelectors
    }
  }, 1000)
}

initTrafficLight()



/*function global() {

  function addRed() {

    document.querySelector('.light-yellow').classList.remove('yellow');

    document.querySelector('.light-red').classList.add('red');
  };
  setTimeout(addRed, 2000);

  function addYellow() {
    document.querySelector('.light-red').classList.remove('red');
    document.querySelector('.light-yellow').classList.add('yellow');
  }
  setTimeout(addYellow, 8000);

  function addGreen() {
    document.querySelector('.light-yellow').classList.remove('yellow');
    document.querySelector('.light-green').classList.add('green');
  }
  setTimeout(addGreen, 11000);

  function addGreenY() {
    document.querySelector('.light-green').classList.remove('green');
    document.querySelector('.light-yellow').classList.add('yellow');
  }
  setTimeout(addGreenY, 14000);

}
setInterval(global, 14000)*/