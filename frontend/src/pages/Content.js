import React from 'react';
import cassete from '../images/about-cassete.png';
import calander from '../images/calander2.png';

function Content() {
  return (
    <>

      <div className='mainContent'>

        <section id='about'>

          <div className="flex-container">
            <div className="flex-item-left">
              <div className="p-14 mx-auto  rounded-xl  flex  space-x-4">
                <div>
                  <div className="text-xl font-medium text-white" style={{textAlign:'left',paddingBottom:'15px',fontSize:'30px'}}>ABOUT US</div>
                  <p className="text-slate-500 content1">
                    Flair fiesta is a highly anticipated college festival that features and diverse range of cultural and technical activities. 
                    The festival showcases talents from music and dance performances to fashion shows and creative writing compititions on the technical side, there are robotics challenges, coding compititions and hackthons. To satiate the hunger of visitors, there are food stalls that serve a varity of cuisines, ranging from street food to fine dining. With a perfect blend of creativity, skill, entertainment, Flair Fiesta is must-attend event for all students and young adults. 
                  </p>
                </div>
              </div>


            </div>
            <div className="flex-item-right grid items-center justify-center ">
              <img src={cassete} style={{ height: '400px', width: '400px' }} alt="Cassete.png" />
            </div>
          </div>



        </section>



        <section>

          <div className="flex-container">
            <div className="flex-item-right grid items-center justify-center  ">
            <img src={calander} style={{ height: '380px', width: '400px' }} alt="Calander.png" />
            </div>
            <div className="flex-item-left">
              <div className="p-14 mx-auto  rounded-xl  flex  space-x-4">
                <div>
                  <div className="text-xl font-medium text-white" style={{textAlign:'right',paddingBottom:'15px',fontSize:'30px'}}>Schedule</div>
                  <p className="text-slate-500 content2">

                    Mark your calanders for an exciting event! The Flair Fiesta college cultural and technical fest is set to take place on March 3rd, 4th and 5th, 2023. Get ready to experience a weekend filled with range of cultural and technical events, including music, dance, fashion shows, creative writing compititions, coding challanges and a hackthon. Information regarding the specific events will be announced soon, so stay tuned for updates, don't miss out on this opportunity to participate in this electrifying celebration of art, technology and culture!              
                     </p>
                </div>
              </div>


            </div>
          </div>

        </section>

     



        <section>

          <div>
            <h1 className="sponsor" style={{ color: 'white' }}>Sponsor Us</h1>
          </div>

          <div className="sponsornote">
            <p>Join us as a sponsor for Flair Fiesta, the annual cultural festival of IIIT Kota and <br /> reach out to a young and dynamic audience of over 2000 students</p>
          </div>

          <div className="sponsor-button transition lowbutton">
            <a className="newbutton" href="/">REGISTER</a>
          </div>

        </section>

      </div>

    </>
  )
}

export default Content