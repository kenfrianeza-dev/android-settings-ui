import { FC, useEffect, useState } from "react";
import { Footer, Header, MenuList, SearchBar } from "./components";
import { data } from "./constants/data";

const App: FC = () => {
	const [isDarkMode, setIsDarkMode] = useState<boolean | null>(
		localStorage.getItem("dark-mode") === "true"
	);

	useEffect(() => {
		localStorage.setItem("dark-mode", isDarkMode?.toString() ?? "");
	}, [isDarkMode]);

	return (
		<main
			className={`${isDarkMode ? "dark" : ""} h-screen ${
				isDarkMode ? "bg-slate-900" : "bg-white"
			} duration-100`}
		>
			<div className="dark:bg-slate-900 text-gray-800 dark:text-slate-200 duration-100">
				<div className="container pb-4">
					<Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
					<SearchBar />
					<MenuList data={data} />
					<Footer isDarkMode={isDarkMode} />
				</div>
			</div>
		</main>
	);
};

export default App;
