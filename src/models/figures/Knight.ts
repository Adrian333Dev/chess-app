import { Cell, Colors, Figure, FigureNames } from '../../constants/models';
import pieces from '../../constants/pieces';

export class Knight extends Figure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell);
		this.logo =
			color === Colors.WHITE ? pieces.white.knight : pieces.black.knight;
		this.name = FigureNames.KNIGHT;
	}

	canMove(target: Cell): boolean {
		if (!super.canMove(target)) return false;
		const dx = Math.abs(this.cell.x - target.x);
		const dy = Math.abs(this.cell.y - target.y);

		return (dx === 1 && dy === 2) || (dx === 2 && dy === 1);
	}
}
