import {useState, useEffect} from 'react';
import {Button} from "./components/button/Button";
import {Header} from "react-lib/src/header/Header";

export const App = () => {
    const [buttonText, setButtonText] = useState("");
    const [headerText, setHeaderText] = useState("");
    useEffect(() => {
        setButtonText("Click me!");
        setHeaderText("My App");
    }, []);

    return (
        <>
            <Header text={headerText}/>
            <Button text={buttonText}/>
        </>
    )
};
