import React from "react";

import { SubHeading } from "../../components";
import { welcome } from "../../constants/images";
import "./header.css";

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title='Chase the new flavour' />
      <h1 className='app__header-h1'>The Key To Fine Dining</h1>
      <p className='p__opensans' style={{ margin: "2rem 0" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sit
        dolore neque aperiam voluptates porro, et commodi id vitae, ad
        exercitationem sed! Accusantium neque nemo inventore. Voluptatibus nihil
        aliquid illo.
      </p>
      <button type='button' className='custom__button'>
        Explore Menu
      </button>
    </div>

    <div className='app__wrapper_img'>
      <img src={welcome} alt='header_img' />
    </div>
  </div>
);

export default Header;
