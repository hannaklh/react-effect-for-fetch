import {useState, useEffect} from 'react';

function Advice() {

    const [advice, setAdvice] = useState();

    useEffect(() => {
        fetch(`https://api.adviceslip.com/advice`)
        .then(res => res.json())
        .then(data =>setAdvice(data.slip))
    }, [])

    return(
        <>
        <p>{advice?.advice}</p>
        </>
    )

}
export default Advice;