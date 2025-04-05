export interface CustomDataType {
    customElement: string;
}

export type CardDataType = {
    title: string;
    description: string;
    price: number;
    custom: boolean;
}

export interface CalculateFinalPriceParams {
    isChecked: boolean;
    array: Array<CardDataType>;
    // finalPrice: number;
    // setFinalPrice: React.Dispatch<React.SetStateAction<number>>;
}

