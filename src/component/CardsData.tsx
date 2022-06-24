import React from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
interface CardsDataProps {
	title: string
}
export const CardsData: React.FC<CardsDataProps> = ({ title }) => {
	const theme = createTheme();
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Container sx={{ py: 5 }} maxWidth="md">
				{/* End hero unit */}
				<Grid container spacing={3}>
					<Grid xs={12} sm={6} md={4}>
						<Card
							sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
						>
							<CardMedia
								component="img"
								sx={{
									// 16:9
									pt: '56.25%',
								}}
								image="https://source.unsplash.com/random"
								alt="random"
							/>
							<CardContent sx={{ flexGrow: 1 }}>
								<Typography gutterBottom variant="h5" component="h2">
									{title}
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Container>
		</ThemeProvider >
	)
}
