import Posts from "@/components/Posts";

export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <p className="my-12 text-3xl text-center dark:text-white">
        Hello and welcome to my blog! 🤩&nbsp;
        <span className="whitespace-nowrap">
          I&rsquo;m <span className="font-bold">Lucas</span>
        </span>
      </p>
      <Posts />
    </main>
  );
}
