import React, {
  useEffect,
  useRef,
  useState,
} from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDown,
  ArrowLeft,
  Heart,
  Sparkles,
} from "lucide-react";

import "./styles.css";

/* =========================================================
   LEADERS DATA
   5 MEMBERS
   CHAIRMAN + VICE CHAIRMAN + 2 PRINCIPALS + VICE PRINCIPAL
========================================================= */

const leaders = [
  {
    id: "chairman",
    name: "Dr.K.ASHOK RAJU GARU",
    designation: "CHAIRMAN",
    badge: "VISIONARY",
    image: "/images/cm_sir.png",
    subtitle:
      "A leader whose guidance, vision and presence became an important part of our journey.",

    intro:
      "Thank you, Sir, for being the visionary presence behind our institution and for creating an environment where countless students have been given the opportunity to dream, learn and grow. 🤍✨",

    storyTitle:
      "A vision that became a journey for thousands. 🌟",

    story:
      "Behind every growing institution is a vision, and behind every successful student is someone who believed in creating the right opportunities. 🎓✨ Your leadership and vision have played an important role in shaping the institution we are proud to be a part of.\n\nYour commitment towards education has created an environment where students can learn, explore their interests and prepare themselves for the future. 🌱📚 The opportunities and facilities provided to students have helped many of us discover our strengths and believe in our potential.\n\nAn institution is not built only with buildings and classrooms. It is built with a vision, a purpose and a commitment towards students. 🤍 Your contribution towards that vision will always remain an important part of our college journey.\n\nThank you, Sir, for building not just an institution, but a place where countless students have found opportunities to shape their future. 🙏❤️\n\nAs we move forward in our own journeys, we will always carry the memories and experiences that began here. 🎓🌿",

    quote:
      "A great institution begins with a vision, but its true legacy lives in the lives it changes. 🌟🤍",
  },

  {
    id: "vice-chairman",
    name: "DR.K.INDIRA VENI GARU",
    designation: "VICE CHAIRMAN",
    badge: "INSPIRATION",
    image: "/images/cm_mam.png",
    subtitle:
      "An inspiring presence whose support and encouragement helped our institution grow.",

    intro:
      "Thank you, Mam, for being an inspiring presence whose support, encouragement and commitment have added so much meaning to our journey. 🌷🤍✨",

    storyTitle:
      "A graceful presence behind our growth. 🌷✨",

    story:
      "Every institution needs people who believe in its vision and continuously support its growth. 🌷✨ Your presence has been an important part of that journey. Through your encouragement and commitment, you have helped create an environment where students can dream bigger and move forward with confidence.\n\nYour contribution has reminded us that education is not only about classrooms, examinations and marks. 🎓📚 It is also about creating opportunities, building confidence and helping young minds discover what they are capable of becoming.\n\nThere are many things students may not notice while they are inside an institution, but as we look back, we understand how much effort goes into creating a place where students can learn, grow and prepare themselves for the future. 🌱🤍\n\nThank you, Mam, for your support, encouragement and for being a meaningful part of the institution that became such an important chapter in our lives. 🙏❤️\n\nWe will always carry the memories, opportunities and experiences that this institution gave us. 🌷🎓✨",

    quote:
      "True inspiration is not always loud; sometimes it is simply the quiet belief that helps others grow. 🌷🤍",
  },

  {
    id: "principal-one",
    name: "DR.M.JANARDANA RAJU GARU-SISTK",
    designation: "PRINCIPAL",
    badge: "LEADERSHIP",
    image: "/images/princi_1.png",
    subtitle:
      "A leader whose discipline and direction gave our academic journey purpose.",

    intro:
      "Thank you, Sir, for your leadership, guidance and constant commitment towards making our academic journey better, more disciplined and meaningful. 🎓✨",

    storyTitle:
      "Leadership that gave our journey direction. 🫡🌿",

    story:
      "Your leadership has played an important role in shaping our college experience. 🎓✨ Through your guidance, discipline and commitment, you have reminded us that education is not only about marks, but also about responsibility, character and preparation for the future.\n\nYour decisions and guidance have helped create an environment where students can learn with confidence and move forward with purpose. 📚🌱 Your expectations encouraged us to take our academics seriously and understand the importance of consistency and dedication.\n\nThere were moments when rules and responsibilities felt strict, but as students, we gradually understood the purpose behind them. 🫡✨ Discipline teaches us to become responsible, and your leadership helped us understand that lesson.\n\nThank you, Sir, for leading us, guiding us and always expecting us to become better versions of ourselves. 🙏❤️ Your guidance will remain one of the meaningful parts of our college journey.",

    quote:
      "Leadership is not simply about showing the way — it is about giving others the confidence to walk it. 🫡🌟",
  },

  {
    id: "principal-two",
    name: "DR.P.RAMESH KUMAR GARU-SIETK",
    designation: "PRINCIPAL",
    badge: "GUIDANCE",
    image: "/images/princi_2.jpeg",
    subtitle:
      "A strong guide whose dedication encouraged us to learn, grow and keep improving.",

    intro:
      "Thank you, Sir, for being a strong and supportive presence whose guidance, discipline and encouragement have helped shape our journey. 🤍🎓",

    storyTitle:
      "A strong presence behind our growth. 🌿✨",

    story:
      "Throughout our journey, your presence has reminded us of the importance of discipline, dedication and continuous growth. 🎓📚 Your guidance has helped students understand that success comes through consistency, responsibility and the willingness to keep improving.\n\nYour leadership and support have contributed to making our academic journey more meaningful and memorable. 🌱❤️ Whenever we were reminded to take our responsibilities seriously, those words became lessons that extended beyond the classroom.\n\nCollege life is not only about completing subjects and attending examinations. It is also about becoming responsible individuals who are ready to face the world. 🌿✨ Your guidance helped us understand that bigger picture.\n\nThank you, Sir, for every decision, every direction and every effort that helped make our journey better. 🙏❤️ We will always remember the role your guidance played in our college years.",

    quote:
      "The greatest leaders leave behind not only achievements, but people who are stronger because of their guidance. 🤍🌟",
  },

  {
    id: "vice-principal",
    name: "DR.B.MADHU GARU",
    designation: "VICE PRINCIPAL",
    badge: "SUPPORT",
    image: "/images/vprinci_sir.png",
    subtitle:
      "A supportive mentor whose guidance helped us move forward with confidence.",

    intro:
      "Thank you, Sir, for being a supportive and guiding presence throughout our journey and for always reminding us to move forward with responsibility and confidence. 🎓🤍",

    storyTitle:
      "Guidance that quietly became part of our journey. 🌿✨",

    story:
      "A student's college journey is shaped by many people, and your guidance has been an important part of ours. 🎓✨ Your presence, support and commitment have helped create an environment where students could learn, grow and move forward with confidence.\n\nYour guidance taught us that responsibility and discipline are important not only inside the classroom, but also in life. 📚🌱 The little reminders, instructions and expectations that we experienced during our journey slowly became lessons that we will carry with us.\n\nSometimes students understand the value of guidance only when they look back. ❤️ As we approach the next chapter of our lives, we realise how many people contributed to making our college journey meaningful.\n\nThank you, Sir, for every piece of guidance, every correction and every effort that helped us become more responsible and confident individuals. 🙏❤️\n\nYour contribution will always remain a meaningful part of our memories from this institution. 🎓🌿✨",

    quote:
      "The best guidance stays with us even after the person who gave it is no longer beside us. 🌿🤍",
  },
];

/* =========================================================
   FACULTY DATA
========================================================= */

const teachers = [
  {
    id: 1,
    name: "MANIVASAGAM SIR",
    image:
      "/images/hod_sir.png",

    intro:
      "Thank you, Sir, for being a calm leader, a strong guide and a constant source of discipline and direction throughout our journey. 🫡📚🌿✨",

    storyTitle:
      "A calm leader who taught us to stand strong. 🫡🌿",

    story:
      "Being our HOD, you have been much more than an academic leader to us. 🎓 You have shown us what true leadership looks like through your calm nature, discipline and composed way of handling every situation. 🌿🫡\n\nYour strictness always reminded us of the importance of responsibility, discipline and commitment. 📚✨ While your expectations were high, they encouraged us to push ourselves further and understand the value of doing things with sincerity and dedication. 💪🎓\n\nWhat makes your leadership truly admirable is the calmness with which you handle challenges. 🌿 You taught us that leadership is not about being loud, but about having the patience to listen, the wisdom to make the right decisions and the strength to guide others in the right direction. 🫡✨\n\nMany of the corrections and instructions we received from you may have felt strict at the time, but as we look back, we understand the purpose behind them. 📖 Your words became lessons that helped us become more responsible, disciplined and prepared for the future. 🌱✨\n\nAs our HOD, you have guided not just our academic journey but also the way we look at responsibility, professionalism and leadership. 🎓🤝 Your presence has given our department direction, and your guidance has helped many of us move forward with greater confidence. 🌟\n\nThank you, Sir, for leading us with dignity, guiding us with patience and expecting the best from us. 🙏❤️ The lessons we have learned from you will remain with us long after our college journey comes to an end. 🎓🌿✨",

    quote:
      "True leadership is not measured by how loudly one speaks, but by how calmly one leads, how wisely one guides and how deeply one inspires. 🫡🌿✨",
  },

  {
    id: 2,
    name: "PRIYADARSHINI MAM",
    image: "/images/priya_mam.jpeg",

    intro:
      "Thank you for being one of those teachers who made learning feel easier, brighter and more meaningful. Your patience, kindness and constant encouragement have left a beautiful mark on our journey. ❤️✨",

    storyTitle:
      "Strong enough to correct us, sweet enough to understand us. ❤️🌷",

    story:
      "Priyadarshini Mam is someone who taught us that being a great teacher is not always about being soft. Sometimes, it is about being bold enough to correct us, strict enough to keep us on the right path and strong enough to expect the best from us. 💪📚 There were moments when your words felt strict, but later we understood that they came from genuine concern and care. ❤️\n\nBehind that strong personality is a genuinely sweet and caring person who always wanted the best for her students. 🌷🫶 Your encouragement, your little smiles and the way you understood us made you truly special. 😊❤️\n\nYou taught us that discipline and kindness can exist together, and that sometimes the teachers who expect the most from us are the ones who believe in us the most. 🌱✨",

    quote:
      "Behind every strict word was a little care, behind every correction was a belief in us, and behind every lesson was a teacher who truly wanted us to become better. ❤️🫶✨",
  },

  {
    id: 3,
    name: "GOPI SIR",
    image:
      "/images/gopi_sir.jpg",

    intro:
      "Thank you, Sir, for sharing your knowledge with us and inspiring us to keep learning. 📚✨",

    storyTitle:
      "Calm in nature, strict when it came to our responsibilities. 📚🫡",

    story:
      "Gopi Sir is someone whose calm nature always made his presence feel composed and reassuring. 🌿✨ But when it came to examinations, discipline and responsibility, we knew that things had to be taken seriously. 📚🫡 As the Head of the Exam Cell, your strict instructions taught us the importance of being prepared, punctual and responsible. 📝🎓\n\nSometimes your rules made us a little nervous 😅, but we understood that they were necessary to keep everything fair, organised and smooth. Your calm way of handling situations showed us that being strict does not always mean being harsh. 🌿✨\n\nThank you, Sir, for teaching us discipline, responsibility and the importance of doing things the right way. 🙏❤️",

    quote:
      "Calm in words, firm in responsibility — your discipline taught us to take every important moment seriously. 🫡📚✨",
  },

  {
    id: 4,
    name: "SANDEEP SIR",
    image:
      "/images/sandeep_sir.jpg",

    intro:
      "Thank you, Sir, for your guidance, patience and for always making us feel that we could learn and do better. 🌿📚",

    storyTitle:
      "A teacher whose guidance made learning easier. 🌟",

    story:
      "Sandeep Sir has always been someone whose presence made the learning journey feel a little easier. 📚✨ Your way of explaining things and guiding us helped us understand not just the subject, but also the importance of patience and consistent effort. 🌱 Your support and simple words of encouragement gave us confidence whenever we needed it. 🤝❤️ Even the little classroom moments became memories that we will carry with us. Thank you, Sir, for your patience, guidance and for being a teacher who always wanted to see us improve. 🙏✨",

    quote:
      "Sometimes, a teacher’s simplest guidance becomes a student’s greatest lesson. 📚🌿✨",
  },

  {
    id: 5,
    name: "RAVI KUMAR SIR",
    image:
      "/images/ravi_sir.jpg",

    intro:
      "Thank you for every lesson, every correction and every opportunity you gave us. 🙏📚",

    storyTitle:
      "Strict when needed, supportive when it mattered. 🫡❤️",

    story:
      "Ravi Sir is someone whose bold and strict personality is definitely hard to forget. 🫡📚 You always made sure that we understood the importance of discipline, responsibility and doing things properly. Sometimes your words were strict and your expectations were high, but we knew that you wanted us to improve and become better. 💪✨\n\nWhat made you special to us was that behind that strict and bold nature, there was always a supportive teacher. ❤️🤝 Whenever we needed guidance or encouragement, you were there to help us move forward. Your support gave us confidence, especially when we were unsure of ourselves. 🌱✨\n\nAnd somehow, even with all the strictness, you became one of those teachers who students genuinely enjoyed being around. 😄❤️ Your presence, your way of interacting with us and those little classroom moments made you a favourite among students. 🫶\n\nThank you, Sir, for correcting us when we needed correction, pushing us when we needed a push and supporting us whenever we needed someone to believe in us. 🙏❤️ Your strictness taught us discipline, your boldness taught us confidence and your support made the journey easier. 🌟📚",

    quote:
      "The teacher who can correct us, challenge us, support us and still remain one of our favourites — that is truly special. 🫡❤️✨",
  },

  {
    id: 6,
    name: "MOHANAVALLI MAM",
    image: "/images/mohanavalli_mam.jpg",

    intro:
      "Thank you for being a teacher who always expected the best from us, while quietly caring about every step we took along the way. ❤️🌷",

    storyTitle:
      "Your strictness shaped us, your care stayed with us. ❤️",

    story:
      "Mohanavalli Mam taught us that caring for students does not always mean being gentle with every mistake. Sometimes, caring means being strict, setting high standards and reminding us that we are capable of doing better. 📚💪\n\nThere were moments when your strict words felt difficult, but with time we understood the reason behind them. You wanted us to be disciplined, responsible and confident enough to face the world. 🌱✨\n\nBehind that strict nature was a teacher who genuinely cared about our growth. ❤️ You noticed when we needed guidance, corrected us when we were wrong and encouraged us when we were struggling. 🫂",

    quote:
      "Sometimes the strictest words come from the kindest hearts — because true care always wants to see us become better. ❤️🌱✨",
  },

  {
    id: 7,
    name: "PURNIMA MAM",
    image: "/images/purnima_mam.png",

    intro:
      "Thank you for being a bold and strong teacher who always knew when we needed a strict word, and when we simply needed understanding. ❤️🌷",

    storyTitle:
      "Bold when we needed direction, calm when we needed understanding. 🌷",

    story:
      "Purnima Mam is one of those teachers whose bold and strong personality is impossible to forget. ❤️✨ There were times when your words were very strict and sometimes they even felt a little harsh. But with time, we understood that those words were meant to correct us, make us responsible and push us to do better. 📚💪\n\nYou never hesitated to tell us when we were wrong, even when it was not what we wanted to hear. Your high expectations taught us to take our responsibilities seriously and become more disciplined. 🎓✨\n\nBut behind that strict side was also a calm and understanding teacher. 🌷🤍 Thank you for being bold enough to correct us, honest enough to guide us and calm enough to understand us. ❤️",

    quote:
      "Sometimes your words were strict, sometimes they felt harsh, but behind them was a teacher who wanted us to grow stronger and better. ❤️🌷",
  },

  {
    id: 8,
    name: "MANIVANNAN SIR",
    image: "/images/mani_sir.jpeg",

    intro:
      "Thank you, Sir, for making our journey lighter with your calm nature, funny moments and constant support. 🌿😂❤️",

    storyTitle:
      "Calm vibes, funny moments and constant support. 🌿😂",

    story:
      "Manivannan Sir has always had a naturally calm and composed presence. 🌿✨ Even when things became stressful, your way of handling situations had a certain calmness that made everything feel a little easier. 📚🤍 But what made your presence even more memorable was your funny side. 😂❤️ Your jokes, reactions and little classroom moments gave us plenty of reasons to smile, and those simple moments became some of the memories we will remember from our college days. 🥹✨\n\nAlong with the fun, you were always supportive when we needed guidance. 🤝📚 Your friendly nature made it comfortable for us to approach you, ask questions and share our difficulties without hesitation. Thank you, Sir, for the calmness, the laughs and the support you gave us throughout our journey. ❤️🌿 You made learning feel less stressful and our classroom memories a lot more enjoyable. 😂✨",

    quote:
      "Some teachers teach us lessons, some make us laugh, and the best ones manage to do both while always standing by us. 😂📚❤️",
  },

  {
    id: 9,
    name: "HIMABINDU MAM",
    image: "/images/himabindu_mam.jpg",

    intro:
      "Thank you for being the kind of teacher who always stood by us, supported us when we needed it and cared for us like more than just students. ❤️🫂",

    storyTitle:
      "Your care protected us, your support gave us courage. 🫂❤️",

    story:
      "Himabindu Mam is one of those teachers who made us feel that we were never alone. 🤗❤️ Your caring nature, lovable personality and constant support made it easy for us to come to you whenever we needed help. 🫂\n\nYou always listened, understood our situation and stood beside us when things became difficult. ❤️ Whenever we needed guidance, encouragement or simply someone to listen, you were always there. 🌷✨\n\nYour support gave us confidence, your care made us feel valued and your lovable nature gave us memories that we will always carry with us. 🫶❤️",

    quote:
      "Some teachers teach us lessons, some support us through them — and some quietly stand beside us when we need them the most. 🫂❤️✨",
  },

  {
    id: 10,
    name: "SUREKHA MAM",
    image:
      "/images/surekha_mam.png",

    intro:
      "Thank you, Mam, for being a teacher who could make us serious when needed and make us laugh when we least expected it. 🌷😂",

    storyTitle:
      "Sometimes strict, sometimes funny — always memorable. ❤️✨",

    story:
      "Surekha Mam has one of those personalities that kept us guessing what version of Mam we were going to meet that day. 😂❤️ Sometimes you were strict enough to make us immediately become serious about our work. 📚🫡 And sometimes, your funny side made the entire atmosphere feel lighter. 😄✨\n\nYour strictness taught us discipline and reminded us to take our responsibilities seriously. 🌱📖 But your funny moments showed us that a teacher can be both disciplined and fun at the same time. Thank you, Mam, for the lessons, the corrections, the smiles and all those little moments that made our journey special. 🌷❤️",

    quote:
      "One moment we were taking notes seriously, the next moment we were trying not to laugh — and somehow, both became memories. 😂📚❤️",
  },

  {
    id: 11,
    name: "JANANI MAM",
    image: "/images/janani_mam.jpeg",

    intro:
      "Thank you for being a calm and composed presence in our journey, whose quiet care always made us feel understood and supported. 🤍🌷",

    storyTitle:
      "Your calmness spoke louder than words. 🤍🌿",

    story:
      "Janani Mam is one of those teachers whose calm and composed nature has a quiet way of making everything feel a little easier. 🤍🌷 You never needed loud words or dramatic moments to make an impact — your peaceful presence itself was enough. 🌿✨\n\nYour caring nature was never loud; it was subtle, genuine and comforting. 🫂❤️ Sometimes it was just a few words, sometimes a simple smile and sometimes simply knowing that you were there. Those little moments meant more than you probably realised. 🥹❤️\n\nThank you, Mam, for your patience, calmness, understanding and all those little acts of care that we will always remember. 🌷✨",

    quote:
      "Your care was never loud — it lived quietly in your patience, your understanding and the little things you did for us. 🤍🌷",
  },

  {
    id: 12,
    name: "JHANSI MAM",
    image: "/images/jhansi_mam.jpeg",

    intro:
      "Thank you, Mam, for being a calm, understanding and supportive presence throughout our journey. 🌷🤍",

    storyTitle:
      "Cool, calm and always there for us. 🌿❤️🌷",

    story:
      "Jhansi Mam has always had that naturally cool and calm personality that makes everyone feel comfortable around you. 🌿✨ You never made things unnecessarily complicated, and your peaceful way of handling situations made your presence feel reassuring. 🤍\n\nWhat we appreciate most is the support you gave us. ❤️🤝 Whenever we needed help, guidance or simply someone who would understand our situation, you were always approachable. Your patience and understanding made it easier for us to learn without feeling pressured. 📚🌱\n\nSometimes it was a simple conversation, a small suggestion or just knowing that you were there — those little things made a difference. 🫶 Thank you, Mam, for being such a calm and supportive teacher and for making our college journey a little easier and a lot more comfortable. 🌷❤️✨",

    quote:
      "A calm presence, a supportive heart and a teacher who always made us feel comfortable being ourselves. 🤍🌷✨",
  },

  {
    id: 13,
    name: "SHILPA MAM",
    image: "/images/shilpa_mam.jpeg",

    intro:
      "Thank you for being a teacher who knew when to be strict, when to understand us, and when to simply stand beside us. 🤍🌷",

    storyTitle:
      "Strict when we needed direction, caring when we needed support. ❤️",

    story:
      "Shilpa Mam showed us that being strict and being caring can beautifully exist together. ❤️🌷 There were times when your words were firm and your expectations were high, but we understood that your strictness always came from a place of care. 📚\n\nYou wanted us to be disciplined, responsible and serious about our future. 🎓✨ But behind that strict side was a genuinely caring and understanding teacher. 🤍 Whenever we were struggling or confused, you knew how to understand us. 🫂\n\nThank you, Mam, for every strict word, every caring gesture, every correction and every moment you stood by us. ❤️🌷",

    quote:
      "Your strictness gave us direction, your care gave us comfort, and your belief in us gave us the courage to become better. ❤️🌷",
  },

  {
    id: 14,
    name: "HARI PRASANNA MAM",
    image: "/images/hari_mam.jpg",

    intro:
      "Thank you for being one of those teachers who made the classroom feel a little happier, a little lighter and a lot more special. ❤️🌷",

    storyTitle:
      "Our teacher, our favourite. 🥹❤️",

    story:
      "Hari Prasanna Mam is truly one of those teachers who naturally became a student favourite. 🥹❤️ There is something so warm and lovable about the way you interact with us that makes everyone feel comfortable around you. 🤗🌷\n\nYou made ordinary classroom moments feel special. ✨ Your smile, your way of talking to us and the simple moments we shared made you someone we could always look forward to seeing. 🫶\n\nThank you for all the smiles, conversations, kindness and beautiful moments that made our college journey more special. 🎓🌷 We may move on from this classroom, but the memories of our favourite teacher will always stay with us. 🥹❤️",

    quote:
      "Some teachers become favourites simply because their presence makes students feel happy, comfortable and understood. 🥹❤️🌷",
  },

  {
    id: 15,
    name: "JYOSHNA MAM",
    image:
      "/images/jyoshna_mam.png",

    intro:
      "Thank you, Mam, for being a bold and confident teacher who always encouraged us to believe in ourselves and move forward.🌷✨",

    storyTitle:
      "Bold in personality, supportive at heart. 💪❤️",

    story:
      "Jyoshna Mam is someone with a bold personality and a strong presence that is impossible to miss. 💪✨ You have always carried yourself with confidence, and that confidence itself became something we admired. Your bold nature taught us that sometimes we need to speak up, stand strong and believe in ourselves. 🌟\n\nBut behind that strong personality was a teacher who genuinely cared about her students and was always willing to support us when we needed guidance. ❤️🤝 Your encouragement gave us confidence during moments when we doubted ourselves. 🌱✨\n\nYou reminded us that challenges are not reasons to step back, but opportunities to become stronger. Thank you, Mam, for being bold enough to guide us, supportive enough to stand beside us and caring enough to always want the best for us. 🫶❤️",

    quote:
      "Be bold, stand strong and keep moving forward — sometimes the strongest lessons come from the strongest teachers. 💪❤️✨",
  },

  {
    id: 16,
    name: "GOVINDAIAH SIR",
    image:
      "/images/govindaiah_sir.png",

    intro:
      "Thank you, Sir, for filling our journey with laughter, support and a few moments that were definitely hard to handle. 😂❤️",

    storyTitle:
      "Funny enough to make us laugh, unpredictable enough to keep us alert. 😂",

    story:
      "Govindaiah Sir has a personality that is definitely impossible to forget. 😂❤️ Your funny nature gave us plenty of memorable moments, and somehow even the most ordinary classroom situations could become something we would laugh about later. 😄📚\n\nAt the same time, your supportive side always showed us that behind the fun was a teacher who genuinely cared about his students. 🤝❤️ Whenever we needed guidance or help, you were always willing to support us and point us in the right direction.\n\nOf course, there were also those moments when you were a little difficult to handle. 😅 Sometimes we really had to figure out how to deal with the situation! 😂 But honestly, those moments have also become part of the memories we will look back on and laugh about.\n\nThank you, Sir, for the support, the guidance, the laughs and even those slightly difficult moments that made your presence so memorable. 😂❤️✨ You definitely gave us some stories that will stay with us for a long time.",

    quote:
      "Some teachers are easy to understand, some are hard to handle, but the memorable ones always give us stories worth remembering. 😂❤️✨",
  },
];

/* =========================================================
   STARS
========================================================= */

function Stars() {
  return (
    <div className="stars">
      {Array.from({ length: 45 }).map((_, i) => (
        <i
          key={i}
          style={{
            "--i": i,
          }}
        />
      ))}
    </div>
  );
}

/* =========================================================
   FLOATING HEARTS + GOLDEN SPARKLES
   DECORATIVE ONLY
   DOES NOT CHANGE EXISTING CONTENT / LAYOUT
========================================================= */

function FloatingMagic() {
  return (
    <div
      className="floating-magic"
      aria-hidden="true"
    >
      {Array.from({ length: 12 }).map((_, i) => (
        <span
          key={`heart-${i}`}
          className="floating-heart"
          style={{
            "--magic-x": `${(i % 6) * 18 - 45}px`,
            "--magic-delay": `${i * 0.8}s`,
            "--magic-duration": `${7 + (i % 4)}s`,
          }}
        >
          ❤️
        </span>
      ))}

      {Array.from({ length: 16 }).map((_, i) => (
        <span
          key={`sparkle-${i}`}
          className="floating-sparkle"
          style={{
            "--sparkle-x": `${(i % 8) * 13 - 45}px`,
            "--sparkle-delay": `${i * 0.45}s`,
            "--sparkle-duration": `${3 + (i % 3)}s`,
          }}
        >
          ✦
        </span>
      ))}
    </div>
  );
}

/* =========================================================
   HERO
========================================================= */

function Hero({ onExplore }) {
  return (
    <section className="hero">
      <div className="orb orb1" />
      <div className="orb orb2" />

      <Stars />

      <div className="hero-content">
        <div className="eyebrow">
          <Sparkles size={15} />
          A LITTLE THANK YOU
        </div>

        <h1>
          To the teachers
          <span>who made us believe.</span>
        </h1>

        <div className="gold-line" />

        <p className="hero-quote">
          Some lessons stay in our notebooks.
          <br />
          The best ones stay with us forever.
        </p>

        <button
          className="primary-btn"
          onClick={onExplore}
        >
          Meet our mentors
          <ArrowDown size={16} />
        </button>

        <div className="scroll-hint">
          SCROLL TO DISCOVER
          <span />
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   LEADER CARD
========================================================= */

function LeaderCard({
  leader,
  index,
  onSelect,
}) {
  return (
    <button
      className="pillar-card"
      style={{
        "--leader-delay": `${index * 0.12}s`,
      }}
      onClick={() => onSelect(leader)}
    >
      <div className="pillar-photo-wrap">
        <img
          src={leader.image}
          alt={leader.name}
          loading="lazy"
        />

        <div className="pillar-badge">
          {leader.badge}
        </div>

        <div className="photo-shine" />

        <div className="click-badge">
          VIEW STORY
        </div>
      </div>

      <div className="pillar-content">
        <div className="pillar-designation">
          {leader.designation}
        </div>

        <div className="pillar-name">
          {leader.name}
        </div>

        <div className="pillar-subtitle">
          {leader.subtitle}
        </div>

        <div className="pillar-line" />
      </div>
    </button>
  );
}

/* =========================================================
   LEADERS SECTION
========================================================= */

function LeadersSection({ onSelect }) {
  return (
    <section className="pillars-section">
      <div className="pillars-heading reveal">
        <div className="small-title">
          OUR LEADERS
        </div>

        <h2>
          The vision behind
          <em>our journey.</em>
        </h2>

        <p>
          The people whose leadership,
          guidance and vision gave our
          journey direction and purpose.
        </p>
      </div>

      <div className="pillars-grid">
        {leaders.map((leader, index) => (
          <LeaderCard
            key={leader.id}
            leader={leader}
            index={index}
            onSelect={onSelect}
          />
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   TEACHER CARD
========================================================= */

function TeacherCard({
  teacher,
  index,
  onSelect,
  onConnect,
  cardRef,
}) {
  return (
    <button
      className="teacher-card"
      style={{
        "--delay": `${index * 0.08}s`,
      }}
      ref={cardRef}
      onClick={() => onConnect(teacher, index)}
    >
      <div className="photo-wrap">
        <img
          src={teacher.image}
          alt={teacher.name}
          loading="lazy"
        />

        <div className="photo-shine" />

        <div className="click-badge">
          VIEW STORY
        </div>
      </div>

      <div className="teacher-name">
        {teacher.name}
      </div>
    </button>
  );
}

/* =========================================================
   TEACHERS SECTION
========================================================= */

function TeachersSection({ onSelect }) {
  const [connectedIndexes, setConnectedIndexes] = useState([]);
  const cardRefs = useRef([]);

  const connectTeacher = (teacher, index) => {
    if (connectedIndexes.includes(index)) {
      onSelect(teacher);
      return;
    }

    setConnectedIndexes((currentIndexes) => [
      ...currentIndexes,
      index,
    ]);
  };

  return (
    <section
      className="teachers-section"
      id="teachers"
    >
      <div className="section-heading reveal">
        <div className="small-title">
          OUR MENTORS
        </div>

        <h2>
          The people behind
          <em>our journey.</em>
        </h2>

        <p>
          Sixteen mentors. Countless lessons.
          One unforgettable journey.
        </p>
      </div>

      <div className="teacher-grid-shell">
        <ConnectionThread
          connectedIndexes={connectedIndexes}
          cardRefs={cardRefs}
          isComplete={connectedIndexes.length === teachers.length}
        />

        <div className="teacher-grid">
        {teachers.map((teacher, index) => (
          <TeacherCard
            key={teacher.id}
            teacher={teacher}
            index={index}
            onSelect={onSelect}
            onConnect={connectTeacher}
            cardRef={(element) => {
              cardRefs.current[index] = element;
            }}
          />
        ))}
        </div>
      </div>
    </section>
  );
}

function ConnectionThread({
  connectedIndexes,
  cardRefs,
  isComplete,
}) {
  const shellRef = useRef(null);
  const [points, setPoints] = useState([]);

  useEffect(() => {
    const measurePoints = () => {
      const shell = shellRef.current;
      if (!shell) return;

      const shellBounds = shell.getBoundingClientRect();
      setPoints(
        connectedIndexes
          .map((index) => cardRefs.current[index])
          .filter(Boolean)
          .map((card) => {
            const cardBounds = card.getBoundingClientRect();
            return {
              x: cardBounds.left - shellBounds.left + cardBounds.width / 2,
              y: cardBounds.top - shellBounds.top + cardBounds.height / 2,
            };
          }),
      );
    };

    measurePoints();
    window.addEventListener("resize", measurePoints);
    window.addEventListener("scroll", measurePoints, { passive: true });

    return () => {
      window.removeEventListener("resize", measurePoints);
      window.removeEventListener("scroll", measurePoints);
    };
  }, [connectedIndexes, cardRefs]);

  const width = shellRef.current?.clientWidth || 1;
  const height = shellRef.current?.clientHeight || 1;
  const lastPoint = points[points.length - 1];

  return (
    <div className="thread-layer" ref={shellRef} aria-hidden="true">
      <svg
        className="thread-svg"
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
      >
        {points.slice(1).map((point, index) => {
          const previousPoint = points[index];

          return (
            <line
              className="thread-line"
              key={`${previousPoint.x}-${point.x}-${point.y}`}
              x1={previousPoint.x}
              y1={previousPoint.y}
              x2={point.x}
              y2={point.y}
            />
          );
        })}
      </svg>

      {isComplete && lastPoint && (
        <span
          className="thread-heart"
          style={{ left: lastPoint.x, top: lastPoint.y }}
        >
          ♥
        </span>
      )}
    </div>
  );
}

function EasterEgg() {
  const [foundHearts, setFoundHearts] = useState([]);
  const allFound = foundHearts.length === 5;

  const findHeart = (heartNumber) => {
    setFoundHearts((currentHearts) =>
      currentHearts.includes(heartNumber)
        ? currentHearts
        : [...currentHearts, heartNumber],
    );
  };

  return (
    <>
      <div className="easter-egg-hearts">
        {Array.from({ length: 5 }).map((_, index) => {
          const heartNumber = index + 1;
          const isFound = foundHearts.includes(
            heartNumber,
          );

          return (
            <button
              key={heartNumber}
              className={`easter-heart${
                isFound ? " found" : ""
              }`}
              style={{ "--heart-index": heartNumber }}
              aria-label={`Find hidden heart ${heartNumber}`}
              onClick={() =>
                findHeart(heartNumber)
              }
            >
              ♥
            </button>
          );
        })}
      </div>

      {allFound && (
        <div className="easter-egg-message" role="status">
          You found all the love ❤️
        </div>
      )}
    </>
  );
}

function playSurpriseMelody() {
  const AudioContext =
    window.AudioContext || window.webkitAudioContext;

  if (!AudioContext) return;

  const audioContext = new AudioContext();
  let isStopped = false;

  const stopMelody = () => {
    if (isStopped) return;

    isStopped = true;
    audioContext.close();
  };

  const notes = [
    261.63, 329.63, 392, 523.25, 493.88, 392, 329.63, 392,
    293.66, 349.23, 440, 587.33, 523.25, 440, 349.23, 440,
    261.63, 329.63, 392, 659.25, 587.33, 523.25, 493.88, 392,
    349.23, 392, 440, 523.25, 587.33, 659.25, 587.33, 523.25,
    392, 440, 523.25, 659.25, 783.99, 659.25, 587.33, 523.25,
  ];
  const noteSpacing = 0.78;

  notes.forEach((frequency, index) => {
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const noteStart =
      audioContext.currentTime + index * noteSpacing;
    const noteDuration =
      index === notes.length - 1 ? 2.2 : 0.68;

    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(
      frequency,
      noteStart,
    );

    gain.gain.setValueAtTime(0, noteStart);
    gain.gain.linearRampToValueAtTime(
      0.12,
      noteStart + 0.04,
    );
    gain.gain.exponentialRampToValueAtTime(
      0.001,
      noteStart + noteDuration,
    );

    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    oscillator.start(noteStart);
    oscillator.stop(noteStart + noteDuration + 0.05);
  });

  window.setTimeout(() => {
    stopMelody();
  }, 31000);

  return stopMelody;
}

/* =========================================================
   FINAL SURPRISE
========================================================= */

function SurpriseSection({ person }) {
  const [showOptions, setShowOptions] =
    useState(false);
  const [surpriseLayer, setSurpriseLayer] =
    useState(0);
  const [puzzlePieces, setPuzzlePieces] =
    useState([]);
  const [showSurprise, setShowSurprise] =
    useState(false);
  const [isLetterOpen, setIsLetterOpen] =
    useState(false);
  const stopMelodyRef = useRef(null);

  useEffect(() => {
    return () => {
      stopMelodyRef.current?.();
    };
  }, []);

  return (
    <section className="surprise-section">
      <FloatingMagic />

      {!showSurprise ? (
        <div className="surprise-card">
          <div className="surprise-sparkles">
            <Sparkles size={22} />
            <Sparkles size={15} />
          </div>

          <div className="small-title">
            ONE LAST THING...
          </div>

          <h2>
            We have a little surprise for you. ❤️
          </h2>

          {!showOptions ? (
            <button
              className="surprise-btn"
              onClick={() => {
                setShowOptions(true);
                setSurpriseLayer(1);
              }}
            >
              ✨ A SURPRISE FOR YOU ✨
            </button>
          ) : surpriseLayer === 1 ? (
            <div className="surprise-layer">
              <div className="surprise-layer-icon">🎁</div>
              <h3>Surprise number one!</h3>
              <p>A little thank-you was only the beginning. ❤️</p>
              <button
                className="surprise-btn"
                onClick={() => setSurpriseLayer(2)}
              >
                Did you really think that was it? 😭
              </button>
            </div>
          ) : surpriseLayer === 2 ? (
            <div className="surprise-layer">
              <div className="surprise-layer-icon">✨</div>
              <h3>There is more waiting for you.</h3>
              <p>The best memories always deserve one more moment. ❤️</p>
              <button
                className="surprise-btn"
                onClick={() => setSurpriseLayer(3)}
              >
                Okay… last one.
              </button>
            </div>
          ) : puzzlePieces.length < 4 ? (
            <div className="memory-puzzle">
              <div className="puzzle-instruction">
                Find the four glowing memories.
              </div>

              <div className="puzzle-pieces">
                {[1, 2, 3, 4].map((piece) => (
                  <button
                    className={`puzzle-piece${
                      puzzlePieces.includes(piece)
                        ? " is-found"
                        : ""
                    }`}
                    key={piece}
                    onClick={() =>
                      setPuzzlePieces((currentPieces) =>
                        currentPieces.includes(piece)
                          ? currentPieces
                          : [...currentPieces, piece]
                      )
                    }
                    aria-label={`Find memory piece ${piece}`}
                  >
                    <span>✦</span>
                  </button>
                ))}
              </div>

              <div className="puzzle-progress">
                {puzzlePieces.length} / 4 memories found
              </div>
            </div>
          ) : (
            <div className="puzzle-complete">
              <div className="assembled-heart" aria-hidden="true">
                <span>♥</span>
              </div>

              <div className="puzzle-complete-text">
                Your memories became a heart.
              </div>

              <button
                className="surprise-btn"
                onClick={() => {
                  stopMelodyRef.current =
                    playSurpriseMelody();
                  setShowSurprise(true);
                }}
              >
                Reveal the final wish
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="final-surprise">
          <Stars />

          <div className="final-glow" />

          <DigitalLetter
            onOpen={() => setIsLetterOpen(true)}
          />

          <div
            className={`final-content ${
              isLetterOpen
                ? "letter-unlocked"
                : "letter-locked"
            }`}
          >
            <div className="final-sparkles">
              ✨ ✨
            </div>

            <div className="final-from">
              FROM ALL OF US ❤️
            </div>

            <div className="big-heart">
              ❤️
            </div>

            <h1>
              HAPPY
              <br />
              TEACHERS’ DAY!
            </h1>

            <div className="final-line">
              ✦ ♡ ✦
            </div>

            <p>
              Thank you for every lesson,
              <br />
              every correction, every smile,
              <br />
              every moment of patience,
              <br />
              and every little effort that
              <br />
              made us who we are today. ❤️
            </p>

            <p className="gold-text">
              You may be one teacher among many,
              <br />
              but to us, you are a beautiful part
              <br />
              of our story. 🌷❤️
            </p>

            <div className="with-love">
              With Love,
            </div>

            <div className="students">
              Your Students ❤️
            </div>

            <div className="final-line">
              ── {person.name} ──
            </div>
          </div>

          <MovieCredits isVisible={isLetterOpen} />
        </div>
      )}
    </section>
  );
}

function MovieCredits({ isVisible }) {
  const creditNames = [
    ...leaders.map((leader) => leader.name),
    ...teachers.map((teacher) => teacher.name),
  ];

  return (
    <section
      className={`movie-credits${
        isVisible ? " credits-visible" : " credits-locked"
      }`}
      aria-label="Teachers' Day tribute credits"
    >
      <div className="credits-roll">
        <div className="credits-title">THE END</div>
        <div className="credits-subtitle">
          But the lessons continue...
        </div>
        <div className="credits-tribute">
          A Teachers' Day Tribute
        </div>
        <div className="credits-created">Created with ❤️</div>
        <div className="credits-by">by CSE Students 2023-27</div>

        <div className="credits-names">
          {creditNames.map((name) => (
            <div key={name}>{name}</div>
          ))}
        </div>

        <div className="credits-final-heart">❤️</div>
      </div>
    </section>
  );
}

function DigitalLetter({ onOpen }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleLetter = () => {
    const nextOpenState = !isOpen;
    setIsOpen(nextOpenState);

    if (nextOpenState) onOpen();
  };

  return (
    <div className={`digital-letter${isOpen ? " is-open" : ""}`}>
      <button
        className="digital-envelope"
        onClick={toggleLetter}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close digital letter" : "Open digital letter"}
      >
        <img
          className="envelope-image"
          src="/images/envelope.svg"
          alt=""
        />
        <span className="envelope-label">To Our Teachers…</span>
      </button>

      <span className="letter-hint">
        {isOpen ? "With love and gratitude" : "Open our letter"}
      </span>
    </div>
  );
}

/* =========================================================
   PROFILE PAGE
========================================================= */

function ProfilePage({
  person,
  onBack,
}) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [person]);

  return (
    <main className="profile-page">
      <div className="orb orb1" />
      <div className="orb orb2" />

      <button
        className="back-btn"
        onClick={onBack}
      >
        <ArrowLeft size={16} />
        Back to mentors
      </button>

      {/* ===================================================
          PROFILE HERO
      =================================================== */}

      <section className="profile-hero">
        <div className="profile-photo">
          <img
            src={person.image}
            alt={person.name}
          />
        </div>

        <div className="profile-intro">
          <div className="small-title">
            WITH GRATITUDE
          </div>

          <h1>
            {person.name}
          </h1>

          <div className="gold-line left" />

          <p>
            {person.intro}
          </p>
        </div>
      </section>

      {/* ===================================================
          STORY
      =================================================== */}

      <section className="story-section">
        <div className="story-card">
          <Sparkles size={25} />

          <div className="small-title">
            A LITTLE NOTE
          </div>

          <h2>
            {person.storyTitle}
          </h2>

          <p
            style={{
              whiteSpace: "pre-line",
            }}
          >
            {person.story}
          </p>
        </div>
      </section>

      {/* ===================================================
          QUOTE
      =================================================== */}

      <section className="quote-section">
        <div className="quote-mark">
          “
        </div>

        <p>
          {person.quote}
        </p>

        <div className="quote-name">
          WITH LOVE & GRATITUDE — {person.name}
        </div>
      </section>

      {/* ===================================================
          SURPRISE
      =================================================== */}

      <SurpriseSection person={person} />

      {/* ===================================================
          FOOTER
      =================================================== */}

      <footer>
        <Heart
          size={13}
          fill="currentColor"
        />

        Thank you for being part of our story.
      </footer>
    </main>
  );
}

/* =========================================================
   FOOTER
========================================================= */

function Footer() {
  return (
    <footer>
      <Heart
        size={13}
        fill="currentColor"
      />

      Made with love and gratitude for our
      wonderful mentors.
    </footer>
  );
}

/* =========================================================
   MAIN APP
========================================================= */

function App() {
  const [selectedPerson, setSelectedPerson] =
    useState(null);
  const [hasStartedStory, setHasStartedStory] =
    useState(false);

  const backgroundHearts = Array.from(
    { length: 18 },
    (_, index) => ({
      id: index + 1,
      x: 3 + (index % 6) * 18,
      y: 8 + Math.floor(index / 6) * 32,
    })
  );

  /* =======================================================
     REVEAL ANIMATION
  ======================================================= */

  useEffect(() => {
    if (selectedPerson) return;

    const revealElements =
      document.querySelectorAll(".reveal");

    const cards =
      document.querySelectorAll(
        ".teacher-card, .pillar-card"
      );

    const observer =
      new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add(
                "visible"
              );
            }
          });
        },
        {
          threshold: 0.12,
        }
      );

    revealElements.forEach((el) => {
      observer.observe(el);
    });

    cards.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [selectedPerson]);

  /* =======================================================
     SCROLL TO MENTORS
  ======================================================= */

  const scrollToMentors = () => {
    document
      .getElementById("teachers")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  /* =======================================================
     OPEN PROFILE
     SAME FOR LEADERS + FACULTY
  ======================================================= */

  const openProfile = (person) => {
    setSelectedPerson(person);

    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  /* =======================================================
     BACK
  ======================================================= */

  const backToMentors = () => {
    setSelectedPerson(null);

    setTimeout(() => {
      const teachersSection =
        document.getElementById("teachers");

      if (teachersSection) {
        teachersSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 120);
  };

  /* =======================================================
     PROFILE PAGE
  ======================================================= */

  if (selectedPerson) {
    return (
      <>
        <HeartBackground hearts={backgroundHearts} />
        <CursorHearts />
        <ShootingStar />
        <DontClickButton />
        <ProfilePage
          person={selectedPerson}
          onBack={backToMentors}
        />
      </>
    );
  }

  /* =======================================================
     HOME PAGE
  ======================================================= */

  return (
    <>
      <HeartBackground hearts={backgroundHearts} />
      <CursorHearts />
      <ShootingStar />
      <GlassOrb />
      <DontClickButton />

      {!hasStartedStory && (
        <StoryCurtains
          onStart={() => setHasStartedStory(true)}
        />
      )}

      <main>
        <EasterEgg />

        <Hero
          onExplore={scrollToMentors}
        />

        <MemoryClock />

        {/* =================================================
            LEADERS FIRST
            5 MEMBERS
        ================================================= */}

        <LeadersSection
          onSelect={openProfile}
        />

        {/* =================================================
            FACULTY
            ALL 16 MEMBERS
        ================================================= */}

        <TeachersSection
          onSelect={openProfile}
        />

        {/* =================================================
            FINAL HOME QUOTE
        ================================================= */}

        <section className="quote-section reveal">
          <div className="quote-mark">
            “
          </div>

          <p>
            Because the best teachers don't
            just teach us what to learn —
            they teach us how to become.
          </p>

          <div className="quote-name">
            WITH LOVE & GRATITUDE
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

function HeartBackground({ hearts }) {
  return (
    <div className="heart-background" aria-hidden="true">
      {hearts.map((heart) => (
        <span
          className="background-heart"
          key={heart.id}
          style={{
            "--heart-index": heart.id,
            left: `${heart.x}%`,
            top: `${heart.y}%`,
          }}
        >
          &#9829;
        </span>
      ))}
    </div>
  );
}

function CursorHearts() {
  const [hearts, setHearts] = useState([]);
  const nextHeartId = useRef(0);
  const lastSpawnAt = useRef(0);

  useEffect(() => {
    const handlePointerMove = (event) => {
      if (event.pointerType === "touch") return;

      const now = Date.now();
      if (now - lastSpawnAt.current < 70) return;

      lastSpawnAt.current = now;
      const heartId = nextHeartId.current++;

      setHearts((currentHearts) => [
        ...currentHearts.slice(-11),
        {
          id: heartId,
          x: event.clientX,
          y: event.clientY,
          size: 14 + (heartId % 4) * 3,
        },
      ]);

      window.setTimeout(() => {
        setHearts((currentHearts) =>
          currentHearts.filter((heart) => heart.id !== heartId)
        );
      }, 900);
    };

    document.addEventListener("pointermove", handlePointerMove);
    return () => {
      document.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <div className="cursor-hearts" aria-hidden="true">
      {hearts.map((heart) => (
        <span
          className="cursor-heart"
          key={heart.id}
          style={{
            left: heart.x,
            top: heart.y,
            fontSize: heart.size,
          }}
        >
          &#9829;
        </span>
      ))}
    </div>
  );
}

function ShootingStar() {
  const [star, setStar] = useState(null);
  const [wishVisible, setWishVisible] = useState(false);
  const nextStarId = useRef(0);

  useEffect(() => {
    let spawnTimer;

    const scheduleStar = () => {
      spawnTimer = window.setTimeout(() => {
        const starId = nextStarId.current++;
        setStar({
          id: starId,
          left: 8 + Math.random() * 78,
          top: 10 + Math.random() * 58,
        });

        window.setTimeout(() => {
          setStar((currentStar) =>
            currentStar?.id === starId ? null : currentStar
          );
        }, 2400);

        scheduleStar();
      }, 4500 + Math.random() * 6500);
    };

    scheduleStar();
    return () => window.clearTimeout(spawnTimer);
  }, []);

  const makeWish = () => {
    setWishVisible(true);
    window.setTimeout(() => setWishVisible(false), 2600);
  };

  return (
    <>
      <div className="shooting-star-layer" aria-hidden={!star}>
        {star && (
          <button
            className="shooting-star"
            style={{ left: `${star.left}%`, top: `${star.top}%` }}
            aria-label="Make a wish for your teachers"
            onClick={makeWish}
          >
            <span className="shooting-star-tail" />
            <span className="shooting-star-head">✦</span>
          </button>
        )}
      </div>

      {wishVisible && (
        <div className="wish-message" role="status">
          Make a wish for your teachers ❤️
        </div>
      )}
    </>
  );
}

function GlassOrb() {
  const appreciationMessages = [
    "Someone is smiling because you taught them.",
    "Your patience became someone's confidence.",
    "A lesson from you is still lighting the way.",
    "You helped someone believe in their own future.",
    "Your kindness is part of someone's best memory.",
  ];
  const [message, setMessage] = useState("");
  const [lastMessageIndex, setLastMessageIndex] = useState(-1);

  const revealMessage = () => {
    let messageIndex = Math.floor(
      Math.random() * appreciationMessages.length
    );

    if (appreciationMessages.length > 1 && messageIndex === lastMessageIndex) {
      messageIndex = (messageIndex + 1) % appreciationMessages.length;
    }

    setLastMessageIndex(messageIndex);
    setMessage(appreciationMessages[messageIndex]);
  };

  return (
    <>
      <button
        className="glass-orb"
        onClick={revealMessage}
        aria-label="Reveal a teacher appreciation message"
      >
        <span />
      </button>

      {message && (
        <div className="orb-message" role="status">
          {message}
        </div>
      )}
    </>
  );
}

function DontClickButton() {
  const [burst, setBurst] = useState([]);
  const [message, setMessage] = useState("");
  const burstId = useRef(0);
  const timers = useRef([]);

  useEffect(() => {
    return () => {
      timers.current.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  const triggerWarning = () => {
    const nextBurstId = burstId.current++;
    const nextBurst = Array.from({ length: 16 }, (_, index) => ({
      id: `${nextBurstId}-${index}`,
      x: (Math.random() - 0.5) * 180,
      y: (Math.random() - 0.5) * 170 - 20,
      rotate: (Math.random() - 0.5) * 80,
      delay: Math.random() * 120,
      size: 15 + Math.random() * 13,
    }));

    timers.current.forEach((timer) => window.clearTimeout(timer));
    setBurst(nextBurst);
    setMessage("You were warned 😂❤️");
    document.body.classList.remove("screen-shake");
    void document.body.offsetWidth;
    document.body.classList.add("screen-shake");

    timers.current.push(
      window.setTimeout(() => {
        setBurst([]);
        setMessage("Secret message: your teachers made the future feel possible. ❤️");
      }, 900),
      window.setTimeout(() => {
        document.body.classList.remove("screen-shake");
      }, 560),
    );
  };

  return (
    <>
      <button
        className="dont-click-button"
        onClick={triggerWarning}
        aria-label="Don't click this button"
      >
        <span aria-hidden="true">⚠️</span>
        DON'T CLICK
      </button>

      <div className="dont-click-burst" aria-hidden="true">
        {burst.map((heart) => (
          <span
            className="burst-heart"
            key={heart.id}
            style={{
              "--burst-x": `${heart.x}px`,
              "--burst-y": `${heart.y}px`,
              "--burst-rotate": `${heart.rotate}deg`,
              "--burst-delay": `${heart.delay}ms`,
              fontSize: `${heart.size}px`,
            }}
          >
            ♥
          </span>
        ))}
      </div>

      {message && (
        <div className="dont-click-message" role="status">
          {message}
        </div>
      )}
    </>
  );
}

function MemoryClock() {
  return (
    <section className="memory-clock-section">
      <div className="memory-clock" aria-hidden="true">
        <span className="clock-number clock-number-12">12</span>
        <span className="clock-number clock-number-6">6</span>
        <span className="clock-number clock-number-9">9</span>
        <span className="clock-number clock-number-3">3</span>
        <span className="clock-hand" />
        <span className="clock-center" />
      </div>

      <p>Years pass. Lessons remain.</p>
    </section>
  );
}

function StoryCurtains({ onStart }) {
  const [isOpening, setIsOpening] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  const startStory = () => {
    if (isOpening) return;

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
    setIsOpening(true);
    window.setTimeout(onStart, 900);
  };

  return (
    <div
      className={`story-curtains${
        isOpening ? " is-opening" : ""
      }`}
    >
      <div className="story-curtain story-curtain-left" />
      <div className="story-curtain story-curtain-right" />

      <div className="story-curtain-content">
        <div className="story-curtain-kicker">
          A TRIBUTE TO THE ONES WHO GUIDED US
        </div>
        <h2>Our story begins with you.</h2>
        <button
          className="story-start-button"
          onClick={startStory}
          disabled={isOpening}
        >
          Start Our Story
          <ArrowDown size={17} />
        </button>
      </div>
    </div>
  );
}

/* =========================================================
   RENDER
========================================================= */

createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);