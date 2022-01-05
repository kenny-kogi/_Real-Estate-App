import { Box, Flex, Spacer, Avatar, Text } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons";
import millify from "millify";
import { baseUrl, fetchApi } from "../utils/FetchApi";
import ImageScrollbar from "../components/ImageScrollbar";

const PropertyDetails = ({
  propertydetails: {
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    type,
    purpose,
    furnishingStatus,
    amenities,
    photos,
  },
}) => (
  <Box maxWidth="1000px" margin="auto" p="5">
    {photos && <ImageScrollbar data={photos} />}
    {console.log(price)}
    {console.log(photos)}
    {console.log(title)}
  </Box>
);

export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

  return {
    props: {
      propertydetails: data,
    },
  };
}
