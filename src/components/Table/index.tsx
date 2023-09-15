import {
    TableContainer,
    Table as TableChakra,
    Th,
    Tr,
    Thead,
    Tbody,
    Tfoot,
    Td,
    CloseButton,
    Image,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from "@chakra-ui/react";
import React from "react";

const Table = () => {
    const itens = [
        {
            urlImage: "/img/products/f1.jpg",
            nome: "Camisa Teste 1",
            valor: 30,
            quantity: 2,
        },
        {
            urlImage: "/img/products/f2.jpg",
            nome: "Camisa Teste 2",
            valor: 150,
            quantity: 3,
        },
        {
            urlImage: "/img/products/f3.jpg",
            nome: "Camisa Teste 3",
            valor: 33,
            quantity: 1,
        },
    ];

    return (
        <TableContainer w="80%" mx="auto" color="white">
            <TableChakra variant="simple">
                <Thead color="white">
                    <Tr>
                        <Th color="white">Remover</Th>
                        <Th color="white">Imagem</Th>
                        <Th color="white">Produto</Th>
                        <Th color="white">Valor</Th>
                        <Th color="white">Quantidade</Th>
                        <Th color="white">Total</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {itens.map((item, key) => (
                        <Tr key={key}>
                            <Td>
                                <CloseButton color="white" />
                            </Td>
                            <Td>
                                <Image
                                    w={14}
                                    alt={item.nome}
                                    src={item.urlImage}
                                />
                            </Td>
                            <Td>{item.nome}</Td>
                            <Td>R$ {item.valor}</Td>
                            <Td color="black">
                                <NumberInput
                                    size="sm"
                                    w={20}
                                    defaultValue={item.quantity}
                                    max={10}
                                    min={1}
                                >
                                    <NumberInputField bg="primary.100" />
                                    <NumberInputStepper bg="white">
                                        <NumberIncrementStepper bg="white" />
                                        <NumberDecrementStepper bg="white" />
                                    </NumberInputStepper>
                                </NumberInput>
                            </Td>
                            <Td>R$ {item.quantity * item.valor}</Td>
                        </Tr>
                    ))}
                </Tbody>
                <Tfoot>
                    <Tr>
                        <Th color="white">
                            Valor total: R${" "}
                            {itens.reduce(
                                (acumulador, numero) =>
                                    acumulador + numero.valor * numero.quantity,
                                0
                            )}
                        </Th>
                    </Tr>
                </Tfoot>
            </TableChakra>
        </TableContainer>
    );
};

export default Table;
