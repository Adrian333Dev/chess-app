import React, { useEffect, useState } from 'react';

import { Container, LostFiguresContanier } from './styles/styles';
import { BoardComp, LostFigures, Timer } from './constants/comps';
import { Board, Player, Colors } from './constants/models';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const App = () => {
	const [board, setBoard] = useState(new Board());

	// ! PLAYERS
	const [whitPlayer, setWhitPlayer] = useState(new Player(Colors.WHITE));
	const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK));
	const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

	const restart = () => {
		const newBoard = new Board();
		newBoard.initCells();
		newBoard.addFigures();
		setBoard(newBoard);
	};

	useEffect(() => {
		restart();
		setCurrentPlayer(whitPlayer);
	}, []);

	const swapPlayer = () => {
		setCurrentPlayer(
			currentPlayer?.color === Colors.WHITE ? blackPlayer : whitPlayer
		);
	};

	return (
		<Container>
			<Timer
				restart={restart}
				currentPlayer={currentPlayer}
			/>
			<Box>
				<Typography variant='h4' textAlign={'center'}>
					{currentPlayer?.color === Colors.BLACK ? 'Black' : 'White'} to Move
				</Typography>
				<BoardComp
					board={board}
					setBoard={setBoard}
					currentPlayer={currentPlayer}
					swapPlayer={swapPlayer}
				/>
			</Box>
			<LostFiguresContanier>
				<LostFigures
					title={'Black Lost Figures'}
					figures={board.lostBlackFigures}
				/>
				<LostFigures
					title={'White Lost Figures'}
					figures={board.lostWhiteFigures}
				/>
			</LostFiguresContanier>
		</Container>
	);
};

export default App;
