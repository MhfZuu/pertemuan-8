'use client';

import Image from 'next/image';
import beritas from '../data';
import { useRouter } from 'next/navigation';

const Page = ({ params }: { params: { id: String } }) => {
  const router = useRouter();
  let key = '/' + params.id;
  let berita = beritas.find((berita) => berita.href === key);

  return (
    <main className="w-[80%] mx-auto h-full grid">
      <div className="grid mb-12">
        <p className="text-4xl font-bold mt-12 mb-6 text-center">
          {berita?.title}
        </p>
        <Image
          src={berita?.image ?? ''}
          className="aspect-square w-auto h-[350px] mb-6 justify-self-center rounded-md"
          width={100}
          height={100}
          alt="placeholder"
        ></Image>
        <p className="text-lg text-justify whitespace-pre-wrap">
          {berita?.desc}
        </p>
      </div>
      <div
        className="bg-white px-6 py-2 w-fit h-fit rounded-lg justify-self-center mb-16 cursor-pointer"
        onClick={() => router.back()}
      >
        <p className="text-black font-semibold">Back</p>
      </div>
    </main>
  );
};

export default Page;
