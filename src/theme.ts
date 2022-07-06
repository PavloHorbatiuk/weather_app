import {createTheme} from '@mui/material/styles';

const theme = createTheme({
	typography: {
		fontFamily: [
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
	},
	components: {
		MuiTextField: {
			styleOverrides: {
				root: {
					background: "#ffff"
				}
			}
		}
	}
});
export const inShadow = "inset -3.277px -2.294px 5px 0px rgb(255 255 255 / 66%), " +
	"inset -0.819px -0.574px 0px 0px rgb(255 255 255 / 18%), " +
	"inset 2.121px 2.121px 7px 0px rgb(49 69 106 / 18%)"
export const outBoxshadow= "-0.819px -0.574px 1px 0px rgb(255 255 255 / 15%), -0.819px -0.574px 3px 0px rgb(255 255 255 / 47%), 2.598px 1.5px 5px 0px rgb(13 29 58 / 19%), 0.866px 0.5px 1px 0px rgb(13 29 58 / 6%), inset 0.707px 0.707px 0px 0px rgb(255 255 255 / 60%), inset -1.638px -1.147px 3px 0px rgb(49 69 106 / 18%)"
export default theme;
