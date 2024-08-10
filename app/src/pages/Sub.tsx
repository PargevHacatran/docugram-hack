import axios from "axios";

export function Sub () {
    const subscribe = () => {
        axios
            .post('https://host/SignServer/rest/api/documents')
            .then((resp) => console.log(resp))
            .catch((err) => console.error(err));
    }

    return (
        <div>
            <button onClick={() => subscribe()}>Подписать</button>
        </div>
    );
}