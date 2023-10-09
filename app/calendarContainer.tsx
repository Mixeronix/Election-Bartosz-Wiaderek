import { Roboto } from "next/font/google";
const robotoFont500 = Roboto({
	weight: "500",
	subsets: ["latin"],
});

const robotoFont700 = Roboto({
	weight: "700",
	subsets: ["latin"],
});

export default function CalendarContainer() {
	const events: { name: string; date: Date }[] = [
		{
			name: "Wieczór filmowy",
			date: new Date("2023-10-20"),
		},
		{
			name: "Rajd Traubeanów",
			date: new Date("2023-10-14"),
		},
		{
			name: "Dzień bez plecaka",
			date: new Date("2024-03-30"),
		},
		{
			name: "Dzień szefa",
			date: new Date("2023-10-16"),
		},
		{
			name: "Dzień bez skarpetek",
			date: new Date("2023-10-21"),
		},
		{
			name: "Dzień postaci z bajek",
			date: new Date("2023-11-6"),
		},
		{
			name: "Światowy dzień dobroci",
			date: new Date("2023-11-13"),
		},
		{
			name: "Dyskoteka w stylu hawaii",
			date: new Date("2023-11-3"),
		},
		{
			name: "Dzień pluszowego misia",
			date: new Date("2023-11-25"),
		},
		{
			name: "Światowy dzień AIDS",
			date: new Date("2023-12-1"),
		},
		{
			name: "Mikołajki",
			date: new Date("2023-12-6"),
		},
		{
			name: "Mikołajkowy turniej piłki nożnej",
			date: new Date("2023-12-15"),
		},
		{
			name: "Międzynarodowy dzień przytulania",
			date: new Date("2024-1-22"),
		},
		{
			name: "Turniej koszykówki 3:3",
			date: new Date("2024-1-26"),
		},
		{
			name: "Dyskoteka Mikołajkowa",
			date: new Date("2023-12-8"),
		},
		{
			name: "Dzień naleśnika",
			date: new Date("2024-2-2"),
		},
		{
			name: "Dzień Grilla",
			date: new Date("2024-5-2"),
		},
		{
			name: "Karaoke",
			date: new Date("2024-3-1"),
		},
		{
			name: "Karaoke",
			date: new Date("2024-4-12"),
		},
		{
			name: "Międzynarodowy dzień herbaty",
			date: new Date("2024-5-21"),
		},
		{
			name: "Tłusty czwartek",
			date: new Date("2024-2-15"),
		},
		{
			name: "Turniej Just Dance",
			date: new Date("2024-4-29"),
		},
		{
			name: "Międzynarodowy dzień peruki",
			date: new Date("2024-3-11"),
		},
		{
			name: "Dzień rowerowy",
			date: new Date("2024-4-19"),
		},
		{
			name: "Dyskoteka - Retro Rock 'n' Roll: ",
			date: new Date("2024-3-22"),
		},
		{
			name: "Dyskoteka Walentynkowa",
			date: new Date("2024-2-16"),
		},
		{
			name: "Dzien Spaghetti",
			date: new Date("2024-1-4"),
		},
		{
			name: "Dyskoteka Prima Aprilis",
			date: new Date("2024-4-5"),
		},
		{
			name: "Festyn szkolny",
			date: new Date("2024-5-31"),
		},
		{
			name: "Dyskoteka Black and White",
			date: new Date("2024-5-10"),
		},
		{
			name: "Dyskoteka w stylu lata",
			date: new Date("2024-6-7"),
		},
	];
	const months = ["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"];

	return (
		<div className="flex flex-col gap-y-8 md:gap-y-12 lg:gap-y-16 sm:gap-y-20 w-full items-end max-w-screen-lg py-10 relative">
			{events
				.sort(function (a, b) {
					return a.date.getTime() - b.date.getTime();
				})
				.map((event, i) => (
					<div className="w-full flex flex-row-reverse items-center gap-x-3" key={i}>
						<div className="w-6 h-6 z-10 p-1 -m-1 rounded-full bg-Pink/60">
							<div className="w-4 h-4 rounded-full bg-Purple/90"> </div>
						</div>
						<p className={`text-xs sm:text-base md:text-lg xs:text-sm whitespace-nowrap ${robotoFont500.className}`}>
							{event.date.getDate()} {months[event.date.getMonth()]} {event.date.getFullYear()}
						</p>

						<h2 className={`text-base sm:text-xl text-right md:text-2xl xs:text-lg me-2 xs:me-5 sm:me-10 md:me-16 lg:me-20 ${robotoFont700.className}`}>
							{event.name}
						</h2>
					</div>
				))}

			<div className="absolute top-0 right-0 h-full w-4 p-1.5 bg-Gray/50 rounded-xl">
				<div className="h-full w-1 bg-Black rounded-lg"></div>
			</div>
		</div>
	);
}
