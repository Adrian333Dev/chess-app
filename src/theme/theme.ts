import { createTheme } from '@mui/material';

const theme = createTheme({
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					backgroundColor: '#171923',
					color: '#E2E8F0',
				},
			},
		},
	},
});

export default theme;
