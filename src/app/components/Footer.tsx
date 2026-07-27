import Link from "next/link";

export default function Footer() {
    return (
        <footer className="main-footer">
            <strong> &copy;  </strong>
            <div className="float-right d-none d-sm-inline-block">
                Dashboard By <Link href="#"></Link>
            </div>
        </footer>
    );
}