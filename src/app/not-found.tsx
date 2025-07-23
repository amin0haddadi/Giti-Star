import Image from "next/image";
import Link from "next/link";

const CustomNotFound = () => {
  return (
    <article className="flex flex-col items-center justify-center min-h-screen min-w-screen text-black p-10 rounded-3xl shadow-custom gap-8">
      <header>
        <h1 className="font-semibold text-[19px] pb-[21px] border-b-[1px] border-[#F5F5F5]">
          Not Found
        </h1>
      </header>
      <section
        aria-labelledby="not-found-message"
        className="flex flex-col justify-center items-center gap-6"
      >
        <Image
          src="/close-circle.png"
          alt="Not Found"
          width={104}
          height={104}
        />
        <Link
          className="font-medium text-blue-500 hover:text-blue-800"
          href={"/"}
        >
          Main page
        </Link>
      </section>
    </article>
  );
};

export default CustomNotFound;
