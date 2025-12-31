import { Geist, Geist_Mono } from "next/font/google";
// to add metadata use this one
export const metadata={
 title:{
   template:"%s | Technical Agency",
   default:"Technical Agency"
 }
}



export default function RootLayout({ children }:any) {
  return (
    <html lang="en">
      
      <body >
        <header style={{background:'teal'}}>Header</header>
        {children}
        <footer style={{background:"brown"}}>Footer</footer>
      </body>
    </html>
  );
}
