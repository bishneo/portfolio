const ProfileStore = {
    About: {
        name: "Bishwarup Neogy",
        image: "res/images/profile.png",
        aboutme: "Hi again! I am a Computer Science Graduate Student studying at Northeastern University, Boston. I have 3 years of experience working as a Full Stack Developer and I would like to further enhance my skills by working on projects that utilize state of the art technologies to give life to innovative ideas and thus shape the future of our society. I am a self-motivated individual who believes in \"Learning everyday\". ",
        currStatus: "Graduate Student",
        field: "Computer Science",
        skill_desc: "I am a quick learner who enjoys working with people from different backgrounds and expertise. Having worked in an agile environment, I can collaborate with different teams and quickly pick up new skills and adapt to changes on the fly.",
        quote: "If you can't explain it to a six year old, you don't understand it yourself."
    },

    Details: {
        education: [
            {
                uId: 1,
                uniName: "Northeastern University",
                major: "Computer Science",
                img: "res/images/NEUlogo.png",
                url: "https://www.khoury.northeastern.edu/program/computer-science-ms/",
                degree: "Master's",
                start: "Sep 2018",
                end: "Dec 2020",
                courses: "Programming Design Patterns, Foundations of Artificial Intelligence, Algorithm, Robotic Systems and Sciences"

            },
            {
                uId: 2,
                uniName: "National Institute of Technology, Warangal",
                major: "Electronics and Communication Engineering",
                img: "res/images/NITWlogo.png",
                url: "https://www.nitw.ac.in/",
                degree: "Bachelor's",
                start: "Sept 2011",
                end: "May 2015",
                courses: "Data Structures, Computer Architecture, Object Oriented Programming, Computer Networks"
            }
        ],

        experience: [
            {
                eId: 1,
                empName: "Nokia",
                jobRole: "Senior Engineer",
                img: "",
                url: "",
                start: "July 2015",
                end: "July 2018",
                desc: "Worked as a Full Stack developer and contributed to the development of a web application intended to provide customers a user friendly interface to manage optical networks.",
                bullets: [
                    { id: 1, info: "Redesigned UI of the product using JavaScript, Materialize and Dojo to improve User Experience and enhance uniformity with respect to look & feel across all components." },
                    { id: 2, info: "Built a single page application as a POC using ReactJS for a new component of a web application intended for providing an interface for users to optimize existing optical networks" },
                    { id: 3, info: "Created a bundle containing two product releases using POM and Maven to demo future releases to customers for valuable feedback" }
                ]

            }
        ],

        skills: [
            {
                id: 1, name: "Java", ratings: "90%"
            },
            {
                id: 2, name: "JavaScript", ratings: "80%"
            },
            {
                id: 3, name: "Spring Boot", ratings: "70%"
            },
            {
                id: 4, name: "React JS", ratings: "60%"
            },
            {
                id: 5, name: "MySQL", ratings: "60%"
            },
            {
                id: 6, name: "C/C++", ratings: "70%"
            },
            {
                id: 7, name: "Python", ratings: "60%"
            },
        ]
    }
}

export default ProfileStore;