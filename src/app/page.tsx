import Footer from "@/components/footer";
import { BannerSection, About, FeaturedPost } from "@/components/home";


export default function Home() {
  return (
    <div data-theme="modern" className="min-h-screen font-sans">
      <BannerSection />
      <FeaturedPost />
      <About />
      <Footer />  
    </div>
  );
}
