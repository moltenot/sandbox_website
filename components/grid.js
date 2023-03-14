import useWindowDimensions from "@/hooks/windowDimensions";
import {useEffect, useState} from "react";

export default function Grid({children, width}) {
    const [mounted, setMounted] = useState(false);
    const {width: windowWidth} = useWindowDimensions();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        // if unmounted just return a single child in the centre
        return (<div className={"hflex"}>
            {children[0]}
        </div>);
    }

    /**
     * calculate the difference between the spaces available in a potential grid
     * and the number of children
     * @param columns {number} the number of columns in a potential grid
     * @param rows {number} the number of rows in a potential grid
     */
    function calculateEmptySlots(columns, rows) {
        if (columns * rows < children.length) {
            return 9999999
        }
        return columns * rows - children.length;
    }

    // set the number of rows and columns needed based on the window width
    let numColumns = Math.floor(windowWidth / width)
    let numRows = Math.ceil(children.length / numColumns);

    if (calculateEmptySlots(numColumns, numRows) > calculateEmptySlots(numColumns - 1, numRows)) {
        numColumns--;
    }

    let rows = [];
    for (let i = 0; i < numRows; i++) {
        let curRow = [];
        for (let j = 0; j < numColumns; j++) {
            const index = i * numColumns + j;
            curRow.push(children[index]);
        }
        rows.push(curRow);
    }

    return (
        <div>
            {rows.map((row, i) => {
                return (<div key={i} className={"hflex"}>
                    <div className={"flex-pad"}/>
                    {row}
                    <div className={"flex-pad"}/>
                </div>)
            })}
        </div>
    )
}