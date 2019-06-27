/* eslint-disable */
import React, { FC } from "react";

export type IdType = number | string;

export interface IListItemData {
    name: string;
}

export interface IListItem {
    id: IdType;
    name: string;
    data: IListItemData[];
}

export interface ISelectionData { [key: string]: boolean; };

export interface IItemSelection {
    id: IdType;
    data: ISelectionData;
}

interface IListItemsProps {
    list: IListItemData[];
    selectionData: ISelectionData;
    setSelectionData(selectionData: ISelectionData): void;
}

export const ListItems: FC<IListItemsProps> = ({ selectionData, list, setSelectionData }) => {
    const onChange = (index: number, value: React.ChangeEvent<HTMLInputElement>) => {
        setSelectionData({ ...selectionData, [index]: value.target.checked });
    }

    return (
        <>
            {list.map((item, index) => {
                return (
                    <label
                        key={index}
                        style={{
                            backgroundColor: selectionData[index] === true ? "salmon" : "white",
                            margin: "3px",
                            padding: "3px",
                            display: "block",
                            position: "relative",
                        }}
                    >
                        <input
                            hidden
                            checked={selectionData[index] === true}
                            onChange={(checked) => onChange(index, checked)}
                            style={{ marginRight: "6px", visibility: "hidden", position: "absolute" }}
                            type="checkbox"
                        />
                        {item.name}
                    </label>
                )
            })}
        </>
    )
}