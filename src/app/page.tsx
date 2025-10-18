"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from "@/components/navbar/NavbarStyleMinimal";
import HeroBillboard from "@/components/sections/hero/HeroBillboard";
import TextSplitAbout from "@/components/sections/about/TextSplitAbout";
import FeatureCardOne from "@/components/sections/feature/FeatureCardOne";
import TestimonialCardTwo from "@/components/sections/testimonial/TestimonialCardTwo";
import SocialProofOne from "@/components/sections/socialProof/SocialProofOne";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FooterBase from "@/components/sections/footer/FooterBase";

const assetMap = [
  {"id":"hero-image","url":"https://images.pexels.com/photos/19867468/pexels-photo-19867468.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Wooden letter tiles spelling SaaS on rustic wood. Ideal for cloud computing and business concepts."},
  {"id":"feature-1-image","url":"https://images.pexels.com/photos/34332317/pexels-photo-34332317.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"modern digital workspace - Photo by Pew Nguyen"},
  {"id":"feature-2-image","url":"https://images.pexels.com/photos/31818767/pexels-photo-31818767.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Scrabble tiles arranged to spell 'cloud' on a neutral textured backdrop, creative concept image."},
  {"id":"testimonial-1","url":"https://images.pexels.com/photos/3801426/pexels-photo-3801426.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Positive young woman in uniform smiling while standing at counter desk in  cafe"},
  {"id":"testimonial-2","url":"https://images.pexels.com/photos/7845147/pexels-photo-7845147.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Middle-aged man in business attire sitting at an office desk with a blurred background."},
  {"id":"testimonial-3","url":"https://images.pexels.com/photos/34345272/pexels-photo-34345272.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"businesswoman portrait - Photo by Roman Biernacki"},
  {"id":"testimonial-4","url":"https://images.pexels.com/photos/7652465/pexels-photo-7652465.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Two professional women collaborating with a laptop in a modern office setting."},
  {"id":"company-logo-1","url":"https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A vibrant retro Apple logo with rainbow colors on a sleek black background."},
  {"id":"company-logo-2","url":"https://images.pexels.com/photos/1181267/pexels-photo-1181267.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Tech-savvy woman with sticker-decorated laptop working indoors, showing innovation and creativity."},
  {"id":"company-logo-3","url":"https://images.pexels.com/photos/9539073/pexels-photo-9539073.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Detailed close-up of Dell EMC server logo on hardware grill with shallow focus and textured patterns."},
  {"id":"company-logo-4","url":"https://images.pexels.com/photos/7661590/pexels-photo-7661590.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Visual representation of branding, identity, and marketing strategies."},
  {"id":"company-logo-5","url":"https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A vibrant retro Apple logo with rainbow colors on a sleek black background."},
  {"id":"company-logo-6","url":"https://images.pexels.com/photos/34317987/pexels-photo-34317987.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"partner logo - Photo by DΛVΞ GΛRCIΛ"},
  {"id":"company-logo-7","url":"https://images.pexels.com/photos/6169029/pexels-photo-6169029.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Cardboard boxes labeled 'Fragile' stacked on metal shelving in a storage room."}
];

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal brandName="My SaaS" />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Welcome to Our SaaS Platform"
            description="Innovate and evolve with cutting-edge technology."
            imageSrc={assetMap.find(a => a.id === "hero-image")?.url || "/public/images/placeholder.webp"}
            buttons={[{ text: "Get Started", href: "https://example.com" }]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TextSplitAbout
            title="About Us"
            description={["Our mission is to deliver scalable solutions that meet customer needs.", "Join us in transforming how businesses operate."]}
            showBorder={true}
            buttons={[{ text: "Learn More", href: "about" }]}
          />
        </div>
      </div>
      <div id="feature" data-section="feature" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardOne
            title="Our Features"
            description="Explore what sets our platform apart from the rest."
            features={[
              {
                title: "Efficiency",
                description: "Maximize productivity with seamless integration.",
                imageSrc: assetMap.find(a => a.id === "feature-1-image")?.url || "/public/images/placeholder.webp"
              },
              {
                title: "Security",
                description: "Protect your data with advanced security protocols.",
                imageSrc: assetMap.find(a => a.id === "feature-2-image")?.url || "/public/images/placeholder.webp"
              }
            ]}
          />
        </div>
      </div>
      <div id="testimonial" data-section="testimonial" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TestimonialCardTwo
            title="Customer Reviews"
            description="See what our customers have to say about us."
            testimonials={[
              {
                id: "1",
                name: "Sarah Johnson",
                role: "CEO",
                testimonial: "Outstanding support and fantastic features.",
                imageSrc: assetMap.find(a => a.id === "testimonial-1")?.url || "/public/images/placeholder.webp",
                alt: assetMap.find(a => a.id === "testimonial-1")?.alt
              },
              {
                id: "2",
                name: "Michael Chen",
                role: "CTO",
                testimonial: "The user interface is intuitive and powerful.",
                imageSrc: assetMap.find(a => a.id === "testimonial-2")?.url || "/public/images/placeholder.webp",
                alt: assetMap.find(a => a.id === "testimonial-2")?.alt
              },
              {
                id: "3",
                name: "Emily Rodriguez",
                role: "Marketing Director",
                testimonial: "A must-have tool for modern businesses.",
                imageSrc: assetMap.find(a => a.id === "testimonial-3")?.url || "/public/images/placeholder.webp",
                alt: assetMap.find(a => a.id === "testimonial-3")?.alt
              },
              {
                id: "4",
                name: "David Kim",
                role: "Product Manager",
                testimonial: "Simplified our process significantly.",
                imageSrc: assetMap.find(a => a.id === "testimonial-4")?.url || "/public/images/placeholder.webp",
                alt: assetMap.find(a => a.id === "testimonial-4")?.alt
              }
            ]}
          />
        </div>
      </div>
      <div id="socialProof" data-section="socialProof" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <SocialProofOne
            title="Trusted by Industry Leaders"
            description="Join thousands of companies that trust our platform."
            logos={[
              assetMap.find(a => a.id === "company-logo-1")?.url || "/public/images/placeholder.webp",
              assetMap.find(a => a.id === "company-logo-2")?.url || "/public/images/placeholder.webp",
              assetMap.find(a => a.id === "company-logo-3")?.url || "/public/images/placeholder.webp",
              assetMap.find(a => a.id === "company-logo-4")?.url || "/public/images/placeholder.webp",
              assetMap.find(a => a.id === "company-logo-5")?.url || "/public/images/placeholder.webp",
              assetMap.find(a => a.id === "company-logo-6")?.url || "/public/images/placeholder.webp",
              assetMap.find(a => a.id === "company-logo-7")?.url || "/public/images/placeholder.webp"
            ]}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenter
            tag="Newsletter"
            title="Stay Updated with Us"
            description="Subscribe to our newsletter for the latest updates."
            onSubmit={(email) => console.log(email)}
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              {
                title: "About",
                items: [
                  { label: "Company", href: "about" },
                  { label: "Careers", href: "careers" }
                ]
              },
              {
                title: "Services",
                items: [
                  { label: "Features", href: "features" },
                  { label: "Pricing", href: "pricing" }
                ]
              }
            ]}
            copyrightText="© 2025 | My SaaS"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}