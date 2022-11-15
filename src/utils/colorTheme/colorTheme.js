import { useSelector } from "react-redux"

function ColorTheme() {
    const {theme} = useSelector(state => state)
    return `from-[${theme.mainColor}] to-[${theme.secondColor}]`
}

export default ColorTheme