import MenuCard from "./MenuCard";

const Dropdown = (props) => {
    const {itemCards} = props;
    return (
        <div>
            {itemCards.map((item) => {
                return <MenuCard key={item?.card?.info?.id} itemData={item?.card?.info} />
            })}
        </div>
    )
};

export default Dropdown;