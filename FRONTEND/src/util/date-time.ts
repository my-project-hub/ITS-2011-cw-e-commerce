import date from 'date-and-time';

export default class DateTime{

    private date:string = ""
    private static dateInstance = new DateTime();


    DateTime(){
       const now = new Date();
       const formateDate = date.format(now ,'YYYY/MM/DD HH:mm:ss');
       this.date = formateDate;
       console.log(formateDate)
    }

    static getDate(){
        return new DateTime()
    }

    getCurrentDate(){
        return this.date;
    }


}