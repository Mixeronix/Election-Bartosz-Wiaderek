"use client";

import { IconDefinition, faBaseball, faBottleWater, faCalendar, faKitMedical, faMobileScreen, faMusic, faWater } from "@fortawesome/free-solid-svg-icons";
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
			title: "Dystrybutory z wodą",
			content:
				"Czasami zdarza się, że komuś z nas zabraknie wody do picia. Wtedy często kupujemy wodę z automatu. Z tego powodu chciałbym zorganizować nam kilka automatów z wodą, do których będzie można podejść i napełnić butelkę wodą.",
			currently: "Skontaktowałem się z firmą zajmującą wynajmującą i montującą dystrybutory z wodą.",
			todo: "Pozostaje już tylko rozmowa z radą rodziców, zdobycie funduszy i sam montaż.",
			icon: faBottleWater,
		},
	];

	return (
		<>
			<div className="flex flex-col gap-y-2 sm:gap-y-3 w-full max-w-screen-lg 2xl:max-w-screen-xl mx-auto bg-Blue/20 px-4 sm:px-5 md:px-7 py-3 sm:py-4 md:py-5 lg:p-10 rounded-2xl">
				{ideas.map((idea: ideaDataType, i) => (
					<>
						<IdeaTile key={i} idea={idea} />
						<div className={`h-0.5 w-full bg-Black/80 ${i + 1 == ideas.length ? "hidden" : ""}`}></div>
					</>
				))}
			</div>
		</>
	);
}
