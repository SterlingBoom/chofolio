import { useRouter } from "next/router";
import { useEffect } from "react";
const Error404 = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div>
      <h1 style={{ width: "100%", textAlign: "center" }}>Page Not Found</h1>
    </div>
  );
};

export default Error404;
