import Image from "next/image";
import Button from "./Button";

const Landing = () => {
  return (
    <section className="sticky top-0 mx-auto flex h-screen max-w-[1350px] items-center justify-between px-8">
      <div className="space-y-8">
        <h1 className="space-y-3 text-5xl font-semibold tracking-wide lg:text-6xl xl:text-7xl">
          <span className="bgGradiant block bg-clip-text text-transparent">
            iPhone 14
          </span>
          <span className="block">Big and</span>
          <span className="block text-7xl">Bigger</span>
        </h1>
        <div className="space-x-8">
          <Button title="Buy Now" />
          <a href="#" className="link">
            Learn More
          </a>
        </div>
      </div>
      <div className="lg;w-[600px] relative hidden h-[450px] w-[700px] transition-all duration-500 md:inline lg:h-[650px]">
        <Image src="/iphone.png" alt="" fill style={{ objectFit: "cover" }} />
      </div>
    </section>
  );
};

export default Landing;
