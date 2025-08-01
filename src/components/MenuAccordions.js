import {useState}  from "react";
import Dropdown from "./Dropdown";

const MenuAccordions = (props) => {
    const {title, itemCards, showItems, setShowIndex} = props;
    
    const index = 0
    const handleClick = () => {
        setShowIndex();
    }

    return (
        <div className="my-5 border-solid">
            <div className="p-3 rounded-md shadow-lg bg-gray-100">
                <div className="flex justify-between items-center cursor-pointer" onClick={handleClick}>
                    <p className="font-bold">{title+" ("+itemCards.length+")"}</p>
                    <div>
                        <p>🔽</p>
                    </div>
                </div>
                <div>
                    {showItems && <Dropdown key={index} itemCards={itemCards}/>}
                </div>
            </div>
        </div>
    );
};

export default MenuAccordions;

{/* 
    import { Accordion, AccordionItem } from "@szhsin/react-accordion";

    <Accordion>
        <div className="menu-card mt-5 w-[100%] p-2.5 border border-solid border-[#ccc]">
            <AccordionItem header={title}>
                <div>
                    {itemCards?.map((item) => {
                        return <MenuCard key={item?.card?.info?.id} itemData={item?.card?.info}/>
                    })}
                </div>
            </AccordionItem>
        </div>
    </Accordion> 
*/}