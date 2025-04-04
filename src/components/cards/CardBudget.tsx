import { QuantitySelector } from "../quantitySelector/QuantitySelector";
import  dataCustomQuantity from "../../services/Data-custom-quantity-service.json";
import { useState } from "react";

interface CardBudgetProps {
    title: string;
    description: string;
    price: number;
    custom: boolean;
}

export interface CustomDataProps {
    customElement: string;
}

export function CardBudget(
    {
    title,
    description,
    price,
    custom,
} : CardBudgetProps

) {

    const dataCustom: CustomDataProps[] = [...dataCustomQuantity];
    const [isActiveCard, setIsActiveCard] = useState<boolean>(false);
    const toggleCardState = () => {
        setIsActiveCard(() => true)
    }

    // listening if checkbox is checked
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setIsChecked(event.target.checked);
    }

    return (
        <div className="flex w-[90%] md:w-[70%] lg:w-[70%]">

            {/* Flex row for title and description */}
            <div
                onClick={toggleCardState}
                className={
                `w-full
                rounded-4xl
                flex flex-col gap-1 mb-2 mt-4
                bg-purple-100 p-2
                hover:bg-violet-200 focus:outline-2
                focus:outline-violet-500
                text-zinc-800
                shadow-blue-900
                border-fuchsia-900
                shadow-[7px_7px_0px_0px_blue-900]
                drop-shadow-lg
                border-3
                ${isChecked ?
                    "border-3 bg-violet-200" :
                    ""}`
                    }>
                    <div className="flex w-full flex-row">
                        <div className="flex flex-col
                        mr-6
                        justify-items-start">
                            <h3 className="text-lg
                            ms-2
                            mt-2
                            font-bold
                            text-blue-950">{title}</h3>

                            <p className="w-50
                            ms-2
                            mt-2
                            text-xs
                            text-gray-600
                            text-start">{description}</p>
                    </div>
                {/* Flex row for price and checkbox */}
                    <div className=" w-full
                    flex
                    items-center
                    justify-center
                    gap-1 pt-15
                    -translate-x-5
                    lg:w-[20%]
                    lg:translate-x-71
                    lg:gap-10
                    md:w-[17%]
                    md:translate-x-42
                    md:items-end">
                        <h2 className="text-lg font-bold text-blue-950 md:translate-y-1">{price}€</h2>
                        <div className="flex items-center align-middle gap-1">
                            <input className="dataCardInput"
                            type="checkbox"
                            name="addItemChx"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                            />
                            <label className="text-xs text-gray-600 max-w-xs">{isChecked ? "added!" : "add"}</label>
                        </div>
                    </div>
                        </div>
                    {/* QuantitySelectors and QuantityButtons */}
                    <div className="flex flex-col w-full">
                    {custom === true &&
                        isActiveCard && (
                            <div className="">
                                {dataCustom.map((data, index) => (
                                    <QuantitySelector
                                    key={`${data.customElement}-${index}`}
                                    customElement={data.customElement}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
            </div>
        </div>
    )
}
