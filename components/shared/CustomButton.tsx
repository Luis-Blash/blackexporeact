import { Text, Pressable, PressableProps } from 'react-native'

interface Props extends PressableProps {
    children: string;
    className?: string;
    textClassName?: string;
}

const CustomButton = ({ children, className = "", textClassName = "", onPress, onLongPress }: Props) => {
    
    return (
        <Pressable
            className={className}
            onPress={onPress}
            onLongPress={onLongPress}
        >
            <Text className={`text-center ${textClassName}`}>{children}</Text>
        </Pressable>
    )
}

export default CustomButton