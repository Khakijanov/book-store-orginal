import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import SingleCategory from "./SingleCategory";
import { ctgImg1 } from "../img";
import { ctgImg2 } from "../img";
import { ctgImg3 } from "../img";

function CategorySection() {
  return (
    <div className="ctg-section container">
      <div className="ctg-up flex justify-between">
        <div className="ctg-left ">
          <p className="secondary font-bold text-[14px]"> <span>---</span> Categories</p>
          <h2 className="primary font-bold text-3xl">Explore our Top Categories</h2>
          <div className="flex gap-5">
            <FontAwesomeIcon
              className="p-4 bg-slate-100 rounded-full hover:bg-[#ED553B] hover:font-bold hover:text-white transition"
              icon={faArrowLeft}
            />
            <FontAwesomeIcon
              className="p-4 bg-slate-100 rounded-full hover:bg-[#ED553B] hover:font-bold hover:text-white transition"
              icon={faArrowRight}
            />
          </div>
        </div>
        <div className="ctg-top-rigth">
          <p className="max-w-[707px] w-full primary opacity-70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
            feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut
            magna velit eleifend. Amet, quis urna, a eu.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum
            ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat
            amet, libero ipsum..
          </p>
        </div>
      </div>
      <div className="ctg-btm flex flex-wrap  justify-center gap-10">
        <SingleCategory img={ctgImg1} title='Academic Kitoblar'/>
        <SingleCategory img={ctgImg2} title='Badiy Kitoblar'/>
        <SingleCategory img={ctgImg3} title='Sherlar'/>
      </div>
    </div>
  );
}

export default CategorySection;
