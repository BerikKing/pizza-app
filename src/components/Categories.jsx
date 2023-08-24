import React from 'react';

const Categories = () => {
    const [activeIndex, setActiveIndex] = React.useState(0)

    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

    const clickCategory = (i) => {
        setActiveIndex(i)
    }
    return (
        <div className="categories">

        

            <ul>
            {
                categories.map((value,i)=>(
                    <li onClick={()=> clickCategory(i)} className={activeIndex=== i ? "active": ""}>{value}</li>
                ))
            }
                {/* <li onClick={()=> clickCategory(0)} className={activeIndex=== 0 ? "active": ""}>Все</li> */}
               
            </ul>
        </div>
    );
};

export default Categories;



