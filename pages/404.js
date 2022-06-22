import Link from "next/Link";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function NotFound() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <div className="not-found">
      <h1>Opss......</h1>
      <h2>That page could not be found </h2>
      <p>
        GO back to The
        <Link href="/">
          <a> HomePage</a>
        </Link>
      </p>
    </div>
  );
}
