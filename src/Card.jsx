import require from "./api/require";
import { useState } from "react";
const Data = (props) => {
    const active = props.isActive
	return (
		<div>
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
			handleOnClick: () => setActive(0),
			isActive: active === 0,
		},

		{
			title: "What is the maximum file upload size?",
			description: [
				"No more than 2GB. All files in your account must fit your allotted storage space.",
			],
			handleOnClick: () => setActive(1),
			isActive: active === 1,
		},

		{
			title: "How do I reset my password?",
			description: [
				"Click “Forgot password” from the login page or “Change password” from your profile page.",
				"A reset link will be emailed to you.",
			],
			handleOnClick: () => setActive(2),
			isActive: active === 2,
		},

		{
			title: "Can I cancel my subscription?",
			description: [
				"Yes! Send us a message and we’ll process your request no questions asked.",
			],
			handleOnClick: () => setActive(3),
			isActive: active === 3,
		},

		{
			title: "Do you provide additional support?",
			description: [
				"Chat and email support is available 24/7. Phone lines are open during normal business hours.",
			],
			handleOnClick: () => setActive(4),
			isActive: active === 4,
		},
	];
	return (
		<div className="w-[1000px] h-[520px] bg-[white] rounded-3xl flex">
			<div className="w-[50%] h-full relative">
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
			<div className="w-[60%] h-full flex flex-col p-16 justify-between box-border text-[12px] font-sans text-Very_dark_grayish_blue">
				<h1 className="text-4xl text-Very_dark_desaturated_blue font-bold">
					FAQ
				</h1>
				<div className="h-4/5 flex flex-col justify-between">
					{data.map((x) => (
						<Data {...x}></Data>
					))}
				</div>
			</div>
		</div>
	);
};

export default Card;
