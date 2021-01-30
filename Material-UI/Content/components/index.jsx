import { Component, useState } from 'react';
import {
	Link,
	BrowserRouter,
	Route,
	Switch,
	StaticRouter,
	Redirect,
} from 'react-router-dom';
import { Helmet } from 'react-helmet';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { AppBar, Box, Button, Container, Toolbar, Typography } from '@material-ui/core';

import Navbar from './navbar.jsx';

const HomePage = (props) => {
	return (
		<>
			<Helmet>
				<title>Material-UI</title>
			</Helmet>

			<Container>
				<Box my={2}>
					{[...new Array(12)]
						.map(
							() => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
						)
						.join('\n')}
				</Box>
			</Container>
		</>
	);
}

{/*const theme = createMuiTheme({
	palette: {
		type: 'dark',
	},
});

 export default class App extends Component {
	state = {
		theme: {
			palette: {
				type: 'dark',
			},
    },
	}

	// https://codesandbox.io/s/wz9r8330p7?from-embed=&file=/app.js:351-366
	toggleDarkTheme = () => {
		let newPaletteType = this.state.theme.palette.type === "light" ? "dark" : "light";

		this.setState({
			theme: {
				palette: {
					type: newPaletteType,
				}
			}
		});
		console.log('toggling', this.state)
	};

	muiTheme = createMuiTheme(this.state.theme);

	render() {
		const app = (
			<div>
				<ThemeProvider theme={this.muiTheme}>
					<CssBaseline />
					<Navbar toggleDarkTheme={this.toggleDarkTheme} />
					<Switch>
						<Route
							exact
							path="/"
							render={() => <Redirect to="/home" />}
						/>
						<Route path="/home" component={HomePage} />
						<Route
							path="*"
							component={({ staticContext }) => {
								if (staticContext) staticContext.status = 404;

								return <h1>Not Found :(</h1>;
							}}
						/>
					</Switch>
				</ThemeProvider >
			</div>
		);

		if (typeof window === 'undefined') {
			return (
				<StaticRouter
					context={this.props.context}
					location={this.props.location}
				>
					{app}
				</StaticRouter>
			);
		}
		else {
			return <BrowserRouter>{app}</BrowserRouter>;
    }
	}
} */}

const darkTheme = {
	palette: {
		primary: {
			main: '#201e33',
		},
		secondary: {
			main: '#732028',
		},
		type: "dark"
	}
};

const lightTheme = {
	palette: {
		primary: {
			main: '#201e33',
		},
		secondary: {
			main: '#732028',
		},
		type: "light"
	}
};

export default function App(props) {
	const [theme, setTheme] = useState(darkTheme);

	const toggleTheme = () => {
		theme.palette.type === 'light' ? setTheme(darkTheme) : setTheme(lightTheme);
	};

	const muiTheme = createMuiTheme(theme);

	const app = (
		<div>
			<ThemeProvider theme={muiTheme}>
				<CssBaseline />
				<Navbar toggleTheme={toggleTheme} type={theme.palette.type} />
				<Switch>
					<Route
						exact
						path="/"
						render={() => <Redirect to="/home" />}
					/>
					<Route path="/home" component={HomePage} />
					<Route
						path="*"
						component={({ staticContext }) => {
							if (staticContext) staticContext.status = 404;

							return <h1>Not Found :(</h1>;
						}}
					/>
				</Switch>
			</ThemeProvider >
		</div>
	);

	if (typeof window === 'undefined') {
		return (
			<StaticRouter
				context={props.context}
				location={props.location}
			>
				{app}
			</StaticRouter>
		);
	}
	else {
		return <BrowserRouter>{app}</BrowserRouter>;
	}
}