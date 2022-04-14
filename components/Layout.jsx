import Head from 'next/head';
import { Box, ModalFooter } from '@chakra-ui/react';

import Footer from './Footer'
import Navbar from './Navbar';


const Layout = ({children}) => {
  return (
   
     <> 
      <Head >
          <title> Heaven Homes</title>
      </Head>
     
    
      <Box maxWidth='1300px'  m="auto">
      <header>
        <Navbar/>
      </header>
      <main>
       {children}
      </main>
      <footer>
        <Footer/>
      </footer>
      </Box>
    </>
  )
}

export default Layout

