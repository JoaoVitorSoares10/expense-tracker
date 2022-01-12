import { useEffect, useState } from 'react';
import * as C from './App.styles';

import { Items } from './data/items';
import { Categories } from './data/categories';

import { Item } from "./types/Item";
import { Category } from './types/category';

import { getCurrentMonth, filterListByMonth } from './functions/dateFilter';

import { TableArea } from './components/tableArea';
import { InfoArea } from './components/infoArea';
import { InputArea } from './components/inputArea';

const App=()=> {
  const [list, setList] = useState(Items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [inCome, setInCome] = useState(0);
  const [expense, setExpense] = useState(0);

  const onMonthChange =(newMonth: string)=>{
    setCurrentMonth(newMonth);
  }

  useEffect(()=>{
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(()=>{
    let expenseCount = 0;
    let inComeCount = 0;

    for(let i in filteredList){
      if(Categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      }else{
        inComeCount += filteredList[i].value; 
      }
    }

    setInCome(inComeCount);
    setExpense(expenseCount);

  }, [filteredList]);

  const handleAddItem=(item: Item)=>{
    let currentlist = list;
    currentlist.push(item);
    setList(currentlist);
  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        <InfoArea 
          currentMonth={currentMonth}
          onMonthChange={onMonthChange}
          inCome={inCome}
          expense={expense}
        />
        <InputArea handleAddItem={handleAddItem}/>
        <TableArea list={filteredList}/>
      </C.Body>
    </C.Container>
  );
}

export default App;
