import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer,Icon } from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch,BsMenuButtonWide } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';
import {BiHome} from 'react-icons/bi';
import {MdRealEstateAgent} from "react-icons/md";

const Navbar = () => (
 <Box  m='1.5'>
 <Flex p='2' borderBottom='1px' borderColor='gray.100'>
    <Box fontSize='3xl'  color='gray.500' fontWeight='bold'>
      <Icon><MdRealEstateAgent/></Icon>
      <Link href='/' paddingLeft='2'> Heaven Homes</Link>
    </Box>
    <Spacer />
    <Box>
      <Menu>
        <MenuButton as={IconButton} icon={<BsMenuButtonWide />} variant='outlined' color='gray.500' />
        <MenuList bg='gray.300'color='blue.400'>
          <Link href='/' passHref>
            <MenuItem icon={<BiHome/>}>Home</MenuItem>
          </Link>
          <Link href='/search' passHref>
            <MenuItem icon={<BsSearch />}>Search</MenuItem>
          </Link>
          <Link href='/search?purpose=for-sale' passHref>
            <MenuItem icon={<MdRealEstateAgent/>}>Buy Property</MenuItem>
          </Link>
          <Link href='/search?purpose=for-rent' passHref>
            <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Box>
  </Flex>
  </Box>
);

export default Navbar;