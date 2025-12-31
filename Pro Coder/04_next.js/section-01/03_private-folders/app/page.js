import Link from "next/link";
import Page from "../_components/page";

export default function Home() {
  return (
    <>
      <h1>Technical Agency</h1>
      <Page/>
      <p>
        <Link href="/blogs">Blogs</Link>
      </p>{" "}
      <p>
        <Link href="/about">About</Link>
      </p>{" "}
      <p>
        <Link href="/services">Services</Link>
      </p>
      <p>
        <Link href="/files">Files</Link>
      </p>
    </>
  );
}
