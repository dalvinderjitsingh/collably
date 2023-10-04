import Link from "next/link";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";

export default function page() {
  return (
    <main>
      <Link className={buttonVariants({ variant: "outline" })} href="/">
        Home
      </Link>
      <div>Welcome to Document Editor</div>
    </main>
  );
}
