import { Button } from '@chakra-ui/react';

export const useButton = params => {
  const {
    handleClick,
    type = 'button',
    label,
    margin = '0',
    size = 'sm',
  } = params;

  return (
    <Button
      m={margin}
      borderRadius="0"
      bg="transparent"
      size={size}
      border="1px solid #000000"
      _hover={{ bg: '#606060', color: 'white' }}
      _active={{
        bg: '#000000',
        transform: 'scale(0.98)',
      }}
      type={type}
      onClick={handleClick}
    >
      {label}
    </Button>
  );
};
