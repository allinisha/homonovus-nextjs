const tarot = () => {
	const getUrl = index => `http://osho.tw/zen%20card/${index}.htm`;
	const pages = new Array(78).fill(null);
	console.log(pages);

	return (
		<div className="w-full grid col-span-2">
			{pages.map((page, i) => {
				return <iframe className="w-full h-[26rem]" key={i} src={getUrl(i + 1)} />;
			})}
		</div>
	);
};

export default tarot;
