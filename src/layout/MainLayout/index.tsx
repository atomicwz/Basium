import React from "react";
import { Box } from "@chakra-ui/react";
import SiteHead from "@/components/SiteHead";

interface IProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<IProps> = ({ children }) => {
    return (
        <>
            <SiteHead />
            <Box>{children}</Box>
        </>
    );
};

export default MainLayout;
