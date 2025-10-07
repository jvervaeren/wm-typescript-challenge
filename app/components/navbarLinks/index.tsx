import Link from "next/link";

interface NavbarLinksProps {
	isVisible: boolean
	onLinkClick: () => void
}

const navbarStyles = {
	style: "inline-block md:block p-1 text-gray-50 font-normal underline underline-offset-2 decoration-gray-50 text-gray-50 rounded-sm hover:ring-2 hover:ring-gray-200 focus:ring-2 focus:ring-gray-200",
};

export const NavbarLinks = ({ isVisible, onLinkClick }: NavbarLinksProps) => {
	return (
		<div className={`${isVisible ? "block" : "hidden"} w-full md:block md:w-auto`} id="mobile-menu">
			<ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
				<li className="py-1">
					<Link
						data-testid="navbar-link--home"
						href={"/"}
						className={navbarStyles.style}
						aria-label="View most popular cocktail recipes"
						onClick={onLinkClick}
					>
						Most popular
					</Link>
				</li>
				<li className="py-1">
					<Link
						data-testid="navbar-link--recipes"
						href={"/recipes"}
						className={navbarStyles.style}
						aria-label="View all cocktail recipes"
						onClick={onLinkClick}
					>
						All recipes
					</Link>
				</li>
			</ul>
		</div>
	)
}