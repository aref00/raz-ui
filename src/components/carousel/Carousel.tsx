import React, { FC, useEffect, useState } from 'react';
import { CarouselProps } from './Carousel.types';
import { Button } from '../button/Button';

export const Carousel: FC<CarouselProps> = ({
	className,
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
	dir,
}) => {
	const [orient, setOrient] = useState(0);
	const [isHovered, setHovered] = useState(false);

	className = className || '';
	circleClass = circleClass || '';
	rightClass = rightClass || '';
	leftClass = leftClass || '';
	dir = dir || 'ltr';
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
		<div className="slider-father" style={{ direction: dir }}>
			<div
				className={`Slider ${className}`}
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}
			>
				<div
					className="gallery ty-flex"
					style={{
						width: `calc(100% * ${galWidth})`,
						right: `${dir && dir === 'rtl' ? orient + '%' : '0'}`,
						left: `${dir && dir === 'ltr' ? orient + '%' : '0'}`,
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
						className={`click-icon mini-arrows mini-right ${rightClass}`}
						onClick={rightHandler}
					>
						<i className="ty-icon ty-icon-arrow-right-outline ty-color-dark fs-22" />
					</Button>
					<Button
						className={`click-icon mini-arrows mini-left ${leftClass}`}
						onClick={leftHandler}
					>
						<i className="ty-icon ty-icon-arrow-left-outline ty-color-dark fs-22" />
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
