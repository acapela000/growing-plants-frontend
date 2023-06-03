

type UserCardProps = {
    level: string;
    id: string;
    seeds: number;
}

export function UserCard(props: UserCardProps) {
    return (
        <>
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                <div className="flex flex-col items-center pb-10 pt-10">
                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://avatars.githubusercontent.com/u/106527693?v=4" />
                    <h5 className="mb-1 text-xl font-medium text-gray-900">{props.level}</h5>
                    <span className="text-xs text-gray-500">{props.id}</span>
                    <h5 className="mb-1 text-xl font-medium text-gray-900">
                        <img src="/seed.png" className="w-6 inline" /> {props.seeds}
                    </h5>
                </div>
            </div>

        </>
    )
}