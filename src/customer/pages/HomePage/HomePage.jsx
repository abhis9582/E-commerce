import React from "react";
import MainCarosel from "../../components/HomeCarosel/MainCarosel";
import HomeSectionCarosel from "../../components/HomeSectionCarosel/HomeSectionCarosel";
import { mensKurta } from "../../../Data/mens_kurta";

const HomePage = () => {
    return(
        <div>
            <MainCarosel />
            <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
               <HomeSectionCarosel data={mensKurta} sectionName={"Mens's Kurta"}/>
               <HomeSectionCarosel data={mensKurta}sectionName={"Mens's Shoes"}/>
               <HomeSectionCarosel data={mensKurta} sectionName={"Mens's Shirts"}/>
               <HomeSectionCarosel data={mensKurta} sectionName={"Woens's Sari"}/>
               <HomeSectionCarosel data={mensKurta} sectionName={"Woens's Kurta"}/>
               <HomeSectionCarosel data={mensKurta} sectionName={"Woens's Dress"}/>
               <HomeSectionCarosel data={mensKurta} sectionName={"woens's Tops"}/>
               <HomeSectionCarosel data={mensKurta} sectionName={"Mens's Kurta"}/>
               <HomeSectionCarosel data={mensKurta} sectionName={"Mens's Kurta"}/>
            </div>
        </div>
    )
}

export default HomePage;