import React from "react";
import Accordion from "./Accordian";

const faqs = [
  {
    title: "Anxiety",
    answer:
      "1 in 10 Canadians are affected by an anxiety disorder. These diseases can impact emotions, behaviour and physical health and are characterized by feeling intense periods of fear or distress. Typical symptoms include inability to sleep, poor concentration, fear and physical responses such as sweating and increased heart rate.",
  },
  {
    title: "Depression",
    answer:
      "In Canada, research shows that 16% of women and 11% of men experience depression at some point in their lives. Some signs of depression are decreased energy or fatigue, feelings of worthlessness, weight changes, lack of interest in activities typically enjoyed and difficulty focusing.",
  },
  {
    title: "Eating disorders",
    answer:
      "Impacting approximately 1 million people in Canada, eating disorders cause an unhealthy relationship with food. Symptoms include weight loss, obsessive behaviour with calorie intake and experiencing shameful feelings towards eating.",
  },
  {
    title: "Obsessive Compulsive Disorders (OCD)",
    answer:
      "OCD affects 2% of Canadians by causing uncontrollable repetitive behaviours or compulsions that cause distress. Some examples of these impulses include repeatedly counting objects or double-checking things, frequent hand washing or collecting items. These compulsions are deemed as the only way to cope with the obsessive thoughts.",
  },
  {
    title: "Post-Traumatic Stress Disorder (PTSD)",
    answer:
      "Caused by a traumatic event which triggers symptoms such as distressing memories, flashbacks of the event, 8% of Canadian individuals suffer with PTSD. It can hinder the ability to complete normal daily functioning and cause relationship, work and social problems.",
  },
];

const FAQs = () => {
  return (
    <section className="">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-lg font-semibold sm:text-xl text-primary mb-3">
            FAQs
          </h2>
          <h1 className="text-3xl font-bold sm:text-4xl">
            Have a <span className="text-primary">Question?</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 mt-5 gap-3">
          {faqs.map((faq, index) => (
            <div
              className="w-full h-full flex items-center justify-center max-w-[750px] mx-auto"
              key={index}
            >
              <Accordion title={faq.title} answer={faq.answer} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
