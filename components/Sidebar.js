import Link from "next/link";

const Sidebar = ({ closeMenu }) => {
  return (
    <div className="absolute inset-y-0 right-0 rounded-md">
      <div className="min-h-screen pt-3 pl-3 bg-blue-600 space-x-6">
        <div className="flex items-center space-x-2">
          <svg
            onClick={() => {
              closeMenu(false);
            }}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 cursor-pointer text-white hover:border-red-500 hover:text-red-500 active:rotate-45 border-2 rounded-md border-white transition duration-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <div>
            <h1 className="text-gray-100">Close</h1>
          </div>
        </div>
        <div className="flex-col pt-8 text-gray-100 pr-6 space-y-6 flex">
          <Link href="/about" passHref>
            <button className="hover:text-red-300 bg-blue-800 hover:bg-blue-500 h-10 w-36 rounded-md">
              About
            </button>
          </Link>
          <Link href="/privacy" passHref>
            <button className="hover:text-red-300 h-10 w-36 bg-blue-800 hover:bg-blue-500 rounded-md">
              Privacy Policy
            </button>
          </Link>
          <Link href="/terms" passHref>
            <button className="hover:text-red-300 h-10 w-36 bg-blue-800 hover:bg-blue-500 rounded-md">
              Terms
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
