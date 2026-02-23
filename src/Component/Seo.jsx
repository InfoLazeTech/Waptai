import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { tabs } from "../Pages/Event/eventsData.js";

const SeoManager = () => {
  const { pathname } = useLocation();

  let title ;
  let description;

  // ================= ROUTE LOGIC =================
  if (pathname === "/") {
    title = "WAPTAI | Water Purification and Wastewater Management Association of India";
    description =
      "WAPTAI is India’s leading association for water purification, wastewater treatment, sustainability and innovation.";
  }

  else if (pathname === "/about-us") {
    title = "About Us | WAPTAI";
    description =
      "Learn about WAPTAI’s mission, vision and leadership in water purification and wastewater management.";
  }

  else if (pathname === "/committee") {
    title = "Committee | WAPTAI";
    description =
      "Meet the governing body and expert committee members driving WAPTAI initiatives.";
  }

 else if (pathname === "/membarship") {
  title = "Membership | WAPTAI";
  description =
    "Explore WAPTAI membership benefits, opportunities, and how to join our community.";
}

  else if (pathname === "/contact-us") {
    title = "Contact Us | WAPTAI";
    description =
      "Get in touch with WAPTAI for memberships, partnerships, events and technical support.";
  }

  else if (pathname === "/expo-2026") {
    title = "Expo | WAPTAI";
    description =
      "WAPTAI Expo 2026 is India’s premier water and wastewater technology exhibition in India.";
  }

  else if (pathname === "/facilities") {
    title = "Facilities | WAPTAI";
    description =
      "Explore WAPTAI’s facilities including water testing labs, training infrastructure, certification support and industry-grade resources.";
  }

else if (pathname.startsWith("/event/")) {
  const idStr = pathname.split("/")[2];       
  const id = Number(idStr);                     
  const event = tabs[id - 1];                  

  if (event) {
    title = `${event.name} | WAPTAI`;
    description = `Explore highlights, images and insights from ${event.name}, organized by WAPTAI.`;
  } else {
    title = "Event | WAPTAI";                   
    description = "Explore WAPTAI events and highlights.";
  }
}

  else if (pathname === "/exhibition") {
    title = "Exhibition | WAPTAI";
    description =
      "Join WAPTAI exhibitions showcasing cutting-edge water and wastewater technologies.";
  }

  else if (pathname === "/iapmo") {
    title = "IAPMO | WAPTAI";
    description =
      "Learn about WAPTAI's collaboration with IAPMO for water safety and plumbing standards.";
  }

  else if (pathname === "/seminar") {
    title = "Seminar | WAPTAI";
    description =
      "Attend WAPTAI seminars on water purification, sustainability, and innovation.";
  }

  else if (pathname === "/convention") {
    title = "Convention | WAPTAI";
    description =
      "Participate in WAPTAI conventions with industry leaders and experts.";
  }

  else if (pathname === "/legal-assistance") {
    title = "Legal Assistance | WAPTAI";
    description =
      "Access WAPTAI’s legal support and guidance on water management regulations.";
  }

  else if (pathname === "/celebration") {
    title = "Celebration | WAPTAI";
    description =
      "Celebrate WAPTAI events, milestones, and achievements in water sustainability.";
  }

  // ================= INSTANT TITLE UPDATE =================
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>

      <meta name="description" content={description} />

      <meta
        name="keywords"
        content="WAPTAI, WAPTAI Expo, Water Purification India, Wastewater Management, Sustainability Training"
      />

      <link
        rel="canonical"
        href={`https://www.waptaiassociation.org${pathname}`}
      />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="WAPTAI" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:url"
        content={`https://www.waptaiassociation.org${pathname}`}
      />
    </Helmet>
  );
};

export default SeoManager;
