import { Cell, Colors, Figure, FigureNames } from '../../constants/models';
import pieces from '../../constants/pieces';

export class King extends Figure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell);
		this.logo = color === Colors.WHITE ? pieces.white.king : pieces.black.king;
		this.name = FigureNames.KING;
	}

	canMove(target: Cell): boolean {
		if (!super.canMove(target)) return false;

		return true;
	}
}
