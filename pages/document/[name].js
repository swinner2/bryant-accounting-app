import Router from "next/router";
import useSWR from 'swr';

const fetcher = async (...args) => {
  const res = await fetch(...args);

  return res.json();
};

export default function Document() {
  const { name } = Router.query;
  const { data } = useSWR(`/api/document/${name}`, fetcher);

  if (!data) {
    return 'Loading...';
  }

  return (
    <div>
      <p>File: {data.name}</p>
    </div>
  );

}
