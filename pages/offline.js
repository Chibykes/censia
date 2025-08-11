import Head from "next/head";

export default function Offline() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-app-main">
      <Head>
        <title>Offline - Censia.ng</title>
        <meta name="description" content="You are currently offline" />
      </Head>

      <div className="rounded-lg bg-white p-8 text-center shadow-lg">
        <h1 className="mb-4 text-2xl font-bold text-gray-800">
          You&apos;re Offline
        </h1>
        <p className="mb-4 text-gray-600">
          It looks like you&apos;re not connected to the internet. Please check
          your connection and try again.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="rounded bg-app-main px-4 py-2 font-bold text-white hover:bg-opacity-90"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
