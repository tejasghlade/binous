
import AccordionComponent from "@/components/AccordionComponent";
import FeatureNav from "@/components/FeatureNav";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Navbar } from "@/components/Navbar";
import ProductsCard from "@/components/ProductsCard";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      
      <Header />
      <Features />
      <ProductsCard />
      <FeatureNav />
      <AccordionComponent />
    
    </main>
  );
}
