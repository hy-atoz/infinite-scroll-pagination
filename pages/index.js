import { Button, Flex, Heading, Image } from "@chakra-ui/react";
import Link from "next/link";
import { Fragment } from "react";
import useSWR from "swr";

export default function Home() {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(`api/category/en`, fetcher);

  return (
    <Flex
      justifyContent="center"
      gap={[4, 4, 8]}
      marginY={[4, 4, 8]}
      wrap={["wrap", "wrap", "nowrap"]}
    >
      {data ? (
        data.results.map((item) => (
          <Fragment key={item.cat}>
            <Flex
              as={Link}
              href={`/content/${item.cat.toLowerCase()}`}
              border="1px"
              borderColor="brandYellow"
              borderRadius="md"
              cursor="pointer"
              height="auto"
              width={["100%", "80%"]}
              alignItems={["center"]}
              flexBasis={["none", "none", 300]}
              flexDirection={["row", "row", "column"]}
              justifyContent={["space-between"]}
            >
              <a>
                <Image
                  alt="alt"
                  borderBottom={["0", "0", "1px"]}
                  borderBottomColor="brandYellow"
                  borderTopLeftRadius="md"
                  borderTopRightRadius="md"
                  // fallbackSrc={LoadingImage}
                  height={["150", "200", "400"]}
                  width={["50%", "50%", "100%"]}
                  htmlHeight={["200", "200", "400"]}
                  htmlWidth="300"
                  loading="lazy"
                  objectFit={["contain", "contain", "cover", "cover"]}
                  padding={[2, 2, 0]}
                  src={item.image}
                />
                <Flex
                  height={["100%", "100%", "auto"]}
                  width={["50%", "50%", "100%"]}
                  padding={[2, 2, 0]}
                  flexDirection={["column"]}
                  gap={2}
                  justifyContent={["center", "center", "space-between"]}
                >
                  <Heading
                    as="h2"
                    color="brandText"
                    fontSize={["sm", "lg", "xl", "3xl"]}
                    padding={[2, 4]}
                    textAlign="center"
                    textTransform="capitalize"
                  >
                    {item.content}
                  </Heading>
                  <Button
                    borderRadius={["md"]}
                    borderTopLeftRadius={["md", "md", "none"]}
                    borderTopRightRadius={["md", "md", "none"]}
                    colorScheme="yellow"
                    fontSize={["md", "lg"]}
                    marginX="auto"
                    size="md"
                    variant="solid"
                    width={["90%", "60%", "100%"]}
                  >
                    {/* {t("enter")} */}
                    Enter
                  </Button>
                </Flex>
              </a>
            </Flex>
          </Fragment>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </Flex>
  );
}
