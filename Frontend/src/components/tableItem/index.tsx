import * as C from './style';
import { Item } from '../../types/Item';
import { formatDate } from '../../functions/dateFilter';
import { Categories } from '../../data/categories';

type Props = {
    item: Item;
}

export const TableItem =({item}:Props)=>{
    return (
        <C.TableLine>
            <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
            <C.TableColumn>
                <C.category color={Categories[item.category].color}>
                    {Categories[item.category].title}
                </C.category>
            </C.TableColumn>    
            <C.TableColumn>{item.title}</C.TableColumn>
            <C.TableColumn>
                <C.value color={Categories[item.category].expense ? 'red' : 'green'}>
                    R$ {item.value}
                </C.value>
            </C.TableColumn>
        </C.TableLine>
    )
}