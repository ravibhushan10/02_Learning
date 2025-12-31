"use client"

export default  function Liews() {
  //  Browser se related kuchh bhi access aap server par nahi kar sakte hai oo defined hi nahi hai(usko client components banana hoga)
  // console.log(window);
  // console.log(localStorage);
  
 
  if(typeof localStorage !=="undefined")    //ab server par bhi error nahi aayega
  console.log(localStorage);


  console.log("Like components");

  return (
    <div onClick={()=>{
      console.log("Like button clicked");
    }}>
      1K Views   {String(console.log("Running on server"))}
    </div>
  )
}
