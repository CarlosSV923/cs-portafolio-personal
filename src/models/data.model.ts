export interface DataModel {
    general: General;
    contact: Contact;
    about: About;
    education: ExperienceModel[];
    experience: ExperienceModel[];
    skills: Skills;
    projects: Project[];
    more: More[];
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
    institution?: string;
    title?: string;
    degree?: string;

    dateFrom: string;
    dateTo: string;
    achievements?: string | string[];
    logo?: string;
    url?: string;
    location?: string;
    mode?: string;
    attitudes?: TechAttitude[];

    time?: string;
    company?: string;
    position?: string;
}

export interface TechAttitude {
    name: string;
    logo?: string;
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
    tech: SkillType[];
    soft: SkillType[];
}

export interface SkillType {
    name: string;
    percentage: number;
}

export interface Project {
    name: string;
    owner: string;
    type: string;
    typeOwner: string;
    backgroundPicture?: string;
    description?: string;
    repositoryUrl?: string;
    companyUrl?: string;
    technologies?: TechAttitude[];
}

export interface More {
    name: string;
    description: string;
    image?: string;
}

