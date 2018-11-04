
// images of Array the objects 
var pictures =[
     {viewer : 564
     ,like : 50
     ,dateupload : "2018/7/13" 
     ,src :"a1.jpg"
     }
     , 
    {viewer : 969 
     ,like : 66
     ,dateupload : "2018/2/10" 
     ,src :"a2.jpg"
    }
     , 
    {viewer : 487
     ,like : 10
     ,dateupload : "2018/9/22" 
     ,src :"a3.jpg"
    }
     , 
    {viewer : 577
     ,like :53
     ,dateupload : "2018/8/26" 
     ,src :"a4.jpg"
    }
     , 
    {viewer : 456 
     ,like : 25
     ,dateupload : "2018/6/15" 
     ,src :"a5.jpg"
    }
     , 
    {viewer : 558
     ,like : 30
     ,dateupload : "2018/8/19" 
     ,src :"a6.jpg"
    }
     , 
     {viewer : 147 
     ,like : 88
     ,dateupload : "2018/9/16" 
     ,src :"h1.jpg"
      }
      ,
     {viewer : 35 
     ,like : 30
     ,dateupload : "2018/9/01" 
     ,src :"h2.jpg"
      }
      ,
     {viewer : 486 
     ,like : 90
     ,dateupload : "2018/5/23" 
     ,src :"h3.jpg"
      }
      ,
     {viewer : 579
     ,like : 168
     ,dateupload : "2018/4/18" 
     ,src :"h4.jpg"
      }
      ,
     {viewer : 777
     ,like : 50
     ,dateupload : "2018/7/19" 
     ,src :"h5.jpg"
      }
      ,
     {viewer : 985
     ,like : 69
     ,dateupload : "2018/1/20" 
     ,src :"h6.jpg"
      }
      ,
     {viewer : 784
     ,like : 70
     ,dateupload : "2018/2/13" 
     ,src :"h7.jpg"
      }
      ,
     {viewer : 950 
     ,like : 75
     ,dateupload : "2018/6/13" 
     ,src :"h8.jpg"
      }
      ,
     {viewer : 56 
     ,like : 27
     ,dateupload : "2018/5/10" 
     ,src :"h9.jpg"
      }
      ,
     {viewer : 112
     ,like : 116
     ,dateupload : "2018/4/16" 
     ,src :"h10.jpg"
      }
      ,
      {
     viewer : 55
     ,like : 90
     ,dateupload : "2018/4/06" 
     ,src :"p1.jpg"
     }
     , 
      {
     viewer : 25
     ,like : 105
     ,dateupload : "2018/6/13" 
     ,src :"p2.jpg"
    }
     ,   
    {
     viewer : 589
     ,like : 106
     ,dateupload : "2018/4/23" 
     ,src :"p3.jpg"
    }
     , 
    {
     viewer : 356
     ,like : 108
     ,dateupload : "2018/6/16" 
     ,src :"p4.jpg"
    }
     , 
    {
     viewer : 475
     ,like : 53
     ,dateupload : "2018/5/20" 
     ,src :"p5.jpg"
    }
    , 
    {
     viewer : 258
     ,like : 44
     ,dateupload : "2018/7/16" 
     ,src :"p6.jpg"
    }
    , 
    {
    viewer : 441
     ,like : 21
     ,dateupload : "2018/8/19" 
     ,src :"p7.jpg"
    }
     , 
    {
     viewer : 758
     ,like : 49
     ,dateupload : "2018/9/10" 
     ,src :"p8.jpg"
    }
     , 
    {
     viewer : 300
     ,like : 20
     ,dateupload : "2018/10/15" 
     ,src :"p9.jpg"
    }
    ,    
    {
     viewer : 152 
     ,like :120
     ,dateupload : "2018/10/01" 
     ,src :"n1.jpg"
    }
    ]



//add pictures in list li element to ul element
function AddPictures(){
    var ulElem = document.createElement("ul");   
    ulElem.id = "listofimg";
    for(var j=0 ; j<pictures.length;j++){
    var liElem = document.createElement("li");
    var imgElem = document.createElement("img");
    imgElem.src = pictures[j].src;
    ulElem.appendChild(liElem);
    liElem.appendChild(imgElem);
    }
    
    document.body.appendChild(ulElem);
}



    
function Sortby(){
var key = document.getElementById("MySelect"); 
// if value equle like , date , viewer
    if(key.value == "like"){
        RemoveElement();
        
        pictures.sort(sortbylike); 
        UpdatePictures();
    }else if(key.value == "date"){
        RemoveElement();
        
        pictures.sort(sortbydate); 
        UpdatePictures();
    }else if(key.value=="viewer"){
        RemoveElement();
        
        pictures.sort(sortbyview);
        UpdatePictures();
    }
}

function sortbylike(a , b){
      
    return  b.like - a.like ;
}
function sortbyview(a , b){     
        
    return  b.viewer - a.viewer ;
}
function sortbydate(a , b){
      
        
    var timeA = a.dateupload.split("/");
    var timeB = b.dateupload.split("/");
    var date1 = (timeA[0] + timeA[1] + timeA[2])*1;
    var date2 = (timeB[0] + timeB[1] + timeB[2])*1;
    return    date2 - date1;
}


function SelectSort(){
    var span = document.createElement("span");
    var text = document.createTextNode("Sort by :      ");
    span.appendChild(text);
    // useing style 
    span.style.padding="20px";
    span.style.backgroundColor="";
    
    // create element select
    var select = document.createElement("select");
    select.id = "MySelect";
    select.onmouseup=Sortby;
    select.style.marginLeft="15px";
    select.style.padding="0px 30px 0px 30px";

    var empty = document.createElement("option");
    var optlike = document.createElement("option");
    var optdate = document.createElement("option");
    var optviewers = document.createElement("option");
    // text node
    var nodelike = 
    document.createTextNode("like");
    var nodedate =     
    document.createTextNode("date");
    var nodeview = 
    document.createTextNode("viewer");
    
    optlike.appendChild(nodelike);
    optdate.appendChild(nodedate);
    optviewers.appendChild(nodeview);
    
    select.appendChild(empty);
    select.appendChild(optlike);
    select.appendChild(optdate);
    select.appendChild(optviewers);
    document.body.appendChild(span);
    document.body.appendChild(select);
}

function RemoveElement()
{
 var ul = document.getElementById("listofimg");
      // remove element li   
        while (ul.hasChildNodes()){
          ul.removeChild(ul.firstChild);
        }    
    
}
function UpdatePictures(){
    var ul = document.getElementById("listofimg");
    // create new element li and image element
    for(var j=0 ; j<pictures.length;j++){
    var liElem = document.createElement("li");
    var imgElem = document.createElement("img");
    imgElem.src = pictures[j].src;
    ul.appendChild(liElem);
    liElem.appendChild(imgElem);
    }
    
    document.body.appendChild(ul);
}
// invoke function
SelectSort();
AddPictures();
