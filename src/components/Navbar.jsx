import { Box, Button, HStack, Stack } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
  return (
      <Stack  margin={"auto"} border="1px solid #f2e9e4" padding="0.5rem">

         <HStack justifyContent={"space-between"}>
         <Box>
            <Button  bgGradient='linear(to-r, #8338ec, #3a86ff)'color={"white"} fontSize="20px" _hover={""}>4d</Button>
        </Box>


        <HStack>
        <Box>
            <Button bg={"white"}>Sign In</Button>
        </Box>

        <Box>
            <Button border={"1px solid #8338ec"} color="#8338ec">Sign Up</Button>
        </Box>

        <Box>
            <Button  bgGradient='linear(to-r, #8338ec, #3a86ff)' color={"white"} _hover={""}>Post a Job</Button>
        </Box>

        </HStack>
         </HStack>
        

      </Stack>
   
  )
}

export default Navbar