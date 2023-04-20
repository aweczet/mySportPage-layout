import { HStack, Link, Text, VStack } from "@chakra-ui/react";
import Icon from "@mdi/react";
import { mdiLinkedin, mdiTwitter } from "@mdi/js";
import { AuthorsData } from "@/components/footer/index.consts";

const Authors = () => {
  return (
    <HStack gap={0.1}>
      {AuthorsData.map(({ name, twitter, linkedin }, index) => {
        return (
          <>
            <VStack>
              <Text fontStyle="italic">{name}</Text>
              <HStack>
                <Link href={twitter} isExternal color="#1d9bf0">
                  <Icon path={mdiTwitter} size={0.8} />
                </Link>
                <Link href={linkedin} isExternal color="#0e76a8">
                  <Icon path={mdiLinkedin} size={1} />
                </Link>
              </HStack>
            </VStack>
            {index + 1 !== AuthorsData.length ? <Text px={1}>and</Text> : null}
          </>
        );
      })}
    </HStack>
  );
};

export default Authors;
