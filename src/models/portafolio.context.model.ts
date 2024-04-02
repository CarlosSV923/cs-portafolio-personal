import { DataModel } from "./data.model";
import { TranslationModel } from "./translations.model";

export interface PortafolioContextModel {
    data: DataModel;
    setData: (data: DataModel) => void;
    translations: TranslationModel;
    setTranslations: (translations: TranslationModel) => void;
    language: string;
    setLanguage: (languaje: string) => void;
    sectionSelected: string;
    setSectionSelected: (section: string) => void;
}