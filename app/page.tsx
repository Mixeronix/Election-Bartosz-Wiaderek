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
			<div className="bg-White flex px-20 pt-32 items-center pb-52 gap-x-12 justify-center w-screen relative overflow-clip">
				<div className="z-10 flex flex-col justify-center h-fit gap-y-16">
					<h1 className={`text-Red text-7xl text-center text-Black ${robotoFont700.className}`}>
						Jestem <span className={`text-Pink font-black ${robotoFont900.className}`}>Bartosz Wiaderek</span>
						<br />i <span className={`text-Green/80 font-black ${robotoFont900.className}`}>kandyduje</span> na przewodniczącego
					</h1>
					<div className="my-10 py-10 gap-y-3 flex flex-col rounded-3xl relative w-fit overflow-visible">
						<h3 className={`text-3xl text-Black z-10 ${robotoFont700.className}`}>Razem uczynimy Traugutta lepszym!</h3>

						<p className={`text-xl text-Gray leading-relaxed z-10 ${notoFont500.className}`}>
							Cześć, nazywam się Bartosz Wiaderek,
							<br /> jestem w klasie 2C (mat-fiz)
							<br /> i <span className={` text-Black ${robotoFont500.className}`}>kandyduje na przewodniczącego Traugutta!</span>
							<br /> Myślę, że razem jesteśmy wstanie zrobić wiele.
						</p>
						<Image
							src="/blob.svg"
							alt=""
							className="-z-10 scale-[180%] scale-x-[300%] aspect-square w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
							width={200}
							height={200}
						/>
					</div>
				</div>

				{/* <div className="z-10">
					<Image src={"/me.JPG"} alt="" height={1920} width={1080} className="rounded-lg aspect-[10/16] bg-gray-600 w-80 object-cover"></Image>
				</div> */}

				<Image src="/bg.svg" alt="" className="object-cover absolute w-full h-full left-0 right-0 bottom-0" width={200} height={200} />
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
