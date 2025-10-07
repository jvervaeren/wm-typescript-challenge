import Link from "next/link";

interface NavbarLinksProps {
	isVisible: boolean
}

const navbarStyles = {
	style: "block py-2 text-gray-50 font-normal",
};

export const NavbarLinks = ({ isVisible }: NavbarLinksProps) => {
	return (
		<div className={`${isVisible ? "block" : "hidden"} w-full md:block md:w-auto`} id="mobile-menu">
			<ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
				<li>
					<Link
						data-testid="navbar-link--home"
						href={"/"}
						className={navbarStyles.style}
						aria-label="View most popular cocktail recipes"
					>
						Most popular
					</Link>
				</li>
				<li>
					<Link
						data-testid="navbar-link--recipes"
						href={"/recipes"}
						className={navbarStyles.style}
						aria-label="View all cocktail recipes"
					>
						All recipes
					</Link>
				</li>
			</ul>
		</div>
	)
}