import React from "react";
import { ThemeProvider } from "styled-components";
import { Placeholder, GlobalStyle, lightTheme } from "./lib";

function App() {
	const switcher = false;
	return (
		<ThemeProvider theme={lightTheme}>
			<GlobalStyle />
			<main>
				<Placeholder text="Привет новый мир" />
			</main>
		</ThemeProvider>
	);
}

export default App;
