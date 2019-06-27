/* eslint-disable */
import React, { useRef, useEffect } from "react";
import { ItemTypes } from "./ItemTypes";
import {
    useDrag,
    useDrop,
    // DragObjectWithType,
    DropTargetMonitor,
    DragSourceMonitor
} from "react-dnd";
import { IdType } from "./ListItems";
import { getEmptyImage } from "react-dnd-html5-backend";

const style: React.CSSProperties = {
    border: "1px dashed gray",
    backgroundColor: "white",
    padding: "0.5rem 1rem",
    marginRight: "1.5rem",
    marginBottom: "1.5rem",
};

export interface ChangeEvent {
    dragSource: BoxyBox;
    dropTarget?: BoxyBox;
}

export interface BoxProps {
    id: IdType;
    name: string;
    type: ItemTypes;
    accept: ItemTypes[];
    onChange(event: ChangeEvent): void;
    selectedCount: number;
}

interface BoxyBox {
    id: any;
    name: string;
    type: ItemTypes;
    accept: ItemTypes[];
}

export const Boxy: React.FC<BoxProps> = ({ id, name, type, accept, onChange, children, selectedCount }) => {
    const item: BoxyBox = { id, type, name, accept };

    const ref = useRef<HTMLDivElement>(null);

    const [{ opacity }, drag, preview] = useDrag({
        item,
        end(dropResult: BoxyBox | undefined, monitor: DragSourceMonitor) {
            if (!monitor.didDrop()) {
                typeof onChange === "function" && onChange({ dragSource: item });
            }
            // console.log("drag end", dropResult, monitor);
        },
        canDrag: (monitor: DragSourceMonitor) => selectedCount > 0,
        collect: (monitor: any) => ({
            opacity: monitor.isDragging() ? 0.4 : 1
        })
    });

    const [{ isOver, canDrop }, drop] = useDrop({
        accept,
        drop: (dragObject: BoxyBox /* DragObjectWithType */, monitor: DropTargetMonitor) => {
            // console.log();
            typeof onChange === "function" && onChange({ dragSource: dragObject, dropTarget: item });
            // console.log("drop", dragObject, monitor);
        },
        canDrop: (dragObject: BoxyBox /* DragObjectWithType */, monitor: DropTargetMonitor) => {
            if (item.id === dragObject.id) return false;
            return true;
        },
        collect: (monitor: DropTargetMonitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop()
        })
    });

    drag(drop(ref));
    
    useEffect(() => {
        preview(getEmptyImage(), { captureDraggingState: true });
    }, []);

    return (
        <div
            ref={ref}
            style={{
                ...style,
                opacity,
                position: "relative",
                backgroundColor:
                    isOver && canDrop ? "cornflowerblue" : canDrop ? "skyblue" : "white"
            }}
        >
            <div>
                {name}
                <span
                        // ref={preview}
                        style={{
                            padding: "3px",
                            width: "1em",
                            height: "1em",
                            textAlign: "center",
                            display: "inline-block",
                            marginLeft: "3px",
                            visibility: selectedCount > 0 ? "visible" : "hidden",
                            border: "1px solid darkgrey"
                        }}
                    >
                        {selectedCount}
                    </span>
            </div>
            {children}
        </div >
    );
};
