import Link from "next/link";
import { IconType } from "react-icons";

interface Props {
  label: string;
  url: string;
  Icon: IconType;
}

export const SidebarOption = ({ Icon, label, url }: Props) => {
  return (
    <Link
      href={url}
      className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
    >
      <Icon size={30}/>
      <span className="ml-3 text-xl">{label}</span>
    </Link>
  );
};
