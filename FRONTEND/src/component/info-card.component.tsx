interface Props{
    cardName:string,
    cardValue:string,
    cardColor:string
}


export default function InfoCard(prop:Props){
    
    return(
        <>
            <div className={`${prop.cardColor} flex-1 p-6 rounded-xl shadow`}>
                <p className="text-lg font-medium">{prop.cardName}</p>
                <p className="text-xl font-medium mt-2">{prop.cardValue}</p>
            </div>
        </>
    );
}