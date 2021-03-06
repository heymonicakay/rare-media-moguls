import React from "react"
import "./Category.css"

export const CategoryButton = ( props ) => {
    //click to set the category and filter posts by that category.
    return (
        <>
        <span className={`cat-btn ${props.selectedCategoryId === props.category.id ? "selected" : ""}`} onClick={() => {
            props.toggleSelected(props.category)}}>
            <span className="cat-btn-name">
                {props.category.category}
            </span>
        </span>
        </>
    )
}