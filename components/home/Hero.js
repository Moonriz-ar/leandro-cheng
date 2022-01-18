import Link from "next/link";

const Hero = () => {
  return (
    <header className="text-sm w-full h-screen bg-center bg-no-repeat bg-cover bg-[url('/images/hero-image-mobile.webp')] md:bg-[url('/images/hero-image-desktop.webp')] text-gray-200">
      <div className="w-4/5 h-full mx-auto flex flex-col items-center justify-end pb-16">
        <h3 className="mb-5 text-base font-extrabold">
          阿根廷 及 中南美 深度攝影
        </h3>
        <p className="mb-1">Leandro Cheng 專業攝影嚮導</p>
        <p className="mb-6">為每位客戶量身打造專有行程</p>
        <Link href="/guide-service">
          <a className="font-extrabold rounded text-orange-100 bg-orange-600 py-1 px-2">
            了解更多
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Hero;
