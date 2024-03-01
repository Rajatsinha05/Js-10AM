const studentsData = (e) => {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let number = document.getElementById("number").value;
  let marks = document.getElementById("marks").value;
  let course = document.getElementById("course").value;

  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  td1.innerHTML = name;
  let td2 = document.createElement("td");
  td2.innerHTML = number;

  let td3 = document.createElement("td");
  td3.innerHTML = marks;

  let td4 = document.createElement("td");
  td4.innerHTML = course;

  let td5 = document.createElement("td");
  if (marks >= 90) {
    td5.innerHTML = "pass";
    td5.style.backgroundColor = "green";
  } else {
    td5.innerHTML = "fail";
    td5.style.backgroundColor = "red";
  }
  let td6 = document.createElement("td");
  td6.innerHTML = "delete";
  td6.style.color = "red";

  td6.addEventListener("click", (e) => {
    e.target.parentNode.remove();
  });

  tr.append(td1, td2, td4, td3, td5, td6);

  document.getElementById("data").append(tr);
};

const deleteAll = () => {
  document.getElementById("data").innerHTML = "";
};

document.getElementById("delete").addEventListener("click", deleteAll);

document.getElementById("student").addEventListener("submit", studentsData);
