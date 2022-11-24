import { Oval } from 'react-loader-spinner';
import { Center } from '@chakra-ui/react';

export const Loader = () => {
  return (
    <Center w="100%">
      <Oval
        height={70}
        width={70}
        color="#1e1e1f"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#646464"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </Center>
  );
};
