let inputs = document.querySelectorAll(".input__box-input span input");
let p1 = document.querySelector("#p1"),
  p2 = document.querySelector("#p2"),
  p3 = document.querySelector("#p3"),
  p4 = document.querySelector("#p4"),
  p5 = document.querySelector("#p5"),
  p6 = document.querySelector("#p6"),
  p7 = document.querySelector("#p7"),
  p8 = document.querySelector("#p8"),
  p9 = document.querySelector("#p9"),
  p10 = document.querySelector("#p10"),
  p11 = document.querySelector("#p11"),
  p12 = document.querySelector("#p12"),
  p13 = document.querySelector("#p13"),
  p14 = document.querySelector("#p14"),
  p15 = document.querySelector("#p15"),
  p16 = document.querySelector("#p16"),
  p17 = document.querySelector("#p17");

let input1 = document.querySelector("#input1"),
  input2 = document.querySelector("#input2"),
  input3 = document.querySelector("#input3"),
  input4 = document.querySelector("#input4"),
  input5 = document.querySelector("#input5"),
  input6 = document.querySelector("#input6"),
  input7 = document.querySelector("#input7"),
  input8 = document.querySelector("#input8"),
  input9 = document.querySelector("#input9"),
  input10 = document.querySelector("#input10"),
  input11 = document.querySelector("#input11"),
  input12 = document.querySelector("#input12"),
  input13 = document.querySelector("#input13"),
  input14 = document.querySelector("#input14"),
  input15 = document.querySelector("#input15"),
  input16 = document.querySelector("#input16"),
  input17 = document.querySelector("#input17"),
  discVal = document.querySelector("#disc_val"),
  resetBtn = document.querySelector(".reset__btn");

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

const resetValues = (x) => {
  return (x = 0);
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

input7.addEventListener("change", () => {
  let res = calValues(input7.value, 50);
  p7.innerHTML = res;
  addValues += res;
  total.innerHTML = addValues;
});

input8.addEventListener("change", () => {
  let res = calValues(input8.value, 50);
  p8.innerHTML = res;
  addValues += res;
  total.innerHTML = addValues;
});

// input9.addEventListener("change", () => {
//   let res = calValues(input6.value, hrbara);
//   p9.innerHTML = res;
//   addValues += res;
//   total.innerHTML = addValues;
// });

input10.addEventListener("change", () => {
  let res = calValues(input10.value, 20);
  p10.innerHTML = res;
  addValues += res;
  total.innerHTML = addValues;
});

input11.addEventListener("change", () => {
  let res = calValues(input11.value, 15);
  p11.innerHTML = res;
  addValues += res;
  total.innerHTML = addValues;
});

input13.addEventListener("change", () => {
  let res = calValues(input13.value, 180);
  p13.innerHTML = res;
  addValues += res;
  total.innerHTML = addValues;
});

input14.addEventListener("change", () => {
  let res = calValues(input14.value, 60);
  p14.innerHTML = res;
  addValues += res;
  total.innerHTML = addValues;
});

input15.addEventListener("change", () => {
  let res = calValues(input15.value, 80);
  p15.innerHTML = res;
  addValues += res;
  total.innerHTML = addValues;
});

input16.addEventListener("change", () => {
  let res = calValues(input16.value, 10);
  p16.innerHTML = res;
  addValues += res;
  total.innerHTML = addValues;
});

input17.addEventListener("change", () => {
  let res = calValues(input17.value, 20);
  p17.innerHTML = res;
  addValues += res;
  total.innerHTML = addValues;
});

discVal.addEventListener("change", () => {
  addValues -= discVal.value;
  total.innerHTML = addValues;
});
console.log(input1.value);

resetBtn.addEventListener("click", () => {
  input1.value = 0;
  p1.innerHTML = 00;

  input2.value = 0;
  p2.innerHTML = 00;

  input3.value = 0;
  p3.innerHTML = 00;

  input4.value = 0;
  p4.innerHTML = 00;

  input5.value = 0;
  p5.innerHTML = 00;

  input6.value = 0;
  p6.innerHTML = 00;

  input7.value = 0;
  p7.innerHTML = 00;

  input8.value = 0;
  p8.innerHTML = 00;

  input10.value = 0;
  p10.innerHTML = 00;

  input11.value = 0;
  p11.innerHTML = 00;

  input13.value = 0;
  p13.innerHTML = 00;

  input14.value = 0;
  p14.innerHTML = 00;

  input15.value = 0;
  p15.innerHTML = 00;

  input16.value = 0;
  p16.innerHTML = 00;

  input17.value = 0;
  p17.innerHTML = 00;

  discVal.value = 0;

  addValues = 00;
  total.innerHTML = addValues;

  if(discBox.classList.contains('active') === true){
    discBox.classList.remove('active');
  }
});

let btn = document.querySelector(".btn");
let timeBox = document.querySelector(".time__box span");
let day = document.querySelector(".day");
let date = document.querySelector(".date");

const d = new Date();
let hr = d.getHours();
let mn = d.getMinutes();
let sc = d.getSeconds();
let dy = d.getDay();
let dt = d.getDate();
let yr = d.getFullYear();
let mt = d.getMonth();

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
day.innerHTML = days[dy];
date.innerHTML = dt + "/" + (mt + 1) + "/" + yr;
timeBox.innerHTML = hr + ":" + mn;

btn.addEventListener("click", () => {
  window.print();
});

let checkBox = document.getElementById("1");
let discBox = document.querySelector(".input__box-disc");
const addDisc = () => {
  discBox.classList.toggle("active");
}


checkBox.addEventListener("click", addDisc);
