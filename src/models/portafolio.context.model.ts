import { DataModel } from "./data.model";

export interface PortafolioContextModel {
    isLoading: boolean;
    setIsLoading: (loading: boolean) => void;
    data: DataModel | null;
    setData: (data: DataModel) => void;
    language: string;
    setLanguage: (languaje: string) => void;
    sectionSelected: string;
    setSectionSelected: (section: string) => void;
}