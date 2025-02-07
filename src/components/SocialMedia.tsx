import React from 'react';
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TiwtterIcon,
} from "@/lib/svg";

const SocialMedia = () => {
    return (
        <ul className="flex gap-[24px] mt-[30px] w-full"> 
        <li>
          <a href="#" target="_blank">
            <FacebookIcon />
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <LinkedinIcon />
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <InstagramIcon />
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <TiwtterIcon />
          </a>
        </li>
      </ul>
    );
}

export default SocialMedia;
