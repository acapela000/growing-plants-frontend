type UserCardProps = {
    level: string;
    id: string;
    seeds: number;
}

export function UserCard(props: UserCardProps) {
    return (
        <div className="max-w-[250px] bg-white border border-gray-200 rounded-lg shadow relative">
            <div className="flex flex-col items-center pb-10 pt-10">
                <img className="w-24 h-24 border-4 border-white mb-3 rounded-full shadow-lg absolute -top-12 left-1/2 transform -translate-x-1/2" src="https://avatars.githubusercontent.com/u/106527693?v=4" />
                <h5 className="mb-1 mt-4 text-xl font-medium text-gray-900">{props.level}</h5>
                <span className="text-xs text-gray-500">{props.id}</span>
                <h5 className="mb-1 text-xl font-medium text-gray-900">
                    <img src="/seed.png" className="w-6 inline" /> {props.seeds}
                </h5>
            </div>
        </div>
    )
}