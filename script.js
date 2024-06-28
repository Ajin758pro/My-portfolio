

// Data for skills
// const skills = [
//     'JAVA', 'PHP',  'PYTHON', 'HTML', 'CSS', 'MySQL', 'FIGMA', 'GITHUB', 
// ];

// Data for projects


// Function to add skills
// function addSkills(skills) {
//     const skillsContainer = document.querySelector('#skills ul');
//     skills.forEach(skill => {
//         const skillElement = document.createElement('li');
//         skillElement.textContent = skill;
//         skillsContainer.appendChild(skillElement);
//     });
// }

const skillsData = [
    {
        category: 'Programming Languages',
        skills: [
            { name: 'Java', icon: 'img/java.png', level: 90 },
            { name: 'PHP', icon: 'img/php.png', level: 75 },
            { name: 'HTML', icon: 'img/HTML5_logo_.png', level: 95 },
            { name: 'CSS', icon: 'img/css3-logo.png', level: 90 }
        ]
    },
    {
        category: 'Frameworks and Libraries',
        skills: [
            { name: 'Bootstrap', icon: 'img/png-clipart-bootstrap-.png', level: 85 },
            { name: 'Angular', icon: 'img/Angular-logo.png', level: 30 }
        ]
    },
    {
        category: 'Tools and Technologies',
        skills: [
            { name: 'Github', icon: 'img/git.png', level: 90 },
            { name: 'MySQL', icon: 'img/-mysql-.png', level: 95 },
            { name: 'Figma', icon: 'img/figma-logo.png', level: 95 },
            { name: 'Illustrator', icon: 'img/Adobe_Illustrator_CC_icon.svg.png', level: 85 }
        ]
    },
    {
        category: 'Soft Skills',
        skills: [
            { name: 'Communication', icon: '', level:'100' },
            { name: 'Written', icon: '', level: '100' }
        ]
    }
];

function addSkills(skills) {
    const skillsContainer = document.querySelector('#skills .skills-container');
    skills.forEach(skillCategory => {
        const categoryElement = document.createElement('div');
        categoryElement.className = 'skill-category';
        categoryElement.innerHTML = `<h3>${skillCategory.category}</h3><ul></ul>`;
        
        const ulElement = categoryElement.querySelector('ul');
        
        skillCategory.skills.forEach(skill => {
            const skillElement = document.createElement('li');
            skillElement.innerHTML = `
                ${skill.icon ? `<img src="${skill.icon}" alt="${skill.name} Icon">` : ''}
                <span>${skill.name}  </span>
                <div class="progress-bar">
                    <div class="progress" style="width: ${skill.level}%;"></div>
                </div>
            `;
            ulElement.appendChild(skillElement);
        });
        
        skillsContainer.appendChild(categoryElement);
    });
}

// Call the function with the skills data
addSkills(skillsData);


const softwareProjects = [
    {
        title: 'NSS Management System',
        description: 'It is a web application which is designed to manage the NSS Unit in a college. This application is being developed using HTML, CSS, JavaScript, PHP, and MySQL.'
    },
    {
        title: 'Sports Tracker',
        description: 'It is a web application, designed for sports management in a college. The application is developed using HTML, CSS, JavaScript, PHP, and MySQL.'
    },
    {
        title: 'Indian Artforms',
        description: 'Indian Artforms is a static website built using Angular. The Indian Artforms website provides detailed descriptions of various Indian art forms.'
    },
    {
        title: 'Online Watch Store',
        description: 'The Online Watch Store is a web app where users can buy their favorite watches. It employs Angular for the frontend and Firebase for the backend, utilizing its cloud-based services like hosting, authentication, and databases.'
    }
];

const uiuxProjects = [
    {
        title: 'UI/UX Project 1',
        description: 'Home page design of a website designed using figma.',
        link: 'https://www.figma.com/proto/goC6CGk3hi7SsQxa2sSn5m/home_page?page-id=0%3A1&node-id=29-664&viewport=81%2C308%2C0.26&t=UPQlDl7w66toXP7U-1&scaling=min-zoom&content-scaling=fixed'
    },
    {
        title: 'UI/UX Project 2',
        description: 'Design of a website that I am currently doing using figma',
        link: 'https://www.figma.com/proto/0EyHmdmlXbUp5K0ccChf90/Cars-pro?page-id=0%3A1&node-id=1-3&starting-point-node-id=1%3A3&t=6sr65N0cbcp5WU5G-1'
    },
    {
        title: 'UI/UX Project 3',
        description: 'Home page and signup Design of a gyms website that designed using figma',
        link: 'https://www.figma.com/proto/FuFb1j9WgCj9HS2b4zh8Fm/project-1?page-id=0%3A1&node-id=7-119&starting-point-node-id=7%3A119&t=09gprdqqr58myPrV-1'
    }

];
function addProjects(projects, containerId) {
    const categoryContainer = document.querySelector(`#${containerId} .category-container`);
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'card';
        projectElement.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            ${project.link ? `<a href="${project.link}" target="_blank">View Project</a>` : ''}
        `;
        categoryContainer.appendChild(projectElement);
    });
}

// Add projects to the respective categories
addProjects(softwareProjects, 'software-projects');
addProjects(uiuxProjects, 'uiux-projects');

// Function to add education
function addEducation(education) {
    const educationList = document.querySelector('#about .education-list');
    education.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        educationList.appendChild(li);
    });
}

// Function to add certifications
function addCertifications(certifications) {
    const certificationsList = document.querySelector('#about .certifications-list');
    certifications.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        certificationsList.appendChild(li);
    });
}

// Example data
const education = [
    'Master of Computer Applications (MCA) - MACFAST College, Tiruvalla',
    'Bachelor of Computer Science (BSc CS) - Viswabrahmana college'
];

const certifications = [
    'DBMS Certification -National Programme on Technology Enhanced Learning(NPTEL). (2022)',
    'Certificate for successfully completing training on “Frontend Application using Angular” under Nest Digital Academy. (2023)',
    'Certificate for successfully completing one day  DevOps workshop  organized by Allianz Technology, India. (2022)',
];

// Adding data to the page
addEducation(education);
addCertifications(certifications);








document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('nav');
    let lastScrollY = window.scrollY;
    const navbarHeight = navbar.offsetHeight;

    window.addEventListener('scroll', () => {
        if (window.scrollY > lastScrollY && window.scrollY > navbarHeight) {
            // Scrolling down and not at the top
            navbar.style.transform = 'scale(0.8)';
            navbar.style.opacity = '0';
            setTimeout(() => {
                navbar.style.display = 'none';
            }, 500); // Match the transition duration
        } else if (window.scrollY <= 0) {
            // At the top of the page
            navbar.style.display = 'flex';
            setTimeout(() => {
                navbar.style.transform = 'scale(1)';
                navbar.style.opacity = '1';
            }, 10); // Slight delay to allow display to take effect
        } else if (window.scrollY < lastScrollY && window.scrollY > 0) {
            // Scrolling up but not at the top
            navbar.style.display = 'flex';
            setTimeout(() => {
                navbar.style.transform = 'scale(1)';
                navbar.style.opacity = '1';
            }, 10); // Slight delay to allow display to take effect
        }
        lastScrollY = window.scrollY;
    });

    // Ensure the About section is not hidden behind the navbar
    const aboutSection = document.querySelector('#about');
    aboutSection.style.paddingTop = `${navbarHeight}px`;
});






document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.querySelector('#about');
    const aboutContainer = document.querySelector('.about-container');
    const aboutImg = document.querySelector('.about-container img');
    const aboutText = document.querySelector('.about-text');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        if (window.scrollY > lastScrollY) {
            // Scrolling down
            aboutImg.style.animation = 'slideOutLeft 1s forwards';
            aboutText.style.animation = 'slideOutRight 1s forwards';
        } else {
            // Scrolling up
            aboutImg.style.animation = 'slideInLeft 1s forwards';
            aboutText.style.animation = 'slideInRight 1s forwards';
        }
        lastScrollY = window.scrollY;
    });
});



