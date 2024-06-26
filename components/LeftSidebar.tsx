"use client";

import { sidebarLinks } from "@/contants";
import { SignedIn, SignedOut, useAuth, useClerk } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";

const LeftSidebar = () => {
  const { signOut } = useClerk();
  const { userId } = useAuth();
  const pathname = usePathname();
  if (!userId) return;

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r px-6 pb-8 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]">
      <div className="flex flex-1 flex-col gap-6">
        {sidebarLinks.map((item, index) => {
          const isActive =
            (pathname.includes(item.route) && item.route.length > 1) ||
            pathname === item.route;

          if (item.route === "/profile") {
            if (userId) {
              item.route = `${item.route}/${userId}`;
            } else {
              return null;
            }
          }

          return (
            <Link
              key={index}
              href={item.route}
              className={`${
                isActive
                  ? "primary-gradient text-light-900"
                  : "text-dark500_light700"
              } flex items-center gap-4 rounded-lg p-4`}
            >
              <Image
                src={item.imgURL}
                width={24}
                height={24}
                alt={item.label}
                className={`${isActive ? "" : "invert-colors"}`}
              />
              <p
                className={`${
                  isActive ? "base-bold" : "base-medium"
                } max-lg:hidden`}
              >
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>
      <div>
        <SignedIn>
          <Link
            href="/sign-up"
            className="small-medium flex max-h-[56px] max-w-[218px] items-center gap-2 rounded-lg  px-4 py-3 shadow-none"
          >
            <Image
              src="/assets/icons/logout.svg"
              width={24}
              height={24}
              alt="logout"
              className="invert-colors2"
            />
            <Button
              className="text-dark400_light900 p-0 max-lg:hidden"
              onClick={handleLogout}
            >
              Log Out
            </Button>
          </Link>
        </SignedIn>
        <SignedOut>
          <div className="flex flex-col gap-4">
            <Link href="/sign-in">
              <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                <span className="primary-text-gradient">Log In</span>
              </Button>
            </Link>

            <Link href="/sign-up">
              <Button className="small-medium btn-tertiary light-border-2 text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                Sign Up
              </Button>
            </Link>
          </div>
        </SignedOut>
      </div>
    </section>
  );
};

export default LeftSidebar;
