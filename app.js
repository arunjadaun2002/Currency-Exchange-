let joke="https://official-joke-api.appspot.com/random_joke";

const  jokeid=document.getElementById("jokeid");
const  btn=document.getElementById("btn");


const getjoke=async ()=>{
    console.log("loding a joke! ");

    let data=await fetch(joke);  // this comes in json formt 
   let con= await data.json();
   
    console.log(con);

    jokeid.innerText=`${con.setup}-  ${con.punchline}`;
}

btn.addEventListener("click", getjoke);


