import { Cell, Colors, Figure, FigureNames } from '../../constants/models';
import pieces from '../../constants/pieces';

export class Rook extends Figure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell);
		this.logo = color === Colors.WHITE ? pieces.white.rook : pieces.black.rook;
		this.name = FigureNames.ROOK;
	}

	canMove(target: Cell): boolean {
		if (!super.canMove(target)) return false;
		if (this.cell.isEmptyVertical(target)) return true;
		if (this.cell.isEmptyHorizontal(target)) return true;
		return false;
	}
}
