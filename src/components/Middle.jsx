import { Box, Button, HStack, Input,Stack,Text,Image } from '@chakra-ui/react'
import React from 'react'
import {TriangleDownIcon} from "@chakra-ui/icons"
const Middle = () => {
  return (
    <Box marginTop="50px">
       
    <Box fontSize={"3.6rem"} fontWeight="bold" color={"#023047"}>Find The Right</Box>
    <Text as="span" fontSize={"3.6rem"} fontWeight="bold" > <Text as="span" color="#9b5de5" > Four- <Text as="span" color="#4361ee" >Day</Text></Text> Week Job</Text>

    <Box marginTop={8}>
       <Input width={"30rem"} type="text" placeholder='type job title or keyword' />
       <Button margin="0px 0px 3px 5px" border={"1px solid #3a86ff"}><TriangleDownIcon/></Button>
    </Box>
    
    <Stack gap={"2px"} marginTop={"20px"}>
    <HStack display={"flex"} margin="auto">
      <Button  width="170px" bg={"#8338ec"} color="white" _hover={""}>
      <Image width="20px" src='https://cdn.icon-icons.com/icons2/2481/PNG/72/earth_globe_planet_icon_149815.png' />
       Remote</Button>
      <Button   width="170px" bg={"#8338ec"} color="white" _hover={""}> {`<> Tech`}</Button>
      <Button  width="170px" bg={"#8338ec"} color="white" _hover={""}>Marketing</Button>
    </HStack>
    </Stack>
    
    
  </Box>
  )
}

export default Middle

