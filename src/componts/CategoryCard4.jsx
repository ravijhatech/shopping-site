import React from 'react'
import { productData } from '../data'


function CategoryCard4() {

    return (
        <div>
            <h2 style={{fontSize:"clamp(14px , 3vw , 24px)",marginLeft:'clamp(70px , 40px , 24px)',fontWeight:'bold'}}>Appliance for Cool Summer </h2>
        
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '20px',
                justifyContent: 'center',
                padding: '20px'
            }}>
            
            {
                productData.map((item, index) => (
                    <div key={index} style={{
                        marginTop:'20px',
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        width: '180px',
                        // height:'150px',
                        padding: '16px',
                        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                        textAlign: 'center'
                    }}>
                    <img
                            src={item.image}
                            alt={"product.title"}
                            style={{ height: '150px', objectFit: 'cover', marginBottom: '10px' }}
                        />
                        <br/>
                     <h4 style={{ fontSize: '16px', height: '40px', overflow: 'hidden' }}>{item.title}</h4>
                    
                    

                 
                    
                </div>
                )
                )
            }

        </div>
        </div>
       
       
    )
}

export default CategoryCard4
