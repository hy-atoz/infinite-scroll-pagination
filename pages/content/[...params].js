import { useRouter } from "next/router";
import useSWR from "swr";
import { getGymDataEn } from "../../lib/toto";

const Content = (data) => {
  const router = useRouter();
  const { params } = router.query;
  let category, language;
  // const fetcher = (url) => fetch(url).then((res) => res.json());
  // const { data, error } = useSWR(
  //   `api/content/${params[0]}/${params[1]}/0`,
  //   fetcher
  // );

  // if (params) {
  //   category = params[0];
  //   language = params[1];
  // }

  return (
    <div>
      {/* <p>{`${category} - ${language}`}</p> */}
      {data ? console.log(data) : <p>Loading...</p>}
    </div>
  );
};

export default Content;

export async function getStaticProps(context) {
  const contentSlug = context.params.params;
  const res = await getGymDataEn(contentSlug);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: "my-post" } }],
    fallback: true,
  };
}
