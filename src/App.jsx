import './App.css';


function App() {
  return (
    <div className="w-full flex flex-col gap-[160px]">
      <div className="bg-[#FFF2E1]">
        <nav className="py-[60px] ">
          <div className='container mx-auto flex justify-between'>
            <a href="#" className='flex items-center relative z-20'>
              <div className='bg-[#65DAFF] w-[52px] h-[52px] rounded-md rotate-45 absolute z-[-1] top-[6px] left-[-8px]'></div>
              <p className='text-[#113C49] font-bold text-[32px]'>Skilline</p>
            </a>
            <div className='flex items-center gap-20'>
              <div className='flex gap-20 items-center text-[#252641] text-[22px]'>
                <a href="#" className='py-1.5'>Home</a>
                <a href="#" className='py-1.5'>Careers</a>
                <a href="#" className='py-1.5'>Blog</a>
                <a href="#" className='py-1.5'>About Us</a>
              </div>
              <div className='flex gap-[34px] items-center'>
                <button className='text-[#6C6C6C] text-[22px] rounded-[80px] bg-white py-3.5 px-[50px] shadow-[0px_20px_24px_0px_rgba(0,0,0,0.03)]'>Login</button>
                <button className='text-white text-[22px] font-medium rounded-[80px] bg-[#F48C06]  py-3.5 px-[50px]'>Sign Us</button>
              </div>
            </div>
          </div>
        </nav>
        <div className='container w-max mx-auto flex flex-col px-[93px]'>
          <div className='flex flex-col md:flex-row items-center '>
            <div className='md:w-[680px]'>
              <div className='text-5xl md:text-auto font-bold w-full md:w-auto'>
                <p className='text-[#2F327D]'>
                  <span className='text-[#F48C06]'>Studying</span> Online is now much easier
                </p>
              </div>
              <div className='text-xl md:text-2xl w-full md:w-[523px] mt-6 flex flex-col'>
                <p>Skilline is an interesting platform that will teach you in more an interactive way</p>
              </div>
              <div className='mt-9 flex flex-row'>
                <button className='text-white text-lg md:text-[22px] font-medium rounded-[80px] bg-[#F48C06] py-3.5 px-8 md:px-[50px] hover:bg-[#e07f05] transition-colors'>
                  Join for free
                </button>
                <button className="w-[300px] h-[60px] bg-white rounded-full flex items-center justify-center gap-4 border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[16px] border-b-[#23BDEE]"
                      style={{ transform: 'rotate(90deg)' }}
                    ></div>
                  </div>
                  <p className="text-[#252641] font-medium">Watch how it works</p>
                </button>
              </div>
            </div>
            <div className='md:w-auto'>
              <img
                src="/12.png" className="max-w-[814px] object-cover"
              />
            </div>
          </div>
        </div>

      </div>

      <div className="container w-max mx-auto flex center flex-col">
        <div><p className="flex justify-center w-auto text-[#696984] text-[28px] font-medium">Trusted by 5,000+ Companies Worldwide</p></div>
        <div className="w-full max-w-[1920px] mx-auto h-auto flex flex-wrap justify-center items-center gap-8 px-4 py-6">
          <img src='./google.png' className="h-12 w-auto object-contain" alt="Google" />
          <img src='./netflix.png' className="h-12 w-auto object-contain" alt="Netflix" />
          <img src='./amazon.png' className="h-12 w-auto object-contain" alt="Amazon" />
          <img src='./grab.png' className="h-12 w-auto object-contain" alt="Grab" />
          <img src='./facebook.png' className="h-12 w-auto object-contain" alt="Facebook" />
          <img src='./airbnb.png' className="h-12 w-auto object-contain" alt="Airbnb" />
        </div>
      </div>

      <div>
        <div className='container mx-auto px-[85px]'>
          <div className='pb-[80px]'>
            <p className='text-[#2F327D] text-[36px] font-bold text-center mb-[20px]'>
              What is <span className="text-[#F48C06]">Skilline?</span>
            </p>
            <p className='text-[#696984] text-[24px] text-center px-[100px] leading-[180%] tracking-[2%]'>
              Skilline is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.
            </p>
          </div>
          <div className='flex justify-between items-center gap-[100px]'>
            <div className='relative rounded-[20px] border '>
              <img src="./instructors.png" alt="" className='w-full h-full object-cover rounded-[19px] ' />
              <div className=' bg-[#171B4180] absolute inset-0 rounded-[19px] flex flex-col justify-center items-center gap-[17px]'>
                <p className='font-semibold text-[32px] text-white uppercase'>for instructors</p>
                <button className='rounded-[80px] border border-white font-medium text-[22px] py-6 px-[38px] text-white'>Start a class today</button>
              </div>
            </div>

            <div className='relative rounded-[20px] border '>
              <img src="./students.png" alt="" className='w-full h-full object-cover rounded-[19px] ' />
              <div className=' bg-[#171B4180] absolute inset-0 rounded-[19px] flex flex-col justify-center items-center gap-[17px]'>
                <p className='font-semibold text-[32px] text-white uppercase'>for students</p>
                <button className='rounded-[80px] bg-[#23BDEEE5] font-medium text-[22px] py-6 px-[38px] text-white'>Enter access code</button>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="container flex justify-center max-w-[1920px] h-[250px]">
        <div className='text-[#2F327D] text-[36px] font-bold flex justify-center flex-col '>
          <p className='flex justify-center'>
            All-In-One
            <span className="text-[#F48C06]"> Cloud Software.</span>
          </p>
          <p className='text-[22px] text-[#696984] font-normal'>Skilline is one powerful online software suite that combines all the tools needed to run a successful school or office.</p>
        </div>

      </div>
      <div className='h-[400px] flex justify-center items-center flex-col'><p className='text-[#2F327D] text-[36px] font-bold'>Our <span className='text-[#F48C06]'>Features</span></p>
        <p className='text-[#696984] font-normal text-[24px]'>
          Skilline is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.
        </p>
      </div>
      <div className='container mx-auto'><div className='gap-[160px]'>
        <div className='flex justify-center'>
          <div className='flex'><img src="public/1.png" className='w-[896px] h-[522px]' /><div className='flex justify-around flex-col'><p className='text-[#2F327D] font-semibold text-[40px]'>A <span className='text-[#F48C06]'>user interface</span> designed for the classroom</p><p className='text-[22px] text-[#696984]'>Teachers don’t get lost in the grid view and have a dedicated Podium space.
          </p><p className='text-[22px] text-[#696984]'>TA’s and presenters can be moved to the front of the class.
            </p><p className='text-[22px] text-[#696984]'>Teachers can easily see all students and class data at one time.</p></div>
          </div>
        </div >
        <div className='flex flex-row justify-center gap-[160px]'>
          <div>
            <p className='text-[#2F327D] text-[40px] font-semibold'><span className='text-[#F48C06]'>Tools</span> For Teachers And Learners</p><p className='text-[22px] text-[#696984] w-[568px]'>Class has a dynamic set of teaching tools built to be deployed and used during class.
Teachers can handout assignments in real-time for students to complete and submit.</p>
          </div>
          <img src="public/2.png" className='w-[637px] h-[611px]'/>
        </div>
        <div className='flex flex-row justify-center gap-[160px]'>
          <div><img src="public/3.png" className='w-[616px] h-[651px]' /></div><div><p className='text-[#2F327D] text-[36px] font-bold'>Assessments, Quizzes, Tests</p><p className='text-[22px] text-[#696984]'>Easily launch live assignments, quizzes, and tests.
Student results are automatically entered in the online gradebook.</p></div>
        </div>
        <div className='flex flex-row justify-center gap-[160px]'>
          <div><p className='text-[#2F327D] text-[36px] font-bold'>Class Management Tools for Educators</p><p className='text-[22px] text-[#696984]'>Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.
</p></div><img src="public/4.png" className='w-[808px] h-[559px]' />
        </div>
        <div className='flex flex-row justify-center gap-[160px]'>
          <div><img src="public/5.png" className='w-[755px] h-[499 px]' /></div><div><p className='text-[#2F327D] text-[36px] font-bold'>One-on-One Discussions</p>
          <p className='text-[22px] text-[#696984]'>Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.</p></div>
        </div>
        <div className='flex flex-row justify-center gap-[160px]'>
          <div className='gap-[20px] flex flex-col'><p className='text-[#2F327D] text-[36px] font-bold'>What They Say?</p><p className='text-[22px] text-[#696984] w-[607px]'>Skilline has got more than 100k positive ratings from our users around the world. </p><p className='text-[22px] text-[#696984] w-[573px]'>Some of the students and teachers were greatly helped by the Skilline.</p><p className='text-[22px] text-[#696984] w-[564px]'>Are you too? Please give your assessment</p>
          <button className='rounded-[80px] border border-[#F48C06] font-medium text-[22px] py-6 px-[38px]'>
            <a href='#' className='text-[22px] text-[#F48C06]'>Write your assessment</a>
          </button>
          </div><img src="public/6.png" className='w-[560px] h-[700px]' />
        </div>
      </div></div>
      <footer className='bg-[#252641] h-[593px]'><div className='gap-[154px] flex flex-col'>
        <div className='flex justify-center'><img src="./7.png" /></div>
        <div><div className='flex justify-center'><p className='text-[26px] text-[#B2B3CF]'>Subscribe to get our Newsletter</p></div>
        <div className='flex justify-center gap-5'><input type="text" className='rounded-[80px] border border-[#83839A] font-medium text-[22px] py-3.5 px-[34px] text-[#83839A]'></input><button className='rounded-[80px]  text-white font-medium text-[22px] py-3.5 px-[34px] bg-gradient-to-br from-[#545AE7] via-[#393FCF] to-[#393FCF] leading-[100%]'>Subscribe</button></div></div>
      </div><div className='flex content-end justify-center text-[#83839A] py-[104px]'><button><p className='px-2'>Careers</p></button><button><p className='px-2'>Privacy Policy</p></button><button><p className='px-2'>Terms & Conditions</p></button></div></footer>
    </div>

  );
}





export default App;
