import { useState, useEffect } from "react";

type PostOptions = {
    method: string;
    headers: {
        'Content-Type': string;
    };
    body: string;
};

export const useFetch = <T,>(url: string, method = 'GET') => {
    const [data, setData] = useState<T | null>(null);
    const [isPending, setIsPending] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [options, setOptions] = useState<PostOptions | null>(null);

    const postData = <P,>(postData: P) => {
        setOptions({
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
        });
    };

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        const fetchData = async (fetchOptions?: RequestInit) => {
            setIsPending(true);

            try {
                const res = await fetch(url, { ...fetchOptions, signal });
                if (!res.ok) {
                    throw new Error(res.statusText);
                }
                const jsonData: T = await res.json();

                setData(jsonData);
                setError(null);
            } catch (err: any) {
                if (err.name === "AbortError") {
                    console.log("The fetch was aborted");
                } else {
                    console.error("Fetch error:", err); // Logga mer detaljerat
                    setError("Could not fetch the data");
                }
            } finally {
                setIsPending(false);
            }
        };

        if (method === 'GET') {
            fetchData();
        }

        if (method === 'POST' && options) {
            fetchData(options);
        }

        return () => {
            controller.abort();
        };
    }, [url, options, method]);

    return { data, isPending, error, postData };
};
