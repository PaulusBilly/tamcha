import { articles } from "../data";
import Image from "next/image";
import Link from "next/link";

export default function articleDetail({ params }: { params: { id: string } }) {
  const article = articles.find((a) => a.id === Number(params.id));
  if (!article) return <div className="text-center py-20">Article not found.</div>;

  // Example meta and author data
  const author = {
    name: "Erin Smith",
    role: "COPY WRITER",
    date: "June 2nd 2019",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  };
  // Subtitle for matcha articles
  const subtitle =
    article.id === 1
      ? "Learn the traditional Japanese process of making matcha, from shade-growing to stone-grinding, and how it creates a unique flavor and vibrant color."
      : article.id === 2
      ? "Explore the science-backed health benefits of matcha, including antioxidants, energy boost, and calming effects from L-theanine."
      : article.id === 3
      ? "Step-by-step guide to whisking matcha for a creamy, frothy latte at home, including tips on water temperature and milk alternatives."
      : article.id === 4
      ? "Understand the key differences between matcha and regular green tea in terms of cultivation, preparation, and health impact."
      : article.id === 5
      ? "From matcha pancakes to matcha smoothies, discover delicious and creative ways to enjoy matcha beyond the traditional cup."
      : "";
  const meta = {
    comments: 2,
    time: "10 min",
    tags: ["Ramadan", "Spiritual", "Meditation"],
  };

  // Example content for each article
  const contentMap: Record<number, { paragraphs: string[] }> = {
    1: {
      paragraphs: [
        "Matcha is more than just a drink—it's a centuries-old tradition. Authentic matcha is made from shade-grown tea leaves that are carefully stone-ground into a fine powder, resulting in a vibrant green color and a rich, umami flavor.",
        "The process of making matcha involves several steps: shading the tea plants, hand-picking the youngest leaves, steaming, drying, and finally grinding them. This meticulous process preserves the nutrients and flavor, making matcha a unique and cherished beverage.",
        "To enjoy matcha at its best, use a bamboo whisk to blend the powder with hot (not boiling) water until frothy. Savor the aroma and taste the difference that tradition makes!",
      ],
    },
    2: {
      paragraphs: [
        "Drinking matcha daily can have a positive impact on your health. Matcha is packed with antioxidants, especially catechins, which help fight free radicals and support your immune system.",
        "Unlike coffee, matcha provides a calm, sustained energy boost thanks to the combination of caffeine and L-theanine. This means you get alertness without the jitters.",
        "Regular consumption of matcha may also support heart health, aid in weight management, and promote relaxation. Make matcha a part of your daily wellness routine!",
      ],
    },
    3: {
      paragraphs: [
        "A perfect matcha latte starts with high-quality matcha powder. Sift 1-2 teaspoons into a bowl, add a splash of hot water, and whisk vigorously in a zigzag motion until frothy.",
        "Heat your favorite milk (dairy or plant-based) and pour it over the whisked matcha. Sweeten to taste with honey or syrup. The result is a creamy, vibrant green latte that's both energizing and comforting.",
        "Experiment with different milk alternatives and toppings like cinnamon or vanilla for your own signature matcha latte!",
      ],
    },
    4: {
      paragraphs: [
        "While both matcha and green tea come from the same plant, their cultivation and preparation are different. Matcha is shade-grown and stone-ground, while green tea is usually sun-grown and steeped as loose leaves.",
        "Matcha contains higher levels of antioxidants and caffeine, and you consume the whole leaf, not just an infusion. This makes matcha more potent in both flavor and health benefits.",
        "Try both and discover which suits your taste and lifestyle best!",
      ],
    },
    5: {
      paragraphs: [
        "Matcha isn't just for drinking—it's a versatile ingredient for all kinds of recipes. Try adding matcha to pancakes, smoothies, or even desserts like tiramisu and cookies.",
        "The earthy, slightly sweet flavor of matcha pairs well with chocolate, vanilla, and citrus. Its vibrant color also makes any dish look stunning.",
        "Get creative in the kitchen and enjoy matcha in new and delicious ways!",
      ],
    },
  };
  const content = contentMap[article.id] || { paragraphs: [] };

  return (
  <div className="min-h-screen bg-[#E3E2C7] pb-20">
      <div className="max-w-4xl mx-auto pt-12 px-4 sm:px-0">
        {/* Back Button */}
        <div className="mb-6">
          <Link href="/artikel" className="inline-flex items-center gap-2 text-[#267A18] hover:underline font-times text-[15px]">
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="#267A18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Back to article
          </Link>
        </div>
        {/* Title */}
        <h1 className="font-times text-[32px] sm:text-[32px] md:text-[36px] lg:text-[38px] text-[#171717] font-bold mb-2 leading-tight">
          {article.title}
        </h1>
        {/* Subtitle */}
        <div className="text-[#525252] text-[13px] mb-3 max-w-2xl">
          {subtitle}
        </div>
        {/* Meta */}
        <div className="flex items-center gap-6 text-[#525252] text-[14px] mb-2">
          <span className="flex items-center gap-1"><svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M7 10h10M7 14h6M5 6h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" stroke="#525252" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> {meta.comments} </span>
          <span className="flex items-center gap-1"><svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M12 8v4l3 2" stroke="#525252" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="10" stroke="#525252" strokeWidth="1.5"/></svg> {meta.time}</span>
        </div>
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {meta.tags.map((tag) => (
            <span key={tag} className="inline-block bg-[#F5F4E8] text-[#525252] text-xs font-medium px-3 py-1 rounded-full font-times uppercase tracking-wide">{tag}</span>
          ))}
        </div>
        {/* Main Image */}
        <div className="w-full rounded-xl overflow-hidden mb-8 aspect-[2/1] bg-[#F5F4E8] flex items-center justify-center">
          <Image src={article.image} alt={article.title} width={800} height={400} className="object-cover w-full h-full" />
        </div>
        {/* Author, Content, Share & Newsletter */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Author */}
          <div className="flex flex-row md:flex-col items-center md:items-start gap-4 min-w-[160px]">
            <Image src={author.avatar} alt={author.name} width={56} height={56} className="rounded-full" />
            <div>
              <div className="font-bold text-[#171717] text-[15px]">{author.name}</div>
              <div className="text-xs text-[#525252]">{author.role}</div>
              <div className="text-xs text-[#A3A3A3] mt-2">{author.date}</div>
            </div>
          </div>
          {/* Article Content */}
          <div className="flex-1 text-[#171717] text-[13px] leading-relaxed space-y-6">
            {content.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          {/* Share & Newsletter (right column on desktop) */}
          <div className="mt-12 md:mt-0 flex flex-col md:w-56">
            <div className="mb-6">
              <div className="text-xs text-[#A3A3A3] mb-2">SHARE THIS ARTICLE</div>
              <div className="flex gap-3">
                <Link href="#" aria-label="Share on Facebook"><svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M17 2.1A2.1 2.1 0 0 1 19.1 4.2v15.6a2.1 2.1 0 0 1-2.1 2.1H6.9A2.1 2.1 0 0 1 4.8 19.8V4.2A2.1 2.1 0 0 1 6.9 2.1h10.2Z" stroke="#525252" strokeWidth="1.5"/><path d="M12 8v8m0 0h2.5m-2.5 0H9.5" stroke="#525252" strokeWidth="1.5" strokeLinecap="round"/></svg></Link>
                <Link href="#" aria-label="Share on Instagram"><svg width="20" height="20" fill="none" viewBox="0 0 24 24"><rect x="2.1" y="2.1" width="19.8" height="19.8" rx="4.9" stroke="#525252" strokeWidth="1.5"/><circle cx="12" cy="12" r="5.5" stroke="#525252" strokeWidth="1.5"/><circle cx="17.5" cy="6.5" r="1" fill="#525252"/></svg></Link>
                <Link href="#" aria-label="Share on Twitter"><svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M22 5.924c-.793.352-1.645.59-2.54.697a4.48 4.48 0 0 0 1.964-2.475 8.94 8.94 0 0 1-2.828 1.082A4.48 4.48 0 0 0 12 9.482c0 .352.04.695.116 1.022A12.72 12.72 0 0 1 3.11 4.868a4.48 4.48 0 0 0 1.39 5.976A4.44 4.44 0 0 1 2.8 9.8v.057a4.48 4.48 0 0 0 3.594 4.393 4.48 4.48 0 0 1-2.02.077 4.48 4.48 0 0 0 4.18 3.11A8.98 8.98 0 0 1 2 19.07a12.68 12.68 0 0 0 6.88 2.017c8.26 0 12.78-6.84 12.78-12.78 0-.195-.004-.39-.013-.583A9.14 9.14 0 0 0 24 4.59a8.98 8.98 0 0 1-2.6.713Z" stroke="#525252" strokeWidth="1.5"/></svg></Link>
              </div>
            </div>
            <div className="mt-8">
              <div className="text-xs text-[#A3A3A3] mb-2">NEWSLETTER</div>
              <div className="font-bold text-[13px] text-[#171717] mb-2">New arrivals, events, style guides & special offers.</div>
              <button className="bg-[#171717] text-white text-xs px-4 py-2 rounded hover:bg-[#333] transition">SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
