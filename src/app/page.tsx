"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardFour from '@/components/sections/feature/FeatureCardFour';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Sparkles, Palette, DollarSign, Star, Waves, Users, MessageCircle, Instagram, Facebook, Brush, Scissors } from "lucide-react";

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
      contentWidth="medium"
      sizing="small"
      background="animatedGrid"
      cardStyle="gradient-bordered"
      primaryButtonStyle="flat"
      secondaryButtonStyle="solid"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Sara Colorado Nails"
          button={{
            text: "Book Appointment",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="Sara Colorado Nail Salon"
          description="Experience luxury nail care with professional manicures, pedicures, and nail art in a relaxing atmosphere"
          tag="Premium Nail Care"
          tagIcon={Sparkles}
          buttons={[
            {
              text: "Book Appointment",
              href: "contact"
            },
            {
              text: "View Services",
              href: "feature"
            }
          ]}
          mediaItems={[
            {
              imageSrc: "https://pixabay.com/get/ge3da14c317edf93625385ef89fa97a7bc4d301f1c48ced56753885a5baec4c2c87b3dc964303cbe3eea556071dd6db35a11dd4d2683cd951d233e26c65a5b148_1280.jpg",
              imageAlt: "Sara Colorado nail salon interior"
            },
            {
              imageSrc: "https://pixabay.com/get/g1a1fbf181bc8e9081be9be7fd8efefafad2c5a8415ee3ee56f3cf43776dddfd95ffb423194ffd43ad7de0dffa2511a6f621ae7647e9444586c2554379962a57c_1280.jpg",
              imageAlt: "Professional nail art service"
            },
            {
              imageSrc: "https://pixabay.com/get/g5ead53fb15e920d9ee4b5b642535edaa578147a7bb8868043a717557b09fca520a7afabae0a3e21972db9d2206ab34b90ae978803601a532840181fdbfd07c69_1280.jpg",
              imageAlt: "Relaxing pedicure treatment"
            },
            {
              imageSrc: "https://pixabay.com/get/g1730cbe2d0d2e771c08d2a6e9031492a3e208764feee2d041b71f9b164ff4626c5fc9d71bce8fb2f698fe611400c287ce546b651ed19e93f99685df909f32c24_1280.jpg",
              imageAlt: "Gel manicure application"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="About Sara Colorado"
          description={[
            "With over 8 years of experience in nail artistry, Sara Colorado brings expertise and passion to every service. Our salon specializes in creating beautiful, healthy nails in a clean and comfortable environment.",
            "We use only premium products and maintain the highest standards of hygiene and safety. Your satisfaction and nail health are our top priorities."
          ]}
          buttons={[
            {
              text: "Meet Our Team",
              href: "team"
            }
          ]}
          showBorder={true}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardFour
          title="Our Services"
          description="Professional nail care services tailored to your needs"
          tag="Services"
          tagIcon={Palette}
          textboxLayout="default"
          animationType="slide-up"
          features={[
            {
              title: "Nail Art & Design",
              description: "Custom nail art designs from classic French tips to intricate patterns and seasonal themes",
              icon: Brush
            },
            {
              title: "Spa Pedicures",
              description: "Relaxing pedicure treatments including foot soaks, exfoliation, massage, and polish application",
              icon: Waves
            },
            {
              title: "Gel Manicures",
              description: "Long-lasting gel polish application with professional techniques for chip-free, glossy nails",
              icon: Sparkles
            },
            {
              title: "Nail Extensions",
              description: "Acrylic and gel nail extensions to achieve your desired length and shape with natural results",
              icon: Scissors
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Service Pricing"
          description="Transparent pricing for all our professional nail services"
          tag="Pricing"
          tagIcon={DollarSign}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "basic-manicure",
              badge: "Popular",
              badgeIcon: Star,
              price: "$35",
              subtitle: "Classic manicure with polish",
              features: [
                "Nail shaping and filing",
                "Cuticle care",
                "Hand massage",
                "Polish application"
              ]
            },
            {
              id: "gel-manicure",
              badge: "Long-lasting",
              badgeIcon: Sparkles,
              price: "$55",
              subtitle: "Gel polish manicure",
              features: [
                "Complete nail preparation",
                "Gel polish application",
                "UV light curing",
                "Lasts 2-3 weeks"
              ]
            },
            {
              id: "spa-pedicure",
              badge: "Relaxing",
              badgeIcon: Waves,
              price: "$65",
              subtitle: "Full spa pedicure treatment",
              features: [
                "Foot soak and scrub",
                "Callus removal",
                "Foot and leg massage",
                "Polish application"
              ]
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet Our Team"
          description="Skilled nail technicians dedicated to your beauty"
          tag="Our Team"
          tagIcon={Users}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          members={[
            {
              id: "sara",
              name: "Sara Colorado",
              role: "Owner & Master Technician",
              imageSrc: "https://pixabay.com/get/g8d44863e3c83d56a7103916bf4516e851eb54f316999f304ad9ccf6580a90c4cf329926c0b73133b539441c492550ff016ed5bb1131e5d9cb12e11f20e6ea024_1280.jpg",
              imageAlt: "Sara Colorado, salon owner"
            },
            {
              id: "assistant",
              name: "Maria Rodriguez",
              role: "Senior Nail Technician",
              imageSrc: "https://pixabay.com/get/gd6ed1be91b24568ac424d8b0e3f40bd4c61ac21676d8d098983f834dc70552c57ff06ef083d1a6f1aaa7ae901a1a87e11a5f440183613bcd88415bca3d7f1227_1280.jpg",
              imageAlt: "Maria Rodriguez, nail technician"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Clients Say"
          description="Hear from our satisfied customers about their experience"
          tag="Testimonials"
          tagIcon={MessageCircle}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          testimonials={[
            {
              id: "1",
              name: "Jessica Martinez",
              role: "Regular Client",
              company: "Marketing Professional",
              rating: 5,
              testimonial: "Sara's attention to detail is amazing! My nails always look perfect and last for weeks. The salon is so relaxing and clean.",
              imageSrc: "https://pixabay.com/get/g62ebd6027756c0d178769dbb9a3f69cc87a3b4d0439578868c1dbbe9f473299f4f89b1b4561c20a98aef71fc6d69cfa5_1280.jpg",
              imageAlt: "Jessica Martinez testimonial"
            },
            {
              id: "2",
              name: "Ashley Thompson",
              role: "Loyal Customer",
              company: "Business Owner",
              rating: 5,
              testimonial: "I've been coming here for years and wouldn't go anywhere else. The quality of work and customer service is outstanding.",
              imageSrc: "https://pixabay.com/get/g0c587bdfb163b18e8f509b4c737c127cec99a886b5ca75a3067fe692db64aaac4e5afd2577215925eb1124b763d4b9db1fe0105f4adb0de1cae4fc83dcdaf0c6_1280.jpg",
              imageAlt: "Ashley Thompson testimonial"
            },
            {
              id: "3",
              name: "Maria Rodriguez",
              role: "Happy Client",
              company: "Teacher",
              rating: 5,
              testimonial: "The nail art designs are incredible! Sara always creates exactly what I envision and the results exceed my expectations.",
              imageSrc: "https://pixabay.com/get/gd6ed1be91b24568ac424d8b0e3f40bd4c61ac21676d8d098983f834dc70552c57ff06ef083d1a6f1aaa7ae901a1a87e11a5f440183613bcd88415bca3d7f1227_1280.jpg",
              imageAlt: "Maria Rodriguez testimonial"
            },
            {
              id: "4",
              name: "Emily Davis",
              role: "Satisfied Customer",
              company: "Nurse",
              rating: 5,
              testimonial: "Professional, friendly service in a beautiful atmosphere. My pedicures here are the most relaxing part of my month!",
              imageSrc: "https://pixabay.com/get/gc951e9948ebde360f7aaeaf56e876faf4384f06535ec49129e8f24ea105f8586ee5ab70b3f57614f59c51ef3ee6f8b60bef87fe34725489c0fb9c294a3f6c5e2_1280.jpg",
              imageAlt: "Emily Davis testimonial"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Book Your Appointment"
          description="Contact us to schedule your nail care appointment or ask any questions about our services"
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "service",
              type: "text",
              placeholder: "Preferred Service",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Special requests or questions...",
            rows: 4,
            required: false
          }}
          imageSrc="https://pixabay.com/get/gc3467711c27b6cba18eb592ddede27f358b0ff750502b5e679774b04dd554d4d1e836ef8599b9ca231555787caa6a8b51e46fad0638414dc534f3c15f654f60f_1280.jpg"
          imageAlt="Sara Colorado nail salon interior"
          buttonText="Send Message"
          onSubmit={(data) => console.log('Contact form submitted:', data)}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Sara Colorado Nails"
          columns={[
            {
              title: "Services",
              items: [
                {
                  label: "Nail Art",
                  href: "feature"
                },
                {
                  label: "Manicures",
                  href: "feature"
                },
                {
                  label: "Pedicures",
                  href: "feature"
                },
                {
                  label: "Extensions",
                  href: "feature"
                }
              ]
            },
            {
              title: "About",
              items: [
                {
                  label: "Our Story",
                  href: "about"
                },
                {
                  label: "Team",
                  href: "team"
                },
                {
                  label: "Testimonials",
                  href: "testimonial"
                }
              ]
            },
            {
              title: "Contact",
              items: [
                {
                  label: "Book Appointment",
                  href: "contact"
                },
                {
                  label: "Pricing",
                  href: "pricing"
                }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Instagram,
              href: "https://instagram.com/saracoloradonails",
              ariaLabel: "Follow us on Instagram"
            },
            {
              icon: Facebook,
              href: "https://facebook.com/saracoloradonails",
              ariaLabel: "Follow us on Facebook"
            }
          ]}
          copyrightText="© 2025 Sara Colorado Nails. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}