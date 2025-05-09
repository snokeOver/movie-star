"use client";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { AvatarDropDown } from "./AvatarDropDown";
import Logo from "../logo/Logo";
import { useUserStore } from "@/stores/auth";
import { useWatchListStore } from "@/stores/watchlist";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { user } = useUserStore();
  const { listNo } = useWatchListStore();
  const router = useRouter();

  return (
    <header className="border-b bg-background w-full sticky top-0 z-10">
      <div className="container flex justify-between items-center mx-auto h-16 px-3">
        <Logo />

        <div className="max-w-md  flex-grow">
          <input
            type="text"
            placeholder="Search for products"
            className="w-full max-w-6xl border border-gray-300 rounded-full py-2 px-5"
          />
        </div>
        <nav className="flex gap-5 items-center">
          {user?.role === "user" && (
            <Button
              variant="outline"
              className="rounded-full p-0 size-9 relative"
              onClick={() => router.push("/dashboard/user/watchlist")}
            >
              <Heart />
              <div
                className={`absolute flex items-center justify-center rounded-full bg-primary font-medium text-white ${
                  listNo > 9
                    ? "-right-2 -top-3 h-6 w-6 text-xs"
                    : "-right-2 -top-2 h-5 w-5 text-[13px]"
                }`}
              >
                <span>{listNo}</span>
              </div>
            </Button>
          )}
          {user ? (
            <AvatarDropDown />
          ) : (
            <Link href={"/login"}>
              <Button variant="outline" className="rounded-full">
                Login
              </Button>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
