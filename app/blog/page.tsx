import Link from 'next/link';
import Image from 'next/image';
import beritas from '@/app/blog/data';

const Page = () => {
  return (
    <main className="relative h-screen px-8">
      <p className="font-bold text-4xl text-center my-8"> Blog</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 text-justify gap-8 mb-24">
        {beritas.map((berita) => (
          <Link
            href={`/blog/${berita.href}`}
            key={berita.href}
            className="border rounded-lg p-4 h-[420px] ratio-square overflow-hidden hover:scale-[1.03] transition-all duration-200 ease-linear hover:shadow-lg hover:shadow-slate-500"
          >
            <Image
              width={300}
              height={200}
              alt="placeholder"
              src={`${berita.image}`}
              className="object-cover w-full h-[185px] rounded-t-lg mb-4"
            ></Image>
            <div className="h-[195px] ">
              <h2 className="text-xl font-bold mb-2">{berita.title}</h2>
              <p className="h-[125px] overflow-hidden line-clamp-[5]">
                {berita.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Page;
