const API_KEY = "Q2G38F2-XS04TAT-KZ1XR4X-C02WVF9";
const API_URL = "https://api.lecto.ai/v1/translate/json";

export default async (to, from, data) => {
    const body = JSON.stringify({
        to: [to],
        protected_keys: ["data.key", "data.icon"],
        json: JSON.stringify({data: data}),
        from: from,
    })

    let returnData = window.localStorage.getItem(body);

    if (returnData == null) {
        const options = {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "Accept": "application/json",
                "X-API-Key": API_KEY,
            },
            body: body
        };

        try {
            returnData = (await (await fetch(API_URL, options)).json()).translations[0].translated;

            window.localStorage.setItem(body, returnData);
        } catch {
        }
    }

    return JSON.parse(returnData).data;
}