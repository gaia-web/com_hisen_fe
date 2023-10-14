import { Flex, Button } from "@chakra-ui/react";
import { StateUpdater } from "preact/hooks";

const Paginator = ({
  index,
  setIndex,
  pages,
}: {
  index: number;
  setIndex: StateUpdater<number>;
  pages: number[];
}) => {
  let leftCount = 0;
  let rightCount = 0;

  const baseStyle = {
    marginX: "2",
    bg: "gray.200",
    _hover: {
      bg: "gray.300",
    },
  };

  const activeStyle = {
    ...baseStyle,
    bg: "cyan.400",
    color: "white",
    _hover: {
      bg: "cyan.300",
    },
  };

  if (pages.length <= 5) {
    return (
      <Flex justify="center">
        <Button {...baseStyle} onClick={() => setIndex(0)}>{`<<`}</Button>
        <Button {...baseStyle} onClick={() => setIndex(0)}>{`<`}</Button>
        {pages.map((p) => (
          <Button
            {...(index === p ? activeStyle : baseStyle)}
            onClick={() => setIndex(p)}
          >
            {p + 1}
          </Button>
        ))}
        <Button
          {...baseStyle}
          onClick={() => setIndex(index === pages.length - 1 ? pages.length - 1 : index + 1)}
        >{`>`}</Button>
        <Button {...baseStyle} onClick={() => setIndex(pages.length - 1)}>{`>>`}</Button>
      </Flex>
    );
  } else {
    return (
      <Flex justify="center">
        <Button {...baseStyle} onClick={() => setIndex(0)}>{`<<`}</Button>
        <Button {...baseStyle} onClick={() => setIndex(index > 0 ? index - 1 : 0)}>{`<`}</Button>
        <Button
          {...(index === 0 ? activeStyle : baseStyle)}
          onClick={() => setIndex(0)}
        >{`1`}</Button>
        {pages.slice(1, pages.length - 1).map((p, i) => {
          const j = i + 1;
          if (index === j) {
            return (
              <Button
                {...(index === p ? activeStyle : baseStyle)}
                onClick={() => setIndex(p)}
              >
                {p + 1}
              </Button>
            );
          } else {
            if (j < index && !leftCount) {
              leftCount++;
              return <Button {...baseStyle} isDisabled>...</Button>;
            } else if (j > index && !rightCount) {
              rightCount++;
              return <Button {...baseStyle} isDisabled>...</Button>;
            }
          }
        })}
        <Button
          {...(index === pages.length - 1 ? activeStyle : baseStyle)}
          onClick={() => setIndex(pages.length - 1)}
        >
          {pages.length}
        </Button>
        <Button
          {...baseStyle}
          onClick={() => setIndex(index === pages.length - 1 ? pages.length - 1 : index + 1)}
        >{`>`}</Button>
        <Button {...baseStyle} onClick={() => setIndex(pages.length - 1)}>{`>>`}</Button>
      </Flex>
    );
  }
};

export default Paginator;
