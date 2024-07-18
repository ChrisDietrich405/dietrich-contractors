import Contact from "../components/Contact";

export const metadata = {
  title: "Contact | Dietrich Contractors",
  description:
    "Contact Dietrich Contractors today for any of your needed renovations or repairs. ",
  openGraph: {
    url: "https://dietrichcontractors.com",
    title: "Contact Dietrich Quality Home Contracting",
    description:
      "Contact Dietrich Contractors today for any of your needed renovations or repairs.",
    image: {
      url: "/dclogo.png",
      width: 800,
      height: 600,
      alt: "Dietrich Contractors Logo",
    },
  },
};

const ContactPage = () => {
  return <Contact />;
};

export default ContactPage;
