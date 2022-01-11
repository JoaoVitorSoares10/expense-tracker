import {useState} from 'react';
import { Item } from '../../types/Item';
import * as C from './style';
import {Categories} from '../../data/categories';

type Props ={
    handleAddItem: (item: Item) => void;
}

export const InputArea =({handleAddItem}:Props)=>{
    const [date, setDate] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [value, setValue] = useState<string>('');

    const handleSubmit =()=>{
        const [year, month, day] = date.split('-');
        /* let newCategory
        for(let i in Categories){
            if()
        } */
        const newItem:Item = {
            date: new Date(parseInt(year), parseInt(month) - 1, parseInt(day)), 
            category: category,
            title: title,
            value: parseInt(value)
        }
        handleAddItem(newItem);
    }

    const handleChangeInput =(event: React.FormEvent<HTMLInputElement>)=>{
        const value = event.currentTarget.value;
        const id = event.currentTarget.id;

        if(id === 'InputDate'){
            setDate(value);
            console.log(value)
        }else if(id === 'InputTitle'){
            setTitle(value);
        }else{
            setValue(value);
        }    
    }

    const handleChangeSelect =(event: React.FormEvent<HTMLSelectElement>)=>{
        const value = event.currentTarget.value;
        setCategory(value);  
    }

    return(
        <C.Container>
            <C.Content>
                <C.InputText>Data</C.InputText>
                <C.Input id='InputDate' onChange={handleChangeInput} type='date'></C.Input>
            </C.Content>
            <C.Content>
                <C.InputText>Categoria</C.InputText>
                <C.SelectArea value={category} onChange={handleChangeSelect}> 
                    <C.SelectItem value="DEFAULT" ></C.SelectItem>
                    <C.SelectItem value='food'>Alimentação</C.SelectItem>
                    <C.SelectItem value='rent'>Aluguel</C.SelectItem>
                    <C.SelectItem value='salary'>Salário</C.SelectItem>
                </C.SelectArea>
            </C.Content>
            <C.Content>
                <C.InputText>Título</C.InputText>
                <C.Input id='InputTitle' value={title} onChange={handleChangeInput}></C.Input>
            </C.Content>
            <C.Content>
                <C.InputText>Valor</C.InputText>
                <C.Input id='InputValue' value={value} onChange={handleChangeInput} type="number" min="1" step="any" placeholder='0'></C.Input>
            </C.Content>
            <C.Content>
                <C.Button onClick={handleSubmit}>Adicionar</C.Button>
            </C.Content>
        </C.Container>    
    )
}