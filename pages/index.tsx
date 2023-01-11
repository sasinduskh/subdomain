import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [subDomain, setSubdomain] = useState(null);

  useEffect(() => {
    const host = window.location.host;

    const arr: any = host
      .split(".")
      .slice(0, host.includes("localhost") ? -1 : -2);
    if (arr.length > 0) setSubdomain(arr[0]);
  }, []);
  return <div>{subDomain}</div>;
}
