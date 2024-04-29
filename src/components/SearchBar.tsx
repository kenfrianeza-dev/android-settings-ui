import { FC } from "react";
import { Search } from "lucide-react";

const SearchBar: FC = () => {
	return (
		<div className="flex items-center py-2 mx-4 bg-slate-200 dark:bg-slate-800 dark:text-slate-500 rounded-lg">
			<Search size={18} className="mx-2" />
			<input
				className="w-full text-xs rounded-r-lg bg-slate-200 dark:bg-slate-800 dark:text-slate-300 text-slate-800 placeholder:text-slate-500 outline-none"
				placeholder="Search settings"
			/>
		</div>
	);
};

export default SearchBar;
