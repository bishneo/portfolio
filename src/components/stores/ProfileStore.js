const ProfileStore = {
    About: {
        name: "Bishwarup Neogy",
        image: "res/images/profile.png",
        aboutme: {
            p1: "Hi again! I am a Computer Science Graduate Student studying at Northeastern University, Boston. I have 3+ years of experience working as a Full Stack Developer and have also developed a passion for AI/ML after working on various academic projects.",
            p2: "I would like to further enhance my skills by working on projects that utilize state of the art technologies to give life to innovative ideas and thus shape the future of our society. I am a self-motivated individual who believes in \"Learning everyday\". "
        },
        currStatus: "Graduate Student",
        field: "Computer Science",
        skill_desc: "I am a quick learner who enjoys working with people from different backgrounds and expertise. Having worked in an agile environment, I can collaborate with different teams and quickly pick up new skills and adapt to changes on the fly.",
        quote: {
            text: "If you can't explain it to a six year old, you don't understand it yourself.",
            author: "Albert Einstein"
        }
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
                end: "Present",
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
                empName: "Intralinks",
                jobRole: "Application Development Intern",
                img: "res/images/intralinks-logo.png",
                url: "https://www.intralinks.com/products/banking-securities",
                place: "Waltham, MA, USA",
                start: "June 2019",
                end: "Present",
                desc: "Working with front end techlonogies like React, Redux, Backbone. Also exploring use cases for AI in the Mergers & Acquisitions domain.",
                bullets: [
                    { id: 1, info: "Developed accessible React-Redux applications and integrated them into existing backbone framework." },
                    { id: 2, info: "Worked on both development and automation of features to facilitate the CI/CD process." },
                    { id: 3, info: "Enhanced user experience by developing an AI (Topic Modeling) service to recommend documents to users." }
                ]

            },
            {
                eId: 2,
                empName: "Nokia",
                jobRole: "Senior Engineer",
                img: "res/images/nokia_white_logo.png",
                url: "https://networks.nokia.com/onc/courses/optical-network-management-nfm-t",
                place: "Bangalore, India",
                start: "July 2015",
                end: "July 2018",
                desc: "Worked as a Full Stack developer and contributed to the development of a web application intended to provide customers a user friendly interface to manage optical networks.",
                bullets: [
                    { id: 1, info: "Redesigned UI of product with Materialize and Dojo to deliver an improved and uniform user experience." },
                    { id: 2, info: "Reduced turnaround time of development by refactoring existing code using Spring Boot." },
                    { id: 3, info: "Built a single page application as a POC using React, providing users an interface to optimize optical networks." }
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
                id: 4, name: "React JS", ratings: "70%"
            },
            {
                id: 5, name: "MySQL", ratings: "60%"
            },
            {
                id: 6, name: "C/C++", ratings: "70%"
            },
            {
                id: 7, name: "Python", ratings: "70%"
            },
        ]
    }
}

export default ProfileStore;