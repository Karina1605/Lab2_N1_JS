let htmlTable = document.getElementById("tableForAdding");
let form = document.getElementById("form");
class Student{
    _data=[this._fio, this._course, this._group, this._studTicket];
    _isActive;
    constructor (fio, course, group, studTicketNumber)
    {
        this._fio = fio;
        this._course =course;
        this._group = group;
        this._studTicket = studTicketNumber;
        this._isActive =true;
    }
    get fio(){ return data[0];}
    set fio(newFio){ data[0]= newFio;}
    get course(){ return data[1];}
    set course(newCourse){ data[1] =newCourse;}
    get group(){ return data[2]; }
    set group(newGroup){ data[2] =newGroup;}
    get studTicketNumber(){ return data[3];}
    remove(){
        this._isActive=false;
    }
    generateHtmlRow()
    {
        let oneRow = document.createElement("tr");
        htmlTable.appendChild(oneRow);
        let td1 = document.createElement("td");
        td1.innerHTML = this._fio;
        let td2 =document.createElement("td");
        td2.innerHTML = this._course;
        let td3 =document.createElement("td");
        td3.innerHTML = this._group;
        let td4 =document.createElement("td");
        td4.innerHTML = this._studTicket;
        let remove = document.createElement("img");
        remove.src = "remove.png";
        remove.style.float="right";
        remove.style.height="20px";
        remove.style.width ="20px";
        remove.addEventListener('click', ()=>{
            let r = remove.closest("tr");
            r.parentElement.removeChild(r);
        }); 
        oneRow.appendChild(td1);
        oneRow.appendChild(td2);
        oneRow.appendChild(td3);
        oneRow.appendChild(td4);
        oneRow.appendChild(remove);
        return oneRow;
    }
}

class StudentsTable{
    _students;
    constructor(){
        this._students=new Array();       
    }
    addNew(student){
        student.generateHtmlRow();
        this._students.push(student);
    }
}
let table =new StudentsTable();
let addNew =document.getElementById("addButton");
let elems = document.getElementsByTagName("input");
addNew.addEventListener('click', ()=>{
    
    let student =new Student(elems[0].value, elems[1].value, elems[2].value, elems[3].value);
    table.addNew(student);
    form.reset()
});
