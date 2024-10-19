import { useState , createContext,useEffect } from "react"
export const ChartContext = createContext();
export default function ChartProvider ({children}){
    const [Chart , SetChart] = useState([])
    const [ItemAmount , SetItemAmount] = useState(0);
    const [Total , SetTotal] = useState(0);
    const addToChart = (id ,product)=>{
            const newItem  = {...product , amount : 1} ;
            const findItem = [...Chart].find((e)=>{
                return e.id === id ;
            });
            if(findItem){
                const NewChart = Chart.map((e)=>{
                    if(e.id === id){
                        return {...e , amount : findItem.amount + 1 } ;
                    }else{
                        return e ; 
                    }
                });
                SetChart(NewChart) ;
            }else{
                SetChart([...Chart , newItem ]);
            }
    }
    const removeFromChart = (id , product)=>{
        const NewChart2 = Chart.filter((e) => {
            return e.id !== id ;
        })
        SetChart(NewChart2);
    }
    const ClearChart = ()=>{
        SetChart([])
    }
    const increaseInChart = (id)=> {
        const NewChart3 = Chart.map((e)=>{
            if(e.id === id ){
                return {...e , amount : e.amount + 1 }
            }else{
                return e ;
            }
        })
        SetChart(NewChart3);
    }
    const DecreaseInChart = (id)=> {
        const itemm = Chart.find((e)=>{
            return e.id === id ;
        })
        const NewChart3 = Chart.map((e)=>{
            if(e.id === id ){
                if( e.amount > 0) return {...e , amount : e.amount - 1 }
            }else{
                return e ;
            }
        })
        SetChart(NewChart3);
        if(itemm.amount < 2 ){
            removeFromChart(id);
        }
    }
    useEffect(()=>{
            const amount = Chart.reduce((acu , cur)=>{
                    return acu + cur.amount ; 
            }, 0)
            SetItemAmount(amount);
    } , [Chart])
    useEffect(()=>{
        if(Chart){
            const total = Chart.reduce((acu , cru)=>{
                return acu + cru.amount * cru.price ; 
            } , 0)
            SetTotal(total);
        }
    }, [Chart])
    return (
        <ChartContext.Provider value={{
        addToChart , Chart , removeFromChart 
        , ClearChart , increaseInChart 
        , DecreaseInChart , ItemAmount , Total
        }}>
            {children}
        </ChartContext.Provider>
    )
}