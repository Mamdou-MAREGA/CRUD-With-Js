// Ligne selectionnée à null
var selectedRow = null;
// Fonction  de soumission du formulaire
function onFormSubmit() {
    if(validate()){
        let formData = readFormData();
        if(selectedRow == null)
            insertNewRecord(formData);
        else
        updateRecord();

        resetForm();
    }
}
// Fonction qui lit les données du formulaire
function readFormData(){
    let formData = {};

    formData["fullName"] = document.getElementById("fullName").value;
    formData["empCode"] = document.getElementById("empCode").value;
    formData["salary"] = document.getElementById("salary").value;
    formData["city"] = document.getElementById("city").value;
    return formData;
}
// Fonction qui insert les données
function insertNewRecord(data){
    let table = document.getElementById("employeList").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);

    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.empCode;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.salary;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.city;

    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Modifier</a>
                      <a onClick="onDelete(this)">Supprimer</a>`;
}
// Fonction qui vide les champs du formulaire
function resetForm(){
    document.getElementById("fullName").value = "";
    document.getElementById("empCode").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("city").value = "";
}
// Fonction qui modifie les données 
function onEdit(td){
    selectedRow = td.parentElement.parentElement;

    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("empCode").value = selectedRow.cells[1].innerHTML;
    document.getElementById("salary").value = selectedRow.cells[2].innerHTML;
    document.getElementById("city").value = selectedRow.cells[3].innerHTML;
}
// Fonction qui met à jour les données
function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.empCode;
    selectedRow.cells[2].innerHTML = formData.salary;
    selectedRow.cells[3].innerHTML = formData.city;
}
// Fonction qui supprime les données
function onDelete(td){
    if(confirm("êtes-vous sûr de vouloir supprimer ?")){
        row = td.parentElement.parentElement;
        document.getElementById('employeList').deleteRow(row.rowIndex);
        resetForm();
    }
}
// Fonction qui permet de vérifier la validation du champ nom
function validate(){
    isValid = true;
    if(document.getElementById("fullName").value == ""){
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    }else{
        isValid = true;
        if(!document.getElementById("fullNameValidationError").classList.contains("hide"))
        document.getElementById("fullNameValidationError").classList.add("hide");
    }
}