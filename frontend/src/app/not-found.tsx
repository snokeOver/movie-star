import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative flex h-full flex-col">
      <Navbar />
      <div className="my-20">
        <div className="mx-auto flex h-[300px] w-[300px] flex-col items-center justify-center gap-5 lg:h-[500px] xl:h-[calc(100vh-250px)] lg:w-[570px] lg:gap-10">
          <Image
            src={"/errors/404.png"}
            alt={"404"}
            width={1000}
            height={1000}
            className="h-full w-full rounded-md object-cover object-center"
          />

          <p className="text-center">
            Sorry, we can&apos;t find the page you&apos;re looking
          </p>
          <Link href="/">
            <Button className="px-8 uppercase">Back To Home</Button>
          </Link>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}
