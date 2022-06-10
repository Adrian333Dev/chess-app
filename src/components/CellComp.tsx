import React, { FC } from 'react';

import { Cell, Colors } from '../constants/models';
import { Available, StyledCell } from '../styles/styles';

interface CellProps {
	cell: Cell;
	selected: boolean;
	click: (cell: Cell) => void;
}

const CellComp: FC<CellProps> = ({ cell, selected, click }) => {
	return (
		<StyledCell
			style={{
				backgroundColor: selected
					? `${cell.color === Colors.BLACK ? '#2D3748' : '#4A5568'}`
					: cell.available && cell.figure
					? 'rgba(0, 255, 0, 0.8)'
					: cell.color,
			}}
			onClick={() => click(cell)}
		>
			{cell.available && !cell.figure && <Available />}
			{cell.figure?.logo && (
				<img src={cell.figure.logo} alt={cell.figure.name} />
			)}
		</StyledCell>
	);
};

export default CellComp;
