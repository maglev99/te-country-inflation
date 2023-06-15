import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";

import TestBarChart from "~/components/TestBarChart";

const data1 = [
  { name: "Core 4%", Percentage: 4 },
  { name: "Food 3%", Percentage: 3 },
  { name: "Rent 2%", Percentage: 2 },
];

const data2 = [
  { name: "Core 5%", Percentage: 5 },
  { name: "Food 6%", Percentage: 6 },
  { name: "Rent 7%", Percentage: 7 },
];

const data3 = [
  { name: "Core 8%", Percentage: 8 },
  { name: "Food 9%", Percentage: 9 },
  { name: "Rent 10%", Percentage: 10 },
];

interface CountryInflationCardProps {
  countryName: string;
  data: { name: string; Percentage: number }[];
}

const CountryInflationCard = ({
  countryName,
  data,
}: CountryInflationCardProps) => {
  return (
    <div className="mb-[50px] w-full sm:w-full md:w-1/2 md:px-3 lg:w-1/2 xl:w-1/3">
      <div className="rounded-3xl bg-neutral-50 pb-[70px] pt-[30px]">
        <div className="h-[300px] px-[10px] xl:w-[395px]">
          <TestBarChart countryName={countryName} data={data} />
        </div>
      </div>
    </div>
  );
};

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>US vs Asia Inflation</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#a5cefc] to-[#2563eb]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-5xl font-extrabold tracking-tight text-blue-900 sm:text-[5rem]">
            US <span className="text-[#e14f4f]">vs</span> Asia Inflation
          </h1>
          {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://create.t3.gg/en/usage/first-steps"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">First Steps →</h3>
              <div className="text-lg">
                Just the basics - Everything you need to know to set up your
                database and authentication.
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://create.t3.gg/en/introduction"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Documentation →</h3>
              <div className="text-lg">
                Learn more about Create T3 App, the libraries it uses, and how
                to deploy it.
              </div>
            </Link>
          </div> */}

          <div className="flex flex-wrap">
            <CountryInflationCard countryName="United States" data={data1} />
            <CountryInflationCard countryName="United States" data={data2} />
            <CountryInflationCard countryName="United States" data={data3} />
          </div>

          <p className="mt-20 text-2xl text-neutral-50">
            {hello.data ? hello.data.greeting : "Loading tRPC query..."}
          </p>
        </div>
      </main>
    </>
  );
};

export default Home;
