import Image from "next/image";
import React from "react";

const SecondHero = () => {
  return (
    <div className="hero bg-base-200 min-h-screen bg-gradient-to-r from-violet-50 via-pink-50 to-teal-50">
      <div className="hero-content flex-col lg:flex-row">
        <Image
          width={500}
          height={500}
          alt="hero-2.jpg"
          src="/hero-2.jpg"
          className="max-w-md h-96 rounded-box shadow-2xl"
        />
        <div className="flex flex-col justify-center items-center lg:ml-20">
          <h1 className="text-5xl font-bold text-neutral">About Us!</h1>
          <div>
            <p className="py-6 text-justify">
              Selamat datang, ini adalah sebuah platform unggulan yang
              didedikasikan untuk mengangkat potensi desa-desa di seluruh
              Indonesia. Melalui website ini, Anda dapat menjelajahi berbagai
              informasi tentang desa-desa, mulai dari profil dan sejarah, hingga
              potensi wisata dan budaya. Kami juga berkomitmen untuk
              mempromosikan UMKM (Usaha Mikro, Kecil, dan Menengah) yang ada di
              desa-desa, memberikan mereka panggung untuk tumbuh dan berkembang.
              Selain itu, kami menyediakan berbagai artikel inspiratif dan
              informatif seputar pengembangan desa dan UMKM, untuk membantu
              memberdayakan masyarakat dan memperkuat ekonomi lokal.
              Bergabunglah dengan kami dalam perjalanan ini untuk mengenal dan
              mendukung desa-desa kita lebih dekat.Selamat datang, ini adalah
              sebuah platform unggulan yang didedikasikan untuk mengangkat
              potensi desa-desa di seluruh Indonesia. Melalui website ini, Anda
              dapat menjelajahi berbagai informasi tentang desa-desa, mulai dari
              profil dan sejarah, hingga potensi wisata dan budaya. Kami juga
              berkomitmen untuk mempromosikan UMKM (Usaha Mikro, Kecil, dan
              Menengah) yang ada di desa-desa, memberikan mereka panggung untuk
              tumbuh dan berkembang. Selain itu, kami menyediakan berbagai
              artikel inspiratif dan informatif seputar pengembangan desa dan
              UMKM, untuk membantu memberdayakan masyarakat dan memperkuat
              ekonomi lokal. Bergabunglah dengan kami dalam perjalanan ini untuk
              mengenal dan mendukung desa-desa kita lebih dekat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondHero;
