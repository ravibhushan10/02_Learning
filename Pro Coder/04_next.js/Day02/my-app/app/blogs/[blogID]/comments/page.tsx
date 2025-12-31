async function  Comments({params}:any){
   
    const obj=await params;
    const {blogID}=obj;
   return (
    <>
    <h1>All Comments on {blogID} page</h1>
    </>
   );
}
export default Comments