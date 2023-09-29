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
	faRestroom,
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
		},
		{
			title: "Pizza friday",
			icon: faPizzaSlice,
		},
		{
			title: "Sklep ze szkolną odzierzą",
			icon: faTshirt,
		},
		{
			title: "Dyskoteki tematyczne",
			icon: faIcons,
		},
		{
			title: "Wydarzenia dla absolwentów",
			icon: faGraduationCap,
		},
		{
			title: "Kapsuła czasu",
			icon: faClock,
		},
		{
			title: "Pufy na stołówce",
			content:
				"Tego pomysłu nikomu przedstawiać nie trzeba. Wiekszość z nas słyszaja go już wielokrotnie. Pufy na stołówce to rzecz która od zawsze powinna się tam znajdować. Na szczęście mam dla wszystkich dobrą informacje. Pufy są zamówione i już do nas jadą!",
			done: "Pufy zostały już zamówione, i do nas jadą! Dosłownie kilka dni temu dyrektor obejrzał projekt, można powiedzieć, że wszystko już gotowe!",
			todo: "Niedługo będziemy mogli je zobaczyć na świetlicy! Teraz to już tylko kwestia czasu!",
			icon: faCouch,
		},
		{
			title: "Wykorzystanie działki w olszytnie",
			icon: faTent,
		},
		{
			title: "Dystrybutory z wodą",
			content:
				"Czasami zdarza się, że komuś z nas zabraknie wody do picia. Wtedy często kupujemy wodę z automatu. Z tego powodu chciałbym zorganizować nam kilka automatów z wodą, do których będzie można podejść i napełnić butelkę wodą.",
			currently: "Skontaktowałem się z firmą zajmującą wynajmującą i montującą dystrybutory z wodą.",
			todo: "Pozostaje już tylko rozmowa z radą rodziców, zdobycie funduszy i sam montaż.",
			icon: faBottleWater,
		},
		{
			title: "Lusterka w szatniach",
			icon: faRestroom,
		},
		{
			title: "Współpraca z Politechniką Częstochowską",
			icon: faHandshake,
			content:
				"Nie wszyscy nawet wiedzą, że coś takiego istnieje! Od kilku lat nasza szkoła ma podpisaną współpracę z Politechniką Częstochowską, niestety zupełnie z tego nie korzystamy. Moim pomysłem jest tą współpracę nieco ożywić. W ramach niej możemy uczestniczyć w różnego rodzaju projektach, wykładach czy lekcjach pokazowych. Dzięki tej współpracy będzie możliwe wykorzystanie sali sportowej Politechniki podczas wydarzeń sportowych w naszej szkole (będzie to szczególne przydatne podczas międzyszkolnych zawodach, które planujemy zorganizować).",
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
				{ideas.map((idea: otherIdeaDataType, i) => (
					<>
						<IdeaTile key={i} idea={idea} />
						<div className={`h-0.5 w-full bg-Black/80 ${i + 1 == ideas.length ? "hidden" : ""}`}></div>
					</>
				))}
			</div>
		</>
	);
}
