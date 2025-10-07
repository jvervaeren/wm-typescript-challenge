'use client'
import { Suspense, useEffect, useState } from 'react'

export const CocktailList = () => {
	const [data, setData] = useState(null);

	useEffect(() => {
		fetch("http://localhost:3000/api/cocktails")
			.then((res) => res.json())
			.then((data) => {
				console.log(data)
			});
	}, []);

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<ul></ul>
		</Suspense>
	)
}