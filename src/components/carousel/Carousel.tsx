import React, { FC, useEffect, useState } from 'react';
import { CarouselProps } from './Carousel.types';
import '../../style/components/carousel.module.scss';
import Button from '../button/Button';

const Carousel: FC<CarouselProps> = ({
	tyClass,
	data,
	slices,
	SlideContent,
	arrows,
	circles,
	rightClass,
	leftClass,
	circlesPosition,
	circleClass,
	interval,
	intervalTime,
}) => {
	const [orient, setOrient] = useState(0);
	const [isHovered, setHovered] = useState(false);

	tyClass = tyClass || '';
	circleClass = circleClass || '';
	rightClass = rightClass || '';
	leftClass = leftClass || '';
	slices = slices || 1;
	circlesPosition = circlesPosition || { bottom: '4%', right: '50%' };
	intervalTime = intervalTime || 5000;
	const galWidth = data.length / slices;
	const deciCondition = slices > 1 ? -100 / slices + 1 : 0;
	const subtrahend = slices;
	const multiplied = -100 / slices;

	const leftHandler = () => {
		if (orient <= (data.length - subtrahend) * multiplied) {
			setOrient(0);
		} else {
			setOrient(orient + multiplied);
		}
	};

	const rightHandler = () => {
		if (orient >= deciCondition) {
			setOrient((data.length - subtrahend) * multiplied);
		} else {
			setOrient(orient - multiplied);
		}
	};

	useEffect(() => {
		let my_interval: NodeJS.Timer | null = null;
		if (interval) {
			if (!isHovered) {
				my_interval = setInterval(() => {
					leftHandler();
				}, intervalTime);
			}
			return () => {
				if (my_interval) clearInterval(my_interval);
			};
		}
	}, [orient, isHovered]);
	return (
		<div className={`slider-father ${tyClass}`}>
			<div
				className="Slider"
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}
			>
				<div
					className="gallery ty-flex"
					style={{
						width: `calc(100% * ${galWidth})`,
						right: `${orient}%`,
					}}
				>
					{data.map((item, index) => (
						<div
							className={`slide ${slices && slices > 1 ? 'p-2' : ''}`}
							style={{ width: `calc(100% / ${data.length})` }}
							key={index}
						>
							<SlideContent item={item} />
						</div>
					))}
				</div>
			</div>
			{arrows && (
				<>
					<Button
						tyClass={`click-icon mini-arrows mini-right ${rightClass}`}
						onClick={rightHandler}
					>
						<i className="ty-icon ty-icon-arrow-right" />
					</Button>
					<Button
						tyClass={`click-icon mini-arrows mini-left ${leftClass}`}
						onClick={leftHandler}
					>
						<i className="ty-icon ty-icon-arrow-left" />
					</Button>
				</>
			)}
			{circles && (
				<div
					className="s-circles ty-flex"
					style={{
						bottom: circlesPosition.bottom,
						right: circlesPosition.right,
					}}
				>
					{Array.from({ length: data.length }, (_, index) => (
						<div
							className={`s-circle ${
								orient === index * -100 ? 'ty-bg-primary' : 'ty-bg-light'
							} ${circleClass}`}
							key={index}
							onClick={() => setOrient(index * -100)}
						></div>
					))}
				</div>
			)}
		</div>
	);
};

export default Carousel;
