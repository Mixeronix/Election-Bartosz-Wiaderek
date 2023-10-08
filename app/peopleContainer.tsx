import { Roboto } from "next/font/google";
const robotoFont900 = Roboto({
	weight: "900",
	subsets: ["latin"],
});

const robotoFont700 = Roboto({
	weight: "700",
	subsets: ["latin"],
});

const robotoFont500 = Roboto({
	weight: "500",
	subsets: ["latin"],
});

export default function PeopleContainer() {
	const people: { name: String; class?: String }[] = [
		{ name: "Laura Wieczorek", class: "2c" },
		{ name: "Hania Radwańska", class: "2c" },
		{ name: "Filip Banaś", class: "2b" },
		{ name: "Ola Cieślak", class: "2d" },
		{ name: "Wiktor Woszczyk", class: "2d" },
		{ name: "Julia Stępień", class: "2b" },
		{ name: "Amelka Lemańska", class: "2b" },
		{ name: "Krzysztof Dziubiński", class: "2c" },
		{ name: "Błażej Kołodziejski", class: "2c" },
		{ name: "Olek Gałka", class: "2c" },
		{ name: "Oskar Lewicki", class: "2c" },
		{ name: "Tymon Drabiński", class: "2c" },
		{ name: "Paulina Podsiadlik", class: "2e" },
		{ name: "Marianna Stachura", class: "2e" },
		{ name: "Martyna Plachetka", class: "2b" },
		{ name: "Sofia Kolodiazhna", class: "2a" },
		{ name: "Alicja Kowalczyk" },
		{ name: "Zuzanna Chłód" },
	];

	return (
		<div className="flex flex-wrap max-w-xl md:max-w-2xl lg:max-w-4xl items-center justify-center gap-2 md:gap-3 lg:gap-4 xl:gap-5">
			{people.map((person) => (
				<div className="flex flex-row items-end gap-x-1 justify-center">
					<p className={`text-Black xl:text-xl text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl ${robotoFont700.className}`}>{person.name}</p>
					<p className={`text-Gray xl:text-lg text-[0.6rem] xs:text-xs sm:text-sm md:text-base lg:text-lg ${robotoFont500.className}`}>{person.class}</p>
				</div>
			))}
		</div>
	);
}
