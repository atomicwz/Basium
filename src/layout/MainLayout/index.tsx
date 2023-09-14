import React from "react";
import { Box } from "@chakra-ui/react";
import SiteHead from "@/components/SiteHead";
import Navbar from "../navbar";

interface IProps {
    children: React.ReactNode;
    navbar: {
        hasNavbar?: boolean;
        colorTheming?: "ligthPink" | "darkCyan";
    };
}

const MainLayout: React.FC<IProps> = ({ children, navbar }) => {
    return (
        <>
            <SiteHead />
            {navbar.hasNavbar && <Navbar colorTheming={navbar.colorTheming} />}
            <Box>{children}</Box>
        </>
    );
};

export default MainLayout;
