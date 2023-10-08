"use client";

import { IconDefinition, faBaseball, faCalendar, faCheck, faClose, faKitMedical, faList, faMobileScreen, faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import { Noto_Sans_Javanese, Roboto } from "next/font/google";
import { useState } from "react";

type ideaDataType = {
	title: string;
	content: string | JSX.Element;
	icon: IconDefinition;
	currently?: string | JSX.Element;
	done?: string | JSX.Element;
	todo?: string | JSX.Element;
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
				"Przez bardzo długi czas w naszej szkole regularnie odbywało się wiele wydarzeń muzycznych. Starsi uczniowie mogą jeszcze pamiętać: 'Traugutt Rock Music Festival' czy 'Serce Dla Traugutta'. Uważam, że były to niesamowite eventy, dlatego chciałbym do nich powrócić. Reaktywacja będzie wiązała się ze sporą ilością przeszkód, przecież od lat nikt ich już nie organizował, ale zdecydowanie nie jest to niczym niemożliwym!",
			icon: faMusic,
			done: "Porozmawiać z nauczycielami organizującymi te wydarzenia w poprzednich latach. Wszyscy z nich bardzo chętnie pomogą w organizacji! Inaczej mówiąc, wygląda na to, że uda się wrócić do tradycji sprzed lat!",
			currently:
				"W trakcie jest tworzenie szkolnego zespołu muzycznego, który jest oczywiście kluczowy dla powodzenia obydwóch wydarzeń. Zaraz po utworzeniu takiego zespołu bierzemy się do pracy!",
			todo: "Do przygotowania są oczywiście plany tych wydarzeń, ustalenie ich przebiegu, organizacja nagłośnienia itd. Na razie skupiamy się na stworzeniu zgranej grupy utalentowanych osób (ps. jeżeli jesteś zainteresowany/a, możesz się zgłosić do mnie lub do profesora Bojanka).",
		},
		{
			title: "Regularne wydarzenia i dyskoteki",
			content:
				"Codzienność w szkole jest dość nudna, ale jak na wszystko, na to też jest sposób. Chcę regularnie organizować mniejsze wydarzenia, takie jak 'Dzień bez plecaków', 'Dzień Olewania Systemu' czy 'Dzień w Piżamach'. Planuję również organizację 'Festynu w Traugucie', festiwalu 'Trauwood', rajdów rowerowych oraz w miarę możliwości regularnych wieczorów filmowych. Będę dążył do tego, aby wydarzenia tego typu odbywały się jak najczęściej!",
			icon: faCalendar,
			done: "Na chwilę obecną zorganizowaliśmy 'Dzień bez samochodu' oraz wesprzeliśmy organizację kocenia dla naszych pierwszaków.",
			todo: "Moim celem jest organizacja jakiegoś mniejszego wydarzenia (właśnie tego typu), raz na około 2 tygodnie. Planuję również, aby większe wydarzenia czy dyskoteki odbywały się raz w miesiącu, oczywiście o ile to możliwe.",
			currently:
				"Aktualnie jestem w trakcie organizowania wieczoru filmowego, który (na razie) ma się odbyć 20 października. W planach jest też kilka innych wydarzeń i oczywiście coroczny Rajd Traubeanów. Jeżeli macie jakiekolwiek pomysły, śmiało podchodźcie. Na pewno uda się je zrealizować!",
		},
		{
			title: "Rozbudowa kółek szkolnych",
			content:
				"Większość z nas ma jakieś pasje, niektórzy nawet kilka. Z tego powodu chcę drastycznie zwiększyć ilość kółek czy fakultetów, do których można dołączyć. Moim celem jest, aby każda osoba miała możliwość rozwijania swoich pasji tu, u nas w szkole! (Jeżeli masz pasję, którą chciałbyś rozwijać również w szkole, zapraszam do mnie!)",
			icon: faKitMedical,
			currently:
				"Aktualnie trwa poszukiwanie osób chętnych do szkolnej grupy ratowniczej. Szukam również osób chętnych do poprowadzenia szkolnej drużyny harcerskiej. Staram się również przyśpieszyć rozwój szkolnego zespołu muzycznego.",
			todo: 'Planuję również założenie grupy tanecznej, drużyny harcerskiej, koła teatralnego, koła szachowego, SKS-ów (o czym więcej w "Drużyny sportowe oraz zawody") czy kółek naukowych. Chcę również rozwinąć działanie Kółka Szachowego oraz stworzyć szkolny ranking ELO.',
			done: "Udało mi się rozpocząć działalność Szkolnej Grupy Ratowniczej, chwilowo jesteśmy na etapie poszukiwania uczestników. Jeżeli jesteś chętny/a, zapraszamy do mnie lub do Pani Katarzyny Gołębiowskiej. Ruszyła również szkolna drużyna koszykarska! Wszystkich chętnych zapraszamy do Profesora Krzysztofa Parzonki.",
		},
		{
			title: "Unowocześnienie mediów szkolnych",
			content:
				"Na każdym kroku można zauważyć, że nasza szkoła staje się coraz bardziej nowoczesna. Wiele się u nas zmienia. Mimo to media, logo, grafiki pozostają niestety takie same. Uważam, że fajnie byłoby zostawić przeszłość w tyle i zacząć od nowa. Chcę zmodernizować rzeczy takie jak szkolna strona internetowa, logo szkoły, grafiki w mediach społecznościowych czy na plakatach. Te wszystkie małe rzeczy sprawią, że nasza szkoła stanie się jeszcze nowocześniejsza!",
			icon: faMobileScreen,
			done: (
				<>
					Od jakiegoś już czasu pracuję nad nową stroną internetową Traugutta (chwilowo dostępna tutaj:{" "}
					<a href="https://traugutt.bartoszwiaderek.com" target="_blank">
						link
					</a>
					). Ruszyły również prace związane z wybieraniem nowego logo szkoły.
				</>
			),
			currently:
				"W tym momencie pracuję nad dodawaniem kolejnych funkcjonalności na stronie. W przeciągu kilku dni ma zostać zakupiona nowa domena, na której umieścimy stronę.",
			todo: "W kwestii strony internetowej pozostało ją jedynie upublicznić i spopularyzować. Natomiast na chwilę obecną planowane jest zrobienie konkursu, aby wyłonić nowe logo szkoły. Następnie umożliwimy zakup odzieży z grafikami Traugutta.",
		},
		{
			title: "Drużyny sportowe oraz zawody",
			content:
				"Wielu z was uprawia różnorakie sporty. Niezależnie jaki jest to sport, uważam, że każdy powinien mieć możliwość uprawiania ich również w szkole. Chciałbym, żeby wszystkie osoby uprawiające swój ulubiony sport, miały możliwość rywalizacji na poziomie szkolnych oraz międzyszkolnym. Aby to osiągnąć, chciałbym zorganizować SKS-y, o ile dany sport na to pozwala. Jeżeli sportu nie da się uprawiać w szkole, chciałbym przynajmniej połączyć osoby uprawiające ten sam sport ze sobą.",
			icon: faBaseball,
			todo: 'Oprócz zakładania kolejnych drużyn sportowych w naszej szkole, planuję organizację zawodów z najpopularniejszych sportów. Chciałbym, aby przynajmniej niektóre z nich, obejmowały nie tylko naszą szkołę. Chciałbym wrócić do turniejów np. z "Norwidem" czy "Sienkiewiczem", tak jak kiedyś miało to miejsce.',
			currently:
				"Aktualnie w naszej szkole działanie rozpoczyna drużyna piłki ręcznej. Jestem w trakcie rozmów z wuefistami na temat zakładania SKS-ów oraz turniejów szkolnych czy międzyszkolnych.",
		},
	];

	return (
		<>
			<div className="flex flex-col gap-y-16 sm:gap-y-20 w-full max-w-screen-2xl">
				{ideas.map((idea: ideaDataType, i) => (
					<motion.div
						layoutId={i.toString()}
						className={`flex flex-col gap-y-3 max-w-screen-sm ${i % 2 == 0 ? "me-auto items-start" : "ms-auto items-end"}`}
						key={i}
					>
						<motion.div className={`flex text-Black items-center gap-x-3 ${i % 2 == 0 ? "flex-row" : "flex-row-reverse"}`}>
							<FontAwesomeIcon icon={idea.icon} className="h-7 aspect-square" />
							<motion.h4 className={`text-lg sm:text-2xl md:text-3xl xs:text-xl ${robotoFont900.className}`}>{idea.title}</motion.h4>
						</motion.div>

						<motion.p className={`text-Gray text-xs xs:text-sm md:text-base ${notoFont400.className} ${i % 2 == 0 ? "text-left" : "text-right"}`}>
							{idea.content}
						</motion.p>

						<button
							onClick={() => setOpenedIdea(i.toString())}
							className={`w-fit px-5 py-1.5 border-2 text-xs xs:text-sm md:text-base border-Purple rounded-3xl transition-all text-Purple hover:text-Black ${robotoFont700.className}`}
						>
							Czytaj więcej...
						</button>
					</motion.div>
				))}

				<AnimatePresence>
					{openedIdea && (
						<motion.div className="flex items-center justify-center w-screen h-screen fixed top-0 left-0 right-0 bottom-0 z-20">
							<motion.div
								layoutId={openedIdea}
								className={`flex flex-col gap-y-2 xs:gap-y-3 md:gap-y-5 lg:gap-y-7 max-w-screen-sm sm:max-w-screen-md lg:max-w-screen-lg items-start fixed bg-white rounded-3xl z-30 p-3 xs:p-5 sm:p-6 xs:gap-5 md:p-10`}
								key={parseInt(openedIdea)}
							>
								<motion.div className={`flex text-Black items-center gap-x-3 w-full`}>
									<FontAwesomeIcon icon={ideas[parseInt(openedIdea)].icon} className="h-6 sm:h-7 aspect-square" />
									<motion.h4 className={`text-lg sm:text-2xl md:text-3xl xs:text-xl me-auto ${robotoFont900.className}`}>
										{ideas[parseInt(openedIdea)].title}
									</motion.h4>
									<FontAwesomeIcon
										onClick={() => setOpenedIdea(null)}
										icon={faClose}
										className="h-3 sm:h-5 text-Purple rounded-full border-2 border-Purple p-0.5 cursor-pointer aspect-square"
									/>
								</motion.div>

								<motion.p className={`text-Gray text-xs xs:text-sm md:text-base ${notoFont400.className}`}>{ideas[parseInt(openedIdea)].content}</motion.p>

								<motion.div className="w-full flex flex-col sm:flex-row gap-x-1 md:gap-x-5 gap-y-1.5 xs:gap-y-2 pt-3 border-t-2">
									<div className={`flex-1 ${ideas[parseInt(openedIdea)].done != undefined ? "" : "hidden"}`}>
										<div className="flex items-center gap-x-2 text-Blue">
											<FontAwesomeIcon icon={faCheck} className="h-4 sm:h-5 aspect-square" />

											<h5 className={`text-base sm:text-xl lg:text-2xl xs:text-lg ${robotoFont700.className}`}>Zrobione</h5>
										</div>
										<p className={`text-xs md:text-sm md:ps-1 pt-1 ${notoFont400.className}`}>{ideas[parseInt(openedIdea)].done}</p>
									</div>

									<div className={`flex-1 ${ideas[parseInt(openedIdea)].currently != undefined ? "" : "hidden"}`}>
										<div className="flex items-center gap-x-2 text-Pink">
											<FontAwesomeIcon icon={faList} className="h-4 sm:h-5 aspect-square" />

											<h5 className={`text-base sm:text-xl lg:text-2xl xs:text-lg ${robotoFont700.className}`}>W trakcie</h5>
										</div>
										<p className={`text-xs md:text-sm md:ps-1 pt-1 ${notoFont400.className}`}>{ideas[parseInt(openedIdea)].currently}</p>
									</div>

									<div className={`flex-1 ${ideas[parseInt(openedIdea)].todo != undefined ? "" : "hidden"}`}>
										<div className="flex items-center gap-x-2 text-Green">
											<FontAwesomeIcon icon={faCalendar} className="h-4 sm:h-5 aspect-square" />

											<h5 className={`text-base sm:text-xl lg:text-2xl xs:text-lg ${robotoFont700.className}`}>Co dalej?</h5>
										</div>
										<p className={`text-xs md:text-sm md:ps-1 pt-1 ${notoFont400.className}`}>{ideas[parseInt(openedIdea)].todo}</p>
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
