import { Text, Pressable, PressableProps } from 'react-native'

interface Props extends PressableProps {
    children: string;
    color?: 'primary' | 'secondary';
}

const CustomButton = ({ children, color = "primary", onPress, onLongPress }: Props) => {
    
    const btnColor = {
        primary: "bg-red-500",
        secondary: "bg-blue-500"
    }[color]

    return (
        <Pressable
            className={`p-2 ${btnColor}`}
            onPress={onPress}
            onLongPress={onLongPress}
        >
            <Text className='text-white text-center'>{children}</Text>
        </Pressable>
    )
}

export default CustomButton