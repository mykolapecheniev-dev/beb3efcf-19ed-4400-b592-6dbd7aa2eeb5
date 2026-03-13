"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import HeroBillboardRotatedCarousel from "@/components/sections/hero/HeroBillboardRotatedCarousel";
import SplitAbout from "@/components/sections/about/SplitAbout";
import ProductCardOne from "@/components/sections/product/ProductCardOne";
import FeatureCardNineteen from "@/components/sections/feature/FeatureCardNineteen";
import TestimonialCardOne from "@/components/sections/testimonial/TestimonialCardOne";
import SocialProofOne from "@/components/sections/socialProof/SocialProofOne";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FooterBaseCard from "@/components/sections/footer/FooterBaseCard";
import { Sparkles, Flower2, Leaf, PaletteIcon, Droplet, Star, Heart } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="bounce-effect"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="mediumLarge"
      sizing="medium"
      background="circleGradient"
      cardStyle="inset"
      primaryButtonStyle="double-inset"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          brandName="Bee Life with Us"
          navItems={[
            { name: "General", id: "home" },
            { name: "About", id: "about" },
            { name: "Arrangements", id: "arrangements" },
            { name: "Services", id: "services" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Book Now", href: "#contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardRotatedCarousel
          title="Bloom with Purpose"
          description="Handcrafted floral arrangements celebrating nature's beauty. Supporting pollinators, one bouquet at a time."
          background={{ variant: "radial-gradient" }}
          tag="Bee Life Studio"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          buttons={[
            { text: "Explore Arrangements", href: "#arrangements" },
            { text: "Learn More", href: "#about" }
          ]}
          buttonAnimation="blur-reveal"
          carouselItems={[
            { id: "carousel-1", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=ix6zw7", imageAlt: "Beautiful pink and white flower arrangement" },
            { id: "carousel-2", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=prfc7c", imageAlt: "Colorful mixed flower arrangement" },
            { id: "carousel-3", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=tobyvp", imageAlt: "Purple lavender flower arrangement" },
            { id: "carousel-4", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=x8tbbn", imageAlt: "Romantic red rose arrangement" },
            { id: "carousel-5", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=xbtdwt", imageAlt: "Minimalist single stem arrangement" },
            { id: "carousel-6", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=zjulpl", imageAlt: "Premium gift wrapped bouquet" }
          ]}
          autoPlay={true}
          autoPlayInterval={4000}
          ariaLabel="Bee Life floral studio hero section"
          className="relative w-full"
          containerClassName="flex flex-col items-center justify-center min-h-screen"
          titleClassName="text-4xl md:text-5xl font-light text-foreground"
          descriptionClassName="text-lg text-foreground opacity-80 mt-4"
          buttonContainerClassName="flex gap-4 mt-8"
          buttonClassName="px-6 py-3 rounded-lg"
          carouselClassName="w-full h-96"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="About Bee Life"
          description="At Bee Life, we believe every flower tells a story. Our passion lies in creating stunning arrangements that celebrate nature's artistry while supporting local pollinators and sustainable practices."
          tag="Our Mission"
          tagIcon={Flower2}
          tagAnimation="slide-up"
          bulletPoints={[
            {
              title: "Sustainable Sourcing",              description: "We partner with local growers who prioritize eco-friendly practices and support native pollinator habitats.",              icon: Leaf
            },
            {
              title: "Expert Artistry",              description: "Each arrangement is handcrafted by our experienced florists with attention to color, texture, and composition.",              icon: PaletteIcon
            },
            {
              title: "Fresh Quality",              description: "We work with the freshest blooms available, ensuring your flowers last longer and look their best.",              icon: Droplet
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=b2oems&_wi=1"
          imageAlt="Florist arranging flowers in our studio"
          mediaAnimation="blur-reveal"
          imagePosition="right"
          textboxLayout="default"
          useInvertedBackground={false}
          ariaLabel="About Bee Life section"
          className="w-full"
          containerClassName="flex flex-col md:flex-row gap-12 items-center"
          titleClassName="text-3xl md:text-4xl font-light text-foreground"
          descriptionClassName="text-base text-foreground opacity-80 mt-4"
          bulletPointClassName="flex gap-4 mb-6"
          bulletTitleClassName="font-medium text-foreground"
          bulletDescriptionClassName="text-sm text-foreground opacity-70"
        />
      </div>

      <div id="arrangements" data-section="arrangements">
        <ProductCardOne
          title="Featured Arrangements"
          description="Explore our signature collections, each designed with care and creativity to bring joy to any occasion."
          tag="Popular"
          tagIcon={Star}
          tagAnimation="opacity"
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="three-columns-all-equal-width"
          animationType="blur-reveal"
          products={[
            { id: "arrangement-1", name: "Rose Romance", price: "$65", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=lqwitn&_wi=1", imageAlt: "Deluxe wedding bouquet with pink roses" },
            { id: "arrangement-2", name: "Wildflower Dream", price: "$55", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=11snm1&_wi=1", imageAlt: "Bohemian style mixed flower arrangement" },
            { id: "arrangement-3", name: "Green Garden", price: "$50", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=32583w&_wi=1", imageAlt: "Living plant arrangement with greenery" }
          ]}
          ariaLabel="Featured flower arrangements"
          className="w-full"
          containerClassName="flex flex-col gap-8"
          textBoxTitleClassName="text-3xl md:text-4xl font-light text-foreground"
          textBoxDescriptionClassName="text-base text-foreground opacity-80 mt-2"
          gridClassName="grid gap-6"
          cardClassName="rounded-lg overflow-hidden"
          imageClassName="w-full h-64 object-cover"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardNineteen
          title="Our Services"
          description="From intimate occasions to grand celebrations, we offer a range of floral services tailored to your vision."
          features={[
            {
              id: 1,
              tag: "Custom Arrangements",              title: "Bespoke Designs",              subtitle: "Personalized for You",              description: "Work directly with our florists to create custom arrangements that perfectly match your vision and preferences.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=lqwitn&_wi=2",              imageAlt: "Custom floral design process"
            },
            {
              id: 2,
              tag: "Event Florals",              title: "Celebrations",              subtitle: "Weddings & Events",              description: "From intimate gatherings to large-scale events, we provide complete floral solutions including centerpieces, installations, and bridal bouquets.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=11snm1&_wi=2",              imageAlt: "Wedding event floral arrangement"
            },
            {
              id: 3,
              tag: "Subscriptions",              title: "Blooming Weekly",              subtitle: "Fresh Flowers Delivered",              description: "Receive fresh seasonal arrangements delivered to your door every week, refreshing your space with nature's beauty.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=32583w&_wi=2",              imageAlt: "Weekly flower subscription delivery"
            }
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
          ariaLabel="Our services section"
          className="w-full"
          containerClassName="flex flex-col gap-8"
          textBoxTitleClassName="text-3xl md:text-4xl font-light text-foreground"
          textBoxDescriptionClassName="text-base text-foreground opacity-80 mt-2"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Real stories from people who've experienced the beauty and care that goes into every Bee Life arrangement."
          tag="Client Reviews"
          tagIcon={Heart}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="two-columns-alternating-heights"
          animationType="blur-reveal"
          testimonials={[
            { id: "testimonial-1", name: "Sarah Mitchell", role: "Event Planner", company: "Bloom Events Co.", rating: 5, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=q0fpy6&_wi=1", imageAlt: "Sarah holding beautiful flower arrangement" },
            { id: "testimonial-2", name: "Jennifer Lopez", role: "Bride", company: "Wedding 2024", rating: 5, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=ewfn9x&_wi=1", imageAlt: "Jennifer with wedding bridal bouquet" },
            { id: "testimonial-3", name: "Marcus Chen", role: "Corporate Client", company: "Tech Innovations Inc.", rating: 5, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=ztnbya", imageAlt: "Marcus with office arrangement" },
            { id: "testimonial-4", name: "Emma Thompson", role: "Regular Customer", company: "Bee Life Community", rating: 5, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=e21u3m", imageAlt: "Emma with flowers at celebration" },
            { id: "testimonial-5", name: "David Rodriguez", role: "Subscription Member", company: "Blooming Weekly", rating: 5, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=q0fpy6&_wi=2", imageAlt: "David enjoying weekly flowers" },
            { id: "testimonial-6", name: "Lisa Anderson", role: "Gift Recipient", company: "Birthday Special", rating: 5, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=ewfn9x&_wi=2", imageAlt: "Lisa delighted with flower gift" }
          ]}
          ariaLabel="Customer testimonials section"
          className="w-full"
          containerClassName="flex flex-col gap-8"
          textBoxTitleClassName="text-3xl md:text-4xl font-light text-foreground"
          textBoxDescriptionClassName="text-base text-foreground opacity-80 mt-2"
          gridClassName="grid gap-6"
          cardClassName="rounded-lg overflow-hidden"
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted By"
          description="Featured in leading publications and trusted by local businesses and communities."
          names={["Wedding Digest", "Floral Design Magazine", "Style & Elegance", "Local Business Awards", "Sustainable Living", "Event Planning Pro", "Community Choice"]}
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=bid31o",            "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=ikzltl",            "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=78d0cv",            "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=4if24o",            "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=u2uizg",            "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=zexjm5",            "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=xiuzga"
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
          showCard={true}
          speed={40}
          ariaLabel="Social proof partners section"
          className="w-full"
          containerClassName="flex flex-col gap-8"
          textBoxTitleClassName="text-3xl md:text-4xl font-light text-foreground text-center"
          textBoxDescriptionClassName="text-base text-foreground opacity-80 text-center"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Get In Touch"
          description="Ready to bring beauty to your space? Contact us today to discuss your floral needs or book a consultation."
          inputs={[
            { name: "fullName", type: "text", placeholder: "Your Full Name", required: true },
            { name: "email", type: "email", placeholder: "your@email.com", required: true },
            { name: "phone", type: "tel", placeholder: "(555) 123-4567", required: false },
            { name: "arrangement", type: "text", placeholder: "Type of Arrangement", required: true }
          ]}
          textarea={{ name: "message", placeholder: "Tell us about your vision and any special requests...", rows: 5, required: true }}
          useInvertedBackground={false}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=b2oems&_wi=2"
          imageAlt="Our beautiful floral studio"
          mediaAnimation="blur-reveal"
          mediaPosition="left"
          buttonText="Send Message"
          ariaLabel="Contact form section"
          className="w-full"
          containerClassName="flex flex-col md:flex-row gap-12 items-center"
          titleClassName="text-3xl md:text-4xl font-light text-foreground"
          descriptionClassName="text-base text-foreground opacity-80 mt-2"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="Bee Life"
          columns={[
            {
              title: "Explore",              items: [
                { label: "Home", href: "/" },
                { label: "Arrangements", href: "#arrangements" },
                { label: "Services", href: "#services" },
                { label: "About", href: "#about" }
              ]
            },
            {
              title: "Support",              items: [
                { label: "Contact Us", href: "#contact" },
                { label: "Delivery Info", href: "#" },
                { label: "Subscriptions", href: "#" },
                { label: "Sustainability", href: "#" }
              ]
            },
            {
              title: "Connect",              items: [
                { label: "Instagram", href: "#" },
                { label: "Facebook", href: "#" },
                { label: "Pinterest", href: "#" },
                { label: "Newsletter", href: "#" }
              ]
            }
          ]}
          copyrightText="© 2025 Bee Life Floral Studio. Supporting nature, one bloom at a time."
          ariaLabel="Site footer"
          className="w-full"
          containerClassName="flex flex-col gap-8"
          logoTextClassName="text-2xl font-light text-foreground"
          columnsClassName="grid grid-cols-1 md:grid-cols-3 gap-8"
          columnTitleClassName="font-light text-foreground text-lg"
          columnItemClassName="text-sm text-foreground opacity-70 hover:opacity-100"
        />
      </div>
    </ThemeProvider>
  );
}
