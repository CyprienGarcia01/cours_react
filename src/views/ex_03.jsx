import {useState} from "react";

function Ex_03() {
    const [ user, setUser ] = useState([])

    const handleLogin = () => {
        fetch('https://reqres.in/api/users/')
            .then((res) => res.json())
            .then(({data}) => {

            })
    }

    return (
        <div className={'flex flex-col gap-6'}>
            EX_03 fetch and show data:
            <div>
                <button onClick={handleLogin}>LOGIN</button>

                <div></div>
            </div>
        </div>
    )
}

export default Ex_03