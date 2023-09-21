"use client";

import * as React from "react";
import { Menu } from "../menu/menu";
import { ModeToggle } from "../theme-provider/theme-toggle";

export default function Navbar() {
  return (
    <div className="flex w-full items-center justify-between p-4 px-8 h-[60]px border-t-4 ">
      <Menu />
      <div>
        <ModeToggle />
      </div>
    </div>
  );
}
