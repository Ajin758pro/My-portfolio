

// Data for skills
const skills = [
    'JAVA', 'PHP',  'PYTHON', 'HTML', 'CSS', 'MySQL', 
];

// Data for projects
const projects = [
    {
        title: ' NSS management system',
        description: 'It is on a web application called the NSS Management System, which is designed to manage the NSS Unit in a college. This application is being developed using HTML, CSS, JavaScript, PHP, and MySQL.',
        // link: '#'
    },
    {
        title: ' Sports Tracker',
        description: 'It is a web application, designed for sports management in a college. The application is developed using HTML, CSS, JavaScript, PHP, and MySQL.',
        // link: '#'
    },
    {
        title: 'Indian Artforms',
        description: 'Indian Artforms is a static website built using Angular. The Indian Artforms website provides detailed descriptions of various Indian art forms.',
       
    },
    {
        title: ' Online watch store',
        description: 'The Online Watch Store is a web app where users can buy their favorite watches. It employs Angular for the frontend and Firebase for the backend, utilizing its cloud-based services like hosting, authentication, and databases.',
        // link: '#'
    },
    
];

// Function to add skills
function addSkills(skills) {
    const skillsContainer = document.querySelector('#skills ul');
    skills.forEach(skill => {
        const skillElement = document.createElement('li');
        skillElement.textContent = skill;
        skillsContainer.appendChild(skillElement);
    });
}

// Function to add projects
function addProjects(projects) {
    const projectsContainer = document.querySelector('#projects .projects-container');
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'card';
        projectElement.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
           
        `;
        projectsContainer.appendChild(projectElement);
    });
}

// Call the functions to add skills and projects
document.addEventListener('DOMContentLoaded', () => {
    addSkills(skills);
    addProjects(projects);
});


document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.animate-on-hover');

    sections.forEach(section => {
        section.addEventListener('mouseenter', () => {
            section.classList.add('animate');
        });
        section.addEventListener('mouseleave', () => {
            section.classList.remove('animate');
        });
    });
});

