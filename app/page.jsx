//www.cgtconstructionllc.com

import Home from "./components/Home";

export const metadata = {
  title: "Home | Dietrich Contractors",
  description:
    "Dietrich Contractors: Your trusted partner for comprehensive residential and commercial construction services, delivering quality, reliability, and excellence in every project.",
  openGraph: {
    url: "https://dietrichcontractors.com", // Replace with your full page URL
    title: "Dietrich Quality Home Contracting",
    description: "Transform Your Home with Quality Contracting | Dietrich Contractors. Elevate your living space with expert remodeling and installation services. We specialize in beautiful and functional fences, decks, kitchens, and bathrooms. Get a free quote today!",
    // Add additional OG properties as needed
    // image: {
    //   url: 'https://your-website.com/your-image.jpg', // Replace with your OG image URL
    //   width: 800,
    //   height: 600,
    //   alt: 'Your image description', // Replace with your image alt text
    // },
  },
};

export default function Album() {
  return (
    <>
      <Home />
    </>
  );
}
