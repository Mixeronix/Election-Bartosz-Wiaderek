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
			<div className="bg-White flex flex-col gap-y-10 md:gap-y-16 lg:gap-y-20 px-1 sm:px-3 md:px-5 md:py-40 py-20 sm:py-32 xl:py-60 2xl:py-72 items-center gap-x-12 justify-center">
				<h1 className={`lg:text-7xl text-xl xs:text-2xl 2xl:text-8xl sm:text-4xl md:text-5xl text-center text-Black ${robotoFont700.className}`}>
					Jestem <span className={`text-LightYellow font-black ${robotoFont900.className}`}>Bartosz Wiaderek</span>
					<br />i <span className={`text-Pink font-black ${robotoFont900.className}`}>kandyduje</span> na przewodniczącego
				</h1>

				<div className="flex items-center px-3 xs:px-5 sm:px-7 md:px-9 lg:px-12 lg:justify-center flex-col-reverse gap-y-7 gap-x-10 xl:gap-x-12 lg:flex-row relative h-fit justify-start">
					<p
						className={`text-Black max-w-md xl:text-2xl text-center lg:text-right text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl ${robotoFont700.className}`}
					>
						"Moim głównym celem jest sprawić aby każdy czuł się jak uczeń najlepszego liceum w Częstochowie!"
					</p>
					<Image src="/me.png" width="1000" height="1000" alt="" className="w-2/3 md:w-1/2 xl:w-2/5" />
				</div>
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
					</p>
				</div>
				<Image src="/wave-2.svg" width="1920" height="100" alt="" className="object-contain w-full scale-x-105" />
			</div>

			<div className="bg-White w-full flex flex-col items-center py-10 md:py-16 lg:py-20 gap-y-16 sm:gap-y-20 md:gap-y-40 px-3 sm:px-5 md:px-8 lg:px-12">
				<div className="flex flex-col items-center gap-y-1.5 text-center">
					<h1 className={`text-Red lg:text-3xl xl:text-4xl text-lg xs:text-xl sm:text-2xl md:text-3xl text-Black ${robotoFont900.className}`}>
						Pomysły które wprowadze w życie
					</h1>
					<p className={`xl:text-xl text-xs xs:text-sm sm:text-base max-w-lg md:text-lg lg:text-xl text-center md:max-w-xl text-Gray ${robotoFont500.className}`}>
						Nasza szkoła oraz my - jej uczniowie - mamy ogromny potencjał. Z waszą pomocą wszystko jest możliwe! To kilka najważniejszych pomysłow, które wprowadzę
						w życie.
					</p>
				</div>

				<IdeasContainer />
			</div>
		</main>
	);
}
