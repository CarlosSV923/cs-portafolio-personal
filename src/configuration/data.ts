export const data = [
    {
        language: "es",
        data: {
            "general": {
                "firstName": "Carlos",
                "secondName": "Anthony",
                "firstLastName": "Sesme",
                "secondLastName": "Vera",
                "navbarPicture": "/portafolio_pictures/navbar_picture.jpg",
                "avatarPicture": "/portafolio_pictures/avatar_picture.jpg",
                "backgroundPicture": "/portafolio_pictures/background_picture.jpg",
                "profession": "Desarrollador de Software",
                "navbarText": "CS"
            },
            "contact": {
                "email": "carlossesme31@gmail.com",
                "phone": "+593978923491",
                "address": "Guayaquil, Ecuador",
                "github": "https://github.com/CarlosSV923",
                "linkedin": "https://www.linkedin.com/in/carlos-sesme-vera-342769172/",
            },
            "about": {
                "aboutPicture": "/portafolio_pictures/about_picture.jpg",
                "description": "Ingeniero de Software con cuatro años de experiencia profesional, competente y apasionado por la tecnología. Mi formación sólida académica se complementa con un aprendizaje continuo de las últimas tendencias tecnológicas. Cuento con amplia experiencia en desarrollo web, diseño de sistemas y gestión de proyectos. Poseo una destacada capacidad para resolver problemas tecnológicos, proponiendo soluciones innovadoras, robustas y escalables. Mis habilidades en comunicación, trabajo en equipo y responsabilidad me permiten colaborar eficazmente en entornos laborales dinámicos y desafiantes.",
                "urlCurriculum": "files/cv.pdf",
            },
            "education": [
                {
                    "title": "Título de Primaria",
                    "degree": "Básica",
                    "institution": "Escuela Fiscal Dr. Carlos Cevallos Menéndez",
                    "dateFrom": "2003",
                    "dateTo": "2009",
                    "location": "Guayaquil, Ecuador",
                    "mode": "Presencial",
                    // "url": "https://www.udemy.com/certificate/UC-570e3d7c-cf96-4263-81d9-a907bf2509f9/"
                }, {
                    "title": "Título de Secundaria",
                    "degree": "Bachiller General en Ciencias",
                    "institution": "Colegio Experimental Vicente Rocafuerte",
                    "dateFrom": "2009",
                    "dateTo": "2015",
                    "location": "Guayaquil, Ecuador",
                    "mode": "Presencial",
                    // "url": "https://www.udemy.com/certificate/UC-570e3d7c-cf96-4263-81d9-a907bf2509f9/",
                    // "achievements": [
                    //     "Logro 1",
                    //     "Logro 2",
                    //     "Logro 3"
                    // ]
                }, {
                    "title": "Título Universitario",
                    "degree": "Ing. en Ciencias Computacionales",
                    "institution": "Escuela Superior Politécnica del Litoral - ESPOL",
                    "dateFrom": "2015",
                    "dateTo": "2021",
                    "location": "Guayaquil, Ecuador",
                    "mode": "Presencial",
                    // "achievements": "Logrooooooooooooooooooooooooooooooo"
                }
            ],
            "experience": [
                {
                    position: "Ayudante de Laboratorio de Computación",
                    "company": "Escuela Superior Politécnica del Litoral - ESPOL",
                    "dateFrom": "05/2018",
                    "dateTo": "10/2018",
                    "achievements": [
                        "Ayuda en la administración de laboratorios de computación.",
                        "Realización el mantenimiento básico de los equipos computacionales.",
                        "Supervisión el acceso a los recursos tecnológicos de la institución.",
                    ],
                    attitudes: [
                        "Mantenimiento informático.",
                        "Mantenimiento y reparaciones",
                        "Hardware",
                    ],
                    mode: "Presencial",
                    location: "Guayaquil, Ecuador",
                    time: "Contrato temporal",
                },
                {
                    position: "Pasante de Desarrollo de Software",
                    "company": "BlackBoxEc",
                    "dateFrom": "06/2019",
                    "dateTo": "12/2019",
                    "achievements": [
                        "Desarrollo Web de un sistema de control para registro de llegada de paquetes por Courier.",
                        "Mejoras y correcciones en aplicaciones móviles.",
                        "Mejoras y correcciones en aplicaciones web utilizando tecnologías ASP.NET",
                        "Desarrollo de aplicación de escritorio para procesamiento de documentos Excel.",
                    ],
                    attitudes: [
                        "Java",
                        "AngularJS",
                        "PostgreSQL",
                        "ASP.NET",
                        "SQL Server",
                        ".NET Core"
                    ],
                    mode: "Presencial",
                    location: "Guayaquil, Ecuador",
                    time: "Contrato de prácticas",
                },
                {
                    position: "Ayudante de Docencia en Base de Datos",
                    "company": "Escuela Superior Politécnica del Litoral - ESPOL",
                    "dateFrom": "05/2019",
                    "dateTo": "10/2019",
                    achievements: [
                        "Revisión de talleres y tareas asignadas a los estudiantes.",
                        "Impartir clases de ayuda y ejercicios prácticos.",
                        "Proporcionar retroalimentación a los estudiantes.",
                    ],
                    attitudes: [
                        "SQL",
                        "Docencia"
                    ],
                    mode: "Presencial",
                    location: "Guayaquil, Ecuador",
                    time: "Contrato temporal",
                },
                {
                    position: "Full Stack Developer",
                    "company": "Contifico S.A.",
                    "dateFrom": "06/2020",
                    "dateTo": "09/2020",
                    "achievements": [
                        "Mantenimiento de aplicación web, corrigiendo errores y agregando nuevas funcionalidades.",
                        "Gestión de la base de datos MySQL utilizada por la aplicación web.",
                    ],
                    attitudes: [
                        "Python",
                        "Django",
                        "MySQL",
                        "Javascript",
                        "HTML",
                    ],
                    mode: "Remoto",
                    location: "Guayaquil, Ecuador",
                    time: "Jornada Completa",
                },
                {
                    position: "Sr. Full Stack Developer",
                    "company": "SIIGO S.A.",
                    "dateFrom": "09/2020",
                    "dateTo": "Actualidad",
                    "achievements": [
                        "Implementación de microservicios usando node.js y C#.",
                        "Desarrollo web intuitivo usando Reactjs.",
                        "Implementación de consumidores y productores Kafka en microservicios.",
                        "Administración de bases de datos NoSQL utilizando MongoDB.",
                        "Implementación de servicios GraphQL en microservicios Node.js.",
                    ],
                    attitudes: [
                        "Typescript",
                        "Reactjs",
                        "Nodejs",
                        "NestJS",
                        "MongoDB",
                        "Kafka",
                        "Docker",
                        "C#",
                        ".NET Core",
                        "Azure Functions",
                        "GraphQL"
                    ],
                    mode: "Remoto",
                    location: "Colombia",
                    time: "Jornada Completa",
                }
            ],
            "technologies": [
                {
                    "name": "",
                    "description": ""
                }
            ],
            "skills": [
                {
                    "name": "",
                    "description": ""
                }
            ],
            "projects": [
                {
                    "name": "",
                    "description": "",
                    "url": ""
                }
            ],
            "more": [
                {
                    "name": "",
                    "description": ""
                }
            ]
        }
    },
    {
        language: "en",
        data: {
            "general": {
                "firstName": "Carlos",
                "secondName": "Anthony",
                "firstLastName": "Sesme",
                "secondLastName": "Vera",
                "navbarPicture": "portafolio_pictures/navbar_picture.jpg",
                "avatarPicture": "portafolio_pictures/avatar_picture.jpg",
                "backgroundPicture": "portafolio_pictures/background_picture.jpg",
                "profession": "Software Developer",
                "navbarText": "CS"
            },
            "contact": {
                "email": "carlossesme31@gmail.com",
                "phone": "+593978923491",
                "address": "Guayaquil, Ecuador",
                "github": "https://github.com/CarlosSV923",
                "linkedin": "https://www.linkedin.com/in/carlos-sesme-vera-342769172/",
            },
            "about": {
                "aboutPicture": "portafolio_pictures/about_picture.jpg",
                "description": "",
                "urlCurriculum": "files/cv.pdf",
            },
            "education": [
                {
                    "title": "",
                    "institution": "",
                    "dateFrom": "",
                    "dateTo": "",
                    "description": ""
                }
            ],
            "experience": [
                {
                    "title": "",
                    "company": "",
                    "dateFrom": "",
                    "dateTo": "",
                    "description": ""
                }
            ],
            "technologies": [
                {
                    "name": "",
                    "description": ""
                }
            ],
            "skills": [
                {
                    "name": "",
                    "description": ""
                }
            ],
            "projects": [
                {
                    "name": "",
                    "description": "",
                    "url": ""
                }
            ],
            "more": [
                {
                    "name": "",
                    "description": ""
                }
            ]
        }
    }
]