import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import {IoMdRemove} from "react-icons/io"
import {IoMdAdd} from "react-icons/io"
import { useContext } from "react";
import {ChartContext} from '../Contexts/ChartContext'

export default function ChartItem ({Item}){
    const {id , image , amount , title , price}= Item ; 
    const {removeFromChart , increaseInChart , DecreaseInChart } = useContext(ChartContext)
    return (
        <div style={{display: 'flex',gap: '1rem',paddingTop: '0.5rem',paddingBottom: '0.5rem',paddingLeft: '1.5rem',paddingRight: '1.5rem',borderBottom: '1px solid #e5e7eb',width: '100%',fontWeight: '300',color: '#6b7280',}} >
            {/* image */}
            <div style={{width : "100%" , minHeight : "150px" , display : "flex" , alignItems : "center" , rowGap : "5px" , columnGap : "14px" }}>
                <Link >
                    <img src={image} style={{maxWidth : "80px"}} ></img>
                </Link>
                <div  style={{display: 'flex', width: '100%', flexDirection: 'column'}}>
                    {/* icon & Link */}
                    <div  style={{display: 'flex',justifyContent: 'space-between',marginBottom: '0.5rem'}}>
                        {/* title */}
                        <Link to={`/product/${id}`} style={{fontSize: '0.875rem', textTransform: 'uppercase', fontWeight: 500, maxWidth: '240px', color: 'black', textDecoration: 'none', transition: 'text-decoration 0.3s ease'}}onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}>{title}</Link>
                        <div  style={{fontSize: '1.25rem', cursor: 'pointer'}}>
                            {/* Icon */}
                            <IoMdClose onClick={()=>removeFromChart(id)} style={{color: '#6b7280',  transition: 'color 0.2s ease-in-out' }}onMouseEnter={(e) => e.currentTarget.style.color = '#ef4444'}  onMouseLeave={(e) => e.currentTarget.style.color = '#6b7280'}></IoMdClose>
                        </div>
                    </div>
                
                    <div style={{display: 'flex' ,gap: '0.5rem',height: '36px',fontSize: '0.875rem' }}>
                        {/* Quantaty */}
                        <div  style={{flex: 1,display: 'flex',maxWidth: '100px' ,alignItems: 'center',height: '100%',border: '1px solid #ddd',fontWeight: '500'}}> 
                            {/* remove */}
                            <div onClick= {()=> DecreaseInChart(id)}style={{flex: 1,height: '100%',display: 'flex',justifyContent: 'center',alignItems: 'center',cursor: 'pointer'}}>
                            <IoMdRemove></IoMdRemove>
                            </div>
                            {/* amount */}
                            <div style={{height: '100%',display: 'flex',justifyContent: 'center',alignItems: 'center',paddingLeft: '0.5rem', paddingRight: '0.5rem'  }}>
                                {amount}
                                </div>
                            {/* pluse */}
                            <div onClick ={()=> increaseInChart (id)}style={{flex: 1,height: '100%',display: 'flex',justifyContent: 'center',alignItems: 'center',cursor: 'pointer'}}>
                            <IoMdAdd ></IoMdAdd>
                            </div>
                        </div>
                        {/* item price */}
                        <div style={{display : "flex" , justifyContent : "around" , alignItems : "center" , color : 'black' , fontWeight : "300"}}>
                            $ {price}
                            </div>
                        {/* final price */}
                        <div style={{  display : "flex" , justifyContent : "end" , alignItems : "center" , color : 'black' , fontWeight : "600" , marginLeft : "80px"}}>
                            {`$ ${parseFloat(price * amount).toFixed(2)} `}
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}