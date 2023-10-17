import React, { useState } from "react";
import Faq1 from "./FAQs/Faq1";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

const Faqs = () => {
  const [faqs, setFaqs] = useState([
    {
      open: false,
      title: "What types of services are available on Payarena?",
      desc: <Faq1 />,
    },
    {
      open: false,
      title: "How do I register, and how long does it take?",
      desc: <Faq1 />,
    },
    {
      open: false,
      title: "What happens if I cannot remember my password?",
      desc: <Faq1 />,
    },
    {
      open: false,
      title: "Will I be charged for registering on Payarena?",
      desc: <Faq1 />,
    },
    {
      open: false,
      title: "What are the payment options accepted on the website?",
      desc: <Faq1 />,
    },
  ]);
  return (
    <div className="pt-[6rem]">
      <h2 className="font-roboto text-center  text-[#242331] text-[2.2rem] mb-[2rem]">
        Frequently Asked Questions
      </h2>
      <p className="text-[#7A7D9C] text-center font-generalsans-regular mb-[2rem] text-[1.2rem]">
        Browse through our FAQs for answers to <br /> commonly asked questions
      </p>

      <div className="mt-[10%] ">
        {faqs.map((item, idx) => {
          return (
            <div
              className="flex items-start justify-between w-full py-[4%] border-b border-[#EAECF0] transition"
              key={idx}
            >
              <div>
                <div className="font-medium text-[1.1vw] mb-[2%]">
                  {item.title}
                </div>
                {item.open && (
                  <div className="text-[#667085] text-[0.9vw]">{item.desc}</div>
                )}
              </div>
              {item.open ? (
                <SlArrowUp
                  onClick={() => {
                    const newState = faqs.map((obj) =>
                      obj.title === item.title ? { ...obj, open: false } : obj
                    );
                    console.log(newState);
                    setFaqs(newState);
                  }}
                  className="cursor-pointer"
                  width="6%"
                  height="6%"
                />
              ) : (
                <SlArrowDown
                  onClick={() => {
                    const newState = faqs.map((obj) =>
                      obj.title === item.title ? { ...obj, open: true } : obj
                    );
                    console.log(newState);
                    setFaqs(newState);
                  }}
                  className="cursor-pointer"
                  width="3%"
                  height="3%"
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faqs;
