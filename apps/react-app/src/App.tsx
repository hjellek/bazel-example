import {useState, useEffect} from 'react';
import {Button} from "./components/button/Button";
import {Header} from "react-lib/src/header/Header";

export const App = () => {
    const [buttonText, setButtonText] = useState("");
    const [headerText, setHeaderText] = useState("");
    useEffect(() => {
        setButtonText("very button");
        setHeaderText("very header");
    }, []);

    return (
        <>
            <h1>App!</h1>
            <Button text={buttonText}/>
            <Header text={headerText}/>
        </>
    )
};
