function help_click (){
    window.alert("This feature is currenly not avaialbe.");
}
let radioGroupChanger;
function student_click(){
    document.getElementsByClassName('input-field-number')[0].placeholder= "Student Number";
    //radioGroupChanger = document.getElementById("radio1");
}
function personnelClick(){
    document.getElementsByClassName('input-field-number')[0].placeholder= "Personnel Number";
    // radioGroupChanger = document.getElementsByClassName("");
}
function otherClick(){
    document.getElementsByClassName('input-field-number')[0].placeholder='External Number';
    document.getElementsByClassName("input-field-pin")
    // radioGroupChanger = document.getElementsByClassName("radio3");
}
function alumniClick(){
    document.getElementsByClassName('input-field-number')[0].placeholder='Alumni Number';
    // radioGroupChanger = document.getElementsByClassName("radio4");
    // radioGroupChanger.placeholder= radioGroupChanger.value + " Number";
}