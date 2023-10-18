

//ACCESS ALL CARDS BUTTONS TO CHANGE PAGE
const cardBtns = document.querySelectorAll(".card__container button");
const showStudentData__container=document.querySelector('.showStudentData__container')
const insertData__container = document.getElementById("insertData__container");
const updateData__container = document.getElementById("updateData__container");
const deleteData__container = document.getElementById("deleteData__container");
const searchData__container = document.getElementById("searchData__container");

//HOME BTN

const homeBTN=document.querySelector('#homeBTN')
homeBTN.addEventListener('click',function(){
  insertData__container.classList.remove("show");
          updateData__container.classList.remove("show");
          deleteData__container.classList.remove("show");
          searchData__container.classList.remove("show");
          showStudentData__container.classList.remove("hide")
})

cardBtns.forEach((cardBtns) => {
  cardBtns.addEventListener("click", function (e) {
    if (
      cardBtns.id == "insertBTN" ||
      "updateBTN" ||
      "deleteBTN" ||
      "searchBTN"
    ) {
      const btnId = cardBtns.id;
      switch (btnId) {
        case "insertBTN":
          insertData__container.classList.add("show");
          updateData__container.classList.remove("show");
          deleteData__container.classList.remove("show");
          searchData__container.classList.remove("show");
          showStudentData__container.classList.add("hide")

          break;
        case "updateBTN":
          insertData__container.classList.remove("show");
          updateData__container.classList.add("show");
          deleteData__container.classList.remove("show");
          searchData__container.classList.remove("show");
          showStudentData__container.classList.add("hide")

          break;
        case "deleteBTN":
          insertData__container.classList.remove("show");
          updateData__container.classList.remove("show");
          deleteData__container.classList.add("show");
          searchData__container.classList.remove("show");
          showStudentData__container.classList.add("hide")


          break;
        default:
          insertData__container.classList.remove("show");
          updateData__container.classList.remove("show");
          deleteData__container.classList.remove("show");
          searchData__container.classList.add("show");
          showStudentData__container.classList.add("hide")


          break;
      }
    }
  });
});



//GET ALL STUDENT DATA INPUT VALUES



// INSERT DATA CONTAINER DATA STORE TO LOCALSTORAGE
const studentDataForm=document.querySelector('#studentDataForm')
studentDataForm.addEventListener("submit",function(e){
  e.preventDefault()

  const rollno=document.querySelector('#rollNo').value;
const Studentname=document.querySelector('#Studentname').value;
const department=document.querySelector('#department').value;
const AcademicYear=document.querySelector('#AcademicYear').value;

const key={
  rollno:rollno
}
const datas={
  rollno:rollno,
  Studentname:Studentname,
  department:department,
  AcademicYear:AcademicYear
}

  localStorage.setItem(JSON.stringify(key),JSON.stringify(datas))
  alert("Success")
  studentDataForm.reset()
})


let studentData = Object.keys(localStorage).map((rollno) => {
  return JSON.parse(localStorage.getItem(rollno));
});

console.log(studentData)
//UPDATE DATA

const updateData_form_login=document.querySelector('#updateData_form_login');

updateData_form_login.addEventListener('submit',function(e){
  e.preventDefault()
const rollNoFor__update=document.querySelector('#rollNoFor__update').value;
const nameFor__update=document.querySelector('#nameFor__update').value;
  

const rollnumberValidOrNotValid = Object.keys(studentData).find(
  (key) => studentData[key].rollno === rollNoFor__update
);
const nameValidOrNotValid = Object.keys(studentData).find(
  (key) => studentData[key].Studentname === nameFor__update
);


if(rollnumberValidOrNotValid && nameValidOrNotValid ){
const previousValues=JSON.parse(localStorage.getItem(JSON.stringify({rollno:rollNoFor__update})))
  const ModifyrollNo=document.querySelector('#ModifyrollNo')
  const ModifyStudentname=document.querySelector('#ModifyStudentname')
  const Modifydepartment=document.querySelector('#Modifydepartment')
  const ModifyAcademicYear=document.querySelector('#ModifyAcademicYear')

 ModifyrollNo.value=previousValues.rollno
  ModifyStudentname.value=previousValues.Studentname
  Modifydepartment.value=previousValues.department
  ModifyAcademicYear.value=previousValues.AcademicYear
  
  ModifyrollNo.addEventListener("input",updateToLocalStorage)
  ModifyStudentname.addEventListener("input",updateToLocalStorage)
  Modifydepartment.addEventListener("input",updateToLocalStorage)
  ModifyAcademicYear.addEventListener("input",updateToLocalStorage)
 
  function updateToLocalStorage(){
   
    // UPDATE DATAS TO LOCALSTORAGE
    const modify__studentDataForm=document.querySelector('#modify__studentDataForm')
    const rollno=document.querySelector('#ModifyrollNo').value
    const Studentname=document.querySelector('#ModifyStudentname').value
    const department=document.querySelector('#Modifydepartment').value
    const AcademicYear=document.querySelector('#ModifyAcademicYear').value
    const key={
      rollno:rollno
    }
    const updatedDatas={
      rollno:rollno,
      Studentname:Studentname,
      department:department,
      AcademicYear:AcademicYear
    }
let updated=false
    modify__studentDataForm.addEventListener("submit",function(e){
        // localStorage.removeItem(JSON.stringify(key))
        e.preventDefault()
        if(!updated){
          localStorage.setItem(JSON.stringify(key),JSON.stringify(updatedDatas))
          alert("updated successfully")
        }
      
        // modify__studentDataForm.reset()
    })
  }
  alert("login successfully")

  const modify__studentDataForm=document.querySelector('#modify__studentDataForm');
  modify__studentDataForm.style.display="block";
  updateData_form_login.style.display="none";

  updateData_form_login.reset()
}else{
  alert("you type invalid data")
}
})


// DELETE DATA FORM

const deleteData__form=document.querySelector('#deleteData__form');

deleteData__form.addEventListener('submit',function(e){
const rollNoFor__delete=document.querySelector('#rollNoFor__delete').value;
const nameFor__delete=document.querySelector('#nameFor__delete').value;
  
console.log(studentData)
const rollnumberValidOrNotValid = Object.keys(studentData).find(
  (key) => studentData[key].rollno === rollNoFor__delete
);
const nameValidOrNotValid = Object.keys(studentData).find(
  (key) => studentData[key].Studentname === nameFor__delete
);
if(rollnumberValidOrNotValid && nameValidOrNotValid ){
  localStorage.removeItem(JSON.stringify({rollno:rollNoFor__delete}))
  alert("delete successfully")
  console.log(studentData)
  deleteData__form.reset()
}else{
  alert("you type invalid data")
}
e.preventDefault()

})

// SEARCH DATA FROM 

const searchData__form=document.querySelector('#searchData__form');

searchData__form.addEventListener('submit',function(e){
  e.preventDefault()
const rollNo__search=document.querySelector('#rollNo__search').value;
const nameFor__search=document.querySelector('#nameFor__search').value;
  
console.log(studentData)
const rollnumberValidOrNotValid = Object.keys(studentData).find(
  (key) => studentData[key].rollno === rollNo__search
);
const nameValidOrNotValid = Object.keys(studentData).find(
  (key) => studentData[key].Studentname === nameFor__search
);


if(rollnumberValidOrNotValid && nameValidOrNotValid ){
  alert("login successfully")
  searchData__form.style.display="none"
  searched_datas__container.style.display="block"
  const searchedDatas=JSON.parse(localStorage.getItem(JSON.stringify({rollno:rollNo__search})))
const showSearchedRollNo=document.querySelector('#showSearchedRollNo')
const showSearchedName=document.querySelector('#showSearchedName')
const showSearchedDepartment=document.querySelector('#showSearchedDepartment')
const showSearchedAcademicYear=document.querySelector('#showSearchedAcademicYear')
//DATAS INSERT TO TABLES
showSearchedRollNo.append(searchedDatas.rollno)
showSearchedName.append(searchedDatas.Studentname)
showSearchedDepartment.append(searchedDatas.department)
showSearchedAcademicYear.append(searchedDatas.AcademicYear)
  console.log(searchedDatas)
  searchData__form.reset()
}else{
  alert("you type invalid data")
}
})

//SHOW ALL DATAS IN TABLE

console.log(studentData)

for(let i=0;i<studentData.length;i++){

// const tableData__row=document.querySelector('.tableData__row')
const tableData__rows=document.createElement('tr')

  const showrollNo=document.createElement('td')
  showrollNo.textContent=studentData[i].rollno
  tableData__rows.appendChild(showrollNo)

  const showStudentName=document.createElement('td')
  showStudentName.textContent=studentData[i].Studentname
  tableData__rows.appendChild(showStudentName)

  const showDepartment=document.createElement('td')
  showDepartment.textContent=studentData[i].department
  tableData__rows.appendChild(showDepartment)

  const showAcademicYear=document.createElement('td')
  showAcademicYear.textContent=studentData[i].AcademicYear
  tableData__rows.appendChild(showAcademicYear)

  const student__list=document.querySelector('.student__list')
  student__list.appendChild(tableData__rows)

  
}

