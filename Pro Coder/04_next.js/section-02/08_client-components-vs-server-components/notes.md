By default jo bhi components create karte hai oo server components hota hai.
<!-- ***************** -->
Server components : the components which only execute on the server
-> Jo work only server par ho sake usko server components banate hai
<!-- ***************************** -->
Client components : it execute on the server as well as client 
-> Jo work only client par ho sake usko client components banate hai
<!-- ******** Make server components to client components ***************** -->
you have to use the directive : "use client"
-> server par error dega but client side par chal jayega because browser support "window, localSotrage" 
->Pura raw component aata hai client ke pass "source map" ke from me , look like JSX but it is not ..


<!-- ********************** -->
  if(typeof localStorage !=="undefined")    //ab server par bhi error nahi aayega,vaha ye "object" ban jayega

  console.log(localStorage);


-> In JS when you anything with typeof (jo definde nahi hai ) to oo "undefind" deta hai by default.

<!-- ********************** -->
 return (
    <div onClick={()=>{
      console.log("Like button clicked");
    }}>
      1K Views  {console.log("Running on server")}   // Jab ye server par run nahi hoga then consol.log by default  "undefind" return karega ,, And our React not show the undefined in UI
    </div>
  )
-> Ye code server par run hoga but Our Next.js is very smart , it skip this part of code 
-> again ye code client par bhi run hoga  

<!-- ************************* -->