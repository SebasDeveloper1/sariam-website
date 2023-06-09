import Header from '@/containers/GlobalContainers/Header';

export default function Home() {
  return (
    <div className="flex flex-col justify-between w-11/12 m-auto xl:flex-row xl:gap-x-14">
      <Header />
      <main className="flex flex-col items-center justify-center w-full">
        main
      </main>
    </div>
  );
}
