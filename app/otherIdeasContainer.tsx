"use client";

import { IconDefinition, faBaseball, faCalendar, faKitMedical, faMobileScreen, faMusic } from "@fortawesome/free-solid-svg-icons";
import { Noto_Sans_Javanese, Roboto } from "next/font/google";
import IdeaTile from "./ideaTile";

type ideaDataType = {
	title: string;
	content: string | JSX.Element;
	icon: IconDefinition;
	currently?: string | JSX.Element;
	done?: string | JSX.Element;
	todo?: string | JSX.Element;
};

export default function OtherIdeasContainer() {
	const ideas: ideaDataType[] = [
		{
			title: "Reaktywacja imprez muzycznych",
			content:
				'Przez bardzo długi czas w naszej szkole regularnie odbywało się wiele wydarzeń muzycznych. Starsi uczniowie mogą jeszcze pamiętać: "Festyn w Traugucie", "Traugutt Rock Music Festiwal" czy "Serce Dla Traugutta". Uważam, że były to niesamowite eventy, dlatego chciałbym do nich powrócić. Reaktywacja będzie wiązała się ze sporą ilością przeszkód, przecie od lat nikt ich już nie organizował, ale zdecydowanie nie jest to niczym niemożliwym!',
			icon: faMusic,
			done: "Porozmawiać z nauczycielami organizującymi te wydarzenia w poprzednich latach. Wszyscy z nich bardzo chętnie pomogą w organizacji! Inaczej mówiąc wygląda na to, że uda się wrócić do tradycji sprzed lat!",
			currently:
				"W trakcie jest tworzenie szkolnego zespołu muzycznego, który jest oczywiście kluczowy dla powodzenia obydwóch wydarzeń. Zaraz po postaniu takiego zespołu bierzemy się do pracy!",
			todo: "Do przygotowania są oczywiście plany tych wydarzeń, ustalenie ich przebiegu, organizacja nagłośnienia itd. Narazie skupiamy się na stworzeniu zgranej paczki utalentowanych osób (ps. jeżeli jesteś zainteresowany/a można się zgłosić do mnie lub do profesora Bojanka)",
		},
		{
			title: "Regularne wydarzenia i dyskoteki",
			content:
				'Codzienność w szkole jest dość nudna, ale jak na wszystko, na to też jest sposób. Chcę regularnie organizować mniejsze wydarzenia, typu "Dzień bez placeka", "Dzień Olewania systemu" czy "Dzień w piżamach". Planuje aby tego typu wydarzenia odbywały się jak najczęściej.',
			icon: faCalendar,
			done: 'Na chwilę obecną zorganizowaliśmy "Dzień bez samochodu" oraz wsparłem organizacje kocenie dla naszych pierwszaków.',
			todo: "Moim celem jest organizacja jakiegoś mniejszego wydarzenia (właśnie tego typu), raz na około 2 tygodnie. Planuje również, aby większe wydarzenia czy dyskoteki odbywały się raz w miesiącu, oczywiście o ile to możliwe.",
			currently:
				"Aktualnie jestem w trakcie organizowania wieczoru filmowego, który (narazie) ma się dobyć 20 października. W planach jest też kilka innych i oczywiście coroczny Rajd Traubeanów. Jeżeli macie jakiekolwiek pomysły, śmiało podchodźcie. Na pewno uda się je zrealizować!",
		},
		{
			title: "Rozbudowa kółek szkolnych",
			content:
				"Większość z nas ma jakieś pasje, niektórzy nawet kilka. Z tego powodu chcę drastycznie powiększyć ilosć kółek czy faktultetów do których można dołączyć. Moim celem jest aby każda osoba miała możliwość rozwiajania swoich pasji tu, u nas w szkole! (Jeżeli masz pasje która chciałbyś rozwijać również w szkole, zapraszam do mnie!)",
			icon: faKitMedical,
			currently:
				"Aktualnie trwa poszukiwanie osób chętnych do szkolnej grupy ratowniczej. Szukam również osób chetnych do poprowadzenia szkolnej drużyny harcerskiej. Staram się również przyśpieszyć szkolnego zespołu muzycznego.",
			todo: 'Planuję również założenie grupy tanecznej, SKS-ów (o czym więcej w "Drużyny sportowe oraz zawdody"), drużyny harcerskiej czy kółek naukowych. Chcę również rozwinąć działanie Kółka Szachowego, stworzyć szkolny ranking ELO.',
			done: "Udało mi się rozpocząć działalność Szkolnej Grupy ratowniczej, chwilowo jesteśmy na etapie poszukiwania uczestników. Jeżeli jesteś chętny/a zapraszamy do mnie lub do pani Katarzyny Gołębiowskiej.",
		},
		{
			title: "Modernizacja mediów szkolnych",
			content:
				"Na każdym kroku można zauważyć, że nasza szkoła staje się coraz bardziej nowoczesna. Wiele się u nas zmienia. Mimo to media, loga, grafiki pozostają niestety takie same. Uważam, że fajnie byłoby zostawić przeszłość w tyle i zacząć od nowa. Chcę  zmodernizować rzeczy takie jak: szkolna strona internetowa, logo szkoły, grafiki w mediach społecznościowych czy na plakatach. Te wszystkie małe rzeczy sprawią, że nasza szkoła stanie się jeszcze nowocześniejsza!",
			icon: faMobileScreen,
			done: (
				<>
					Od jakiegoś już czasu pracuje nad nową stroną internetową Traugutta (chwilowo dostępna tutaj:{" "}
					<a href="https://traugutt.bartoszwiaderek.com" target="blank">
						link
					</a>
					). Ruszyły również prace związane z wybieraniem nowego loga szkoły.
				</>
			),
			currently:
				"W tym momęcie pracuje nad dodawaniem kolejnych funkcjonalności na stronie. W przeciągu kilku dni ma zostać zakupiona nowa domena gdzie umieścimy stronę.",
			todo: "W kwestii strony internetowej pozostało ją jedynie upublicznić, spopularyzować. Natomiast na chwile obecną planowane jest zrobienie konkursu, aby wyłonić nowe logo szkoły. Po czym umożliwimy zakup odzierzy z grafikami Traugtta.",
		},
		{
			title: "Drużyny sportowe oraz zawdody",
			content:
				"Wielu z was uprawia różnorakie sporty. Niezależnie jaki jest to sport, uważam, że każdy powinien mieć możliwość uprawiania ich również w szkole. Chciałbym, żeby wszystkie osoby uprawiające swój ulubiony sport, miały możliwość rywalizacji na poziomie szkolnych oraz międzyszkolnym. Aby to osiągnąć chciałbym zorganizować SKS-y, o ile dany sport na to pozwala. Jeżeli sportu nie da się uprawiać w szkole, chciałbym przynajmniej  osoby uprawiające ten sam sport ze sobą.",
			icon: faBaseball,
			todo: 'Oprócz zakładania kolejnych drużyn sportowych w naszej szkole, planuje organizacje zawodów z najpopularniejszych sportów. Chciałbym aby przynajmniej niektóre z nich, obejmowały nie tylko naszą szkołe. Chciałbym wrócić do turniejów np. z "Norwidem" czy "Sienkiewiczem", tak jak kiedyś miało to miejsce.',
			currently:
				"Aktualnie w naszej szkoły działanie rozpoczyna drużyna piłki ręcznej. Jestem w trakcie rozmów z wuefistami na temat zakładania SKS oraz turniejów szkolnych czy międzyszkolnych.",
		},
	];

	return (
		<>
			<div className="flex flex-col gap-y-2 sm:gap-y-3 w-full max-w-screen-2xl bg-Blue/20 px-4 sm:px-5 md:px-7 py-3 sm:py-4 md:py-5 rounded-lg">
				{ideas.map((idea: ideaDataType, i) => (
					<>
						<IdeaTile key={i} idea={idea} />
						<div className="h-0.5 w-full bg-Black/80"></div>
					</>
				))}
			</div>
		</>
	);
}
