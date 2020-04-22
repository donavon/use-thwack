import { useThwack } from '../..';

export { RequestStatus } from '../..';

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
