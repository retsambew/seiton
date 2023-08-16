import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<main className="h-full flex justify-between items-end overflow-x-hidden">
			<div className="ml-16 mb-48">
				<h3 className="text-xl font-medium leading-normal">
					Your Ultimate Work Companion!
				</h3>
				<h2 className="mt-1 text-5xl font-bold leading-normal">
					Conjuring Unmatched Productivity Spells
				</h2>
				<p className="mt-4 text-[#6E727B] leading-6 tracking-[0.05rem]">
					Dive into seamless task management, sprint success, and
					real-time tracking within exclusive organizations – all on
					the house! Elevate your productivity in style with Seiton's
					exhilarating blend of simplicity and power. Ready for the
					excitement?
				</p>
				<Button
					className="mt-7 bg-white bg-gradient-to-r from-[#509393]/80 to-[#0D76B2]/80 text-white"
					size="lg"
					asChild
				>
					<Link href="/sign-up">TRY SEITON FOR FREE</Link>
				</Button>
			</div>
			<Image
				src="/images/hero.png"
				width={500}
				height={500}
				alt="hero"
				className="h-full w-auto -mr-12"
			/>
			<Image
				src="/images/heroblob.svg"
				width={500}
				height={500}
				alt="heroblob"
				className="absolute top-0 right-0 h-full w-auto -z-10"
			/>
		</main>
	);
}
