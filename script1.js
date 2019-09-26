var data='[{"name":"Aragon","race":"Human"},{"name":"Gimli","race":"Dwarf"}]'
data=JSON.parse(data);
for(var i=0; i<data.length;i++){
    console.log(data[i].name+' is a '+data[i].race);
}

console.log("*************************************");
var request=new XMLHttpRequest();
request.open('GET','data.json',true);

request.onload=function(){
    var data=JSON.parse(this.response);
    for(var i=0;i<data.length;i++){
        console.log(data[i].name+' es un '+data[i].race+'.');
    }
}

request.send();
