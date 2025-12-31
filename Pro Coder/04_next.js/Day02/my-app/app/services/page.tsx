import Link from "next/link";

export const metadata={
  title :"Services"
}

function Services() {
  return (
    <>
      <h1>All Services</h1>
     

      {/* here you have to give the full path , but in react you only write the "/web-dev" , it automatically append with current path */}
      <p>
        <Link href="./services/web-dev">Web Development</Link>
      </p>
    
      <p>
        <Link href="./services/seo">SEO</Link>
      </p>
    </>
  );
}
export default Services;
