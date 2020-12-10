import { useEffect, useState } from "react";
import { useBackendAuth } from "../auth/useBackendLogin";
import { fetcher } from "../utils/urls";

export const useFetch = ({ url, m, h, b }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { logout } = useBackendAuth()

  useEffect(() => {
    let isMounted = true;
    setError(null);
    const abortController = new AbortController();
    (async () => {
      setLoading(true);
      const response = await fetcher({
        url,
        signal: abortController.signal,
      }).catch((err) => {
        err.code !== 20 && setError(err);
      });
      if (response && isMounted) {
        if (response.status >= 400 && response.status < 600) {
          response.status === 401 && logout()
          setError(response);
        } else {
          setData(await response.json());
        }
      }
      setLoading(false);
    })();

    const clean = () => {
      isMounted = false;
      abortController.abort();
    };
    return clean;
  }, [url, m, h, b, logout]);

  return [data, loading, error, setData];
};
