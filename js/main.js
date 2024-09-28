function buttonAlign(info){
    for(let i=0;i<info.length;i++){
    if(info[i]=='text-center'||info[i]=='text-end'||info[i]=='text-start'){
        info.remove('text-center');
        info.remove('text-end');
        info.remove('text-start');
        document.getElementById('btnC').classList.remove("active");
        document.getElementById('btnR').classList.remove("active");
        document.getElementById('btnL').classList.remove("active");
    }
   }
}
function changeFontWeight(bold){
   document.getElementById('textarea_1').classList.toggle("fw-bold");
   document.getElementById('btnBold').classList.toggle("active");
}
function changeItalic(italic){
   document.getElementById('textarea_1').classList.toggle("fst-italic");
   document.getElementById('btnItalic').classList.toggle("active");
}
function TextAlign(left){
   let classLeft = document.getElementById('textarea_1').classList;
   buttonAlign(classLeft);
   classLeft.toggle(left.value);
   document.getElementById(left.id).classList.toggle("active");
}
function TextCenter(center){
   let classlist = document.getElementById('textarea_1').classList;
   buttonAlign(classlist);
   classlist.toggle("text-center");
   document.getElementById('btnC').classList.toggle('active');
}

function upperText(){
    let ele_class = document.getElementById('textarea_1');
   if( ele_class.style.textTransform == "uppercase"){
    ele_class.style.textTransform = "none";
    document.getElementById('btnUp').classList.remove('active');
   }else{
    ele_class.style.textTransform = "uppercase";
   document.getElementById('btnUp').classList.add('active');}
   document.getElementById('btnLow').classList.remove('active');
   document.getElementById('btnCap').classList.remove('active');
}
function lowerText(){
   let ele_class = document.getElementById('textarea_1');
   if( ele_class.style.textTransform == "lowercase"){
    ele_class.style.textTransform = "none";
    document.getElementById('btnLow').classList.remove('active');
   }else{
    ele_class.style.textTransform = "lowercase";
   document.getElementById('btnLow').classList.add('active');}
   document.getElementById('btnUp').classList.remove('active');
   document.getElementById('btnCap').classList.remove('active');
}
function CapitalizeText(){
    let ele_class = document.getElementById('textarea_1');
   if( ele_class.style.textTransform == "capitalize"){
    ele_class.style.textTransform = "none";
    document.getElementById('btnCap').classList.remove('active');
   }else{
    ele_class.style.textTransform = "capitalize";
   document.getElementById('btnCap').classList.add('active');}
   document.getElementById('btnLow').classList.remove('active');
   document.getElementById('btnUp').classList.remove('active');
   
}

function textColor(tColor){
    document.getElementById('textarea_1').style.color=tColor.value;
}
function backColor(backColor){
    document.getElementById('textarea_1').style.backgroundColor=backColor.value;
    console.log(backColor.value)
}

function changeFont(font){
   document.getElementById('textarea_1').style.fontFamily=font.value;
   console.log(font.value);
}

function changeSize(size){
   document.getElementById('textarea_1').style.fontSize=size.value;
   console.log(size.value);
}

function clearText(){
    clearFont();
    document.getElementById('textarea_1').value="";
}

function clearFont(){
    let textArea =document.getElementById('textarea_1');
    textArea.classList="shadow w-50 rounded-3 border-primary border-2 p-3";
    textArea.style.fontFamily='system-ui';
    textArea.style.fontSize ='16px';
    textArea.style.textTransform='none';
    textArea.style.color='#000000';
    textArea.style.backgroundColor='#FFFFFF';
    document.getElementById('family').value='system-ui';
    document.getElementById('size').value ='16px';
    document.getElementById('btnC').classList.remove("active");
    document.getElementById('btnR').classList.remove("active");
    document.getElementById('btnL').classList.remove("active");
    document.getElementById('btnBold').classList.remove("active");
    document.getElementById('btnItalic').classList.remove("active");
    document.getElementById('btnCap').classList.remove('active');
    document.getElementById('btnLow').classList.remove('active');
    document.getElementById('btnUp').classList.remove('active');
    document.getElementById('textColor').value='#000000';
    document.getElementById('backColor').value='#FFFFFF';
    
}
function printText(){
    alert(document.getElementById('textarea_1').value);
}