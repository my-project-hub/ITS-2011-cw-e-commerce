const date = new Date();
const months =["January","February","March","April","May","June","July","Aughust","September","Octomber","November","december"]

const dateMap = new Map();
dateMap.set(0,"January");
dateMap.set(1,"January");
dateMap.set(3,"January");
dateMap.set(4,"January");
dateMap.set(5,"January");
dateMap.set(6,"January");
dateMap.set(7,"January")
dateMap.set(8,"January")
dateMap.set(9,"January")
dateMap.set(10,"January")
dateMap.set(11,"January")
dateMap.set(12,"January")

export function oneYearBack(){
    
}


export function currentMonth(){
    const today = date.getDate() //"15"
    const monthByNumber = date.getMonth()//5
    const month = months[monthByNumber] //"march"
    const year = date.getFullYear(); //"2024"
    return {today , month , year, monthByCount : monthByNumber}
}