import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Pdf from '../assets/resume.pdf';

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const initialState = "Copy Email";
  const [buttonText, setButtonText] = useState("Copy Email");

  // copy button effect
  useEffect(() => { 
    if(buttonText !== initialState){
      setTimeout(() => setButtonText(initialState), [3000])
    }
  }, [buttonText])

  const changeText = (text) => setButtonText(text);

  return (
    <div
      className={`mt-12 flex xl:flex-row flex-col-reverse overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[1] bg-black-100 p-8 rounded-2xl align-middle'
      >
        <h3 className={styles.sectionHeadText}>Contact</h3>
        <div className="mt-6 flex gap-6">
          <button 
            type='button'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary' 
            onClick={() =>  {
              navigator.clipboard.writeText('tommyzums@gmail.com');
              setButtonText("Copied!");
            }
            }
          >
            {buttonText}
          </button>

          <a
              href={Pdf} target='_blank'
              className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
            >
              Resume
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");