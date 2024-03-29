import * as React from 'react';
import { FaTelegram, FaWhatsapp, FaEnvelope, FaGitAlt } from "react-icons/fa";

const fa = {
  fontSize: "30px",
  color: "#455a64",
};

export const icons = [
  { icon: <FaGitAlt style={fa} />, 
    url: "https://github.com/gfouz",
    name:"github" },
  {
    icon: <FaTelegram style={fa} />,
    url: "//https://api.whatsapp.com/send?phone=+5354278815",
    name:"telegram"
  },
  { icon: <FaEnvelope style={fa} />,
    url: "https://github.com/gfouz",
    name:"email"
  },
  {
    icon: <FaWhatsapp style={fa} />,
    url: "//https://api.whatsapp.com/send?phone=+5354278815",
    name:"whatsapp"
  },
];

export const getIcons = () => {
  return [
    { icon: <FaGitAlt style={fa} />, url: "https://github.com/gfouz" },
    {
      icon: <FaTelegram style={fa} />,
      url: "//https://api.whatsapp.com/send?phone=+5354278815",
    },
    { icon: <FaEnvelope style={fa} />, url: "https://github.com/gfouz" },
    {
      icon: <FaWhatsapp style={fa} />,
      url: "//https://api.whatsapp.com/send?phone=+5354278815",
    },
  ];
};
