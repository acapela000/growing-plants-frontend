import { Card } from "./Level/Card";
import { UserCard } from "./UserCard";


export function Overlay() {
    return (
        <div className="container">
            <header>
                <Card />
            </header>
            <footer>
                <UserCard level="Level 7" id="0300111001601606060001" seeds={300800} />
                <h3 className="text-md">
                    Created by <a className="font-bold" target="_blank" href="https://github.com/acapela000">Thao</a> & <a className="font-bold" target="_blank" href="https://github.com/jorgechato">Jorge</a>
                </h3>
            </footer>
        </div>
    )
}