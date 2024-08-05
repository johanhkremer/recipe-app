import { useState, useEffect } from "react";

export const useFetch = <T,>(url: string) => {
    const [data, setData] = useState<T | null>(null);
    const [isPending, setIsPending] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        const fetchData = async () => {
            setIsPending(true);

            try {
                const res = await fetch(url, { signal });
                if (!res.ok) {
                    throw new Error(res.statusText);
                }
                const jsonData = await res.json();

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

        fetchData();

        return () => {
            controller.abort();
        };
    }, [url]);

    return { data, isPending, error };
};
