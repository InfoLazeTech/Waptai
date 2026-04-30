import React, { useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaRegFileAlt } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
  
const blogs = [
  {
    id: 1,
    title: "Why 18% GST on Water Purifiers is a Public Health Concern",
    slug: "why-18-percent-gst-on-water-purifiers-is-a-public-health-concern",
    category: "Policy & Health",
    image: "https://res.cloudinary.com/danaw1eyu/image/upload/v1777541780/blog3_hqcb77.png",
    excerpt: "Pure water is not a luxury — it is survival. Yet India taxes water purifiers at 18% GST, equal to luxury appliances.",
    sections: [
      { type: "lead", text: "Pure water is not a luxury — it is survival. Yet in India, water purifiers are taxed at 18% GST, the same rate as appliances like air conditioners and washing machines." },
      { type: "paragraph", text: "Under HSN code 8421, water purification systems fall into the general goods category, despite their direct role in preventing waterborne diseases. This has raised serious concerns among industry experts and policymakers." },
      { type: "heading", text: "The Core Paradox" },
      { type: "paradox", items: [{ label: "Untreated / Tap water", rate: "0%", color: "green" }, { label: "Packaged water jars", rate: "12%", color: "amber" }, { label: "Water purifiers", rate: "18%", color: "red" }] },
      { type: "quote", text: "Why is access to safe drinking water taxed higher than its alternatives?" },
      { type: "heading", text: "Health at Risk" },
      { type: "paragraph", text: "According to reports by global health agencies, waterborne diseases account for a significant share of illnesses in developing countries. Yet, the very systems designed to prevent these diseases remain expensive due to higher taxation." },
      { type: "heading", text: "GST Comparison Snapshot" },
      { type: "table", headers: ["Category", "GST Rate"], rows: [["Essential food (milk, vegetables)", "0%"], ["Daily use goods (food, hygiene)", "5%"], ["Healthcare & medicines", "5%"], ["Gold", "3%"], ["Consumer electronics", "18%"], ["Water purifiers", "18%"]] },
      { type: "highlight", text: "Even gold is taxed at 3% — lower than clean drinking water access." },
      { type: "heading", text: "Impact on Adoption" },
      { type: "paragraph", text: "A basic water purifier costs around ₹10,000. At 18% GST that is ₹1,800 in tax. At 5% it would be just ₹500. Lower GST could save households up to ₹1,300, making clean water more accessible. Currently, adoption remains at a mere ~6% penetration — largely due to cost barriers." },
      { type: "impact", items: [{ label: "Tax at 18% GST", value: "₹1,800", color: "red" }, { label: "Tax at 5% GST", value: "₹500", color: "green" }, { label: "Savings per purchase", value: "₹1,300", color: "blue" }, { label: "Current penetration", value: "~6%", color: "amber" }] },
      { type: "heading", text: "Policy Contradiction" },
      { type: "paragraph", text: "India is actively promoting Swachh Bharat, Har Ghar Jal, and preventive healthcare. Yet water purification systems remain in the highest tax bracket — creating a clear policy mismatch." },
      { type: "list", items: ["Swachh Bharat Mission", "Har Ghar Jal", "Preventive Healthcare Push"] },
      { type: "quote", text: "If essential goods are taxed lower to support public welfare, why is clean drinking water still taxed at 18%?" },
      { type: "heading", text: "Conclusion" },
      { type: "paragraph", text: "Reducing GST on water purifiers is not just a tax reform — it is a public health decision. Making clean water affordable could increase adoption, reduce disease burden, and support sustainability. It's time to stop taxing a necessity and start enabling a healthier India." },
      { type: "outcomes", items: ["Increase adoption", "Reduce disease burden", "Support sustainability"] },
    ],
  },
  {
    id: 2,
    title: "India's Tax Code Treats Clean Water as a Luxury",
    slug: "india-s-tax-code-treats-clean-water-as-a-luxury",
    category: "Economy",
    image: "https://res.cloudinary.com/danaw1eyu/image/upload/v1777541777/blog4_fj9cha.png",
    excerpt: "India's tax structure puts purification technology in the luxury tier — a contradiction that costs lives.",
    sections: [
      { type: "lead", text: "India's GST structure places water purifiers — life-saving devices — in the same bracket as luxury consumer electronics." },
      { type: "heading", text: "The Numbers Don't Lie" },
      { type: "paragraph", text: "Under HSN code 8421, water purification systems fall into the general goods category, despite their direct role in preventing waterborne diseases. This classification drives up costs for millions of families." },
      { type: "paradox", items: [{ label: "Untreated / Tap water", rate: "0%", color: "green" }, { label: "Packaged water jars", rate: "12%", color: "amber" }, { label: "Water purifiers", rate: "18%", color: "red" }] },
      { type: "quote", text: "A device that saves lives is taxed more than gold." },
      { type: "heading", text: "GST Snapshot" },
      { type: "table", headers: ["Category", "GST Rate"], rows: [["Essential food", "0%"], ["Daily use goods", "5%"], ["Healthcare & medicines", "5%"], ["Consumer electronics", "18%"], ["Water purifiers", "18%"]] },
      { type: "highlight", text: "Even gold is taxed at 3%, lower than clean water access." },
      { type: "heading", text: "Conclusion" },
      { type: "paragraph", text: "Reducing GST on water purifiers is a public health necessity. The government must realign its tax policy with its public health goals." },
    ],
  },
  {
    id: 3,
    title: "6% Penetration: Clean Water Remains Out of Reach",
    slug: "6-percent-penetration-clean-water-remains-out-of-reach",
    category: "Infrastructure",
    image: "https://res.cloudinary.com/danaw1eyu/image/upload/v1777541777/blog5_kakeyr.png",
    excerpt: "With 6% household penetration, water purifiers remain a luxury for most Indians despite being a health necessity.",
    sections: [
      { type: "lead", text: "Only 6% of Indian households own a water purifier — a statistic driven not by indifference, but by affordability shaped by an 18% tax." },
      { type: "paragraph", text: "Waterborne diseases remain a leading cause of illness in India. Access to clean drinking water at the household level is a critical intervention — yet the tax structure makes it prohibitively expensive." },
      { type: "paradox", items: [{ label: "Untreated / Tap water", rate: "0%", color: "green" }, { label: "Packaged water jars", rate: "12%", color: "amber" }, { label: "Water purifiers", rate: "18%", color: "red" }] },
      { type: "heading", text: "What a 5% GST Would Change" },
      { type: "impact", items: [{ label: "Tax at 18% GST", value: "₹1,800", color: "red" }, { label: "Tax at 5% GST", value: "₹500", color: "green" }, { label: "Savings per purchase", value: "₹1,300", color: "blue" }, { label: "Current penetration", value: "~6%", color: "amber" }] },
      { type: "quote", text: "A ₹1,300 saving could be the difference between safe water and waterborne disease for millions." },
      { type: "heading", text: "Conclusion" },
      { type: "paragraph", text: "Reducing GST on water purifiers is not just a tax reform — it is a public health imperative. By making clean water affordable, the government can move beyond 'providing pipes' to truly 'providing health.'" },
    ],
  },
  {
    id: 4,
    title: "Swachh Bharat vs 18% GST: A Policy Contradiction",
    slug: "swachh-bharat-vs-18-percent-gst-a-policy-contradiction",
    category: "Governance",
    image: "https://res.cloudinary.com/danaw1eyu/image/upload/v1777541777/blog6_kxaeah.png",
    excerpt: "India promotes Swachh Bharat yet taxes water purifiers at 18%. The contradiction demands urgent policy attention.",
    sections: [
      { type: "lead", text: "India champions cleanliness and public health through landmark schemes — yet its tax code tells a different story." },
      { type: "heading", text: "The Policy Mismatch" },
      { type: "list", items: ["Swachh Bharat Mission — promotes cleanliness", "Har Ghar Jal — promises water to every home", "Preventive healthcare push — emphasizes disease prevention"] },
      { type: "paragraph", text: "All three pillars of India's public health agenda align with wider adoption of water purifiers — yet the 18% GST bracket actively discourages it." },
      { type: "quote", text: "Policy intent and tax structure must align for real public health outcomes." },
      { type: "heading", text: "The Ask" },
      { type: "paragraph", text: "Reducing GST on water purifiers to 5% — in line with healthcare goods — is a straightforward, high-impact reform. It is time to stop taxing a necessity." },
      { type: "outcomes", items: ["Increase adoption", "Reduce disease burden", "Support sustainability"] },
    ],
  },
];

const renderSection = (section, idx) => {
  switch (section.type) {
    case "lead":
      return <p key={idx} className="text-lg leading-relaxed font-medium text-gray-900 border-l-4 border-blue-700 pl-5 mb-7 font-serif">{section.text}</p>;
    case "heading":
      return <h2 key={idx} className="text-xl font-bold text-slate-900 mt-10 mb-3 pb-2 border-b border-slate-200 font-serif tracking-tight">{section.text}</h2>;
    case "paragraph":
      return <p key={idx} className="text-base leading-relaxed font-serif text-gray-600 mb-5">{section.text}</p>;
    case "list":
      return (
        <ul key={idx} className="mb-6 space-y-2">
          {section.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-base text-gray-600 leading-relaxed">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-700 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "quote":
      return <blockquote key={idx} className="bg-blue-50 border-l-[5px] border-blue-700 px-6 py-5 rounded-r-xl my-7 italic text-lg text-blue-900 leading-relaxed font-serif">"{section.text}"</blockquote>;
    case "highlight":
      return <div key={idx} className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-300 rounded-xl px-5 py-4 my-6 flex items-center gap-3 text-sm font-semibold text-amber-900">{section.text}</div>;
    case "paradox":
      return (
        <div key={idx} className="grid grid-cols-3 gap-3 my-6">
          {section.items.map((item, i) => (
            <div key={i} className="bg-slate-100 border border-slate-200 rounded-xl p-4 text-center">
              <div className="text-3xl font-extrabold mb-1 text-blue-600">{item.rate}</div>
              <div className="text-xs font-medium text-slate-600">{item.label}</div>
            </div>
          ))}
        </div>
      );
    case "table":
      return (
        <div key={idx} className="overflow-x-auto my-6 rounded-xl border border-slate-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                {section.headers.map((h, i) => <th key={i} className="px-4 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {section.rows.map((row, i) => {
                const isLast = i === section.rows.length - 1;
                return (
                  <tr key={i} className={`border-b border-slate-100 last:border-0 ${isLast ? "bg-slate-100" : i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
                    <td className={`px-4 py-3 ${isLast ? "font-bold text-slate-800" : "text-slate-600"}`}>{row[0]}</td>
                    <td className="px-4 py-3"><span className="inline-block px-3 py-0.5 rounded-full text-xs font-bold bg-slate-100 border border-slate-200 text-slate-700">{row[1]}</span></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    case "impact":
      return (
        <div key={idx} className="grid grid-cols-2 gap-3 my-6">
          {section.items.map((item, i) => (
            <div key={i} className="bg-slate-100 border border-slate-200 rounded-xl p-4">
              <div className="text-xs font-bold uppercase tracking-wider mb-1 text-slate-500">{item.label}</div>
              <div className="text-3xl font-extrabold text-slate-800">{item.value}</div>
            </div>
          ))}
        </div>
      );
    case "outcomes":
      return (
        <div key={idx} className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl p-6 my-8">
          <div className="text-xs font-bold text-blue-300 uppercase tracking-widest mb-4">Key Outcomes</div>
          <div className="flex flex-wrap gap-2">
            {section.items.map((item, i) => (
              <span key={i} className="bg-white/10 border border-white/20 text-blue-100 text-sm font-medium px-4 py-2 rounded-lg">{item}</span>
            ))}
          </div>
        </div>
      );
    default:
      return null;
  }
};

const SidebarCard = ({ blog, isActive, onClick }) => (
  <div
    onClick={onClick}
    className={`cursor-pointer mx-3 mb-2 rounded-xl overflow-hidden border transition-all duration-200 ${isActive ? "border-blue-600 bg-blue-50 shadow-sm shadow-blue-100" : "border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300"}`}
  >
    <div className="relative h-24 overflow-hidden">
      <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      <span className="absolute top-2 left-2 bg-black/40 text-white text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider backdrop-blur-sm">
        {blog.category}
      </span>
    </div>
    <div className="px-3 py-2.5">
      <h3 className={`text-xs font-semibold leading-snug mb-1.5 line-clamp-2 ${isActive ? "text-blue-900" : "text-slate-800"}`}>
        {blog.title}
      </h3>
    </div>
  </div>
);

export default function Blog() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [blogList] = useState(blogs);
  const [progress, setProgress] = useState(0);
  const [showArticles, setShowArticles] = useState(false);  // ← ADDED
  const mainRef = useRef(null);

  const activeBlog = blogList.find((blog) => blog.slug === slug) || blogList[0];

  const handleSelect = (blog) => {
    navigate(`/blog/${blog.slug}`);
    if (mainRef.current) mainRef.current.scrollTop = 0;
    setProgress(0);
  };

  return (
    <div className="flex flex-col md:flex-row md:h-screen md:overflow-hidden bg-slate-100 font-sans">

      {/* ── PROGRESS BAR ── */}
      <div className="fixed top-0 left-0 right-0 h-0.5 z-50 bg-slate-200">
        <div
          className="h-full bg-gradient-to-r from-blue-700 to-blue-500 transition-[width] duration-100 ease-linear shadow-[0_0_8px_rgba(29,78,216,0.5)]"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* ── SIDEBAR (Desktop only) ── */}
      <aside className="hidden md:flex w-72 flex-shrink-0 flex-col bg-white border-r border-slate-200 h-screen z-10">
        <div className="px-5 py-4 border-b border-slate-200 bg-[#0d5c7f]">
          <div className="flex items-center gap-2 mb-0.5">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 4h5v5H4V4zm7 0h5v3h-5V4zM4 11h14v2H4v-2zm0 4h10v2H4v-2z" />
            </svg>
            <span className="text-base font-bold text-white tracking-tight">The Water Report</span>
          </div>
          <p className="text-[10px] text-blue-300 uppercase tracking-widest">Policy · Health · Economy</p>
        </div>
        <div className="flex-1 overflow-y-auto py-3">
          <p className="px-4 pb-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Latest Articles</p>
          {blogList.map((blog) => (
            <SidebarCard key={blog.id} blog={blog} isActive={activeBlog.id === blog.id} onClick={() => handleSelect(blog)} />
          ))}
        </div>
      </aside>

      {/* ── MAIN CONTENT ── */}
      <main ref={mainRef} className="flex-1 w-full min-w-0 md:h-screen overflow-y-auto bg-slate-100">

        {/* ── ARTICLE STRIP (Mobile only) ── */}
        <div className="md:hidden w-full overflow-x-auto bg-white border-b border-slate-200">
          <div className="flex gap-2 px-4 py-2.5 min-w-max">
            {blogList.map((blog) => (
              <button
                key={blog.id}
                onClick={() => handleSelect(blog)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium whitespace-nowrap transition-all ${
                  activeBlog.id === blog.id
                    ? "bg-[#0d5c7f] text-white border-[#0d5c7f]"
                    : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                }`}
              >
                <FaRegFileAlt style={{ fontSize: 10 }} />
                {blog.title.length > 28 ? blog.title.substring(0, 28) + "…" : blog.title}
              </button>
            ))}
          </div>
        </div>

        {/* HERO */}
        <div className="relative md:h-[85vh] md:overflow-hidden">
          <img src={activeBlog.image} alt={activeBlog.title} className="w-full h-full md:object-fill object-contain block" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/80" />
          <div className="absolute top-5 left-6">
            <span className="bg-black/40 text-white text-[10px] font-bold px-3 py-1 rounded uppercase tracking-widest backdrop-blur-sm">
              {activeBlog.category}
            </span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-7 pt-10">
            <h1 className="text-2xl md:text-4xl font-extrabold text-white leading-tight mb-4 font-serif max-w-3xl drop-shadow-md">
              {activeBlog.title}
            </h1>
          </div>
        </div>

        {/* ARTICLE BODY */}
        <div className="w-full mx-auto px-6 md:px-10 p-5 bg-white min-h-screen">
          {activeBlog.excerpt && (
            <div className="bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 mb-10 italic text-slate-500 text-base leading-relaxed font-serif">
              {activeBlog.excerpt}
            </div>
          )}
          {activeBlog.sections.map((sec, i) => renderSection(sec, i))}
        </div>
      </main>

    </div>
  );
}