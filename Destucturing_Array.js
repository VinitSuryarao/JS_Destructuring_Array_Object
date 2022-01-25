

//Array
let client =["Raju",25,"Pune"];

//Old way
console.log(client[0] +" "+client[1]+" "+client[2]);

//New Style we can directly assgin to variable
let [name, age, city]=client;
console.log(name+" "+age+" "+city);

// we can give default value also
let arr=["Vinit",,];
let [fname,fage=80,fcity="Mumbai"]=arr;
console.log(fname+" "+fage+" "+fcity);