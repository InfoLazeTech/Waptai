import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const SeoManager = () => {
  const { pathname } = useLocation();

   var title;
   var description;

  switch (pathname) {
     case "/":          
    title = "Home | WAPTAI";
    description =
      "WAPTAI is India’s leading association for water purification, wastewater treatment, sustainability and innovation.";
    break;

    case "/about-us":
      title = "About Us | WAPTAI";
      description =
        "Learn about WAPTAI’s mission, vision and leadership in water purification and wastewater management.";
      break;

    case "/committee":
      title = "Committee | WAPTAI";
      description =
        "Meet the governing body and expert committee members driving WAPTAI initiatives.";
      break;

      case "/event":
      title = "Events | WAPTAI";
      description =
        "Explore WAPTAI events including conferences, exhibitions, training sessions and member meetups.";
      break;

    case "/contact-us":
      title = "Contact Us | WAPTAI";
      description =
        "Get in touch with WAPTAI for memberships, partnerships, events and technical support.";
      break;

    case "/expo-2026":
      title = "Expo | WAPTAI";
      description =
        "WAPTAI Expo 2026 is India’s premier water and wastewater technology exhibition in India.";
      break;

    case "/facilities":
      title = "Facilities | WAPTAI";
      description =
        "Explore WAPTAI’s facilities including water testing labs, training infrastructure, certification support and industry-grade resources.";
      break;
 case "/exhibition":
      title = "Exhibition | WAPTAI";
      description = "Join WAPTAI exhibitions showcasing cutting-edge water and wastewater technologies.";
      break;

    case "/iapmo":
      title = "IAPMO | WAPTAI";
      description = "Learn about WAPTAI's collaboration with IAPMO for water safety and plumbing standards.";
      break;

    case "/seminar":
      title = "Seminar | WAPTAI";
      description = "Attend WAPTAI seminars on water purification, sustainability, and innovation.";
      break;

    case "/convention":
      title = "Convention | WAPTAI";
      description = "Participate in WAPTAI conventions with industry leaders and experts.";
      break;

    case "/legal-assistance":
      title = "Legal Assistance | WAPTAI";
      description = "Access WAPTAI’s legal support and guidance on water management regulations.";
      break;

    case "/celebration":
      title = "Celebration | WAPTAI";
      description = "Celebrate WAPTAI events, milestones, and achievements in water sustainability.";
      break;

    default:
      break;
  }

  // INSTANT title update (NO refresh needed)
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <Helmet prioritizeSeoTags>
      {/* ================= PRIMARY ================= */}
      <title key="title">{title}</title>
      <meta
        key="description"
        name="description"
        content={description}
      />

      {/* ================= CANONICAL ================= */}
      <link
        key="canonical"
        rel="canonical"
        href={`https://www.waptaiassociation.org/${pathname}`}
      />

      {/* ================= ROBOTS ================= */}
      <meta
        key="robots"
        name="robots"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />

      {/* ================= OPEN GRAPH ================= */}
      <meta key="og:type" property="og:type" content="website" />
      <meta key="og:site_name" property="og:site_name" content="WAPTAI" />
      <meta key="og:title" property="og:title" content={title} />
      <meta
        key="og:description"
        property="og:description"
        content={description}
      />
      <meta
        key="og:url"
        property="og:url"
        content={`https://www.waptaiassociation.org/${pathname}`}
      />
      {/* <meta
        key="og:image"
        property="og:image"
        content="https://i.postimg.cc/DZyL5yhv/waptai-logo.png"
      /> */}

      {/* ================= GEO / BUSINESS ================= */}
      <meta key="geo.region" name="geo.region" content="IN" />
      <meta key="geo.placename" name="geo.placename" content="India" />
      <meta key="language" name="language" content="English" />
      <meta key="revisit-after" name="revisit-after" content="7 days" />

      {/* ================= AUTHOR / BRAND ================= */}
      <meta key="author" name="author" content="WAPTAI" />
      <meta key="publisher" name="publisher" content="WAPTAI" />
    </Helmet>

  );
};

export default SeoManager;
