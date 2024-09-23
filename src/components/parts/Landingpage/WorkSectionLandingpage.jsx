"use client";
import CardPortfolio from "@/components/atoms/CardPortfolio";
import ButtonTab from "@/components/ui/ButtonTab";
import { dataDesign } from "@/data_portfolio/design";
import { dataDevelopment } from "@/data_portfolio/development";
import React, { useState } from "react";

function WorkSectionLandingpage() {
  const [activeTab, setActiveTab] = useState("design");

  return (
    <section className="px-4 lg:px-20 pt-3 lg:pt-14 pb-6">
      <div className="w-full flex flex-col md:flex-row  md:justify-between items-start pb-3 border-b border-tertiary-200">
        <h3 className="heading-3">My Work</h3>
        <div className="flex  items-center gap-2 mt-5 md:mt-0">
          <ButtonTab
            onClick={() => setActiveTab("design")}
            color="purple"
            variant={activeTab === "design" ? "active" : "default"}
          >
            Design
          </ButtonTab>
          <ButtonTab
            onClick={() => setActiveTab("development")}
            color="blue"
            variant={activeTab === "development" ? "active" : "default"}
          >
            Development
          </ButtonTab>
        </div>
      </div>
      {activeTab === "design" && (
        <div className="mt-8 grid md:grid-cols-2 xl:grid-cols-3 gap-x-7 gap-y-10">
          {dataDesign?.map((item, idx) => (
            <CardPortfolio
              key={idx}
              category={item.category}
              abstract={item.abstract}
              brand_logo={item.brand_logo}
              finish_date={item.finish_date}
              link={item.link}
              thumbnail_img={item.thumbnail_img}
              title={item.title}
            />
          ))}
        </div>
      )}
      {activeTab === "development" && (
        <div className="mt-8 grid md:grid-cols-2 xl:grid-cols-3 gap-x-7 gap-y-10">
          {dataDevelopment?.map((item, idx) => (
            <CardPortfolio
              key={idx}
              category={item.category}
              abstract={item.abstract}
              brand_logo={item.brand_logo}
              finish_date={item.finish_date}
              link={item.link}
              thumbnail_img={item.thumbnail_img}
              title={item.title}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default WorkSectionLandingpage;
