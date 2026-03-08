import { ArrowUpRight, Github, Instagram, Mail, Music, Podcast, Youtube } from "lucide-react"
import SpicyLyricsIcon from "@/components/custom/Icons/SpicyLyrics"
import TikTokIcon from "@/components/custom/Icons/TikTokIcon";
import XIcon from "@/components/custom/Icons/XIcon";
import SpotifyIcon from "@/components/custom/Icons/SpotifyIcon";
import DiscordIcon from "@/components/custom/Icons/DiscordIcon";

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
        href: "https://profile.spicylyrics.org/balint2201",
        icon: <SpicyLyricsIcon className="fill-white" />,
    },
]

export default LinkList;
