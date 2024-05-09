import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16" id="about">
        <SectionHeaders
          subHeader={'Our story'}
          mainHeader={'About us'}
        />
        <div className="text-gray-100 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
          हमारे खाद विक्रेता का अनुभव और विशेषज्ञता मिट्टी की उर्वरा शक्ति को बढ़ाने और उत्पादकता को बढ़ाने में मदद करता है। हम गुणवत्ता और प्रभावशीलता के साथ प्राकृतिक जैविक खादों का उत्पादन और वितरण करते हैं, जो पौधों के स्वास्थ्य और उत्पादकता को बढ़ाने में मदद करते हैं।
          </p>
          <p>हमारे उत्पादों में उन्नत और सुगम विधियों का उपयोग किया जाता है, जो किसानों को उत्पादन में सहायक होते हैं। हम गर्व से अपने ग्राहकों को उन्नत और सस्ते खादों की विविधता प्रदान करते हैं, जो उनके खेतों को स्वस्थ, पौष्टिक और उत्पादक बनाते हैं।</p>
          <p>हम सतत अनुसंधान और उत्कृष्टता के माध्यम से अपने ग्राहकों की सेवा में समर्पित हैं, और उनके सफलता के लिए प्रतिबद्ध हैं।</p>
        </div>
      </section>
      <section className="text-center my-8" id="contact">
        <SectionHeaders
          subHeader={'Don\'t hesitate'}
          mainHeader={'Contact us'}
        />
        <div className="mt-8">
          <a className="text-4xl underline text-gray-100" href="tel:+46738123123">
            +91 8271155556
          </a>
             <p>(Owner) Saheb Kumar Jaiswal</p>
        </div>
      </section>
    </>
  )
}
