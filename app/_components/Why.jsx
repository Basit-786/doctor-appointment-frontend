import React from "react";
import Accordion from "./Accordian";
import { Button } from "@/components/ui/button";

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

const Why = () => {
  return (
    <div id="about">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-10">
        <div className="lg:py-16">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Why see an <span className="text-primary"> psychiatrist? </span>{" "}
          </h2>

          <p className="my-4 text-gray-600 text-lg">
            Statistics show that approximately 50% of Canadians have suffered
            from mental illness by the time they reach 40, but successful mental
            health treatment can help to minimize the impact this has on an
            individual’s life.
            <br />
            <br />
            Psychiatrists are doctors specializing in mental health. They treat
            mental, emotional, and behavioural disorders through therapy and
            prescribing medication. Since they are covered by most provincial
            health insurance, you need a doctor’s referral to visit one.
            <br />
            <br />
            Other mental health specialists include counsellors, social workers,
            and psychotherapists. If you’re struggling to find time for an
            appointment, aren’t wanting to physically travel, or face a long
            wait in person, then online therapy can be a good place to start.
            You can get affordable, licensed, online therapy through Focus
            Mental Wellness, and it’s covered by most extended benefits.
          </p>
        </div>
        <div className="lg:py-6 flex items-center justify-center flex-col ">
          <h2 className="text-3xl font-bold sm:text-4xl mb-6">
            Common <span className="text-primary"> Conditions </span>{" "}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 ">
            {faqs.map((faq, index) => (
              <div
                // variants={slideInFromBottom(index / 6, 60)}
                // initial="hidden"
                // whileInView={"visible"}
                // viewport={onceTrue}
                className="w-full h-full"
                key={index}
              >
                <Accordion title={faq.title} answer={faq.answer} />
              </div>
            ))}
          </div>
          <div className="my-4">
            <Button>Book Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
