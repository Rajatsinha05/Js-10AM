function sum() {
  let a = document.getElementById("num1").value;
  let b = document.getElementById("num2").value;
  document.getElementById("ans").innerHTML = `sum=  ${Number(a) + Number(b)}`;
}
