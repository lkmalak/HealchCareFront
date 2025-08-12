import NavigatorMenu from "./Components/Navigator";

export default function Home({ children }) {
    return (
        <div>
            <NavigatorMenu />
            <main>{children}</main>
        </div>
    );
}
