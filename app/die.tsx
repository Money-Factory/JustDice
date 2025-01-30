import { View, TouchableOpacity } from "react-native";
// import classNames from "classnames";
// import './Die.css'

export interface DieProps {
    currentValue: number
    isHeld: boolean
}

export default function Die(props: DieProps) {
    const {currentValue, isHeld} = props
    // const className = classNames({
    //     held: isHeld,
    //     notHeld: !isHeld
    // })

    // TODO - Do this through CSS
    if (isHeld) {
        return (
            <View>
                <div style={{width:"25px", height:"25px", border:"4px solid red"}}>
                    {currentValue}
                </div>
            </View>
        )
    } else {
        return (
            <View>
                <div style={{width:"25px", height:"25px", border:"4px solid black"}}>
                    {currentValue}
                </div>
            </View>
        )
    }
}