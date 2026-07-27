import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="wrapper">
            <Navbar />
            <Sidebar />

            <div className="content-wrapper">
                {children}
            </div>

            <Footer />
        </div>
    );
}