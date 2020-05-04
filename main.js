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
    
}
class StudentsTable{
    _students;
    constructor(){
        this._students=new Array();       
    }
    addNew(student){
        this._students.push(student);
    }
    removeStudent(position){
        this._students[position].remove();
    }  
    clear()
    {
        this._students =null;
    }
}

