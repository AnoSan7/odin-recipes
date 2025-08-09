let toggler=document.querySelector("#toggler");
if(localStorage.getItem("dark")==="true"){
    document.body.classList.add("dark");
    toggler.checked=true;
}
toggler.addEventListener("change",()=>{
    document.body.classList.toggle("dark");
    localStorage.setItem("dark",toggler.checked);
});