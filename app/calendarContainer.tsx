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
			date: new Date("2023-11-5"),
		},
		{
			name: "Światowy dzień dobroci",
			date: new Date("2023-11-13"),
		},
		{
			name: "Dzień kredki",
			date: new Date("2023-11-22"),
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
			name: "Międzynarodowy dzień przytulania",
			date: new Date("2024-1-21"),
		},
		{
			name: "Dyskoteka Mikołajkowa",
			date: new Date("2023-12-8"),
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
						<p className={`text-xs sm:text-base md:text-lg xs:text-sm ${robotoFont500.className}`}>
							{event.date.getDate()} {months[event.date.getMonth()]} {event.date.getFullYear()}
						</p>

						<h2 className={`text-base sm:text-xl md:text-2xl xs:text-lg me-5 sm:me-10 md:me-16 lg:me-20 ${robotoFont700.className}`}>{event.name}</h2>
					</div>
				))}

			<div className="absolute top-0 right-0 h-full w-4 p-1.5 bg-Gray/50 rounded-xl">
				<div className="h-full w-1 bg-Black rounded-lg"></div>
			</div>
		</div>
	);
}
