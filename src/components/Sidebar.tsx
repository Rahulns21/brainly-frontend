import { Logo } from "../icons/Logo";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";

export function Sidebar() {
    return <div className="h-screen bg-white border-r-2 
    w-72 fixed left-0 top-0 pl-6">
        <h1 className="flex text-2xl 
        font-semibold pt-6 items-center">
            <div className="pr-4 text-purple-600">
                <Logo />
            </div>
            <div className="text-purple-600">
                Brainly
            </div>
        </h1>
        <div className="pt-6 pl-4">
            <SidebarItem icon={<TwitterIcon />} text="Twitter"/>
            <SidebarItem icon={<YoutubeIcon />} text="Youtube" />
        </div>
    </div>
}