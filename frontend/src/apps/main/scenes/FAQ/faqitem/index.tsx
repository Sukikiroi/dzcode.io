import React, {
  useState,
} from "t9/apps/main/scenes/faq/faqitem/node_modules/react";
import "./style.scss";

export const FaqItem = ({ question, answer }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const openAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq__item">
      <div onClick={() => openAnswer()} className="faq__item__question">
        {question}
      </div>
      <div className={`faq__item__answer ${isOpen && "open__answer"}`}>
        {answer}
      </div>
    </div>
  );
};