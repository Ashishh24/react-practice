import {useState}  from "react";
import Dropdown from "./Dropdown";
import Nothing from "./Nothing";

const MenuAccordions = (props) => {
    const {indexx, title, itemCards} = props;
    
    console.log(itemCards);
    const [isOpen, setIsOpen] = useState(false);
    // const [index, setIndex] = useState(0);
    return (
        <div className="my-5 border-solid">
            <div className="p-3 rounded-md shadow-lg bg-gray-100">
                <div className="flex justify-between items-center cursor-pointer" onClick={()=>isOpen ? setIsOpen(false) : setIsOpen(true)}>
                    <p className="font-bold">{title+" ("+itemCards.length+")"}</p>
                    <div>
                        <p>🔽</p>
                    </div>
                </div>
                <div>
                    {/* <Dropdown key={indexx} itemCards={itemCards}/> */}
                    {isOpen && <Dropdown key={indexx} itemCards={itemCards}/>}
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