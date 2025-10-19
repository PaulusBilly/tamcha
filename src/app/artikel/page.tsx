'use client';

import { articles } from "./data";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../Navbar";
import { motion } from "framer-motion";


export default function ArticlePage() {
	// Dummy author and time for all articles (can be extended per-article if needed)
	const author = {
		name: "John Doe",
		avatar: "/Tamcha-Logo.svg",
	};
	// Split featured and latest
	const [featured, ...latest] = articles;
	return (
		<div className="min-h-screen bg-[#E3E2C7] pb-20">
			<Navbar />
			<div className="max-w-6xl mx-auto pt-8 px-4 sm:px-0">
				{/* FEATURED ARTICLE */}
				<div className="flex flex-col md:flex-row gap-8 mb-12">
					<div className="md:w-2/3 w-full">
						<Link href={`/artikel/${featured.id}`} className="block group">
							<div className="w-full aspect-[2/1] bg-[#D8D7C4] rounded-sm overflow-hidden mb-4">
								<Image src={featured.image} alt={featured.title} width={900} height={450} className="object-cover w-full h-full" />
							</div>
						</Link>
					</div>
					<div className="md:w-1/3 w-full flex flex-col justify-center">
						<div className="flex items-center gap-3 mb-2">
							<Image src={author.avatar} alt={author.name} width={28} height={28} className="rounded-full bg-white border" />
							<span className="text-[#525252] text-xs font-medium">{author.name} • 3 Hours Ago</span>
						</div>
						<Link href={`/artikel/${featured.id}`} className="group">
							<h2 className="font-times text-[28px] sm:text-[32px] text-[#171717] font-bold mb-2 group-hover:underline leading-tight">{featured.title}</h2>
							<p className="text-[#525252] text-[15px] mb-2 line-clamp-2">{featured.excerpt}</p>
						</Link>
						<div className="flex flex-wrap gap-2 mt-2">
							{featured.tags && featured.tags.map((tag) => (
								<span key={tag} className="inline-block bg-[#F5F4E8] text-[#267A18] text-xs font-medium px-3 py-1 rounded-full font-times uppercase tracking-wide">{tag}</span>
							))}
						</div>
					</div>
				</div>

				{/* LATEST NEWS */}
				<h3 className="font-times text-[28px] sm:text-[32px] text-[#171717] font-bold mb-6">LATEST NEWS</h3>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
					{latest.map((article, idx) => (
						<Link href={`/artikel/${article.id}`} key={article.id} className="group flex flex-col">
							<div className="w-full aspect-[1/1] bg-[#D8D7C4] rounded-sm overflow-hidden mb-3">
								<Image src={article.image} alt={article.title} width={400} height={400} className="object-cover w-full h-full" />
							</div>
							<div className="flex items-center gap-2 mb-1">
								<Image src={author.avatar} alt={author.name} width={18} height={18} className="rounded-full bg-white border" />
								<span className="text-[#525252] text-[11px]">{author.name} • {2 * (idx + 1)} Hours Ago</span>
							</div>
							<h4 className="font-times text-[16px] sm:text-[18px] text-[#171717] font-bold mb-1 group-hover:underline leading-tight line-clamp-2">{article.title}</h4>
							<p className="text-[#525252] text-[12px] mb-2 line-clamp-2">{article.excerpt}</p>
							<div className="flex flex-wrap gap-1 mt-auto">
								{article.tags && article.tags.map((tag) => (
									<span key={tag} className="inline-block bg-[#F5F4E8] text-[#267A18] text-[10px] font-medium px-2 py-0.5 rounded-full font-times uppercase tracking-wide">{tag}</span>
								))}
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}