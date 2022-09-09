import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { useDispatch } from "react-redux";

import AllProductsCard from "../UI/AllProductsCard";

import twoPinLightImg from "../assets/products/2pinDownlights_medium.avif";
import threeTierSquarePlateImg from "../assets/products/3-tierSquarePlate_medium.avif";
import threeMBlueCleanerImg from "../assets/products/3MBlueCleanerScrubbing16_medium.avif";
import threeMFloorStripperImg from "../assets/products/3MFloorStripper_medium.avif";
import pillowMediumImg from "../assets/products/pillow_medium.avif";
import pillowOneMediumImg from "../assets/products/pillows_1_medium.avif";

import cupImg from "../assets/featured/mug.webp";
import newHireKitImg from "../assets/featured/new-hire-kit.webp";
import newHireMugImg from "../assets/featured/new-hire-mug.webp";
import newHirePenImg from "../assets/featured/new-hire-pen.webp";
import newHireShirtImg from "../assets/featured/new-hire-tshirt.webp";
import newHireTumblerImg from "../assets/featured/new-hire-tumbler.webp";
import powerbankImg from "../assets/featured/powerbank.jpg";

import { Listbox } from "@headlessui/react";
import { RiArrowDropDownLine } from "react-icons/ri";

export const ITEMS_COLLECTION = [
  {
    itemId: "i1",
    itemImg: twoPinLightImg,
    itemName: "2-pin Downlights",
    itemPrice: 1200,
    itemCategory: "Appliances",
    itemDesc:
      "Durable Heat Resistant Break Resistant Stain Resistant Lightweight Food Grade Safe",
    categoryAll: "All",
  },
  {
    itemId: "i2",
    itemImg: threeTierSquarePlateImg,
    itemName: "3-tier Square Plate",
    itemPrice: 1200,
    itemCategory: "Appliances",
    itemDesc:
      "Durable Heat Resistant Break Resistant Stain Resistant Lightweight Food Grade Safe",
    categoryAll: "All",
  },
  {
    itemId: "i3",
    itemImg: threeMBlueCleanerImg,
    itemName: "3M Blue Cleaner Scrubbing 16",
    itemPrice: 1200,
    itemCategory: "Cleaning Supplies",
    itemDesc:
      "Durable Heat Resistant Break Resistant Stain Resistant Lightweight Food Grade Safe",
    categoryAll: "All",
  },
  {
    itemId: "i4",
    itemImg: threeMFloorStripperImg,
    itemName: "3M Blue Floor Stripper",
    itemPrice: 1200,
    itemCategory: "Cleaning Supplies",
    itemDesc:
      "Durable Heat Resistant Break Resistant Stain Resistant Lightweight Food Grade Safe",
    categoryAll: "All",
  },
  {
    itemId: "i5",
    itemImg: pillowMediumImg,
    itemName: "3M Blue Floor Stripper",
    itemPrice: 1200,
    itemCategory: "Beddings/Linen",
    itemDesc:
      "Durable Heat Resistant Break Resistant Stain Resistant Lightweight Food Grade Safe",
    categoryAll: "All",
  },
  {
    itemId: "i6",
    itemImg: pillowOneMediumImg,
    itemName: "3M Blue Floor Stripper",
    itemPrice: 1200,
    itemCategory: "Beddings/Linen",
    itemDesc:
      "Durable Heat Resistant Break Resistant Stain Resistant Lightweight Food Grade Safe",
    categoryAll: "All",
  },
  {
    itemId: "f1",
    itemImg: cupImg,
    itemName: "KMC Branded Ceramic Mug",
    itemAvailability: "AVAILABLE",
    itemPrice: 100,
    itemCategory: "Featured Products",
    itemDesc:
      "Durable Heat Resistant Break Resistant Stain Resistant Lightweight Food Grade Safe",
    categoryAll: "All",
  },
  {
    itemId: "f2",
    itemImg: newHireKitImg,
    itemName: "KMC New Hire Kit",
    itemAvailability: "AVAILABLE",
    itemPrice: 100,
    itemCategory: "Featured Products",
    itemDesc:
      "Durable Heat Resistant Break Resistant Stain Resistant Lightweight Food Grade Safe",
    categoryAll: "All",
  },
  {
    itemId: "f3",
    itemImg: newHireMugImg,
    itemName: "KMC Pen",
    itemAvailability: "AVAILABLE",
    itemPrice: 100,
    itemCategory: "Featured Products",
    itemDesc:
      "Durable Heat Resistant Break Resistant Stain Resistant Lightweight Food Grade Safe",
    categoryAll: "All",
  },
  {
    itemId: "f4",
    itemImg: newHirePenImg,
    itemName: "KMC Pen",
    itemAvailability: "AVAILABLE",
    itemPrice: 100,
    itemCategory: "Featured Products",
    itemDesc:
      "Durable Heat Resistant Break Resistant Stain Resistant Lightweight Food Grade Safe",
    categoryAll: "All",
  },
  {
    itemId: "f5",
    itemImg: newHireShirtImg,
    itemName: "KMC T-Shirt",
    itemAvailability: "AVAILABLE",
    itemPrice: 100,
    itemCategory: "Featured Products",
    itemDesc:
      "Durable Heat Resistant Break Resistant Stain Resistant Lightweight Food Grade Safe",
    categoryAll: "All",
  },
  {
    itemId: "f6",
    itemImg: newHireTumblerImg,
    itemName: "KMC Branded Tumbler",
    itemAvailability: "AVAILABLE",
    itemPrice: 100,
    itemCategory: "Featured Products",
    itemDesc:
      "Durable Heat Resistant Break Resistant Stain Resistant Lightweight Food Grade Safe",
    categoryAll: "All",
  },
  {
    itemId: "f7",
    itemImg: powerbankImg,
    itemName: "KMC Powerbank",
    itemAvailability: "AVAILABLE",
    itemPrice: 100,
    itemCategory: "Featured Products",
    itemDesc:
      "Durable Heat Resistant Break Resistant Stain Resistant Lightweight Food Grade Safe",
    categoryAll: "All",
  },
];

const CATEGORIES = [
  {
    categoryName: "All",
  },
  {
    categoryName: "Appliances",
  },
  {
    categoryName: "Beddings/Linen",
  },
  {
    categoryName: "Cleaning Supplies",
  },
  {
    categoryName: "Featured Products",
  },
];

const AllProducts: React.FC = () => {
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [filteredProducts, setFilteredProducts] = React.useState<any>();

  //FILTER PRODUCTS LOGIC
  useEffect(() => {
    const FILTERED_ITEMS_COLLECTION: {
      itemId: string;
      itemImg: string;
      itemName: string;
      itemCategory: string;
    }[] = [];

    ITEMS_COLLECTION.filter((items) => {
      if (items.itemCategory === category.categoryName) {
        FILTERED_ITEMS_COLLECTION.push(items);
        const populateFiltered = FILTERED_ITEMS_COLLECTION.map((itemData) => (
          <AllProductsCard
            linkUrl={`/collections/all/${itemData.itemId}`}
            key={itemData.itemId}
            itemImg={itemData.itemImg}
            itemName={itemData.itemName}
          />
        ));
        setFilteredProducts(populateFiltered);
      } else if (items.categoryAll === category.categoryName) {
        const populateAllItems = ITEMS_COLLECTION.map((itemData) => (
          <AllProductsCard
            linkUrl={`/collections/all/${itemData.itemId}`}
            key={itemData.itemId}
            itemImg={itemData.itemImg}
            itemName={itemData.itemName}
          />
        ));
        setFilteredProducts(populateAllItems);
      }
    });
  }, [category]);

  return (
    <div className="xl:px-96">
      <div className="xl:flex xl:justify-around">
        <h1 className="font-black text-2xl mb-6 xl:w-1/2">
          KMC <span className="text-orange-400">PRODUCTS</span>
        </h1>
        <div className="xl:w-1/2">
          <p className="mb-4 font-bold opacity-25 ">FILTER BY CATEGORY:</p>
          <Listbox value={category} onChange={setCategory}>
            <Listbox.Button className="w-full px-5 py-2 flex flex-row items-center justify-between border-2 xl:w-1/4 ">
              {category.categoryName}
              <span>
                <RiArrowDropDownLine size={30} />
              </span>
            </Listbox.Button>
            <Listbox.Options className="border-2 mb-4 py-2 cursor-pointer">
              {CATEGORIES.map((categoryDetail) => (
                <Listbox.Option
                  className="hover:bg-orange-400 w-full mb-2  px-5 py-2"
                  key={categoryDetail.categoryName}
                  value={categoryDetail}
                >
                  {categoryDetail.categoryName}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Listbox>
        </div>
      </div>

      <div className="w-100 h-0.5 mt-2 mb-5 bg-orange-400"></div>
      {/* SHOW POPULATED ITEMS */}
      <div className="flex flex-col gap-5 xl:px-96 xl:flex-wrap xl:flex-row">
        {filteredProducts}
      </div>
    </div>
  );
};

export default AllProducts;
