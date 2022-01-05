import { useContext } from "react";
import Image from "next/image";
import { Box, Icon, Flex } from "@chakra-ui/react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Flex justifyContent="center" alignItems="center" marginRight="1">
      <Icon
        as={FaArrowCircleLeft}
        fontSize="2xl"
        cursor="pointer"
        onClick={() => scrollPrev}
      ></Icon>
    </Flex>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Flex justifyContent="center" alignItems="center" marginRight="1">
      <Icon
        as={FaArrowCircleRight}
        fontSize="2xl"
        cursor="pointer"
        onClick={() => scrollNext}
      ></Icon>
    </Flex>
  );
};

const ImageScrollbar = ({ data }) => (
  <ScrollMenu
    LeftArrow={LeftArrow}
    RightArrow={RightArrow}
    style={{ overflow: "hidden" }}
  >
    {data.map((item) => (
      <Box key={item.id} width="910px" overflow="hidden" itemID={item.id}>
        <Image
          src={item.url}
          alt="propperty"
          width={1000}
          height={500}
          placeholder="blur"
          blurDataURL={item.url}
          sizes="(max-width:500px) 100px, (max-width:1023px) 400px, 1000px"
        ></Image>
      </Box>
    ))}
  </ScrollMenu>
);

export default ImageScrollbar;
