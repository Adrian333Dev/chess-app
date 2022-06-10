import React, { FC, useEffect, useRef, useState } from 'react';
import { Box, Button, ButtonGroup } from '@mui/material';

import { Colors, Player } from '../constants/models';

interface TimerProps {
	currentPlayer: Player | null;
	restart: () => void;
}

const Timer: FC<TimerProps> = ({ currentPlayer, restart }) => {
	const [blackTime, setBlackTime] = useState(300);
	const [whiteTime, setWhiteTime] = useState(300);
	const timer = useRef<null | ReturnType<typeof setInterval>>(null);

	const startTimer = () => {
		if (timer.current) {
			clearInterval(timer.current);
		}
		const callback =
			currentPlayer?.color === Colors.WHITE ? decWhiteTimer : decBlackTimer;
		timer.current = setInterval(callback, 1000);
	};

	const decBlackTimer = () => {
		setBlackTime((prev) => prev - 1);
	};

	const decWhiteTimer = () => {
		setWhiteTime((prev) => prev - 1);
	};

	const handleRestart = () => {
		setWhiteTime(300);
		setBlackTime(300);
		restart();
	};

	useEffect(() => {
		startTimer();
	}, [currentPlayer]);

	return (
		<Box sx={{ display: 'flex', flexDirection: 'column' }}>
			<Button color='inherit' onClick={handleRestart}>
				Restart Game
			</Button>
			<Button color='inherit'>Black - {blackTime}</Button>
			<Button color='inherit'>White - {whiteTime}</Button>
		</Box>
	);
};

export default Timer;
