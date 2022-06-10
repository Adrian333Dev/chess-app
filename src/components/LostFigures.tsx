import React, { FC } from 'react';
import { Figure } from '../constants/models';
import { StyledLostFigure, StyledLostFigures } from '../styles/styles';

interface LostFiguresProps {
	title: string;
	figures: Figure[];
}

const LostFigures: FC<LostFiguresProps> = ({ title, figures }) => {
	return (
		<StyledLostFigures>
			{figures.map((figure) => (
				<StyledLostFigure key={figure.id}>
					{figure?.logo && <img src={figure.logo} alt={figure.name} />}
				</StyledLostFigure>
			))}
		</StyledLostFigures>
	);
};

export default LostFigures;
