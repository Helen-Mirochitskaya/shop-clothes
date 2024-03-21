import {Link} from "react-router-dom";

function Clothes( {itemForSale} ) {

    return (

        <div className="products">
            {itemForSale.map ( (item => { 
                const {id, name, searchTerm, price, image} = item;
                
                return (
                    <div key={id} className="product-card" > 

                    <Link to={`/about/${item.title}`} >

                    <img src={image} width='400px' height='500px' />

                    </Link>

                    
                    <h3> {name} </h3>

                    <h4> $ {price} </h4>

                    

                    </div>
                )
                
              }))}
        </div>

    )
}



export default Clothes;
