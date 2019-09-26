var data='[{"name":"Aragon","race":"Human"},{"name":"Gimli","race":"Dwarf"}]'
data=JSON.parse(data);
for(var i=0; i<data.length;i++){
    console.log(data[i].name+' is a '+data[i].race);
}