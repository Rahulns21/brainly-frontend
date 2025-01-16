import axios from "axios";
import { useEffect, useState } from "react";
import { CONTENT_URL } from "../config";

export function useContent() {
    const [contents, setContents] = useState([]);

    function refresh() {
        axios.get(`${CONTENT_URL}`, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        }).then((response) => {
            setContents(response.data.content);
        });
    }

    useEffect(() => {
        refresh();
        let interval = setInterval(() => {
            refresh();
        }, 5 * 1000);

        return () => {
            clearInterval(interval);
        }
    }, []);

    return {contents, refresh};
}