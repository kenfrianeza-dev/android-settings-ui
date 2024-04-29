import { FC, ReactNode } from "react";
import { ChevronRight } from "lucide-react";

type Props = {
	name: string | null;
	content: string | null;
	icon: ReactNode;
};

const MenuItem: FC<Props> = ({ name, content, icon }) => {
	return (
		<div className="flex items-center justify-between gap-4 py-4 px-4 cursor-pointer dark:hover:bg-slate-800 hover:bg-slate-200 duration-200">
			<div className="flex items-center gap-4">
				{icon}
				<p>{name}</p>
			</div>
			<div className="flex items-center gap-0.5 text-gray-500">
				{content && <p className="text-sm -mt-0.5">{content}</p>}
				<ChevronRight size={20} />
			</div>
		</div>
	);
};

export default MenuItem;
