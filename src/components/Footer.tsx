import { FC } from "react";

type Props = {
	isDarkMode: boolean | null;
};

const Footer: FC<Props> = ({ isDarkMode }) => {
	return (
		<div className="flex items-center justify-center gap-2 py-2">
			<p>Coded with {isDarkMode ? "🤍" : "❤️"} by:</p>
			<a
				className="underline font-semibold"
				href="https://www.facebook.com/kenfrianeza2555"
				target="_blank"
				rel="noopener noreferrer"
			>
				Ken Frianeza
			</a>
		</div>
	);
};

export default Footer;
