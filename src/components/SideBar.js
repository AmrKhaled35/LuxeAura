import { useContext } from "react";
import { SideBarContext } from '../Contexts/SideBarContext';
import { Link } from 'react-router-dom';
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
import ChartItem from '../components/ChartItem';
import { ChartContext } from '../Contexts/ChartContext';

export default function SideBar() {
    const { IsOpen, handelClose } = useContext(SideBarContext);
    const { Chart, ClearChart, Total } = useContext(ChartContext);
    const { ItemAmount } = useContext(ChartContext);

    return (
        <div style={{
            width: '100%',
            backgroundColor: 'white',
            position: 'fixed',
            top: 0,
            height: '100%',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            maxWidth: '500px',  
            zIndex: 20,
            transition: 'right ease 0.6s',
            paddingLeft: '1rem',
            paddingRight: '1rem',
            right: IsOpen ? "0" : "-100%",
            overflowY: 'auto',
            overflowX: 'hidden',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
        }}>
            <div style={{
                display: 'flex',
                justifyContent: "space-between",
                alignItems: 'center',
                padding: '1rem',
                borderBottom: '1px solid',
                fontSize: '1rem'
            }}>
                <div style={{ textTransform: 'uppercase', fontSize: '0.875rem', fontWeight: 600 }}>
                    Shopping Bag ({ItemAmount})
                </div>
                <div style={{ cursor: 'pointer', width: '2rem', height: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={handelClose}>
                    <IoMdArrowForward style={{ fontSize: '1.5rem' }} />
                </div>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                height: 'calc(100% - 4rem)',  
                overflowY: 'auto',
                overflowX: 'hidden',
                width : "100%"
            }}>
                {Chart.map(e => (
                    <ChartItem Item={e} key={e.id} />
                ))}
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                padding: '1rem',
                marginTop: '1rem'
            }}>
                <div style={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'space-between',
                    alignItems: "center"
                }}>
                    <div style={{ textTransform: "uppercase", fontWeight: "500" }}>
                        <span style={{ marginRight: "4px" }}>Total:</span> $ {parseFloat(Total).toFixed(2)}
                    </div>
                    <div onClick={ClearChart} style={{
                        cursor: 'pointer',
                        padding: '0.5rem',
                        backgroundColor: '#f87171',
                        color: 'white',
                        width: '2rem',
                        height: '2rem',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '1.5rem',
                        borderRadius: '50%'
                    }}>
                        <FiTrash2 />
                    </div>
                </div>
                <Link style={{
                    backgroundColor: '#80808085',
                    display: 'flex',
                    padding: '1rem',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'black',
                    width: '95%',
                    fontWeight: '500',
                    textDecoration: "none",
                    borderRadius: '0.5rem'
                }} to="/chart">View Chart</Link>
                <Link style={{
                    backgroundColor: 'black',
                    display: 'flex',
                    padding: '1rem',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    width: '95%',
                    fontWeight: '500',
                    textDecoration: "none",
                    borderRadius: '0.5rem'
                }} to="/checkout">Checkout</Link>
            </div>
        </div>
    )
}
