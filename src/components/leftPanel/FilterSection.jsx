export const FilterSection=() =>{
    const categories=['Lapttops', 'Gaming', 'Accesories',
         'Peripherals', 'Storage',  'Components', 'Monitors', 'Printers'];
    return (
        <div>
        <div>
            {categories.map((category, index) =>{
                return <button key={index}>{category}</button>;
            })}
        </div>
        <div>
            <button>Clear Filters</button>
        </div>
      </div>
    )
}