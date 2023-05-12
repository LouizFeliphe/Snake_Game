let fullname = "Luiz Feliphe";
let first_name;
let last_name;

//first_name = fullname.slice(0,3)
//last_name = fullname.slice(4);
last_name = fullname.slice(fullname.indexOf(" ") + 1);
first_name = fullname.slice(0,fullname.indexOf(" "));
console.log(last_name)
console.log(first_name)