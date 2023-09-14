import React from "react";
import { Flex, Text, Select, Image, Button } from "@chakra-ui/react";
import { genericStrings } from "@/resources/strings/generic.strings";

interface IProps {
    label?: string;
    value?: string;
    onChange: (e: string) => void;
    variant?: "outline";
}

const SelectInput: React.FC<IProps> = ({ label, onChange, variant }) => {
    return (
        <Flex flexDir="column" gap={2}>
            {label && !variant ? (
                <Text
                    ml={7}
                    color="secondary.500"
                    fontSize={{ base: 16, md: 20 }}
                    variant={variant}
                    fontWeight={variant ? 700 : 500}
                >
                    {label}
                </Text>
            ) : (
                <Text
                    fontWeight={700}
                    color="secondary.500"
                    ml={4}
                    fontSize={{ base: 20, md: 32 }}
                >
                    {label}
                </Text>
            )}
            <Select
                icon={<Image src="/selectIcon.svg" alt="Select" />}
                variant={variant}
                onChange={(e) => onChange(e.target.value)}
            />
            <Button variant="green" mt={5}>
                {genericStrings.add}
            </Button>
        </Flex>
    );
};

export default SelectInput;
