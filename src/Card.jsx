import require from "./api/require";
import { useState } from "react";
const Data = (props) => {
	const active = props.isActive;
	return (
		<div className="py-2">
			<button
				className="group w-full text-left flex justify-between"
				onClick={props.handleOnClick}
			>
				<span
					className={
						"text-lg group-hover:text-Soft_red transition-all " +
						(active
							? "text-Very_dark_desaturated_blue font-bold"
							: "")
					}
				>
					{props.title}
				</span>
				<img
					src={require("/src/assets/icon-arrow-down.svg")}
					alt=""
					className={
						"place-self-center " + (active ? "-scale-y-100" : "")
					}
				/>
			</button>
			{active && props.description.map((x) => <p>{x}</p>)}
			<hr className="border-Light_grayish_blue mt-4" />
		</div>
	);
};
const Card = () => {
	const [active, setActive] = useState(-1);
	const data = [
		{
			title: "How many team members can I invite?",
			description: [
				"You can invite up to 2 additional users on the Free plan.",
				"There is no limit on team members for the Premium plan.",
			],
			handleOnClick: () => setActive(active == 0 ? -1 : 0),
			isActive: active === 0,
		},

		{
			title: "What is the maximum file upload size?",
			description: [
				"No more than 2GB. All files in your account must fit your allotted storage space.",
			],
			handleOnClick: () => setActive(active == 1 ? -1 : 1),
			isActive: active === 1,
		},

		{
			title: "How do I reset my password?",
			description: [
				"Click “Forgot password” from the login page or “Change password” from your profile page.",
				"A reset link will be emailed to you.",
			],
			handleOnClick: () => setActive(active == 2 ? -1 : 2),
			isActive: active === 2,
		},

		{
			title: "Can I cancel my subscription?",
			description: [
				"Yes! Send us a message and we’ll process your request no questions asked.",
			],
			handleOnClick: () => setActive(active == 3 ? -1 : 3),
			isActive: active === 3,
		},

		{
			title: "Do you provide additional support?",
			description: [
				"Chat and email support is available 24/7. Phone lines are open during normal business hours.",
			],
			handleOnClick: () => setActive(active == 4 ? -1 : 4),
			isActive: active === 4,
		},
	];
	return (
		<div className="w-[420px] h-[800px] md:w-[1000px] md:h-[520px] bg-[white] rounded-3xl flex flex-col items-center md:flex-row ">
			<div className="md:hidden w-4/5 h-full bottom-44 relative">
				<div className="
                bg-[url('/src/assets/illustration-woman-online-mobile.svg')] w-full h-full bg-no-repeat bg-center relative bg-contain
                before:content-[''] before:bg-[url('/src/assets/bg-pattern-mobile.svg')] before:relative before:block 
                before:w-full before:h-full before:bg-no-repeat before:bg-center before:top-32 before:bg-contain
                " />
			</div>
			<div className="w-[50%] h-full relative hidden md:block">
				<div className="w-full h-full overflow-hidden absolute">
					<div
						className="
            w-full h-full bg-[url('/src/assets/illustration-woman-online-desktop.svg')] relative bg-no-repeat bg-contain top-16 right-16
            before:w-full before:h-full before:content-[''] before:bg-[url('/src/assets/bg-pattern-desktop.svg')] 
            before:absolute before:bg-no-repeat before:bg-cover before:bg-right-bottom before:bottom-32 before:right-24 before:scale-150
            "
					/>
				</div>
				<div className="w-full h-full content-[''] bg-[url('/src/assets/illustration-box-desktop.svg')] absolute bg-no-repeat top-48 right-32" />
			</div>
			<div className="w-full md:w-[60%] h-full flex flex-col p-16  
            text-[12px] font-sans text-Very_dark_grayish_blue relative bottom-24 md:bottom-0">
				<h1 className="text-4xl text-Very_dark_desaturated_blue font-bold text-center md:text-left relative">
					FAQ
				</h1>
				<div className="h-[350px] flex flex-col relative md:h-full top-8">
					{data.map((x) => (
						<Data {...x}></Data>
					))}
				</div>
			</div>
		</div>
	);
};

export default Card;
