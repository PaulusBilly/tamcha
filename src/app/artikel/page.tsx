
import { articles } from "./data";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../Navbar";

export default function articlePage() {
	return (
		<div className="min-h-screen bg-[#E3E2C7] pb-20">
			<Navbar />
			<div className="max-w-3xl mx-auto pt-8 px-4 sm:px-0">
				{/* Tag */}
				<div className="mb-2">
					<span className="inline-block bg-[#F5F4E8] text-[#267A18] text-xs font-medium px-3 py-1 rounded-full font-times">Blog</span>
				</div>
				{/* Title & Count */}
				<h1 className="font-times text-[40px] sm:text-[48px] text-[#171717] font-normal mb-2 tracking-tight">Our Trending Article <span className="text-[#A3A3A3] text-[32px] align-top">[{articles.length}]</span></h1>
				{/* Divider */}
				<div className="h-[2px] bg-[#000000] w-full mb-8" />
				{/* Article List */}
				<div className="flex flex-col gap-8">
					{articles.map((article) => (
						<Link href={`/article/${article.id}`} key={article.id} className="flex flex-col sm:flex-row gap-6 items-start group">
							<div className="flex-1">
								<span className="inline-block bg-[#F5F4E8] text-[#267A18] text-xs font-medium px-3 py-1 rounded-full font-times mb-2">{article.tag}</span>
								<h2 className="font-times text-[22px] sm:text-[24px] text-[#171717] font-normal mb-2 group-hover:underline">{article.title}</h2>
								<p className="text-[#525252] text-[12px] sm:text-[13px] leading-relaxed">{article.excerpt}</p>
							</div>
							<div className="w-full sm:w-[180px] h-[120px] sm:h-[120px] rounded-lg overflow-hidden flex-shrink-0">
								<Image src={article.image} alt={article.title} width={180} height={120} className="object-cover w-full h-full" />
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}