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
		<main className=" flex flex-col gap-y-10 overflow-x-clip">
			<div className="bg-White flex flex-col px-20 py-40 items-cente gap-x-12 justify-center w-screen relative overflow-clip">
				<h1 className={`text-Red text-7xl text-center text-Black ${robotoFont700.className}`}>
					Jestem <span className={`text-LightYellow font-black ${robotoFont900.className}`}>Bartosz Wiaderek</span>
					<br />i <span className={`text-Pink font-black ${robotoFont900.className}`}>kandyduje</span> na przewodniczącego
				</h1>
			</div>

			<div className="flex flex-col w-full">
				<Image src="/wave-1.svg" width="1920" height="100" alt="" className="object-contain w-full scale-x-105" />
				<div className="bg-Black py-10 flex flex-col gap-y-4 items-center justify-center w-full">
					<h3 className={`text-5xl text-Pink text-center w-fit ${robotoFont900.className}`}>Razem uczynimy Traugutta najlepszym!</h3>

					<p className={`text-lg text-LightBlue leading-relaxed max-w-screen-md z-10 ${notoFont500.className}`}>
						Cześć, nazywam się Bartek, jestem w klasie 2C (mat-fiz)
						<br /> Na codzień dużo czasu poświęcam na różnego rodzaju sport <br />
						oraz programowanie (w końcu tak powstała ta strona 😅).
						<br />
						<br /> W szkolę najbardziej lubie gdy coś się dzieje, tak zacząłem angażować się w życie szkoły, organizacje wydarzeń. Teraz nie wyobrażam sobie żeby
						było inaczej, życia bez działalności w szkole.
						<div className={`mt-2 text-LightPurple text-xl ${robotoFont500.className}`}>
							Moim głównym celem jest sprawić aby każdy czuł się jak uczeń najlepszego liceum w Częstochowie!
						</div>
					</p>
				</div>
				<Image src="/wave-2.svg" width="1920" height="100" alt="" className="object-contain w-full scale-x-105" />
			</div>

			<div className="bg-White w-full flex flex-col items-center py-20 px-20 gap-y-24 -mt-20">
				<div className="flex flex-col items-center gap-y-1.5">
					<h1 className={`text-Red text-4xl text-Black ${robotoFont900.className}`}>Pomysły które wprowadze w życie</h1>
					<p className={`text-lg text-center max-w-xl text-Gray ${robotoFont500.className}`}>
						{/* To co mnie pcha do działania to pragnienie, aby wszyscy uczniowie jeszcze bardziej czuli się tak, jakby chodzili do najlepszego liceum w Częstochowie. */}
						Nasza szkoła oraz my - jej uczniowie - mamy ogromny potencjał. To kilka najważniejszych pomysłow, które wprowadzę w życie.
						<br /> Z waszą pomocą wszystko jest możliwe!
					</p>
				</div>

				<IdeasContainer />
			</div>
		</main>
	);
}
