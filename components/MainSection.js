import Image from "next/image";

export default function MainSection() {
  return (
    <main className="px-4 py-20 my-12 md:px-8 lg:px-40 lg:my-20" id="main">
      <div className="md:hidden">
        <Image
          src="/mobile/image-grid-1.jpg"
          width={343}
          height={320}
          layout="responsive"
          alt="main grid image mobile 1"
          priority="true"
        />
      </div>
      <div className="space-x-20 md:flex">
        <div className="md:w-2/5 lg:w-[350px]">
          <h2 className="font-bigShoulder uppercase text-headingM lg:text-headingXM font-black my-7 lg:my-14 lg:w-[280px]">
            Your Day <br className="lg:hidden" />
            at the Gallery
          </h2>
          <p className="my-8 text-bodyS text-darkGray lg:text-bodyM lg:w-[350px]">
            Kami sangat senang menyambut Anda di galeri kami dan melihat
            bagaimana koleksi kami memengaruhi Anda.
          </p>
        </div>
        <div className="hidden md:block md:w-2/3 lg:hidden">
          <Image
            src="/tablet/image-grid-1.jpg"
            width={398}
            height={400}
            layout="responsive"
            alt="main grid image tablet 1"
            priority="true"
          />
        </div>
        <div className="right-0 hidden lg:w-2/3 lg:block">
          <Image
            src="/desktop/image-grid-1.jpg"
            width={635}
            height={400}
            layout="responsive"
            alt="main grid image desktop 1"
            priority="true"
          />
        </div>
      </div>
      <div className="my-3 md:flex md:gap-3 lg:gap-6 lg:my-6">
        <div className="my-5 md:hidden">
          <Image
            src="/mobile/image-grid-2.jpg"
            width={343}
            height={480}
            layout="responsive"
            alt="main grid image mobile 2"
            priority="true"
          />
        </div>
        <div className="hidden md:block lg:hidden md:w-[398px] md:flex-auto">
          <Image
            src="/tablet/image-grid-2.jpg"
            width={398}
            height={720}
            layout="responsive"
            alt="main grid image tablet 2"
            priority="true"
          />
        </div>
        <div className="hidden lg:block md:w-[635px] lg:flex-auto">
          <Image
            src="/desktop/image-grid-2.jpg"
            width={635}
            height={720}
            layout="responsive"
            alt="main grid image desktop 2"
            priority="true"
          />
        </div>
        <div className="my-5 md:hidden">
          <Image
            src="/mobile/image-grid-3.jpg"
            width={343}
            height={200}
            layout="responsive"
            alt="main grid image mobile 3"
            priority="true"
          />
        </div>
        <div className="md:flex md:flex-col md:justify-between md:gap-3">
          <div className="hidden md:block lg:hidden md:w-[280px] md:flex-auto">
            <Image
              src="/tablet/image-grid-3.jpg"
              width={280}
              height={313}
              layout="responsive"
              alt="main grid image tablet 3"
              priority="true"
            />
          </div>
          <div className="hidden lg:block lg:w-[445px] lg:flex-auto">
            <Image
              src="/desktop/image-grid-3.jpg"
              width={445}
              height={313}
              layout="responsive"
              alt="main grid image desktop 3"
              priority="true"
            />
          </div>
          <div className="bg-almostBlack text-white px-6 lg:px-10 py-10 md:w-[280px] lg:w-[445px] md:h-full md:flex-auto">
            <h2 className="my-5 font-black uppercase font-bigShoulder text-headingM lg:text-headingXM md:my-8">
              Come &amp; Be Inspired
            </h2>
            <p className="font-light font-outfit text-bodyS lg:text-bodyM md:pt-2">
              Kami sangat senang menyambut Anda di galeri kami dan melihat
              bagaimana koleksi kami memengaruhi Anda.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
