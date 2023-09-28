import { IconDefinition, faBaseball, faCalendar, faCaretDown, faCaretRight, faCheck, faKitMedical, faList, faMobileScreen, faMusic } from "@fortawesome/free-solid-svg-icons";
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

const robotoFont700 = Roboto({
	weight: "700",
	subsets: ["latin"],
});
const notoFont400 = Noto_Sans_Javanese({
	weight: "400",
	subsets: ["latin"],
});

export default function IdeaTile(props: { idea: ideaDataType }) {
	const [opened, setOpened] = useState(false);

	return (
		<motion.div className={`flex flex-col justify-center text-Black gap-y-3 w-full`}>
			<motion.div className="flex flex-row items-center text-Black gap-x-3 w-full">
				<FontAwesomeIcon icon={props.idea.icon} className="h-5 aspect-square" />
				<motion.h4 className={`text-base sm:text-xl md:text-2xl xs:text-lg ${robotoFont700.className}`}>{props.idea.title}</motion.h4>

				<FontAwesomeIcon
					onClick={() => setOpened((old) => !old)}
					icon={faCaretRight}
					className={`h-5 ms-auto aspect-square cursor-pointer transition-all duration-300 ${opened ? "rotate-90" : ""}`}
				/>
			</motion.div>

			{opened ? (
				<>
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{
							duration: 0.2,
						}}
						className={`text-Gray text-xs xs:text-sm md:text-base ${notoFont400.className}`}
					>
						{props.idea.content}
					</motion.p>

					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{
							duration: 0.2,
						}}
						className="w-full text-Gray flex flex-col xs:flex-row gap-x-2 md:gap-x-5 gap-y-2 pt-3 border-t-2 border-Black/50"
					>
						<div className={`flex-1 ${props.idea.done != undefined ? "" : "hidden"}`}>
							<div className="flex items-center gap-x-2 text-Blue">
								<FontAwesomeIcon icon={faCheck} className="h-4 sm:h-5 aspect-square" />

								<h5 className={`text-base sm:text-xl lg:text-2xl xs:text-lg ${robotoFont700.className}`}>Zrobione</h5>
							</div>
							<p className={`text-xs md:text-sm pt-1 md:pt-2 lg:pt-3 ${notoFont400.className}`}>{props.idea.done}</p>
						</div>

						<div className={`flex-1 ${props.idea.currently != undefined ? "" : "hidden"}`}>
							<div className="flex items-center gap-x-2 text-Pink">
								<FontAwesomeIcon icon={faList} className="h-4 sm:h-5 aspect-square" />

								<h5 className={`text-base sm:text-xl lg:text-2xl xs:text-lg ${robotoFont700.className}`}>W trakcie</h5>
							</div>
							<p className={`text-xs md:text-sm pt-1 md:pt-2 lg:pt-3 ${notoFont400.className}`}>{props.idea.currently}</p>
						</div>

						<div className={`flex-1 ${props.idea.todo != undefined ? "" : "hidden"}`}>
							<div className="flex items-center gap-x-2 text-Green">
								<FontAwesomeIcon icon={faCalendar} className="h-4 sm:h-5 aspect-square" />

								<h5 className={`text-base sm:text-xl lg:text-2xl xs:text-lg ${robotoFont700.className}`}>Co dalej?</h5>
							</div>
							<p className={`text-xs md:text-sm pt-1 md:pt-2 lg:pt-3 ${notoFont400.className}`}>{props.idea.todo}</p>
						</div>
					</motion.div>
				</>
			) : (
				<></>
			)}
		</motion.div>
	);
}
