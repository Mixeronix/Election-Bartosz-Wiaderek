"use client";

import { IconDefinition, faBaseball, faCalendar, faCheck, faClose, faKitMedical, faLightbulb, faMobileScreen, faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import { Noto_Sans_Javanese, Roboto } from "next/font/google";
import { useState } from "react";
type ideaDataType = {
	title: string;
	content: string;
	icon: IconDefinition;
	currently?: string;
	done?: string;
	todo?: string;
};

const robotoFont900 = Roboto({
	weight: "900",
	subsets: ["latin"],
});

const robotoFont700 = Roboto({
	weight: "700",
	subsets: ["latin"],
});
const notoFont400 = Noto_Sans_Javanese({
	weight: "400",
	subsets: ["latin"],
});

export default function IdeasContainer() {
	const [openedIdea, setOpenedIdea] = useState<string | null>(null);

	const ideas: ideaDataType[] = [
		{
			title: "Reaktywacja imprez muzycznych",
			content:
				'Przez bardzo długi czas w naszej szkole regularnie odbywało się wiele wydarzeń muzycznych. Starsi uczniowie mogą jeszcze pamiętać: "Traugutt Rock Music Festiwal" czy "Serce Dla Traugutta". Uważam, że były to niesamowite eventy, dlatego chciałbym do nich powrócić. Reaktywacja będzie wiązała się ze sporą ilością przeszkód, przecie od lat nikt ich już nie organizował, ale zdecydowanie nie jest to niczym niemożliwym!',
			icon: faMusic,
			done: "Porozmawiać z nauczycielami organizującymi te wydarzenia w poprzednich latach. Wszyscy z nich bardzo chętnie pomogą w organizacji! Inaczej mówiąc wygląda na to, że uda się wrócić do tradycji sprzed lat!",
			currently:
				"W trakcie jest tworzenie szkolnego zespołu muzycznego, który jest oczywiście kluczowy dla powodzenia obydwóch wydarzeń. Zaraz po postaniu takiego zespołu bierzemy się do pracy!",
			todo: "Do przygotowania są oczywiście plany tych wydarzeń, ustalenie ich przebiegu, organizacja nagłośnienia itd. Narazie skupiamy się na stworzeniu zgranej paczki utalentowanych osób (ps. jeżeli jesteś zainteresowany/a można się zgłosić do mnie lub do profesora Bojanka)",
		},
		{
			title: "Regularne wydarzenia",
			content:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit.Amet enim nulla, facilis magni eum aspernatur nostrum repellat molestias impedit vel illo accusantium architecto commodi voluptate quia, eligendi explicabo necessitatibus tempore.",
			icon: faCalendar,
		},
		{
			title: "Rozbudowa kółek szkolnych",
			content:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit.Amet enim nulla, facilis magni eum aspernatur nostrum repellat molestias impedit vel illo accusantium architecto commodi voluptate quia, eligendi explicabo necessitatibus tempore.",
			icon: faKitMedical,
		},
		{
			title: "Modernizacja mediów szkoły",
			content:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit.Amet enim nulla, facilis magni eum aspernatur nostrum repellat molestias impedit vel illo accusantium architecto commodi voluptate quia, eligendi explicabo necessitatibus tempore.",
			icon: faMobileScreen,
		},
		{
			title: "Drużyny sportowe oraz zawdody",
			content:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit.Amet enim nulla, facilis magni eum aspernatur nostrum repellat molestias impedit vel illo accusantium architecto commodi voluptate quia, eligendi explicabo necessitatibus tempore.",
			icon: faBaseball,
		},
	];

	return (
		<>
			<div className="flex flex-col gap-y-12 w-full max-w-screen-2xl">
				{ideas.map((idea: ideaDataType, i) => (
					<motion.div
						layoutId={i.toString()}
						className={`flex flex-col gap-y-3 max-w-screen-sm ${i % 2 == 0 ? "me-auto items-start" : "ms-auto items-end"}`}
						key={i}
					>
						<motion.div className={`flex text-Black items-center gap-x-3 ${i % 2 == 0 ? "flex-row" : "flex-row-reverse"}`}>
							<FontAwesomeIcon icon={idea.icon} className="h-7 aspect-square" />
							<motion.h4 className={`text-3xl ${robotoFont900.className}`}>{idea.title}</motion.h4>
						</motion.div>

						<motion.p className={`text-Gray line-clamp-5 ${notoFont400.className} ${i % 2 == 0 ? "text-left" : "text-right"}`}>{idea.content}</motion.p>

						<button
							onClick={() => setOpenedIdea(i.toString())}
							className={`w-fit px-5 py-1.5 border-2 border-Purple rounded-3xl transition-all text-Purple hover:text-Black ${robotoFont700.className}`}
						>
							Czytaj więcej...
						</button>
					</motion.div>
				))}

				<AnimatePresence>
					{openedIdea && (
						<motion.div className="flex items-center justify-center w-screen h-screen fixed top-0 left-0 z-20">
							<motion.div
								layoutId={openedIdea}
								className={`flex flex-col gap-y-3 max-w-screen-lg items-start fixed bg-white rounded-3xl z-30 p-10`}
								key={parseInt(openedIdea)}
							>
								<motion.div className={`flex text-Black items-center gap-x-3 w-full`}>
									<FontAwesomeIcon icon={ideas[parseInt(openedIdea)].icon} className="h-7 aspect-square" />
									<motion.h4 className={`text-3xl me-auto ${robotoFont900.className}`}>{ideas[parseInt(openedIdea)].title}</motion.h4>
									<FontAwesomeIcon
										onClick={() => setOpenedIdea(null)}
										icon={faClose}
										className="h-5 text-Purple rounded-full border-2 border-Purple p-0.5 cursor-pointer aspect-square"
									/>
								</motion.div>

								<motion.p className={`text-Gray ${notoFont400.className}`}>{ideas[parseInt(openedIdea)].content}</motion.p>

								<motion.div className="w-full flex gap-x-5 pt-3 border-t-2">
									<div className={`flex-1 ${ideas[parseInt(openedIdea)].done != undefined ? "" : "hidden"}`}>
										<div className="flex items-center gap-x-2">
											<FontAwesomeIcon icon={faCheck} className="h-5 aspect-square text-Pink" />

											<h5 className={`text-Pink text-xl ${robotoFont700.className}`}>Zrobione</h5>
										</div>
										<p className={`text-sm ps-1 pt-1 ${notoFont400.className}`}>{ideas[parseInt(openedIdea)].done}</p>
									</div>

									<div className={`flex-1 ${ideas[parseInt(openedIdea)].currently != undefined ? "" : "hidden"}`}>
										<div className="flex items-center gap-x-2">
											<FontAwesomeIcon icon={faCheck} className="h-5 aspect-square text-Yellow" />

											<h5 className={`text-Yellow text-xl ${robotoFont700.className}`}>W trakcie</h5>
										</div>
										<p className={`text-sm ps-1 pt-1 ${notoFont400.className}`}>{ideas[parseInt(openedIdea)].currently}</p>
									</div>

									<div className={`flex-1 ${ideas[parseInt(openedIdea)].todo != undefined ? "" : "hidden"}`}>
										<div className="flex items-center gap-x-2">
											<FontAwesomeIcon icon={faCalendar} className="h-5 aspect-square text-Green" />

											<h5 className={`text-Green text-xl ${robotoFont700.className}`}>Co dalej?</h5>
										</div>
										<p className={`text-sm ps-1 pt-1 ${notoFont400.className}`}>{ideas[parseInt(openedIdea)].todo}</p>
									</div>
								</motion.div>
							</motion.div>

							<div onClick={() => setOpenedIdea(null)} className="w-screen h-screen fixed top-0 left-0 z-20 bg-Gray/30"></div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</>
	);
}
