async function  Comments({params}:any){
   
    const obj=await params;
    const {blogID,commentID}=obj;

   return (
    <>
    <h1> Comment No <i>{commentID}</i> on <b>{blogID}</b></h1>
    </>
   );
}
export default Comments