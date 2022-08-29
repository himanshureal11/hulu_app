import axios from "axios";
import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import requests from "../utils/requests";

export default function Home({data}) {
  return (
    <div>
      <Head>
        <title>Hulu App</title>
      </Head>
      <Header />
      <Nav />
      <Results data={data} />
    </div>
  )
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  // const result = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`).then((res) => res.json())
  const result = await axios.get(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`)
  return {
    props: {data: result.data.results}, // will be passed to the page component as props
  }
}
