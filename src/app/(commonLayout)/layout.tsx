import { Header } from "@/components/Header/Header";


const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Header />
            <main>{children}</main>
        </div>
    );
};

export default layout;