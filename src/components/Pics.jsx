"use client";

import { Carousel } from "flowbite-react";

export default function Pics() {
  return (
		<div className="bg-white dark:bg-gray-800 px-4 h-80 md:h-96 lg:h-500px">
			<Carousel slideInterval={12000} pauseOnHover>
				<img src="/Mountain.jpg" alt="missing"/>
				<img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
				<img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
				<img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
				<img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
			</Carousel>
		</div>
	);
}
