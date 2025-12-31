import Link from "next/link";
export const metadata={
  title :"About"
}


function About(){
    return (
        <>
        <h1>Welcome to our about page</h1>
         <Link href="./">Home</Link>
        </>
    );
}
export default About