import * as Thwack from 'use-thwack';
const { useThwack } = Thwack;

export { RequestStatus } from 'use-thwack';

const apiUrl = 'https://dog.ceo/api/breeds/image/random';

export const useRandomDog = () => {
  const { status, thwackResponse, error, load } = useThwack(apiUrl);

  return {
    status,
    imageUrl: thwackResponse?.data?.message,
    error,
    load: () => load(apiUrl),
  };
};
