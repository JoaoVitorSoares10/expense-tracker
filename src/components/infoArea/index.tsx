import { formatCurrentMonth } from '../../functions/dateFilter';
import * as C from './style';
import { ResumeItem } from '../resumeItem';

type props= {
    currentMonth: string;
    onMonthChange: (newMonth: string) => void;
    inCome: number;
    expense: number;
}

export const InfoArea =({ currentMonth, onMonthChange, inCome, expense }:props)=>{

    const handleLastMonth = ()=>{
        let [year, month] = currentMonth.split('-');
        let newDate = new Date(parseInt(year), parseInt(month) - 1);
        newDate.setMonth(newDate.getMonth() - 1);
        onMonthChange(`${newDate.getFullYear()}-${newDate.getMonth()+1}`);
    }

    const handleNextMonth = ()=>{
        let [year, month] = currentMonth.split('-');
        let newDate = new Date(parseInt(year), parseInt(month) - 1);
        newDate.setMonth(newDate.getMonth() + 1);
        onMonthChange(`${newDate.getFullYear()}-${newDate.getMonth()+1}`);
    }

    return(
        <C.Container>
            <C.MonthArea>
                <C.MonthArrow onClick={handleLastMonth}>←</C.MonthArrow>   
                <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle> 
                <C.MonthArrow onClick={handleNextMonth}>→</C.MonthArrow>  
            </C.MonthArea>
            <C.ResumeArea>
                <ResumeItem title="Receita" value={inCome}/>
                <ResumeItem title="Despesas" value={expense}/>
                <ResumeItem color={(inCome - expense) < 0 ? 'red' : 'green'} title="Balanço" value={inCome - expense}/>
            </C.ResumeArea>
        </C.Container>
    )
}