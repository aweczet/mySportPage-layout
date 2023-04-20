import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";
import useColors from "@/components/colors";

const Search = () => {
  const { borderColor, iconsColor, hoverColor } = useColors();
  return (
    <InputGroup borderColor={borderColor}>
      <InputLeftElement
        pointerEvents="none"
        color={iconsColor}
        children={<Icon path={mdiMagnify} size={1} />}
      />
      <Input
        focusBorderColor={borderColor}
        type="text"
        placeholder="Search"
        _placeholder={{ color: "inherit" }}
        outline="none"
        _hover={{ borderColor: borderColor, backgroundColor: hoverColor }}
      />
    </InputGroup>
  );
};

export default Search;
