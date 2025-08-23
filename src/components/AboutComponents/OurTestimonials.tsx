"use client";

import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
	{
		text: "Incredibly delicious pastries and coffee. Quiet and peaceful ambience with very attentive and kind customer service. 100% would recommend",
		name: 'Ayush Chadha',
		location: 'London',
		image: '/images/team-1.jpg',
		date: '2 weeks ago',
		rating: 5,
	},
	{
		text: "New-ish bakery, cute place and staff is super friendly. Lots of variety of sweet and savory goodies. Their muffins are delish, quiche was so tasty, but the biggest pleasant surprise was their lemon tart. It was the perfect mix of citrus and sweet.",
		name: 'Sheena Sahay',
		location: 'Toronto',
		image: '/images/team-2.jpg',
		date: '1 month ago',
		rating: 5,
	},
	{
		text: "Had brunch with my son yummy food reasonably priced very good portion had chicken wrap will definitely go back all halal",
		name: 'Shaheeb Khan',
		location: 'Canada',
		image: '/images/team-3.jpg',
		date: '3 weeks ago',
		rating: 5,
	},
	{
		text: "Very nice ambience..friendly staff and delicious food. Everything is so nice..will definitely visit nxt time.",
		name: 'Richa Mahajan',
		location: 'Canada',
		image: '/images/team-3.jpg',
		date: '2 months ago',
		rating: 5,
	},
	{
		text: "Excellent place for lunch, coffee or even just a treat. The food is to die for a you can tell that they really care about the product they put out. Check out their Dubai chocolate tart 🤤I also talked to the baker and ordered custom cookies with our logo for a work event, they turned out great!",
		name: 'Stephane Nicaise',
		location: 'Canada',
		image: '/images/team-3.jpg',
		date: '4 months ago',
		rating: 5,
	},
];

const sliderSettings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 3500,
	arrows: true,
	responsive: [
		{
			breakpoint: 1024,
			settings: { slidesToShow: 2 }
		},
		{
			breakpoint: 768,
			settings: { slidesToShow: 1 }
		}
	]
};

const OurTestimonials = () => {
	return (
		<section className="w-full bg-[#fafafa] pb-16 ">
			<div className="max-w-7xl mx-auto px-4">
				<h2 className="text-4xl md:text-4xl font-heading pb-5 text-center mb-4 pt-16">
					Customer Reviews
				</h2>
				<Slider {...sliderSettings} className="pb-10">
					{testimonials.map((t, idx) => (
						<div key={idx}>
							<div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col h-full min-h-[340px] mx-2 border border-gray-100 relative" style={{maxWidth: 400, margin: '0 auto'}}>
								{/* Google logo */}
								<div className="flex items-center gap-2 mb-2">
									<Image src="/images/google-logo.webp" alt="Google" width={24} height={24} className="rounded" />
									<span className="text-xs text-gray-500">Google Review</span>
								</div>
								{/* Reviewer info */}
								<div className="flex items-center gap-3 mb-2">
									<div>
										<div className="font-semibold text-gray-900 text-base capitalize">{t.name}</div>
									{/* <div className="text-xs text-gray-500">{t.date} • {t.location}</div> */}
									</div>
								</div>
								{/* Star rating */}
								<div className="flex items-center gap-1 mb-2">
									{Array.from({length: t.rating}).map((_, i) => (
										<svg key={i} className="w-5 h-5 text-[#fbbc04]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/></svg>
									))}
									<span className="ml-1 text-xs text-gray-500">{t.rating}.0</span>
								</div>
								{/* Review text */}
								<p className="text-gray-700 text-[15px] mb-4 flex-1">{t.text}</p>
								{/* Google colors bar */}
								<div className="flex gap-1 absolute bottom-4 left-4">
									<span className="block w-4 h-1 rounded bg-[#4285F4]" />
									<span className="block w-4 h-1 rounded bg-[#EA4335]" />
									<span className="block w-4 h-1 rounded bg-[#FBBC05]" />
									<span className="block w-4 h-1 rounded bg-[#34A853]" />
								</div>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</section>
	);
};

export default OurTestimonials;