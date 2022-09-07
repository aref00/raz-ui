import React from 'react';

interface ContentProps {
	item: object;
}

interface circlePos {
	bottom: string;
	right: string;
}

export interface CarouselProps {
	className?: string;
	dir?: 'rtl' | 'ltr';
	slices?: number;
	data: object[];
	SlideContent: React.FC<ContentProps>;
	arrows?: boolean;
	circles?: boolean;
	rightClass?: string;
	leftClass?: string;
	circlesPosition?: circlePos;
	circleClass?: string;
	interval?: boolean;
	intervalTime?: number;
}
