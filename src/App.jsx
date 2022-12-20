import Card from "./Card";
const App = () => {
	return (
		<div
			className="flex flex-col absolute w-full h-fit min-h-full justify-center items-center 
    bg-gradient-to-b from-Soft_violet to-Soft_blue"
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
