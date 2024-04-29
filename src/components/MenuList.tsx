import { FC, ReactNode } from "react";
import MenuItem from "./MenuItem";

type Props = {
	data: Data[];
};

type Data = {
	id: number;
	name: string | null;
	content: string | null;
	icon: ReactNode;
};

const MenuList: FC<Props> = ({ data }) => {
	return (
		<div className="mt-4">
			{data.map((item) => {
				return item.name !== null ? (
					<MenuItem key={item.id} {...item} />
				) : (
					<div key={item.id}>{item.icon}</div>
				);
			})}
		</div>
	);
};

export default MenuList;
