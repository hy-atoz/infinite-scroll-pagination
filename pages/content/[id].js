import { useEffect, useState } from "react";
import useSWR from "swr";

const Content = () => {
  const [page, setPage] = useState(0);
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(`/api/content/${page}`, fetcher);
  console.log(data);

  useEffect(() => {
    setPage(page + 20);
  }, []);

  return <div>Content</div>;
};

export default Content;
