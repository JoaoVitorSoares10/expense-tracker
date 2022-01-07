import { useEffect, useState } from 'react';
import * as C from './App.styles';

import { Items } from './data/items';
import { Categories } from './data/categories';

import { Item } from "./types/Item";
import { Category } from './types/category';

import { getCurrentMonth, filterListByMonth } from './functions/dateFilter';

import { TableArea } from './components/tableArea';
import { InfoArea } from './components/infoArea';

const App=()=> {
  const [list, setList] = useState(Items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  
  const onMonthChange =(newMonth: string)=>{
    setCurrentMonth(newMonth);
  }

  useEffect(()=>{
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        <InfoArea 
          currentMonth={currentMonth}
          onMonthChange={onMonthChange}
        />
        <TableArea list={filteredList}/>
      </C.Body>
    </C.Container>
  );
}

export default App;
