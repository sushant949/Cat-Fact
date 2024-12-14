let btn = document.querySelector("#bt");
btn.addEventListener("click",async()=>{
   let fact = await getFact();
   console.log(fact);
   let p = document.querySelector("p");
   p.innerText = fact;
});


let url = "https://catfact.ninja/fact";

async function getFact() {
    try{
        let res = await axios.get(url);
        return res.data.fact;
    }catch(e){
        console.log("error occured", e);
        return "No fact found";
    }
}
