import { useState, useEffect } from 'react';

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchUrl() {
    let results = [];

    do {
      const res = await fetch(url);
      const data = await res.json();
      url = data.next;
      results.push(...data.results);
    } while (url);

    setData(results);
    setLoading(false);
  }

  useEffect(() => {
    fetchUrl();
  }, []);

  return [data, loading];
}
