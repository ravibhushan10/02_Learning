export async function generateMetadata({params}:any){
   
    const {blogID}=await params;

    return {
        
        title:`Blog ${blogID}`
    }
}
// set dynamic metadata

async function Blog({params}:any){
   
    const obj=await params;
    const {blogID}=obj;
   return (
    <>
    <h1>Blog {blogID}</h1>
    </>
   );
}
export default Blog