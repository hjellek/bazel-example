import {useState, useEffect} from 'react';
import './Header.scss';

type Props = {
    text: string;
    className?: string;
};

export const Header = ({text, className}: Props) => {
    const [title, setTitle] = useState("");

    useEffect(() => {
        setTitle(text);
    }, [text])
    return (
        <h1 className={`react_lib_header ${className || ''}`}>{title}</h1>
    )
}
