"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function LoginPage() {
    const router = useRouter();

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setLoading(true);
        setError("");

        try {
            const response = await axios.post(
                "http://localhost:8000/api/login",
                form
            );

            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user", JSON.stringify(response.data.user));

            router.push("/dashboard");
        } catch (error: any) {
            setError(error.response?.data?.message || "Login failed.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
                <h1 className="mb-6 text-center text-3xl font-bold">
                    Admin Login
                </h1>

                {error && (
                    <div className="mb-4 rounded bg-red-100 p-3 text-red-600">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="mb-2 block font-medium">
                            Email
                        </label>

                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="mb-2 block font-medium">
                            Password
                        </label>

                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={form.password}
                            onChange={handleChange}
                            className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full rounded-lg bg-blue-600 py-3 text-white transition hover:bg-blue-700 disabled:opacity-50"
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>

                <div className="mt-6 flex justify-between text-sm">
                    <Link
                        href="/forgot-password"
                        className="text-blue-600 hover:underline"
                    >
                        Forgot Password?
                    </Link>

                    <Link
                        href="/register"
                        className="text-blue-600 hover:underline"
                    >
                        Register
                    </Link>
                </div>
            </div>
        </div>
    );
}