import Link from 'next/link';
import Image from 'next/image';
import {Flex,Box,Text,Button, background} from '@chakra-ui/react';
import {baseUrl,fetchApi}from '../utils/fetchApi';
import Property from '../components/Property';
import na from '../assets/images/na.jpg';
import n from '../assets/images/n.jpg';



const Banner=({buttonText,LinkName,desc2,desc1,title2,title1,purpose,imageUrl})=>(
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} width={500} height={300} alt="banner" />
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium"> {purpose}</Text>
      <Text  fontSize="3x1" fontWeight="bold">{title1}<br/> {title2}</Text>
      <Text paddingBottom="3" paddingTop="3" color="gray.700" fontSize="lg" fontWeight="medium"> {desc1}<br/> {desc2}</Text>
      <Button fontSize="xl" >
      <Link href={LinkName}>{buttonText}</Link>
      </Button>
    </Box>

  </Flex>
)
export default function Home({propertiesForRent,propertiesForSale}) {

  return (
    <div>
    <Box  m='-1'p='1' bgColor="blue.200">
     <Box bg='gray.400'p='0.5'm='10' width='-webkit-fit-content' >
     <Banner 
      purpose="RENT A HOME"
      title1="Rental Homes for"
      title2="Everyone"
      desc1="Explore Apartments, Villas, Homes"
      desc2=" and more"
      buttonText="Explore Renting"
      LinkName="/search?purpose=for-rent"
      imageUrl={na}
      /></Box> 
      
      <Flex flexWrap="wrap"> 
      {propertiesForRent.map((property)=><Property property={property} key={property.id}/>)}
      </Flex>
      <Box bg='gray.400'p='0.5'm='10' width='-webkit-fit-content' >
      <Banner 
      purpose="BUY A HOME"
      title1="Find,Buy & Own your"
      title2="Dream Home"
      desc1="Explore Apartments, Villas, Homes"
      desc2=" and more"
      buttonText="Explore Buying"
      LinkName="/search?purpose=for-rent"
      imageUrl={n}
      />
      </Box>
       <Flex flexWrap="wrap"> 
       {propertiesForSale.map((property)=><Property property={property} key={property.id}/>)}</Flex>
    </Box>
    </div>
  )
}
export async function getStaticProps(){
  const propertyForRent= await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)
  const propertyForSale= await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`) 
return {
  props:{
    propertiesForRent:propertyForRent?.hits,
    propertiesForSale:propertyForSale?.hits,
  }
}
 }