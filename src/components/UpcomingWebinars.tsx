'use client'
import Link from "next/link";

import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {
    const featuredWebinars=[
        {
            title: "Boosting Performance with Next.js Optimization",
description: "Discover the best practices for optimizing Next.js applications to enhance speed and user experience.",
slug: 'nextjs-optimization-tips',
isFeatured: true,
        },
        {
            title: "Tailwind CSS: Mastering Utility-First Design",

description: "Learn how Tailwind CSS can simplify your design workflow with a utility-first approach.",
slug: 'tailwind-css-utility-design',
isFeatured: false,
        },
        {
            title: "Dynamic Routing in Next.js: A Comprehensive Guide",
description: "A deep dive into Next.js dynamic routing and how to effectively manage complex URL structures.",
slug: 'nextjs-dynamic-routing-guide',
isFeatured: true,
        },
        {
            title: "Deploying Next.js Apps on Vercel: Step-by-Step",
description: "A complete guide to deploying your Next.js applications effortlessly using Vercel.",
slug: 'deploy-nextjs-vercel',
isFeatured: false,
        },
        {
            title: "Digital Marketing",
description: "Digital marketing leverages online platforms like social media, SEO, and paid ads to promote brands, engage audiences, and drive conversions through data-driven strategies.",
slug: 'Digital-Marketing-tips',
isFeatured: true,
        },
        {
            title: "Generative artificial intelligence",
description: "Generative AI creates new content like text , images, or music by learning from data, enabling automated creativity and personalized experiences.",
slug: 'Generative artificial intelligence',
isFeatured: true,
        }
    ]
  return (
    <div className="p-12 bg-gray-900">
     <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center text-white">
            <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURES WEBINARS</h2>
            <p className="mt-2 text-3xl leading-8
            font-extrabold tracking-tight text-white
            sm:text-4xl">ENHANCE YOUR MUSICAL JOURNY</p>
        </div>
        <div className="mt-10 text-white">
        <HoverEffect items={featuredWebinars.map(webinar =>(
            {
                title: webinar.title,
                description: webinar.description,
                link: '/'
            }
        ))} />
        </div>
        <div className="mt-10 text-center text-white">
            <Link href={"#"}
            className="px-4 py-2 rounded border 
            border-neutral-600 text-neutral-700 bg-emerald-400
            hover:bg-gray-100 transition duration-200"
            >View All Webinars</Link>
             </div>
     </div>
    </div>
  )
}

export default UpcomingWebinars