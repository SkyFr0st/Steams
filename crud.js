let userSelectd = null;

function Read(){
    let data = {};
    data["name"] = document.getElementById("name").value;
    data["nickname"] = document.getElementById("nickname").value;
    data["age"] = document.getElementById("age").value;
    data["tel"] = document.getElementById("tel").value;
    return data;
}

function Create(formData){
    let table = document.getElementById("tbl-contact").getElementsByTagName("tbody")[0];    
    let newRow = table.insertRow(table.length);
    
    let cell1 = newRow.insertCell(0);
    cell1.innerHTML = formData.name;

    let cell2 = newRow.insertCell(1);
    cell2.innerHTML = formData.nickname;

    let cell3 = newRow.insertCell(2);
    cell3.innerHTML = formData.age;

    let cell4 = newRow.insertCell(3);
    cell4.innerHTML = formData.address;

    let cell6 = newRow.insertCell(4);
    cell6.innerHTML = `<a onclick="Edit(this)">Edit</a>`;

    let cell7 = newRow.insertCell(5);
    cell7.innerHTML = `<a onclick="Delete(this)">Delete</a>`;

}

function Edit(td){
    userSelectd = td.parentElement.parentElement;
    document.getElementById("name").value = userSelectd.cells[0].innerHTML;
    document.getElementById("nickname").value = userSelectd.cells[1].innerHTML;
    document.getElementById("age").value = userSelectd.cells[2].innerHTML;
    document.getElementById("tel").value = userSelectd.cells[4].innerHTML;
}

function update(formData){
    userSelectd.cells[0].innerHTML = formData.name;
    userSelectd.cells[1].innerHTML = formData.nickname;
    userSelectd.cells[2].innerHTML = formData.age;
    userSelectd.cells[3].innerHTML = formData.tel;
}

function Delete(td){
    if(confirm("คุณต้องการลบข้อมูลไหม")){
        row = td.parentElement.parentElement;
        document.getElementById("tbl-contact").deleteRow(row.rowIndex);
        ClearForm();
    }
}

function ClearForm(){
    document.getElementById("name").value = "";
    document.getElementById("nickname").value = "";
    document.getElementById("age").value = "";
    document.getElementById("tel").value = "";
    userSelectd = null;
}

function FormSubmit(){
    let formData = Read();
    if(userSelectd === null){
        Create(formData);
    }
    else{
        update(formData);
    }
}