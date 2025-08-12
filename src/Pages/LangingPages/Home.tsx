import NavigatorMenu from "./Components/Navigator";
import { Outlet } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <header>
                <title>Home Page</title>
                <meta name="description" content="Welcome to our home page!" />
                <link rel="icon" href="/favicon.ico" />
            <NavigatorMenu />
            </header>

            <main>
                <Outlet />
                malak
            </main>
        </div>
    );
}

