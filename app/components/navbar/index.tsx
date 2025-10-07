import { ClickableLogo } from "../clickableLogo";
import { HamburgerButton } from "../hamburgerButton";
import { NavbarLinks } from "../navbarLinks";

export const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-6">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <ClickableLogo ariaLabel="Wieni cocktail recipes application" />

        <HamburgerButton />
        <NavbarLinks />
      </div>
    </nav>
  );
};
