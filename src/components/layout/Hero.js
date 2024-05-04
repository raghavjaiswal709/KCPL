import Right from "@/components/icons/Right";
import Image from "next/image";
import "../layout/hero.css"
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero md:mt-14">
      <div className="py-8 md:py-12">
        <div className="flex gap-6 flex-col">
      <h1 className="text-6xl text-gray-100 font-bold 	">“Nourish the Earth, Harvest the Future.”</h1>
      <p className="subheading text-gray-100">Order Best Quality <span className="spansubtitle"> Fertilizers </span> online for delivery or pickup.</p>
      </div>
        <div className="flex gap-4 mt-16 text-sm">
          <button   className="flex justify-center bg-primary uppercase flex items-center gap-2 text-white px-4 py-2 rounded-full">
            <Link href="/menu">Order now</Link>
            <Right />
          </button>
          <button  className="flex items-center border-0 gap-2 py-2 text-gray-100 font-semibold">
          <Link href="/menu">Learn more</Link>            <Right />
          </button>
        </div>
      </div>
      <div className="relative hidden ml-32 md:block">
        <Image src={'/allProductWing.png'} layout={'fill'} objectFit={'contain'} alt={'pizza'} className="scale-120" />
      </div>
    </section>
  );
}
