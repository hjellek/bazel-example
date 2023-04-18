import {useState} from 'react';
import './Header.sass';
type Props = {
    text: string;
    className?: string;
};
export const Header = ({text, className}: Props) => {
    const [title, setTitle] = useState(text);
    return (
        <h1 className={`react_lib_header ${className || ''}`}>{title}</h1>
    )
}
