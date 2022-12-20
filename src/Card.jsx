import require from "./api/require";
const Card = () => {
	return (
		<div className="w-[800px] h-[480px] bg-[white] rounded-3xl flex">
			<div className="w-[50%] h-full relative">
				<div className="w-full h-full overflow-hidden absolute">
					<div
						className="
            w-full h-full bg-[url('/src/assets/illustration-woman-online-desktop.svg')] relative bg-no-repeat bg-contain top-16 right-16
            before:w-full before:h-full before:content-[''] before:bg-[url('/src/assets/bg-pattern-desktop.svg')] 
            before:absolute before:bg-no-repeat before:bg-cover before:-top-32 before:bg-right-bottom before:left-16
            "
					/>
				</div>
				<div className="w-full h-full content-[''] bg-[url('/src/assets/illustration-box-desktop.svg')] absolute bg-no-repeat top-36 right-24" />
			</div>
            <p>Hello world!</p>
		</div>
	);
};

export default Card;
