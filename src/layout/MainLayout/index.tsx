import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../navbar";
import SiteHead from "@/components/SiteHead";

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
            <Box mt={"20"}>{children}</Box>
        </>
    );
};

export default MainLayout;
