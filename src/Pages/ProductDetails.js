import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from "../Contexts/ProductContext";
import { ChartContext } from "../Contexts/ChartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToChart } = useContext(ChartContext);
  const { product } = useContext(ProductContext);
  const ProductV = product.find((e) => e.id === parseInt(id));

  if (!ProductV) {
    return (
      <section style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        Loading...
      </section>
    );
  }

  const { title, image, price, description } = ProductV;

  return (
    <section style={{
      paddingTop: '256px',
      paddingBottom: '128px',
      height: '100vh',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '1200px',
        width: '100%',
        paddingLeft: '16px',
        paddingRight: '16px'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start'  
        }}>
          <div style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '32px'
          }}>
            <img style={{ maxWidth: '450px', width: '100%' }} src={image} alt={title} />
          </div>
          <div style={{
            flex: 1,
            textAlign: 'left',
            marginLeft: '32px'
          }}>
            <h1 style={{
              fontSize: '26px',
              fontWeight: 500,
              marginBottom: '8px',
              maxWidth: '420px'
            }}>
              {title}
            </h1>
            <div style={{
              fontSize: '20px',
              color: '#ef4444',
              fontWeight: 500,
              marginBottom: '24px'
            }}>
              $ {price}
            </div>
            <p style={{ marginBottom: '32px' }}>{description}</p>
            <button
              onClick={() => addToChart(id ,ProductV)}  
              style={{
                backgroundColor: 'black',
                paddingTop: '16px',
                paddingBottom: '16px',
                paddingLeft: '32px',
                paddingRight: '32px',
                color: 'white',
                cursor: 'pointer',
                fontWeight: 500,
                border: 'none', 
                borderRadius: '4px' 
              }}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
