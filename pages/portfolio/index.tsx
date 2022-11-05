import { NextPage } from "next";
import { useEffect, useState, useRef } from "react";
import { user, Portfolio, Work, Skills } from "../../types";
import Axios from "axios";
import { ChangeEvent } from "react";
import { Level } from "../../types";
import swal from "sweetalert";
import Swal from "sweetalert2";

import styles from "../../styles/CreatePortfolio.module.css";

const PROFILE: NextPage = () => {
  const [data, setData] = useState("");

  console.log(data);
  let random = "";
  for (let index = 0; index < 10; index++) {
    random += `${Math.floor(Math.random() * 10)}`;
    index++;
  }
  let unique = "";
  for (let index = 0; index < 10; index++) {
    unique += `${Math.floor(Math.random() * 10)}`;
    index++;
  }

  const [portfolioList, setportfolioList] = useState<user>();
  const [username, setusername] = useState<string>("");
  const [name, setname] = useState<string>("");
  const [role, setrole] = useState<string>("");
  const [about, setabout] = useState<string>("");
  const [skills, setskills] = useState<Skills[]>([]);
  const [singleSkill, setsingleSkill] = useState({
    language: "Language Name",
    level: Level.intermediate,
  });
  const [language, setlanguage] = useState<string>("");
  const [level, setlevel] = useState<any>();
  const [github_username, setgithub_username] = useState<string>("");
  const [workXP, setworkXP] = useState<Work[]>([]);
  const [singleWork, setsingleWork] = useState({
    title: "Title",
    company: "Company Name",
    description: "Brief Description",
    start: "Start Date",
    end: "End Date",
  });
  const [title, settitle] = useState<string>("");
  const [company, setcompany] = useState<string>("");
  const [description, setdescription] = useState<string>("");
  const [start, setstart] = useState<string>("");
  const [end, setend] = useState<string>("");

  const addwork = (e: any) => {
    e.preventDefault();

    if (title && company && description && start && end) {
      setsingleWork({ title, company, description, start, end });
      setworkXP([...workXP, singleWork]);
      swal({
        title: "Good job!",
        text: "You have added work experience!",
        icon: "success",
      });
      settitle("");
      setcompany("");
      setdescription("");
      setstart("");
      setend("");
    }
  };

  const addskill = (e: any) => {
    e.preventDefault();
    if (level && language) {
      setsingleSkill({ language, level });
      setskills([...skills, singleSkill]);
      swal({
        title: "Good job!",
        text: "Skill successfully added!",
        icon: "success",
      });
      setlanguage("");
    }
  };

  const setjuniorLevel = () => {
    setlevel(Level.junior);
  };
  const setbeginnerLevel = () => {
    setlevel(Level.beginner);
  };
  const setintermediateLevel = () => {
    setlevel(Level.intermediate);
  };
  const setseniorLevel = () => {
    setlevel(Level.senior);
  };
  const setexpertlevel = () => {
    setlevel(Level.expert);
  };

  const createPortfolio = async () => {
    if (username && name && github_username && role) {
      const newPortfolio = {
        username,
        name,
        role,
        about,
        skills,
        github_username,
        unique_id: username + unique,
        workXP,
      };
      await Axios.post("/api/user", { newPortfolio })
        .then((res) => {
          console.log(res.data);
          Swal.fire({
            icon: "success",
            title: "Portfolio Created",
            text: "Click link to view!",
            footer: `<a href="/portfolio/${
              username + unique
            }">VISIT PORTFOLIO</a>`,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Error occured",
        text: "Please fill in all the required details!",
      });
    }
  };
  return (
    <div className={styles.container}>
      {/* <button onClick={getportfolio}>GET PORTFOLIO</button> */}
      <div className={styles.heading}>CREATE YOUR PORTFOLIO</div>
      <div className={styles.basicInfo}>
        <div className={styles.header}>BASIC INFO</div>
        <div className={styles.subtext}>
          Provide basic information about you
        </div>
        <label>Username*</label>
        <input
          type="text"
          placeholder="eg: JohnDoe123"
          className={styles.major}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setusername(e.target.value)
          }
        />{" "}
        <label>Full Name*</label>
        <input
          type="text"
          className={styles.major}
          placeholder="eg: John Doe"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setname(e.target.value)
          }
        />{" "}
        <label>Role*</label>
        <input
          type="text"
          className={styles.major}
          placeholder="eg: Software Engineer"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setrole(e.target.value)
          }
        />{" "}
        <label>Github Username*</label>
        <input
          type="text"
          className={styles.major}
          placeholder="eg: johndoe"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setgithub_username(e.target.value);
          }}
        />
        <label>About*</label>
        <input
          type="text"
          className={styles.about}
          placeholder="Share something about you"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setabout(e.target.value)
          }
        />
      </div>
      <div className={styles.work}>
        <div className={styles.header}>EXPERIENCE</div>
        <div className={styles.subtext}>
          Add your professional history so others know you’ve put your skills to
          good use.
        </div>
        <input
          type="text"
          className={styles.workInput}
          placeholder="Title"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            settitle(e.target.value);
          }}
          value={title}
        />{" "}
        <input
          type="text"
          className={styles.workInput}
          placeholder="Company Name"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setcompany(e.target.value);
          }}
          value={company}
        />{" "}
        <input
          type="text"
          placeholder="Description"
          className={styles.about}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setdescription(e.target.value);
          }}
          value={description}
        />{" "}
        <div className={styles.dateContainer}>
          <div>
            <label className={styles.dateLabel}>Start Date</label>
            <input
              type="text"
              placeholder="eg: (November 2020)"
              className={styles.date}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setstart(e.target.value);
              }}
              value={start}
            />{" "}
          </div>
          <div>
            <label className={styles.dateLabel}>End Date</label>
            <input
              type="text"
              placeholder="eg: (January 2022)"
              className={styles.date}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setend(e.target.value);
              }}
              value={end}
            />
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <button onClick={addwork} className={styles.button}>
            Add Work
          </button>
        </div>
      </div>
      <div className={styles.skills}>
        <div className={styles.header}>SKILLS</div>
        <div className={styles.subtext}>
          Add a list of skills you are familiar with and state your level of
          familiarity with this skills
        </div>
        <input
          type="text"
          placeholder="Language, eg: (Javascript)"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setlanguage(e.target.value);
          }}
          className={styles.major}
          value={language}
        />
        <input
          type="radio"
          onClick={setbeginnerLevel}
          id="beginner"
          value="Beginner"
          className={styles.radio}
          name="Level"
        />{" "}
        <label htmlFor="beginner" className={styles.radioLabel}>
          Beginner
        </label>
        <input
          type="radio"
          onClick={setjuniorLevel}
          id="junior"
          value="Junior"
          name="Level"
          className={styles.radio}
        />{" "}
        <label htmlFor="junior" className={styles.radioLabel}>
          Junior
        </label>
        <input
          type="radio"
          onClick={setintermediateLevel}
          id="intermediate"
          value="Intermediate"
          className={styles.radio}
          name="Level"
        />{" "}
        <label htmlFor="intermediate" className={styles.radioLabel}>
          Intermediate
        </label>
        <input
          type="radio"
          onClick={setseniorLevel}
          id="senior"
          value="Senior"
          className={styles.radio}
          name="Level"
        />{" "}
        <label htmlFor="senior" className={styles.radioLabel}>
          Senior
        </label>
        <input
          type="radio"
          onClick={setexpertlevel}
          id="expert"
          value="Expert"
          className={styles.radio}
          name="Level"
        />{" "}
        <label htmlFor="expert" className={styles.radioLabel}>
          Expert
        </label>
        <div className={styles.buttonContainer}>
          <button onClick={addskill} className={styles.button}>
            Add skill
          </button>
        </div>
        <div className={styles.createContainer}>
          <button onClick={createPortfolio}>SUBMIT</button>
        </div>
      </div>
    </div>
  );
};

export default PROFILE;
