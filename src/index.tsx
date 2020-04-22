import { useEffect, useState, useCallback } from 'react';
import thwack, { ThwackResponse, ThwackOptions, ThwackError } from 'thwack';

export enum RequestStatus {
  Idle = 'idle',
  Loading = 'loading',
  Success = 'success',
  Error = 'error',
}

export const useThwack = (initialUrl: string, options?: ThwackOptions) => {
  const [status, setStatus] = useState(
    initialUrl ? RequestStatus.Loading : RequestStatus.Idle
  );
  const [error, setError] = useState<null | ThwackError>(null);
  const [thwackResponse, setThwackResponse] = useState<null | ThwackResponse>(
    null
  );

  const load = useCallback(async (url: string, options?: ThwackOptions) => {
    setStatus(RequestStatus.Loading);

    try {
      const response = await thwack(url, options);

      setThwackResponse(response);
      setStatus(RequestStatus.Success);
    } catch (ex) {
      if (!(ex as ThwackError)) {
        throw ex;
      }
      setError(ex);
      setStatus(RequestStatus.Error);
    }
  }, []);

  useEffect(() => {
    if (initialUrl) {
      load(initialUrl, options);
    }
  }, [load, initialUrl, options]);

  return {
    status,
    thwackResponse,
    error,
    load,
  };
};
