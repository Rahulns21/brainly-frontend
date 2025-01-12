import { ReactElement } from "react";

interface SidebarItemProps {
    text: string;
    icon: ReactElement;
} 

export function SidebarItem(props: SidebarItemProps) {
    return <div className="flex text-gray-700 py-2 cursor-pointer 
    hover:bg-gray-200 rounded px-4 max-w-48 transition-all">
        <div className="pr-2">
            {props.icon} 
        </div>
        <div>
            {props.text}
        </div>
    </div>
}