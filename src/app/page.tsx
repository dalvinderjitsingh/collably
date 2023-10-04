import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ModeToggle />
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Link className={buttonVariants({ variant: "outline" })} href="./chat">
          Chat
        </Link>

        <Link
          className={buttonVariants({ variant: "outline" })}
          href="./whiteboard"
        >
          Whiteboard
        </Link>

        <Link
          className={buttonVariants({ variant: "outline" })}
          href="./document-editor"
        >
          Document Editor
        </Link>
      </div>
    </main>
  );
}
