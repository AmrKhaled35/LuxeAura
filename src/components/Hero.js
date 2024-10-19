import { Link } from "react-router-dom";
export default function Hero() {
    return (
        <section style={{ position: 'relative', height: '700px', overflow: 'hidden' }}>
            <video src="https://cdn.shopify.com/videos/c/o/v/82cae632951644b090ce833526891e71.mp4" autoPlay muted loop style={{position: 'absolute',top: '70px',left: '0',width: '100%',height: '100%',objectFit: 'cover',zIndex: '-1'}}/>
            <div style={{margin: '0 auto'  ,display: 'flex',justifyContent: 'space-around',height: '100%',maxWidth: '100%' }}>
                <div style={{display: 'flex',flexDirection: 'column ' , justifyContent : "center" , alinItems : "center"}}>
                    <div style={{fontWeight :"600" , display :"flex" , alignItems : "center" ,textTransform :"uppercase" , position : "absolute" , top :250}}>
                        <div style={{width: '2.5rem', height: '3px',marginRight: '0.75rem', backgroundColor: 'gold'}}></div>New Trend
                    </div>
                    <h1 style={{fontSize: '70px',lineHeight: '1.2',fontWeight: '300', marginBottom: '1rem'}}>
                        AUTUMN SALE STYLISH <br></br> 
                        <span style={{ fontWeight: '600' }}>WOMENS</span></h1>
                        <Link to = {'/'}style={{color : "black" , fontFamily :"sans-serif" , marginLeft : "20px"}}>Discover More</Link>
                </div>
            </div>
        </section>
    );
}
