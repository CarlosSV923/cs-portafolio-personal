export interface DataModel {
    general: General;
    contact: Contact;
    about: About;
    education: ExperienceModel[];
    experience: ExperienceModel[];
    technologies: Skills[];
    skills: Skills[];
    projects: Project[];
    more: Skills[];
}

export interface About {
    description: string;
    urlCurriculum: string;
    aboutPicture: string;
}

export interface Contact {
    email: string;
    phone: string;
    address: string;
    github: string;
    linkedin: string;
}

export interface ExperienceModel {
    title: string;
    institution?: string;
    dateFrom: string;
    dateTo: string;
    description: string;
    company?: string;
}

export interface General {
    firstName: string;
    secondName: string;
    firstLastName: string;
    secondLastName: string;
    navbarPicture: string;
    avatarPicture: string;
    backgroundPicture: string;
    profession: string;
    navbarText: string;
}

export interface Skills {
    name: string;
    description: string;
}

export interface Project {
    name: string;
    description: string;
    url: string;
}

