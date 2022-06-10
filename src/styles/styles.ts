import { styled } from '@mui/material';

export const Container = styled('div')(({ theme }) => ({
	width: '100%',
	height: '100vh',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
}));

export const StyledBoard = styled('div')(({ theme }) => ({
	width: '96%',
	maxWidth: 512,
	aspectRatio: '1 / 1',
	outline: '1px solid #fff',
	borderRadius: '4px',
	overflow: 'hidden',
	display: 'grid',
	gridTemplateColumns: 'repeat(8, 1fr)',
	gridTemplateRows: 'repeat(8, 1fr)',
}));

export const StyledCell = styled('div')(({ theme }) => ({
	width: '100%',
	height: '100%',
	maxWidth: 64,
	maxHeight: 64,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	'& img': {
		width: '100%',
	},
}));

export const Available = styled('div')(({ theme }) => ({
	width: 20,
	height: 20,
	borderRadius: '50%',
	backgroundColor: 'rgba(0, 0, 0, 0.36)',
}));

export const LostFiguresContanier = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
	height: '100%',
	maxHeight: 512,
	width: '100%',
	maxWidth: 200,
}));
export const StyledLostFigures = styled('div')(({ theme }) => ({
	display: 'flex',
	flexWrap: 'wrap',
}));
export const StyledLostFigure = styled('div')(({ theme }) => ({
	width: 24,
	height: 24,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	'& img': {
		width: '100%',
	},
}));
