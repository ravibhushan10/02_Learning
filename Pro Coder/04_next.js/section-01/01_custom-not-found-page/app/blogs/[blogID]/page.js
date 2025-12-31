import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { blogID } = await params;
  return {
    title: `Blog ${blogID}`,
  };
}

// check the input URL is number or anything
// /^\d+$/  : regular expression(it gives you true or false)
export default async function Blog({ params }) {
  const { blogID } = await params;
  if (!/^\d+$/.test(blogID)) {
    notFound();
  }
  return <div>Blog {blogID}</div>;
}
