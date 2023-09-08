import { useEffect, useState } from 'react';

const pokers = [
	{ suit: 'spade', card: 'jack', name: '黑桃J', icon: '' },
	{ suit: 'spade', card: 'queen', name: '黑桃Q', icon: '' },
	{ suit: 'spade', card: 'king', name: '黑桃K', icon: '' },
	{ suit: 'spade', card: 'ace', name: '黑桃A', icon: '' },
	{ suit: 'heart', card: 'jack', name: '红桃J', icon: '' },
	{ suit: 'heart', card: 'queen', name: '红桃Q', icon: '' },
	{ suit: 'heart', card: 'king', name: '红桃K', icon: '' },
	{ suit: 'heart', card: 'ace', name: '红桃A', icon: '' },
	{ suit: 'club', card: 'jack', name: '梅花J', icon: '' },
	{ suit: 'club', card: 'queen', name: '梅花Q', icon: '' },
	{ suit: 'club', card: 'king', name: '梅花K', icon: '' },
	{ suit: 'club', card: 'ace', name: '梅花A', icon: '' },
	{ suit: 'diamond', card: 'jack', name: '方块J', icon: '' },
	{ suit: 'diamond', card: 'queen', name: '方块Q', icon: '' },
	{ suit: 'diamond', card: 'king', name: '方块K', icon: '' },
	{ suit: 'diamond', card: 'ace', name: '方块A', icon: '' }
];

const suitMap = {
	spade: '♥',
	heart: '♠',
	club: '♣',
	diamond: '♦'
};

const suitColorMap = {
	spade: 'text-[#ff0000]',
	heart: 'text-[#000]',
	club: 'text-[#ff0000]',
	diamond: 'text-[#000]'
};

const hiddenCard = ['自罚半杯', '指定某人开始'];

const poker = () => {
	const [matrixCards, setMatrixCards] = useState([]);
	const [frontCards, setFrontCards] = useState({
		jack: 0,
		queen: 0,
		king: 0,
		ace: 0
	});
	const [end, setEnd] = useState(false);
	const [historyStack, setHistoryStack] = useState([]);
	const [pointer, setPointer] = useState(0);

	useEffect(() => {
		start();
	}, []);

	useEffect(() => {
		setPointer(historyStack.length - 1);
	}, [historyStack.length]);

	function start() {
		const hadHiddenCard = Math.floor(Math.random() * 100) <= 100;
		const _pokers = JSON.parse(JSON.stringify(pokers));
		const hiddenCardIndex = Math.floor(Math.random() * _pokers.length);
		const matrix = new Array(4).fill(new Array(4).fill(null));
		const result = matrix.map((matrixItem, i) => {
			return matrixItem.map(item => {
				const length = _pokers.length;
				const index = Math.floor(Math.random() * _pokers.length);
				item = _pokers.splice(index, 1)[0];
				item.status = 'covered';
				if (hadHiddenCard && hiddenCardIndex === length) {
					item.hiddenCard = hiddenCard[Math.floor(Math.random() * hiddenCard.length)];
					item.used = false;
				}
				return item;
			});
		});
		setHistoryStack([]);
		setMatrixCards(result);
		setEnd(false);
		setFrontCards({
			jack: 0,
			queen: 0,
			king: 0,
			ace: 0
		});
	}

	function turnOver(data, travel = false) {
		if (historyStack.some(item => item.suit === data.suit && item.card === data.card) && !travel) return;
		const _matrixCards = matrixCards.map(matrixCard => {
			return matrixCard.map(item => {
				if (item.hiddenCard) {
					item.used = true;
				}
				if (item.suit === data.suit && item.card === data.card) {
					item.status = 'front';
				}
				return item;
			});
		});
		if (!travel) {
			setHistoryStack(state => [...state, data]);
		} else {
			setPointer(state => state + 1);
		}
		setMatrixCards(_matrixCards);
		setEnd(_matrixCards.every(matrixCard => matrixCard.every(item => item.status === 'front')));
		updateSuitsSum(_matrixCards);
	}

	function updateSuitsSum(cards) {
		let jack = 0,
			queen = 0,
			king = 0,
			ace = 0;
		cards.forEach(card => {
			card.forEach(item => {
				if (item.status === 'front') {
					switch (item.card) {
						case 'jack':
							jack += 1;
							break;
						case 'queen':
							queen += 1;
							break;
						case 'king':
							king += 1;
							break;
						case 'ace':
							ace += 1;
							break;
					}
				}
			});
		});

		setFrontCards({
			jack,
			queen,
			king,
			ace
		});
	}

	function fallBack(data) {
		const _matrixCards = matrixCards.map(matrixCard => {
			return matrixCard.map(item => {
				if (item.suit === data.suit && item.card === data.card) {
					item.status = 'covered';
				}
				return item;
			});
		});
		setPointer(state => state - 1);
		setMatrixCards(_matrixCards);
		setEnd(_matrixCards.every(matrixCard => matrixCard.every(item => item.status === 'front')));
		updateSuitsSum(_matrixCards);
	}

	function timeTravel(stepType) {
		if (historyStack.length === 0) return;
		if (stepType === 'prev') {
			fallBack(historyStack[pointer]);
		} else {
			turnOver(historyStack[pointer + 1], true);
		}
	}

	function CardItem(props) {
		const { item, index } = props;
		return (
			<div>
				{item.status === 'front' && (
					<div
						key={index}
						className="w-[4.9875rem] h-[7.7rem] border px-[0.4rem] py-[0.2rem] rounded bg-[#fff] shadow-lg"
					>
						<div className="flex flex-col items-center w-[1rem]">
							<span className={`${suitColorMap[item.suit]} text-[1.2rem]`}>
								{item.card[0].toUpperCase()}
							</span>
							<span className={`${suitColorMap[item.suit]} text-[1.2rem]`}>{suitMap[item.suit]}</span>
						</div>
						<div className="icon h-[4rem]">
							<img className="" />
						</div>
					</div>
				)}
				{item.status === 'covered' && (
					<div className="w-[4.9875rem] h-[7.7rem] bg-[#2d325a] rounded" onClick={() => turnOver(item)}></div>
				)}
			</div>
		);
	}

	return (
		<div className="p-4 w-[100vw] h-[100vh] flex justify-center">
			<div className="w-[100%] pb-[7rem] flex flex-col justify-around">
				{matrixCards.map((matrixCard, i) => (
					<div className="flex flex-row justify-around items-center space-x-2" key={i}>
						{matrixCard.map((item, index) => {
							return <CardItem item={item} index={i} key={index} />;
						})}
					</div>
				))}
			</div>
			<div className="flex flex-row justify-around items-center fixed bottom-[5.6rem] left-[1rem] right-[1rem]">
				<span
					className={`w-[4.8rem] py-[0.5rem] text-center text-[#4975ee] border-[#4975ee] rounded-[1.2rem] border border-[#4975ee] cursor-pointer ${
						historyStack.length !== 0 && pointer >= 0 ? 'opacity-100' : 'opacity-40'
					}`}
					onClick={() => {
						pointer >= 0 && timeTravel('prev');
					}}
				>
					上一步
				</span>
				<span
					className={`w-[4.8rem] py-[0.5rem] text-center text-[#4975ee] border-[#4975ee] rounded-[1.2rem] border border-[#4975ee] cursor-pointer ${
						historyStack.length !== 0 && pointer < historyStack.length - 1 ? 'opacity-100' : 'opacity-40'
					}`}
					onClick={() => {
						pointer < historyStack.length - 1 && timeTravel('next');
					}}
				>
					下一步
				</span>
				{/* <span className="text-[#fff]">游戏规则</span> */}
			</div>
			<ul className="flex flex-row justify-around items-center fixed bottom-[1rem] left-[1rem] right-[1rem] bg-[#262b4c] p-[0.4rem] rounded-[0.8rem] text-[#fff]">
				{Object.entries(frontCards).map((frontCard, i) => {
					const [key, value] = frontCard;
					return (
						<li key={i}>
							<span className="w-[4rem] text-[1.6rem] text-[#7182e9]">{key[0].toUpperCase()}</span>
							<span className="inline-block w-[2rem] text-right text-[2rem] font-bold">{value}</span>
						</li>
					);
				})}
			</ul>
			{end && (
				<div
					className="fixed left-[50%] top-[50%] bg-[#6f32ff] -ml-[4rem] -mt-[2rem] w-[8rem] h-[4rem] leading-[4rem] tracking-widest text-center rounded-[1.6rem] text-[1.4rem] text-[#fff] bg-indigo-500 shadow-lg shadow-indigo-500/50"
					onClick={start}
				>
					发牌
				</div>
			)}
		</div>
	);
};

export default poker;
