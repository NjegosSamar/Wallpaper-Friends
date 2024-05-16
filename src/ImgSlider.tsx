import download_btn from "./assets/download_btn.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import black_left_beige from "./assets/black_left_beige.png";
import black_right_lavender from "./assets/black_right_lavender.png";
import black_left_coral from "./assets/black_left_coral.png";
import black_left_dark_blue from "./assets/black_left_dark_blue.png";
import black_top_dark_purple from "./assets/black_top_dark_purple.png";
import black_top_brown from "./assets/black_top_brown.png";
import black_bottom_purple from "./assets/black_bottom_purple.png";
import black_right_yellow from "./assets/black_right_yellow.png";
import black_right_pink from "./assets/black_right_pink.png";
import black_bottom_gray from "./assets/black_bottom_gray.png";
import black_top_red from "./assets/black_top_red.png";
import black_bottom_green from "./assets/black_bottom_green.png";
import white_left_brown from "./assets/white_left_brown.png";
import white_right_dark_purple from "./assets/white_right_dark_purple.png";
import white_left_lavender from "./assets/white_left_lavender.png";
import white_left_gray from "./assets/white_left_gray.png";
import white_top_dark_blue from "./assets/white_top_dark_blue.png";
import white_top_pink from "./assets/white_top_pink.png";
import white_bottom_yellow from "./assets/white_bottom_yellow.png";
import white_right_green from "./assets/white_right_green.png";
import white_right_purple from "./assets/white_right_purple.png";
import white_bottom_red from "./assets/white_bottom_red.png";
import white_top_beige from "./assets/white_top_beige.png";
import white_bottom_coral from "./assets/white_bottom_coral.png";

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
    img: black_left_beige,
    name: "Tuxedo Beige",
    description: "It's a chill friend",
  },
  {
    img: black_right_lavender,
    name: "Tuxedo Lavender",
    description: "It's a playful friend",
  },
  {
    img: black_left_coral,
    name: "Tuxedo Coral",
    description: "It's a best friend",
  },
  {
    img: black_left_dark_blue,
    name: "Tuxedo Dark Blue",
    description: "It's a happy friend",
  },
  {
    img: black_top_dark_purple,
    name: "Tuxedo Dark Purple",
    description: "It's a chill friend",
  },
  {
    img: black_top_brown,
    name: "Tuxedo Brown",
    description: "It's a chill friend",
  },
  {
    img: black_bottom_purple,
    name: "Tuxedo Purple",
    description: "It's a chill friend",
  },
  {
    img: black_right_yellow,
    name: "Tuxedo Yellow",
    description: "It's a happy friend",
  },

  {
    img: black_right_pink,
    name: "Tuxedo Pink",
    description: "It's a chill friend",
  },
  {
    img: black_bottom_gray,
    name: "Tuxedo Gray",
    description: "It's a chill friend",
  },

  {
    img: black_top_red,
    name: "Tuxedo Red",
    description: "It's a chill friend",
  },

  {
    img: black_bottom_green,
    name: "Tuxedo Green",
    description: "It's a chill friend",
  },
];

const light: Item[] = [
  {
    img: white_left_brown,
    name: "Tuxedo Brown",
    description: "It's a chill friend",
  },
  {
    img: white_right_dark_purple,
    name: "Tuxedo Dark purple",
    description: "It's a playful friend",
  },
  {
    img: white_left_lavender,
    name: "Tuxedo Lavender",
    description: "It's a best friend",
  },
  {
    img: white_left_gray,
    name: "Tuxedo Gray",
    description: "It's a happy friend",
  },
  {
    img: white_top_dark_blue,
    name: "Tuxedo Dark Blue",
    description: "It's a chill friend",
  },
  {
    img: white_top_pink,
    name: "Tuxedo Pink",
    description: "It's a chill friend",
  },
  {
    img: white_bottom_yellow,
    name: "Tuxedo Yellow",
    description: "It's a chill friend",
  },
  {
    img: white_right_green,
    name: "Tuxedo Green",
    description: "It's a happy friend",
  },

  {
    img: white_right_purple,
    name: "Tuxedo Purple",
    description: "It's a chill friend",
  },
  {
    img: white_bottom_red,
    name: "Tuxedo Red",
    description: "It's a chill friend",
  },

  {
    img: white_top_beige,
    name: "Tuxedo Beige",
    description: "It's a chill friend",
  },

  {
    img: white_bottom_coral,
    name: "Tuxedo Coral",
    description: "It's a chill friend",
  },
];

export default function ImgSlider(props: propsType) {
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
