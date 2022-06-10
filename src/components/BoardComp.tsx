import React, { FC, useEffect, useState } from 'react';

import { StyledBoard } from '../styles/styles';
import { Board, Cell, Player } from '../constants/models';
import { CellComp } from '../constants/comps';

interface BoardProps {
	board: Board;
	setBoard: (board: Board) => void;
	currentPlayer: Player | null;
	swapPlayer: () => void;
}

const BoardComp: FC<BoardProps> = ({
	board,
	setBoard,
	currentPlayer,
	swapPlayer,
}) => {
	const [seletedCell, setSelectedCell] = useState<Cell | null>(null);

	const click = (cell: Cell) => {
		if (
			seletedCell &&
			seletedCell !== cell &&
			seletedCell.figure?.canMove(cell)
		) {
			seletedCell.moveFigure(cell);
			swapPlayer();
			setSelectedCell(null);
			uptadeBoard();
		} else {
			if (cell.figure?.color === currentPlayer?.color) {
				setSelectedCell(cell);
			}
		}
	};
	
	const highlightCells = () => {
		board.highlightCells(seletedCell);
		uptadeBoard();
	};

	const uptadeBoard = () => {
		const newBoard = board.getCopyBoard();
		setBoard(newBoard);
	};

	useEffect(() => {
		highlightCells();
	}, [seletedCell]);

	return (
		<StyledBoard>
			{board.cells.map((row, index) => (
				<React.Fragment key={index}>
					{row.map((cell) => (
						<CellComp
							click={click}
							cell={cell}
							key={cell.id}
							selected={cell.x === seletedCell?.x && cell.y === seletedCell?.y}
						/>
					))}
				</React.Fragment>
			))}
		</StyledBoard>
	);
};

export default BoardComp;
