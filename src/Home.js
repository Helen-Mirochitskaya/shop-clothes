import { useState } from 'react';
import Clothes from './Clothes';
import Buttons from './Buttons';
import { data } from './data';

function Home() {

  const [clothes, setClothes] = useState(data);
  const chosenClothes = (searchTerm) => {
    const newClothes = data.filter( element => element.searchTerm === searchTerm);
    setClothes(newClothes);
  
    
 

  return (

    <div>
        <div className='cont'>
      <h2 className='back'> Free Standart Shipping </h2>
        </div>
      <Buttons filteredClothes = {chosenClothes} />
      <Clothes itemForSale= {clothes} />
    
    </div>
    
  )
  } 


}
export default Home;

