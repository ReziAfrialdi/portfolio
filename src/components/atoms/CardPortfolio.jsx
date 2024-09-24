import React, { forwardRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../ui/Button';
import ButtonIcon from '../ui/ButtonIcon';
import { ArrowUpRight } from 'iconoir-react';

const CardPortfolio = forwardRef(({ thumbnail_img, title, abstract, brand_logo, link, finish_date, category }, ref) => {
  return (
    <div ref={ref} className="w-full">
      <div className="w-full h-88 md:h-72 2xl:h-96">
        <Image
          loading="lazy"
          src={thumbnail_img}
          width={425}
          height={300}
          quality={100}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="mt-[18px] flex justify-between">
        <h5 className="heading-5 text-text-primary  xl:w-[45%]  2xl:w-full">{title}</h5>
        <div className="flex items-center gap-2">
          <Button className={"body-2 text-text-secondary"} variant="secondary">
            {category}
          </Button>
          <Link target="_blank" href={link}>
            <ButtonIcon size="sm">
              <ArrowUpRight />
            </ButtonIcon>
          </Link>
        </div>
      </div>
      <div className="mt-2">
        <p className="font-dmsans text-text-secondary leading-normal text-base">
          {abstract}
        </p>
      </div>
      <div className="mt-3 flex items-center gap-2">
        <div className="h-6 2xl:h-10">
          <Image
            width={250}
            height={250}
            quality={100}
            className="w-full h-full"
            src={brand_logo}
          />
        </div>
        <p className="body-2 text-text-primary">
          {finish_date}
        </p>
      </div>
    </div>
  );
});

export default CardPortfolio;
