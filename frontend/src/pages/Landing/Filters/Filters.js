import React, { useState } from "react";
import FilterText from "./FilterText";
import "./filter.css"
export default function Filters() {
  const Datas = {
    para: [
      "AI-first UCaaS for team collaboration lets you work together without friction using Meetings, Chat, Docs, and more, all built into Zoom Workplace.",
      "Solve customer issues faster and deliver a seamless experience across every channel with AI-first contact center and CX solutions.",
      "Drive growth for your business with Zoom webinars and virtual events for demand generation — built to engage audiences and deliver results.",
      "Equip your team with Zoom sales enablement tools with AI insights so they can focus on customers, accelerate deals, and grow revenue.",
      "Strengthen culture and hybrid workforce engagement across teams with Zoom Workplace.",
    ],

    Ul: {
      first: [
        "Unify how teams connect:",
        "Consolidate your tools:",
        "Support hybrid and remote work:",
        "Keep workflows moving:",
       
      ],
      second: [
        "Resolve inquiries efficiently",
        "Automate complex interactions:",
        "Boost self-service and loyalty:",
        "Help agents focus on what matters:",
        "Turn data into action:",
      ],
      third: [
        "Keep audiences engaged:",
        "Deliver stand-out experiences:",
        "Fuel smarter campaigns:",
        "Put busywork on auto-pilot with AI:",
      ],
      fourth: [
        "Make selling easier:",
        "Boost productivity and win rates:",
        "Give RevOps deeper visibility: ",
        "Close with confidence:",
      ],
      fifth: [
        "Foster community in hybrid teams:",
        "Create immersive experiences:",
        "Communicate on your schedule:",
        "Reinforce culture and recognition:",
      ],
    },
    P: {
      first: [
        "Meetings, Phone, Chat, and more are all in one UCaaS platform, so communication feels seamless.",
        "Replace scattered apps with an all-in-one solution that saves time, reduces costs, and keeps work in sync.",
        "Keep even global teams engaged with reliable video conferencing, persistent chat, shared docs, and more.",
        "From brainstorms to docs to quick check-ins, Zoom helps teams cut friction and avoid projects stalling.",
        
      ],
      second: [
        "Phone, chat, email, SMS, social, and video flow into one platform for full context.",
        "Virtual Agent handles multi-intent questions, so human agents can focus on high-value cases.",
        "Instant answers and proactive resolutions reduce friction and improve satisfaction.",
        "AI highlights key actions, suggests responses, and streamlines repetitive tasks.",
        "Integrated CRM, real-time analytics, and conversation insights help teams spot trends and improve CX.",
      ],
      third: [
        "Capture leads and build pipeline with branded webinars and events that generate long-lasting demand.",
        "Host polished, interactive events that reflect your brand and leave a lasting impression on customers.",
        "Extend every event with virtual and hybrid options, giving you a broader reach and richer insights.",
        "Automate content, personalize outreach, and analyze performance faster.",
      ],
      fourth: [
        "Eliminate admin work like note-taking and CRM updates so reps can spend more time building relationships.",
        "Auto-summarized meetings, suggested follow-ups, and deal insights keep cycles short.",
        "See pipeline insights and competitor trends to forecast and prospect with confidence.",
        "Agentic AI flags risks, coaches reps, and automates next steps, keeping work moving forward.",
      ],
      fifth: [
        "Get company-wide updates, recognition, and social feeds that connect remote employees.",
        "Run interactive all-hands, learning sessions, and celebrations that teams look forward to.",
        "Share video announcements asynchronously, aligning teams without more meetings.",
        "Highlight employee wins, anniversaries, and initiatives with rich media and live events.",

      ],
    },
    IMG : ['img/Filter/collaboration.png','img/Filter/customer-support.png' , 'img/Filter/marketing.png' , 'img/Filter/sales.png' , 'img/Filter/employee-engagement.png']

  };



  const [choose, setChose] = useState(0);

  const SelectChoice = (e) => {
    setChose(e.target.value);
  };

  function renderContent(choosee) {
    const choice = +choosee
    switch (choice) {
      case 0:
        return (
          <FilterText
            P={Datas.para[0]}
            Ul={Datas.Ul.first}
            ELE={Datas.P.first}
            IMG={Datas.IMG[0]}
          />
        );
      case 1:
        return (
          <FilterText
            P={Datas.para[1]}
            Ul={Datas.Ul.second}
            ELE={Datas.P.second}
            IMG={Datas.IMG[1]}
          />
        );
      case 2:
        return (
          <FilterText
            P={Datas.para[2]}
            Ul={Datas.Ul.third}
            ELE={Datas.P.third}
            IMG={Datas.IMG[2]}
          />
        );
      case 3:
        return (
          <FilterText
            P={Datas.para[3]}
            Ul={Datas.Ul.fourth}
            ELE={Datas.P.fourth}
            IMG={Datas.IMG[3]}
          />
        );
      case 4:
        return (
          <FilterText
            P={Datas.para[4]}
            Ul={Datas.Ul.fifth}
            ELE={Datas.P.fifth}
            IMG={Datas.IMG[4]}
          />
        );
      default:
        return null;
    }
  }

  return (
    <div>
      <div className="filterBar row row-cols-2 row-cols-lg-auto g-3  ">
        <button className="btn col-xml-5 " value={0} onClick={SelectChoice}>
          Collaboration
        </button>
        <button className="btn col" value={1} onClick={SelectChoice}>
          Customer support
        </button>
        <button className="btn col" value={2} onClick={SelectChoice}>
          Marketing
        </button>
        <button className="btn col" value={3} onClick={SelectChoice}>
          Sales
        </button>
        <button className="btn col " id="Lastbtn" value={4} onClick={SelectChoice}>
          Employee engagement
        </button>
      </div>

      <div className="renderContent">
        {renderContent(choose)}
      </div>
    </div>
  );
}

{
  /* <FilterText P={Datas.para[0]} Ul={Datas.Ul.first} ELE={Datas.P.first}> </FilterText> */
}
