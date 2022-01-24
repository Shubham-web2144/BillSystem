let inputs = document.querySelectorAll(".input__box-input span input");
let p1 = document.querySelector("#p1"),
  p2 = document.querySelector("#p2"),
  p3 = document.querySelector("#p3"),
  p4 = document.querySelector("#p4"),
  p5 = document.querySelector("#p5"),
  p6 = document.querySelector("#p6");

let input1 = document.querySelector("#input1"),
  input2 = document.querySelector("#input2"),
  input3 = document.querySelector("#input3"),
  input4 = document.querySelector("#input4"),
  input5 = document.querySelector("#input5"),
  input6 = document.querySelector("#input6");

let total = document.querySelector("#total");
let addValues = 0;

const hurda = 300,
  zumka = 80,
  thali = 80,
  boar = 50,
  dahi = 30,
  hrbara = 5;

const calValues = (x, y) => {
  return x * y;
};

input1.addEventListener("change", () => {
  let res = calValues(input1.value, hurda);
  p1.innerHTML = res;
  addValues += res;
  total.innerHTML = addValues;
});

input2.addEventListener("change", () => {
  let res = calValues(input2.value, zumka);
  p2.innerHTML = res;
  addValues += res;
  total.innerHTML = addValues;
});
input3.addEventListener("change", () => {
  let res = calValues(input3.value, thali);
  p3.innerHTML = res;
  addValues += res;
  total.innerHTML = addValues;
});
input4.addEventListener("change", () => {
  let res = calValues(input4.value, boar);
  p4.innerHTML = res;
  addValues += res;
  total.innerHTML = addValues;
});
input5.addEventListener("change", () => {
  let res = calValues(input5.value, dahi);
  p5.innerHTML = res;
  addValues += res;
  total.innerHTML = addValues;
});
input6.addEventListener("change", () => {
  let res = calValues(input6.value, hrbara);
  p6.innerHTML = res;
  addValues += res;
  total.innerHTML = addValues;
});

let btn = document.querySelector(".btn");
let timeBox = document.querySelector('.time__box span');
let day = document.querySelector('.day');
let date = document.querySelector('.date');
 
const d = new Date();
let hr = d.getHours();
let mn = d.getMinutes();
let sc = d.getSeconds();
let dy = d.getDay();
let dt = d.getDate();
let yr = d.getFullYear();
let mt = d.getMonth();

console.log(mt+1);

const days = ['Sunday', 'Monday', 'Tuesday','Wednesday','Thursday','Friday','Saturday']
day.innerHTML = days[dy];
date.innerHTML = dt+'/'+(mt+1)+'/'+yr;
timeBox.innerHTML = hr + ":" + mn;

btn.addEventListener("click", () => {
    window.print();
});

let checkBox = document.getElementById('1');
let discBox = document.getElementById('disc_box');
checkBox.addEventListener('click' , () => {
  discBox.classList.toggle('active');
  console.log("Hell");
})