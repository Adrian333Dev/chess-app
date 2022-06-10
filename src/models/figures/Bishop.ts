import { Cell, Colors, Figure, FigureNames } from '../../constants/models';
import pieces from '../../constants/pieces';

export class Bishop extends Figure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell);
		this.logo =
			color === Colors.WHITE ? pieces.white.bishop : pieces.black.bishop;
		this.name = FigureNames.BISHOP;
	}

	canMove(target: Cell): boolean {
		if (!super.canMove(target)) return false;
		if (this.cell.isEmptyDiagonal(target)) return true;

		return false;
	}
}
