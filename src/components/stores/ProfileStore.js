const ProfileStore = {
    About: {
        name: "Bishwarup Neogy",
        image: "res/images/profile.png",
        aboutme: "Sit dolore sint proident deserunt eiusmod non do laborum cupidatat enim. Qui amet ex culpa voluptate consectetur pariatur. Laboris pariatur proident veniam laborum anim occaecat culpa magna laboris pariatur. Quis elit quis consectetur nostrud eiusmod occaecat ea do minim irure tempor minim. Nostrud dolore occaecat pariatur ex exercitation ad duis. Aliquip veniam quis fugiat dolor ex deserunt commodo magna. Pariatur labore anim irure quis nisi ullamco aute.",
        currStatus: "Graduate Student",
        field: "Computer Science"
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
                desc: "Worked as a Full Stack developer and contributed to the development of a web application intended to provide customers a user friendly interface to manage optical networks."
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
            }
        ]
    }
}

export default ProfileStore;