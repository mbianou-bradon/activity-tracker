import React, { useState } from "react";
import StarIcon from "../../assets/icons/star.icon";
import StarRating from "../starRating/StarRating";

export default function ActivityForm() {
  /** state management */
  const [mentorName, setMentorName] = useState<string>("");
  const [menteeName, setMenteeName] = useState<string>("");
  const [reportWeek, setReportWeek] = useState<string>("");
  const [communicationRating, setCommunicationRating] = useState<number>(0);
  const [collaborationRating, setCollaborationRating] = useState<number>(0);
  const [problemSolvingRating, setProblemSolvingRating] = useState<number>(0);
  const [projectProgressRating, setProjectProgressRating] = useState<number>(0);
  const [projectProgressDetails, setProjectProgressDetails] =
    useState<string>("");
  const [overallRating, setOverallRating] = useState<number>(0);

  return (
    <form className="py-5 w-full md:w-1/2 mx-auto flex flex-col px-2 gap-2 md:gap-4">
      <h1 className="text-2xl md:text-4xl text-white font-bold md:mb-4">
        Activity Records
      </h1>
      <div className="my-4">
        <p className="text-sm ">What is your name?</p>
        <select
          name=""
          id=""
          required
          value={mentorName}
          onChange={(e) => setMentorName(e.target.value)}
          className="bg-slate-500 text-slate-200 text-sm p-3 rounded w-full focus:border-primary-blue outline-none"
        >
          <option value="">Mbianou Bradon</option>
          <option value="">Noel Mutia</option>
          <option value="">Akum Blaise</option>
        </select>
      </div>

      <div>
        <p className="text-sm ">Which working week would you like to log</p>
        <input
          required
          type="week"
          name="week"
          id="week"
          value={reportWeek}
          onChange={(e) => setReportWeek(e.target.value)}
          className="bg-slate-500 text-slate-200 text-sm p-3 rounded w-full focus:border-primary-blue outline-none"
        />
      </div>

      <div className="my-4">
        <p className="text-sm ">What is the name of your mentee?</p>
        <select
          required
          name=""
          id=""
          value={menteeName}
          onChange={(e) => setMenteeName(e.target.value)}
          className="bg-slate-500 text-slate-200 text-sm p-3 rounded w-full focus:border-primary-blue outline-none"
        >
          <option value="">Mbianou Bradon</option>
          <option value="">Noel Mutia</option>
          <option value="">Akum Blaise</option>
        </select>
      </div>

      <div className="my-4">
        <p className="text-sm mb-2">
          Please rate your mentee communication during this week?
        </p>
        <StarRating
          value={communicationRating}
          setValue={setCommunicationRating}
        />
      </div>

      <div className="my-4">
        <p className="text-sm ">
          Please rate your mentee Collaboration skills during this week?
        </p>
        <StarRating
          value={collaborationRating}
          setValue={setCollaborationRating}
        />
      </div>

      <div className="my-4">
        <p className="text-sm ">
          Please rate your mentee Problem-solving skills during this week?
        </p>
        <StarRating
          value={problemSolvingRating}
          setValue={setProblemSolvingRating}
        />
      </div>

      <div className="my-4">
        <p className="text-sm ">
          Please rate your mentee Project related progress during this week?
        </p>
        <StarRating
          value={projectProgressRating}
          setValue={setProjectProgressRating}
        />
      </div>

      <div className="my-4">
        <p className="text-sm mb-2">
          Please Provide more details on their growth during this
          week?(technology learned, skill masters etch)
        </p>
        <textarea
          required
          name="new_technology"
          id="new_technoloy"
          placeholder="write here...."
          value={projectProgressDetails}
          onChange={(e) => setProjectProgressDetails(e.target.value)}
          rows={5}
          className="bg-slate-500 text-slate-200 text-sm p-3 rounded w-full focus:border-primary-blue outline-none"
        ></textarea>
      </div>

      <div className="my-4">
        <p className="text-sm ">
          Please rate your mentee Overall Performance during this week?
        </p>
        <StarRating value={overallRating} setValue={setOverallRating} />
      </div>

      <button className="text-base w-fit px-4 py-2 rounded-sm bg-primary-blue hover:bg-primary-blue/90 transition-all duration-200">
        Submit
      </button>
    </form>
  );
}
