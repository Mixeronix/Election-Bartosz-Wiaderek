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

const notoFont700 = Noto_Sans_Javanese({
	weight: "700",
	subsets: ["latin"],
});

const notoFont500 = Noto_Sans_Javanese({
	weight: "500",
	subsets: ["latin"],
});

export default function Home() {
	return (
		<main className=" flex flex-col gap-y-10 overflow-x-clip">
			<div className="bg-White flex px-20 pt-20 items-center pb-52 gap-x-12 justify-center w-screen relative overflow-clip">
				<div className="z-10 flex flex-col justify-center gap-y-8 bg-White h-fit p-16 rounded-[50px]">
					<h1 className={`text-Red text-6xl text-Black ${robotoFont900.className}`}>
						Jestem <br />
						Bartosz Wiaderek.
					</h1>

					<h3 className={`text-3xl text-Black ${robotoFont700.className}`}>Razem uczynimy Traugutta lepszym!</h3>

					<p className={`text-xl text-Gray leading-relaxed ${notoFont500.className}`}>
						Cześć, nazywam się Bartosz Wiaderek,
						<br /> jestem w klasie 2C
						<br /> i <span className={`${notoFont700.className} text-Black`}>kandyduje na przewodniczącego Traugutta!</span>
					</p>
				</div>

				<div className="z-10">
					<Image src={"/me.JPG"} alt="" height={1920} width={1080} className="rounded-lg aspect-[10/16] bg-gray-600 w-80 object-cover"></Image>
				</div>

				<Image src="/blob.svg" alt="" className="object-cover blob absolute w-full h-full left-0 right-0 bottom-0" width={200} height={200} />
			</div>

			<div className="bg-White w-full flex flex-col items-center py-20 px-20 gap-y-24 -mt-20">
				<div className="flex flex-col items-center gap-y-1.5">
					<h1 className={`text-Red text-4xl text-Black ${robotoFont900.className}`}>Pomysły które wprowadze w życie</h1>
					<p className={`text-lg text-center max-w-xl text-Gray ${robotoFont500.className}`}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sint fugit, impedit perferendis dolorem, quas quaerat ut recusandae magni vel ratione
						aspernatur velit hic ad officiis quo ex illo iure.
					</p>
				</div>

				<IdeasContainer />
			</div>
		</main>
	);
}
