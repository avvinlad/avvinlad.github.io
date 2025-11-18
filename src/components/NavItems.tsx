import React from "react";
import { Button } from "@/components/ui/button";
import { ThemeModeToggle } from "@/components/theme-selection";
import { Home, SquareUserRound, FolderGit2 } from "lucide-react";
import { NAV_HOME, NAV_ABOUT, NAV_PROJECTS } from "@/constants/localization";

const BUTTON_CLASS = "mx-1 text-xs";
const ICON_CLASS = "mr-2 h-3 w-3";

export default function NavItems() {
    return (
        <>
            <a href="#">
                <Button className={BUTTON_CLASS}>
                    <Home className={ICON_CLASS} />
                    {NAV_HOME}
                </Button>
            </a>
            <a href="#about">
                <Button className={BUTTON_CLASS}>
                    <SquareUserRound className={ICON_CLASS} />
                    {NAV_ABOUT}
                </Button>
            </a>
            <a href="#projects">
                <Button className={BUTTON_CLASS}>
                    <FolderGit2 className={ICON_CLASS} />
                    {NAV_PROJECTS}
                </Button>
            </a>
            <a>
                <ThemeModeToggle />
            </a>
        </>
    );
}
