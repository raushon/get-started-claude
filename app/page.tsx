import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-neutral-950 px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-white">Welcome to Notes</h1>
          <p className="text-neutral-400 text-lg">
            Create, edit, and share rich-text notes — all in one place.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/authenticate?mode=signup"
            className="px-6 py-2.5 rounded-lg bg-white text-neutral-900 font-medium hover:bg-neutral-200 transition-colors"
          >
            Sign up
          </Link>
          <Link
            href="/authenticate?mode=login"
            className="px-6 py-2.5 rounded-lg border border-neutral-600 text-neutral-200 font-medium hover:bg-neutral-800 transition-colors"
          >
            Log in
          </Link>
        </div>
      </div>
    </main>
  );
}
