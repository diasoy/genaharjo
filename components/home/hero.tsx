import React from "react";
import {TextGenerateEffect} from "@/components/text-generate-effect";


const Hero = () => {
  return (
      <div
          className="hero min-h-screen"
          style={{
            backgroundImage: "url(hero-bg.jpg)",
          }}>
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <TextGenerateEffect words="Selamat Datang di Digital Desa Genaharjo Tuban"/>
            <p className="mb-5 text-base-100">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary text-base-100">Explore</button>
          </div>
        </div>
      </div>
  );
};

export default Hero;
