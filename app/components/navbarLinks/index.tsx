import Link from "next/link";

const navbarStyles = {
	style: "block py-2 text-gray-50 font-normal",
	/* default:
		"block border-b border-gray-100 py-2 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-gray-500 md:dark:hover:bg-transparent md:dark:hover:text-white",
	active:
		"block rounded bg-blue-700 py-2 text-white dark:text-white md:bg-transparent md:p-0 md:text-gray-900 underline dark:md:text-white", */
};

export const NavbarLinks = () => {
	return (
		<div className="hidden w-full md:block md:w-auto" id="mobile-menu">
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