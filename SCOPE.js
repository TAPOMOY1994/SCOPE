let a=16;


function x(){

  console.log(a);
}


x();

console.log(a);






function y(){

    var b=8;
    console.log(b);
}

y();
console.log(b);





let c=4;

if(c===4){

    let d=6;
    console.log(c);

}

 console.log(d);



var e=7;

 if(e===7){
  var f=3;
  console.log(e);
 }

console.log(f);







function abc(){//LEXICAL SCOPE//
  let name="RAHUL";
  function inner(){
    let n=7;
    function innertwo(){
      console.log(name);
      console.log(n);
    }
    innertwo();
  }
inner();
}
abc();
