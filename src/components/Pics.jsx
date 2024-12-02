"use client";

import { Carousel } from "flowbite-react";

export function Pics() {
  return (
	<div className="">
		<div className="h-auto">
			<Carousel pauseOnHover>
				<img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
				<img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
				<img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
				<img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
				<img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
			</Carousel>
		</div>
    </div>
	
	);
}
