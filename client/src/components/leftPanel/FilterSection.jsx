export const FilterSection=() =>{
    const categories=['Laptops', 'Gaming', 'Accesories',
         'Peripherals', 'Storage',  'Components', 'Monitors', 'Printers'];
    return (
        <div>
        <div>
            {categories.map((category, index) =>{
                return <button key={index} className="bg-gray-200
                 hover:bg-gray-300
                 text-gray-800 font-semibold py-2 px-2 rounded mr-2">{category}</button>;
            })}
        </div>
        <div>
            <button className="bg-gray-400 hover:bg-gray-500
             text-white font-bold py-2 px-4 rounded">Clear Filters</button>
        </div>
      </div>
    )
}






