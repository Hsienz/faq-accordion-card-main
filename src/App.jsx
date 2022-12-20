import Card from "./Card";
const App = () => {
	return (
		<div
			className="flex flex-col absolute min-w-full w-fit h-fit min-h-full justify-center items-center 
    bg-gradient-to-b from-Soft_violet to-Soft_blue py-16 pt-48 md:p-0"
		>
			<Card></Card>
			<div class="attribution">
				Challenge by{" "}
				<a
					href="https://www.frontendmentor.io?ref=challenge"
					target="_blank"
				>
					Frontend Mentor
				</a>
				. Coded by <a href="#">Hsienz</a>.
			</div>
		</div>
	);
};

export default App;
