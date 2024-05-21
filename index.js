const old_unit = document.querySelector("#old_unit");
const new_unit = document.querySelector("#new_unit");
const submit = document.querySelector("#submit");
const result = document.querySelector("#result");
const fees = {
  home: [11.0, 10.0, 9.0, 8.0, 6.0, 4.5,2.25,0.0],
};
submit.addEventListener("click", function () {
  let unit = new_unit.value - old_unit.value;
  let price = 0;
  let i = 0;
  console.log(fees);
  if (unit > 1000) {
    let curr_unit = unit - 1000;
    price = fees["home"][0] * curr_unit;
    unit=1000;
  console.log(curr_unit, price);
  fees["home"][6]=4.50;
  }
  if (unit > 800) {
    let curr_unit = unit - 800;
    price+= fees["home"][1] * curr_unit;
    unit =800;
    fees["home"][6]=4.50;
  console.log(curr_unit, price);

  }
  if (unit > 600) {
    let curr_unit = unit - 600;
    price+= fees["home"][2] * curr_unit;
    unit=600;
  console.log(curr_unit, price);
  fees["home"][6]=4.50;

  }
  if (unit > 500) {
    let curr_unit = unit - 500;
    price+= fees["home"][3] * curr_unit;
    unit=500;
  console.log(curr_unit, price);
  fees["home"][6]=4.50;

  }
  if (unit > 400) {
    let curr_unit = unit - 400;
    price+= fees["home"][4] * curr_unit;
    unit=400;
  console.log(curr_unit, price);

  }
  if (unit > 200) {
    let curr_unit = unit -200;
    price+= fees["home"][5] * curr_unit;
    unit=200;
  console.log(curr_unit, price);

  }
  if (unit > 100) {
    let curr_unit = unit - 100;
    price+= fees["home"][6] * curr_unit;
    unit=0;
  console.log(curr_unit, price);

  }
  //   let curr_unit=unit-1000;
  //   price=fees['home'][0]*curr_unit;
  result.textContent ='$'+price.toFixed(2);
  result.style.visibility='visible';
});
