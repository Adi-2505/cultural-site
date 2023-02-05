import { motion } from "framer-motion";
import React from "react";
import cassete from "../images/about-cassete.png";
import calander from "../images/calander2.png";

function Content() {
  return (
    <>
      <div className="mainContent">
        <section id="About">
          <div class="p-14 grid grid-rows-3 grid-flow-col gap-4 newClass" style={{ color: "white" }}>
            <div class="row-span-3 ...">
              <div className="aboutUsText">
                <div className="text-xl font-medium text-white content newClass2"
                  style={{
                    textAlign: "left",
                    paddingBottom: "15px",
                    fontSize: "30px",
                  }}
                >
                 <div className="newClass2"> ABOUT </div>
                </div>
                <p className="text-slate-500 content1">
                  Flair fiesta is a highly anticipated college festival that features and diverse range of cultural and technical activities. The festival showcases talents from music and dance performances to fashion shows and creative writing competitions on the technical side, there are robotics challenges, coding competitions, and hackathons. To satiate the hunger of visitors, there are food stalls that serve a variety of cuisines, ranging from street food to fine dining. With a perfect blend of creativity, skill, and entertainment, Flair Fiesta is a must-attend event for all students and young adults.
                </p>
              </div>
            </div>

            <div class="row-span-3 ...">
              <div className="flex-item-right grid items-center justify-center photoSmallKaro">

                <motion.img
                  animate={{ rotate: [-10, 0, 10, 0, -10] }}
                  transition={{ ease: "linear", duration: 2, repeat: Infinity }}

                  src={cassete}
                  // style={{ height: "400px", width: "400px" }}
                  alt="Cassete.png"
                />
              </div>
            </div>
          </div>

        </section>


        <section id="Schedule">

          <div class="p-14 grid grid-rows-3 grid-flow-col gap-4 newClass3" style={{ color: "white" }}>
            <div class="row-span-3 ...">
              <div className="flex-item-left grid items-center justify-center photoSmallKaro">

                <motion.img
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ stiffness: 50 }}
                  src={calander}
                  // style={{ height: "380px", width: "400px" }}
                  alt="Calander.png"
                />
              </div>
            </div>

            <div class="row-span-3 ...">
              <div className="aboutUsText">
                <div className="flex-item-right grid items-center text-xl font-medium text-white newClass2"

                  
                >
                  <div className="newClass4">SCHEDULE</div>
                </div>
                <p className="text-slate-500 content2 content1">
                  Mark your calanders for an exciting event! The Flair Fiesta
                  college cultural and technical fest is set to take place on
                  March 3rd, 4th and 5th, 2023. Get ready to experience a
                  weekend filled with range of cultural and technical events,
                  including music, dance, fashion shows, creative writing
                  compititions, coding challanges and a hackthon. Information
                  regarding the specific events will be announced soon, so
                  stay tuned for updates, don't miss out on this opportunity
                  to participate in this electrifying celebration of art,
                  technology and culture!
                </p>
              </div>
            </div>


          </div>



        </section>

        <section id="Sponsor">
          <div>
            <h1 className="sponsor" style={{ color: "white" }}>
              Sponsor Us
            </h1>
          </div>

          <div className="sponsornote">
            <p className="sponsornote2">
              Join us as a sponsor for Flair Fiesta, the annual cultural
              festival of IIIT Kota and <br /> reach out to a young and dynamic
              audience of over 10000+ foot fall
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ stiffness: 50 }}
            className="sponsor-button transition lowbutton"
          >
            <a className="newbutton" href="https://forms.gle/MbANvMWjVBxmaQcYA"
              target="__blank">
              Sponsor
            </a>
          </motion.div>
        </section>
      </div>
    </>
  );
}

export default Content;
