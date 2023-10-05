"use client";

import {
	IconDefinition,
	faBook,
	faBottleWater,
	faClock,
	faCouch,
	faGraduationCap,
	faHandshake,
	faIcons,
	faListCheck,
	faPizzaSlice,
	faSeedling,
	faTent,
	faTshirt,
	faTv,
	faUmbrellaBeach,
} from "@fortawesome/free-solid-svg-icons";
import IdeaTile from "./ideaTile";

type otherIdeaDataType = {
	title: string;
	content?: string | JSX.Element;
	icon: IconDefinition;
	currently?: string | JSX.Element;
	done?: string | JSX.Element;
	todo?: string | JSX.Element;
};

export default function OtherIdeasContainer() {
	const ideas: otherIdeaDataType[] = [
		{
			title: "Traugutt TV",
			icon: faTv,
			content: (
				<>
					Traugutt TV jest odpowiednikiem telewizji szkolnej. Chcę aby na YT (podobnie jak na TikToku), pojawiały się filmy z wszystkich wydarzeń szkolnych. Planuję
					również nagrywanie filmów podobnych do "Matura to bzdura" czy równych mini-turnieji. Wszystkie filmy dostnępne na szkolnym{" "}
					<a href="https://www.youtube.com/@IILOTraugutt" target="_blank">
						YouTube!
					</a>{" "}
					Jeżeli masz pomysł lub pytania smiało można podejść do mnie lub do Filipa Banasia z klasy 2B.
				</>
			),
			done: "Gotowa jest już cała ekipa, która będzie prowadziła naszą szkolną 'telewizję'. Mamy przygotowane pomysły na kilka pierwszych filmów, które zostały już nagrane i są dostępne na szkolnym kanale YouTube.",
			todo: "Planujemy regularne publikowanie filmów oraz transmitowanie na żywo uroczystości szkolnych. Po emisji będzie także możliwość pokazania ich rodzicom. Dzięki temu zostanie trwały ślad po ciężkiej pracy naszych uczniów. Jeśli masz pomysł lub pytania, śmiało możesz podejść do mnie lub do Filipa Banasia z klasy 2B.",
		},
		{
			title: "Sklep ze szkolną odzieżą",
			icon: faTshirt,
		},
		{
			title: "Dyskoteki tematyczne",
			icon: faIcons,
		},
		{
			title: "Pizza Friday",
			icon: faPizzaSlice,
			content:
				"Pizza Friday będzie wydarzeniem, które będzie odbywać się co miesiąc. Pomysł polega na tym, że raz w miesiącu w świetlicy szkolnej będzie można zakupić pizzę (na kawałki). W międzyczasie będą odbywały się mniejsze wydarzenia. W tym właśnie czasie chcemy, aby miały miejsce koncerty, występy naszych uczniów oraz pokazy (pomysł podsunęli Olek Gałka i Oskar Lewicki). Pierwszy Pizza Friday już niedługo!",
		},
		{
			title: "Wydarzenia dla absolwentów",
			icon: faGraduationCap,
		},
		{
			title: "Kapsuła marzeń",
			icon: faClock,
			content:
				"Aktualnie liceum trwa 4 lata, przez ten czas wiele się zmienia. Z tego powodu chciałbym wprowadzić nową tradycję do naszej szkoły. Chciałbym, aby na początku nauki wszystkie osoby z klas pierwszych napisały list do przyszłych siebie. Listy będą zbierane i zamykane w kapsule. Pod koniec nauki, w klasie czwartej, kapsuła zostanie otwarta. Wydaje mi się, że taki powrót do początków będzie fantastycznym zakończeniem nauki w liceum!",
		},
		{
			title: "Pufy na stołówce",
			content:
				"Pufy na stołówce to pomysł, który nie wymaga przedstawiania. Wielu z nas już o nim słyszało wielokrotnie. Pufy w stołówce to rzecz, która od zawsze powinna się tam znajdować. Mam dla wszystkich dobrą wiadomość - pufy są już zamówione i wkrótce do nas trafią!",
			done: "Pufy zostały już zamówione i są w drodze! Kilka dni temu dyrektor zatwierdził projekt, można powiedzieć, że wszystko jest już gotowe!",
			todo: "Teraz pozostaje nam tylko cierpliwie czekać, a niedługo będziemy mogli je zobaczyć na świetlicy!",
			icon: faCouch,
		},
		{
			title: "Wykorzystanie działki w Olsztynie",
			icon: faTent,
			content:
				"Nasza szkoła jest właścicielem działki w Olsztynie, niestety obecnie nie jest ona wykorzystywana. Chcemy maksymalnie wykorzystać potencjał tego miejsca. Planujemy organizację wyjazdów, spotkań oraz różnego rodzaju biwaków, takich jak biwaki harcerskie. W miarę możliwości planujemy również organizować integracje klasowe i pikniki w tym miejscu.",
		},
		{
			title: "Dystrybutory z wodą",
			content:
				"Czasami zdarza się, że komuś z nas zabraknie wody do picia. Wtedy często sięgamy po wodę z automatu. Z tego powodu chciałbym zorganizować kilka dystrybutorów z wodą, do których będzie można podejść i napełnić butelkę wodą.",
			currently: "Skontaktowałem się z firmą zajmującą wynajmem i montażem dystrybutorów z wodą.",
			todo: "Teraz pozostaje tylko rozmowa z radą rodziców, zdobycie funduszy i sam montaż dystrybutorów.",
			icon: faBottleWater,
		},
		{
			title: "Współpraca z uczelniami wyższymi",
			icon: faHandshake,
			content:
				"Nie wszyscy nawet wiedzą, że coś takiego istnieje! Od kilku lat nasza szkoła ma podpisaną współpracę z uczelniami, niestety zupełnie z tego nie korzystamy. Moim pomysłem jest tę współpracę nieco ożywić. W ramach niej możemy uczestniczyć w różnego rodzaju projektach, wykładach czy lekcjach pokazowych. Dzięki tej współpracy będzie możliwe wykorzystanie sali sportowej podczas wydarzeń sportowych w naszej szkole (będzie to szczególnie przydatne podczas międzyszkolnych zawodów, które planujemy zorganizować).",
		},
		{
			title: "Zazielenienie szkoły",
			icon: faSeedling,
		},
		{
			title: "Markizy na patio",
			icon: faUmbrellaBeach,
		},
		{
			title: "Regularne ankiety",
			icon: faListCheck,
		},
		{
			title: "E-Biblioteka szkolna",
			icon: faBook,
		},
	];

	return (
		<>
			<div className="flex flex-col gap-y-2 sm:gap-y-3 w-full max-w-screen-lg 2xl:max-w-screen-xl mx-auto bg-Blue/20 px-4 sm:px-5 md:px-7 py-3 sm:py-4 md:py-5 lg:p-10 rounded-2xl">
				{ideas
					.sort((a, b) => (!b.content && a.content ? -1 : 0))
					.map((idea: otherIdeaDataType, i) => (
						<>
							<IdeaTile key={i} idea={idea} />
							<div className={`h-0.5 w-full bg-Black/80 ${i + 1 == ideas.length ? "hidden" : ""}`}></div>
						</>
					))}
			</div>
		</>
	);
}
