'use client';

import { useState } from "react";

import { ClickableLogo } from "../clickableLogo";
import { HamburgerButton } from "../hamburgerButton";
import { NavbarLinks } from "../navbarLinks";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <nav className="bg-gray-900 p-6">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <ClickableLogo ariaLabel="Wieni cocktail recipes application" />

        <HamburgerButton isOpen={showMenu} onClick={() => setShowMenu(!showMenu)} />
        <NavbarLinks isVisible={showMenu} />
      </div>
    </nav>
  );
};
