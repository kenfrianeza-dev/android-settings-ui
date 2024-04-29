import { FC } from "react";
import { Moon, Sun } from "lucide-react";

type Props = {
	isDarkMode: boolean;
	toggleDarkMode: () => void;
};

const DarkModeToggle: FC<Props> = ({ isDarkMode, toggleDarkMode }) => {
	return (
		<button
			onClick={toggleDarkMode}
			className="flex items-center justify-center"
		>
			<div>
				{isDarkMode ? (
					<Sun className="text-yellow-400 hover:text-yellow-300 duration-200" />
				) : (
					<Moon className="text-blue-400 hover:text-blue-300 duration-200" />
				)}
			</div>
		</button>
	);
};

export default DarkModeToggle;
