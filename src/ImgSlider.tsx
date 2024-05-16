import download_btn from "./assets/download_btn.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

type propsType = {
  type: String;
};

type Item = {
  img: string;
  name: string;
  description: string;
};

const night: Item[] = [
  {
    img: "../public/imgs/black_left_beige.png",
    name: "Tuxedo Beige",
    description: "It's a chill friend",
  },
  {
    img: "../public/imgs/black_right_lavender.png",
    name: "Tuxedo Lavender",
    description: "It's a playful friend",
  },
  {
    img: "../public/imgs/black_left_coral.png",
    name: "Tuxedo Coral",
    description: "It's a best friend",
  },
  {
    img: "../public/imgs/black_left_dark_blue.png",
    name: "Tuxedo Dark Blue",
    description: "It's a happy friend",
  },
  {
    img: "../public/imgs/black_top_dark_purple.png",
    name: "Tuxedo Dark Purple",
    description: "It's a chill friend",
  },
  {
    img: "../public/imgs/black_top_brown.png",
    name: "Tuxedo Brown",
    description: "It's a chill friend",
  },
  {
    img: "../public/imgs/black_bottom_purple.png",
    name: "Tuxedo Purple",
    description: "It's a chill friend",
  },
  {
    img: "../public/imgs/black_right_yellow.png",
    name: "Tuxedo Yellow",
    description: "It's a happy friend",
  },

  {
    img: "../public/imgs/black_right_pink.png",
    name: "Tuxedo Pink",
    description: "It's a chill friend",
  },
  {
    img: "../public/imgs/black_bottom_gray.png",
    name: "Tuxedo Gray",
    description: "It's a chill friend",
  },

  {
    img: "../public/imgs/black_top_red.png",
    name: "Tuxedo Red",
    description: "It's a chill friend",
  },

  {
    img: "../public/imgs/black_bottom_green.png",
    name: "Tuxedo Green",
    description: "It's a chill friend",
  },
];

const light: Item[] = [
  {
    img: "../public/imgs/white_left_brown.png",
    name: "Tuxedo Brown",
    description: "It's a chill friend",
  },
  {
    img: "../public/imgs/white_right_dark_purple.png",
    name: "Tuxedo Dark purple",
    description: "It's a playful friend",
  },
  {
    img: "../public/imgs/white_left_lavender.png",
    name: "Tuxedo Lavender",
    description: "It's a best friend",
  },
  {
    img: "../public/imgs/white_left_gray.png",
    name: "Tuxedo Gray",
    description: "It's a happy friend",
  },
  {
    img: "../public/imgs/white_top_dark_blue.png",
    name: "Tuxedo Dark Blue",
    description: "It's a chill friend",
  },
  {
    img: "../public/imgs/white_top_pink.png",
    name: "Tuxedo Pink",
    description: "It's a chill friend",
  },
  {
    img: "../public/imgs/white_bottom_yellow.png",
    name: "Tuxedo Yellow",
    description: "It's a chill friend",
  },
  {
    img: "../public/imgs/white_right_green.png",
    name: "Tuxedo Green",
    description: "It's a happy friend",
  },

  {
    img: "../public/imgs/white_right_purple.png",
    name: "Tuxedo Purple",
    description: "It's a chill friend",
  },
  {
    img: "../public/imgs/white_bottom_red.png",
    name: "Tuxedo Red",
    description: "It's a chill friend",
  },

  {
    img: "../public/imgs/white_top_beige.png",
    name: "Tuxedo Beige",
    description: "It's a chill friend",
  },

  {
    img: "../public/imgs/white_bottom_coral.png",
    name: "Tuxedo Coral",
    description: "It's a chill friend",
  },
];

export default function ImgSlider(props: propsType) {
  const [isLoaded, setIsLoaded] = useState<Boolean>(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    SlidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={`w-full h-full mb-6 `}>
      {props.type === "night" && (
        <Slider {...settings}>
          {night.map((item, key) => (
            <div key={key} className="h-96 w-12">
              <div className="w-full h-full flex justify-center px-4">
                <div className="w-full h-full flex">
                  <div className="absolute w-full h-full p-4">
                    <p className="text-white text-xl 2xl:text-2xl mb-2">
                      {item.name}
                    </p>
                    <p className="text-white text-sm font-bold font-sans">
                      {item.description}
                    </p>
                    <a href={item.img} download={item.name}>
                      <img src={download_btn} alt="" className="w-8 h-8 mt-2" />
                    </a>
                  </div>
                  <img
                    src={item.img}
                    alt=""
                    className="w-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      )}

      {props.type === "light" && (
        <Slider {...settings}>
          {light.map((item, key) => (
            <div key={key} className="h-96 w-12">
              <div className="w-full h-full flex justify-center px-4">
                <div className="w-full h-full flex">
                  <div className="absolute w-full h-full p-4">
                    <p className="text-white text-xl 2xl:text-2xl mb-2">
                      {item.name}
                    </p>
                    <p className="text-white text-sm font-bold font-sans">
                      {item.description}
                    </p>
                    <a href={item.img} download={item.name}>
                      <img src={download_btn} alt="" className="w-8 h-8 mt-2" />
                    </a>
                  </div>
                  <img
                    src={item.img}
                    alt=""
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
}
