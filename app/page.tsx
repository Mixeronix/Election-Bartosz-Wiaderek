import { Noto_Sans_Javanese, Roboto } from "next/font/google";
import Image from "next/image";
import IdeasContainer from "./ideasContainer";

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

const notoFont500 = Noto_Sans_Javanese({
	weight: "500",
	subsets: ["latin"],
});

export default function Home() {
	return (
		<main className="flex flex-col gap-y-10 overflow-x-clip">
			<div className="bg-White flex px-1 sm:px-3 md:px-5 md:py-40 py-20 sm:py-32 xl:py-60 2xl:py-72 items-center gap-x-12 justify-center">
				<h1 className={`lg:text-7xl text-lg xs:text-2xl 2xl:text-8xl sm:text-4xl md:text-5xl text-center text-Black ${robotoFont700.className}`}>
					Jestem <span className={`text-LightYellow font-black ${robotoFont900.className}`}>Bartosz Wiaderek</span>
					<br />i <span className={`text-Pink font-black ${robotoFont900.className}`}>kandyduje</span> na przewodniczącego
				</h1>
			</div>

			<div className="flex flex-col w-full">
				<Image src="/wave-1.svg" width="1920" height="100" alt="" className="object-contain w-full scale-x-105" />
				<div className="bg-Black py-10 flex flex-col gap-y-4 lg:gap-y-5 xl:gap-y-9 2xl:gap-y-12 items-center justify-center w-full px-5">
					<h3 className={`lg:text-4xl xl:text-5xl text-lg xs:text-xl sm:text-2xl md:text-3xl text-Pink text-center w-fit ${robotoFont900.className}`}>
						Razem uczynimy Traugutta najlepszym!
					</h3>

					<p
						className={`xl:text-xl text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-LightBlue leading-relaxed max-w-screen-md z-10 ${notoFont500.className}`}
					>
						Cześć, nazywam się Bartek, jestem w klasie 2C (mat-fiz)
						<br /> Na codzień dużo czasu poświęcam na różnego rodzaju sport <br />
						oraz programowanie (w końcu tak powstała ta strona 😅).
						<br />
						<br /> W szkolę najbardziej lubie gdy coś się dzieje, tak zacząłem angażować się w życie szkoły, organizacje wydarzeń. Teraz nie wyobrażam sobie żeby
						było inaczej, życia bez działalności w szkole.
						<div
							className={`mt-2 md:mt-4 lg:mt-5 xl:mt-7 text-White xl:text-2xl text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl ${robotoFont500.className}`}
						>
							Moim głównym celem jest sprawić aby każdy czuł się jak uczeń najlepszego liceum w Częstochowie!
						</div>
					</p>
				</div>
				<Image src="/wave-2.svg" width="1920" height="100" alt="" className="object-contain w-full scale-x-105" />
			</div>

			<div className="bg-White w-full flex flex-col items-center py-10 md:py-16 lg:py-20 gap-y-40 px-3 sm:px-5 md:px-8 lg:px-12">
				<div className="flex flex-col items-center gap-y-1.5 text-center">
					<h1 className={`text-Red lg:text-3xl xl:text-4xl text-lg xs:text-xl sm:text-2xl md:text-3xl text-Black ${robotoFont900.className}`}>
						Pomysły które wprowadze w życie
					</h1>
					<p className={`xl:text-xl text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-center max-w-xl text-Gray ${robotoFont500.className}`}>
						Nasza szkoła oraz my - jej uczniowie - mamy ogromny potencjał. Z waszą pomocą wszystko jest możliwe! To kilka najważniejszych pomysłow, które wprowadzę
						w życie.
					</p>
				</div>

				<IdeasContainer />
			</div>
		</main>
	);
}
