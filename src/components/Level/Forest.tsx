export function Forest() {
    // if 4:00 pm to 8:00 pm then low-water
    // if 8:00 pm to 12:00 am or 2:00 pm 4:00 pm then medium-water
    // if 12:00 am to 2:00 pm then high-water
    const time = new Date().getHours();
    const water: string = time >= 16 && time < 20 ? "low" : time >= 20 && time < 24 || time >= 14 && time < 16 ? "medium" : "high";
    // const water: string = "low"
    const seeds: {[key: string]: string} = {
        low: "-1",
        medium: "+2",
        high: "+10"
    }

    return (
        <>
            <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow">
                <img src={`/level/${water}-water.png`} className="h-14" />
                <span className="flex-1 ml-3 whitespace-nowrap">
                    Remaining Water
                    <p className="font-normal text-xs">
                        {seeds[water]} seeds per 30 minutes
                    </p>
                    <p className="font-normal text-xs text-gray-400">
                        (if you consume water now)
                    </p>
                    </span>
                <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded">{water}</span>
            </a>
        </>
    );
}