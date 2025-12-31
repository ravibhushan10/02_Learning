"use client";

import { usePathname } from "next/navigation";

// in page not found there is no params
// to catch error url and show in screen use the usePathname Hook 
export default function BlogNotFound() {
  const a = usePathname();
  console.log(a);   //wrong url /blog/3fdefgs
  return (
    <>
      <h1>Blog Page not found!</h1>
      <p>Could not found the page you are looking for.</p>
    </>
  );
}
