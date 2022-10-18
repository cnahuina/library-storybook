import PropTypes from "prop-types"

function Button({ label, backgroundColor = "#FF1C44", color= "#FFFFFF" , borderColor = "#FF1C44" , size = "md", handleClick}){
    let scale = 1
    if (size === "sm") scale = 0.75
    if (size === "lg") scale = 1.5


    const style = {
        backgroundColor,
        color,
        borderStyle: "solid",
        borderSize: "0px",
        borderColor,
        padding: `${scale * 0.5}rem ${scale * 1}rem`,
        ':hover': {
            backgroundColor,
            border: '1px solid red',
        },
        borderRadius: '32px'
    }

    return (
        <button onClick={handleClick} style={style}>
            {label}    
        </button>
    )
}
    Button.PropTypes = {
        label: PropTypes.string,
        backgroundColor: PropTypes.string,
        borderSize: PropTypes.string,
        borderColor: PropTypes.string,
        color: PropTypes.string,
        size: PropTypes.oneOf(["sm","md","lg"]),
        radius: PropTypes.number,
        handleClick: PropTypes.func
    }

    export default Button
