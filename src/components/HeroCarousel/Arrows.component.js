import React from "react";

export const NextArrow = (props) => {
return (
    <>
    <div 
        className = {props.className }
        style = {{...props.style, backgroundColor: "#ACBDC5",opacity:0.6, padding:40,paddingBottom:20,paddingTop:20, height:30, borderRadius: 2,display:"flex", alignItems:"center"}}
        onClick = {props.onClick}
    />
    </>
);
};

export const PrevArrow = (props) => {
    return (
        <>
        <div
        className = {props.className}
        style = {{...props.style, backgroundColor: "#ACBDC5",opacity:0.6, padding:40,paddingBottom:20,paddingTop:20, height:30, borderRadius: 2,display:"flex", alignItems:"center"}}
        onClick = {props.onClick}
    />
        </>
    );
};