import {
	ArrowUpDown,
	Bluetooth,
	Bolt,
	Bot,
	Box,
	Brain,
	Database,
	FileLock2,
	Fingerprint,
	FlaskConical,
	HeartPulse,
	MapPin,
	MessageSquareDot,
	Radio,
	Shirt,
	Smartphone,
	Sun,
	TriangleAlert,
	User,
	Volume1,
	Waypoints,
	Wifi,
} from "lucide-react";
import { FaGoogle } from "react-icons/fa";
import { Divider } from "../components";
import { ReactNode } from "react";

type Data = {
	id: number;
	name: string | null;
	content: string | null;
	icon: ReactNode;
};

export const data: Data[] = [
	{
		id: 1,
		name: "My Phone",
		content: "Ken",
		icon: <Smartphone className="text-lime-500" />,
	},
	{ id: 2, name: null, content: null, icon: <Divider /> },
	{
		id: 3,
		name: "SIM & Network Settings",
		content: null,
		icon: <ArrowUpDown className="text-emerald-500" />,
	},
	{
		id: 4,
		name: "Wi-Fi",
		content: "MY_WIFI_5G",
		icon: <Wifi className="text-cyan-500" />,
	},
	{
		id: 5,
		name: "Bluetooth",
		content: null,
		icon: <Bluetooth className="text-cyan-500" />,
	},
	{
		id: 6,
		name: "Hotspot & Tethering",
		content: null,
		icon: <Radio className="text-blue-500" />,
	},
	{
		id: 7,
		name: "More Connections",
		content: "Android Auto",
		icon: <Waypoints className="text-blue-500" />,
	},
	{ id: 8, name: null, content: null, icon: <Divider /> },
	{
		id: 9,
		name: "Personalization",
		content: null,
		icon: <Shirt className="text-emerald-500" />,
	},
	{
		id: 10,
		name: "Display & Brightness",
		content: null,
		icon: <Sun className="text-cyan-500" />,
	},
	{
		id: 11,
		name: "Sound & Vibration",
		content: null,
		icon: <Volume1 className="text-blue-500" />,
	},
	{
		id: 12,
		name: "Notification Center",
		content: null,
		icon: <MessageSquareDot className="text-lime-500" />,
	},
	{ id: 13, name: null, content: null, icon: <Divider /> },
	{
		id: 14,
		name: "Password & Security",
		content: null,
		icon: <Fingerprint className="text-emerald-500" />,
	},
	{
		id: 15,
		name: "Privacy",
		content: null,
		icon: <FileLock2 className="text-cyan-500" />,
	},
	{
		id: 16,
		name: "Storage",
		content: null,
		icon: <Database className="text-blue-500" />,
	},
	{
		id: 17,
		name: "App Management",
		content: null,
		icon: <Box className="text-lime-500" />,
	},
	{
		id: 18,
		name: "Location",
		content: null,
		icon: <MapPin className="text-emerald-500" />,
	},
	{ id: 19, name: null, content: null, icon: <Divider /> },
	{
		id: 20,
		name: "Power Marathon",
		content: null,
		icon: <FlaskConical className="text-blue-500" />,
	},
	{
		id: 21,
		name: "Folax",
		content: null,
		icon: <Bot className="text-lime-500" />,
	},
	{
		id: 22,
		name: "Digital Wellbeing & Parental Controls",
		content: null,
		icon: <HeartPulse className="text-emerald-500" />,
	},
	{
		id: 23,
		name: "Special Function",
		content: null,
		icon: <Brain className="text-cyan-500" />,
	},
	{ id: 24, name: null, content: null, icon: <Divider /> },
	{
		id: 25,
		name: "Users & Accounts",
		content: null,
		icon: <User className="text-blue-500" />,
	},
	{
		id: 26,
		name: "Safety & Emergency",
		content: null,
		icon: <TriangleAlert className="text-cyan-500" />,
	},
	{
		id: 27,
		name: "Google",
		content: null,
		icon: <FaGoogle size={22} className="text-emerald-500" />,
	},
	{ id: 28, name: null, content: null, icon: <Divider /> },
	{
		id: 29,
		name: "System",
		content: null,
		icon: <Bolt className="text-blue-500" />,
	},
	{ id: 30, name: null, content: null, icon: <Divider /> },
];
