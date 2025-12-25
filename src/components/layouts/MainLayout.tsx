import { ReactNode } from "react";
import NavBar from "@/components/layouts/NavBar";

type Props = {
    children: ReactNode;
};

export default function MainLayout({ children }: Props) {
    return (
        <div>
            <NavBar />
            <main>{children}</main>
        </div>
    );
}
