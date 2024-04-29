import { FC } from "react";
import { DarkModeToggle } from "../components";

type Props = {
	isDarkMode: boolean | null;
	setIsDarkMode: (isDarkMode: boolean) => void;
};

const Header: FC<Props> = ({ isDarkMode, setIsDarkMode }) => {
	const toggleDarkMode = () => {
		setIsDarkMode(!isDarkMode);
	};

	return (
		<div className="flex justify-between items-center py-4 mx-4">
			<h1 className="font-bold text-2xl">Settings</h1>
			<DarkModeToggle
				isDarkMode={isDarkMode ?? false}
				toggleDarkMode={toggleDarkMode}
			/>
		</div>
	);
};

export default Header;
