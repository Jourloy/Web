import UrlApp from "./urlApp";
import {Box} from "@mantine/core";

export interface MainAppProp {
	appState: string
}

export default function MainApp({appState}: MainAppProp) {
	let AppComponent;

	if (appState === `url`) AppComponent = <UrlApp />;

	return (
		<>
			<Box style={{
				position: `absolute`, left: `50%`, top: `50%`,
				transform: `translate(-50%, -50%)`,
				marginLeft: `150px`,
			}}>
				{AppComponent}
			</Box>
		</>
	);
}