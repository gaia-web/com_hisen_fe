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

  if (pages.length <= 5) {
    return (
      <Flex>
        <Button
          onClick={() => {
            setIndex(0);
          }}
        >{`<<`}</Button>
        <Button
          onClick={() => {
            setIndex(0);
          }}
        >{`<`}</Button>
        {pages.map((p) => {
          return index === p ? (
            <Button
              colorScheme="cyan"
              onClick={() => {
                setIndex(p);
              }}
            >
              {p + 1}
            </Button>
          ) : (
            <Button
              onClick={() => {
                setIndex(p);
              }}
            >
              {p + 1}
            </Button>
          );
        })}
        <Button
          onClick={() => {
            setIndex(index === pages.length - 1 ? pages.length - 1 : index + 1);
          }}
        >{`>`}</Button>
        <Button
          onClick={() => {
            setIndex(pages.length - 1);
          }}
        >{`>>`}</Button>
      </Flex>
    );
  } else {
    return (
      <Flex>
        <Button
          onClick={() => {
            setIndex(0);
          }}
        >{`<<`}</Button>
        <Button
          onClick={() => {
            setIndex(index > 0 ? index - 1 : 0);
          }}
        >{`<`}</Button>
        <Button
          colorScheme={index === 0 ? "cyan" : "gray"}
          onClick={() => {
            setIndex(0);
          }}
        >{`1`}</Button>
        {pages.slice(1, pages.length - 1).map((p, i) => {
          const j = i + 1;
          if (index === j) {
            return index === p ? (
              <Button
                colorScheme="cyan"
                onClick={() => {
                  setIndex(p);
                }}
              >
                {p + 1}
              </Button>
            ) : (
              <Button
                onClick={() => {
                  setIndex(p);
                }}
              >
                {p + 1}
              </Button>
            );
          } else {
            if (j < index && !leftCount) {
              leftCount++;
              return <Button isDisabled>...</Button>;
            } else if (j > index && !rightCount) {
              rightCount++;
              return <Button isDisabled>...</Button>;
            }
          }
        })}
        <Button
          colorScheme={index === pages.length - 1 ? "cyan" : "gray"}
          onClick={() => {
            setIndex(pages.length - 1);
          }}
        >
          {pages.length}
        </Button>
        <Button
          onClick={() => {
            setIndex(index === pages.length - 1 ? pages.length - 1 : index + 1);
          }}
        >{`>`}</Button>
        <Button
          onClick={() => {
            setIndex(pages.length - 1);
          }}
        >{`>>`}</Button>
      </Flex>
    );
  }
};

export default Paginator;
