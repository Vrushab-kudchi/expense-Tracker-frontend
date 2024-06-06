import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-4xl md:text-7xl font-bold text-gray-800 mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-xl md:text-3xl text-gray-600 mb-2">
        The page you are looking for does not exist.
      </p>
      <p className="text-gray-600 text-lg md:text-2xl">
        Return to{" "}
        <Link to="/" className="text-orange-600 font-bold">
          Homepage
        </Link>
      </p>
    </div>
  );
}
