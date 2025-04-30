"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CreditCard, LogOut, Plus, User } from "lucide-react";

import { logOut } from "@/services/auth/logOut";

import { usePathname, useRouter } from "next/navigation";
import { privateRoutes } from "@/constants/privateRoutes";
import { useUserStore } from "@/stores/auth";
import { toast } from "sonner";

export function AvatarDropDown() {
  const { user, clearUser } = useUserStore();
  const pathname = usePathname();
  const router = useRouter();

  const handleLogOut = async () => {
    await logOut();
    clearUser();

    if (privateRoutes.some((route) => pathname.match(route))) {
      router.push("/");
    }
    toast.success("Log out successfull");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage src={user?.profilePhoto} alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-44">
        <DropdownMenuLabel className="flex flex-col gap-0.5">
          <span className="uppercase">{user?.name}</span>
          <span className="text-xs text-muted-foreground">{user?.email}</span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">
          <User className="text-white" />
          <span>Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => router.push(`dashboard/${user?.role}`)}
        >
          <Plus className="text-white" />
          <span>Dashboard</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          <CreditCard className="text-white" />
          <span>Billing</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          <Plus className="text-white" />
          <span>New Post</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="text-red-600 cursor-pointer"
          onClick={() => handleLogOut()}
        >
          <LogOut className="text-red-600" /> <span>Log Out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
