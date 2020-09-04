import { useState, useEffect } from 'react';

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchUrl() {
    let results = [];

    // do {
    //   const res = await fetch(url);
    //   const data = await res.json();
    //   // if (data !== null) {
    //   //   url = data.next.replace(/^http:\/\//i, 'https://');
    //   // }
    //   url = data.next;
    //   console.log(url);
    //   results.push(...data.results);
    // } while (url);

    while (url !== null) {
      const res = await fetch(url);
      const data = await res.json();
      if (data.next !== null) {
        data.next = data.next.replace(/^http:\/\//i, 'https://');
      }
      results.push(...data.results);
      url = data.next;
      console.log(data);
      // results.push(...data.results);
    }

    setData(results);
    setLoading(false);
  }

  useEffect(() => {
    fetchUrl();
  }, []);

  return [data, loading];
}
