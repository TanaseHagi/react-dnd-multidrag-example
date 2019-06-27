/* eslint-disable */
import React, { FC, useState } from "react";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import { Boxy, ChangeEvent } from "./Boxy";
import { ItemTypes } from "./ItemTypes";
import { IListItem, ListItems, IItemSelection, IdType, IListItemData } from "./ListItems";
import { BoxyDragLayer } from "./BoxyDragLayer";

const sort = (data: IListItemData[]) => {
    return data.sort((item1, item2) => item1.name[0] > item2.name[0] ? 1 : -1)
}

const initialSelection: IItemSelection = {
    id: -1,
    data: {},
};

const initialList: IListItem[] = [
    {
        id: 100,
        name: "Boxy 1",
        data: sort([
            { name: "Popescu" },
            { name: "Ionescu" },
            { name: "Petrescu" },
        ])
    },
    {
        id: 200,
        name: "Boxy 2",
        data: sort([
            { name: "Constantinescu" },
            { name: "Eminescu" },
        ])
    },
    {
        id: 300,
        name: "Boxy 3",
        data: sort([
            { name: "Hutinescu" },
            { name: "Adamescu" },
            { name: "Iliescu" },
            { name: "Klaus" },
        ])
    },
];

const App: FC = () => {
    const [logs, setLogs] = useState<string[]>([]);

    const [lists, setLists] = useState<IListItem[]>(initialList);

    const [selection, setSelection] = useState<IItemSelection>(initialSelection);

    const onChange = ({ dragSource, dropTarget }: ChangeEvent) => {
        if (dropTarget == null) {
            setLogs([...logs, `did not drop ${dragSource.name} on any target`])
            return;
        }

        const selectedItems = lists
            .filter(listItem => listItem.id === dragSource.id)[0]
            .data
            .filter((list, index) => selection.data[index] === true);

        setLists(lists.map(listItem => {
            if (listItem.id === dropTarget.id) {
                return ({
                    ...listItem,
                    id: listItem.id,
                    data: sort([
                        ...listItem.data,
                        ...selectedItems,
                    ]),
                })
            }
            if (listItem.id === dragSource.id) {
                return ({
                    ...listItem,
                    id: listItem.id,
                    data: listItem.data.filter((listItem, index) => selection.data[index] !== true),
                })
            }
            return listItem
        }));
        setSelection(initialSelection)
        setLogs([...logs, `dropped ${dragSource.name} on ${dropTarget.name}`]);
    }

    return (
        <DndProvider backend={HTML5Backend}>
            <BoxyDragLayer />
            <div style={{ display: "flex" }}>
                {lists.map((list, index) =>
                    <Boxy
                        key={index}
                        id={list.id}
                        onChange={onChange}
                        accept={[ItemTypes.BOX]}
                        type={ItemTypes.BOX}
                        name={list.name}
                        selectedCount={
                            selection.id === list.id
                                ? Object.keys(selection.data).filter(key => selection.data[key] === true).length
                                : 0}
                    >
                        <ListItems
                            list={list.data}
                            selectionData={selection.id === list.id ? selection.data : {}}
                            setSelectionData={(selectionData) => setSelection({ id: list.id, data: selectionData })}
                        />
                    </Boxy>
                )}
            </div>
            <div style={{ clear: "both" }}>
                {logs.map((log, i) => <div key={i} style={{ padding: "5px 0" }}>{log}</div>)}
            </div>
        </DndProvider>
    );
}

export default App;
