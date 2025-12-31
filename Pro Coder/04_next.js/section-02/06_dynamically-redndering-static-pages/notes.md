
// To render the static page in dynamically
export const dynamic='force-dynamic';


<!-- ***************** -->
first priority 

// export const dynamic = "auto";   //agar koi method nahi diya to automatic dynamic  rakhega

// export const dynamic = "force-dynamic";  //method do ya na do dynamic hi rakehga

// export const dynamic = "error";    //error dega build time par hi agar koi dynamic method use ho raha ho to

// export const dynamic = "force-static";   //only statci rehega

second priority 
when all function not used like cookies(),searchParams() then it decide on the 