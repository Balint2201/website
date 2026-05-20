import { ArrowUpRight } from "lucide-react"
import SpicyLyricsIcon from "@/components/custom/Icons/SpicyLyrics"
import DiscordIcon from "@/components/custom/Icons/DiscordIcon";
import PcIcon from "@/components/custom/Icons/PcIcon";

type LinkListItem = {
    name: string;
    href: string;
    icon?: React.ReactNode;
    target?: string;
    variant?: "default" | "secondary";
    color?: string;
}

const LinkList: LinkListItem[] = [
    {
        name: "My Yoursitee",
        href: "https://yoursit.ee/balint2201",
        icon: <ArrowUpRight />,
        variant: "default"
    },
    {
        name: "Discord Account",
        href: "https://discord.com/users/854066559314821172",
        icon: <DiscordIcon />
    },
    {
        name: "Spicy Lyrics TTML Profile",
        href: "https://spicylyrics.org/balint2201",
        icon: <SpicyLyricsIcon className="fill-white" />,
    },
    {
        name: "Setup",
        href: "/setup",
        icon: <PcIcon className="fill-white" />,
        target: "_self"
    },
]

export default LinkList;
