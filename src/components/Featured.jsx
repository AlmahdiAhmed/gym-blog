"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";
import Image from "next/image";
const Featured = ({ blogs }) => {
  const featured = blogs.filter((blog) => blog.featured === "true");
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <div className="mt-3 py-2 font-extrabold text-2xl text-[#0f7173] underline decoration-[#f05d5e]">
        <h2>Top Exercises</h2>
      </div>
      <div>
        <Carousel responsive={responsive} className="z-0">
          {featured.map((blog) => {
            const { _id, title, img, content } = blog;
            return (
              <Link href={`/${_id}`} key={_id}>
                <div className="relative w-[95%] h-[150px] border-2 rounded-xl border-[#D8A47F]">
                  <div className="relative w-full h-full">
                    <Image
                      src={img}
                      fill
                      alt="image"
                      className="rounded-xl object-cover h-auto w-auto"
                    />
                  </div>
                  <div className="absolute p-1 rounded-sm bottom-2 left-2 text-[#F05D5E]">
                    <h2 className="font-extrabold capitalize">{title}</h2>
                  </div>
                </div>
              </Link>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};
export default Featured;
