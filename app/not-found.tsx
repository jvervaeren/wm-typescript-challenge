import Link from "next/link";

export default function NotFound() {
	return (
		<main>
			<h2 className="text-4xl text-center text-gray-900 font-bold">
				Why is the rum gone?
				<span className="sr-only">Page not found</span>
			</h2>
			<p className="block text-center text-gray-900 py-8">
				The requested page you were looking for could not be found
			</p>
			<p className="block text-center">
				<Link
					href="/"
					className="p-2 underline underline-offset-4 decoration-gray-900 text-gray-900 rounded-sm hover:bg-gray-900 hover:text-gray-50 focus:bg-gray-900 focus:text-gray-50"
				>
					To homepage
					<span className="sr-only">Go to homepage</span>
				</Link>
			</p>
		</main>
	);
}
