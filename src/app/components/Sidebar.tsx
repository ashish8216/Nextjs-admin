import Link from "next/link";

export default function Sidebar() {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <Link href="/dashboard" className="brand-link">
                <span className="brand-text">Admin Panel</span>
            </Link>

            <div className="sidebar">
                <nav>
                    <ul className="nav nav-pills nav-sidebar flex-column">
                        <li className="nav-item">
                            <Link href="/dashboard" className="nav-link">
                                Dashboard
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link href="/dashboard/users" className="nav-link">
                                Users
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link href="/dashboard/products" className="nav-link">
                                Products
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link href="/dashboard/orders" className="nav-link">
                                Orders
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link href="/dashboard/settings" className="nav-link">
                                Settings
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
}