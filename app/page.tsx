import Hero from "./components/home/hero";
import Footer from "./components/footer";
import {TextGenerateEffect} from "@/app/components/text-generate-effect";
import SecondHero from "@/app/components/home/hero-2";

export default function Home() {
    return (
        <>
            <Hero/>
            <SecondHero/>
            <Footer/>
        </>
    );
}
