//www.cgtconstructionllc.com

import Home from "./components/Home";

export const metadata = {
  title: "Home | Dietrich Contractors",
  description:
    "Dietrich Contractors: Your trusted partner for comprehensive residential and commercial construction services, delivering quality, reliability, and excellence in every project.",
};

// export const metadata = {
//   title: 'Your Page Title', // Replace with your page title
//   description: 'A short description of your page content', // Replace with your page description (ideally under 200 characters)
//   openGraph: {
//     url: 'https://your-website.com/your-page-url', // Replace with your full page URL
//     title: 'Your Open Graph Title', // Replace with your OG title (ideally under 60 characters)
//     description: 'Your Open Graph Description', // Replace with your OG description (ideally under 200 characters)
//     // Add additional OG properties as needed
//     // image: {
//     //   url: 'https://your-website.com/your-image.jpg', // Replace with your OG image URL
//     //   width: 800,
//     //   height: 600,
//     //   alt: 'Your image description', // Replace with your image alt text
//     // },
//   },
// };

export default function Album() {
  return (
    <>
      <Home />
    </>
  );
}
