async function File({params}:any){
   
  const {filePath}=await params;

   return (
    <>
    <h1>File /{filePath?.join("/")}</h1>
    </>
   );
}
export default File