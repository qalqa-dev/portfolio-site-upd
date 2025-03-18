import { Link } from 'react-router';

const NotFound = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-5">
        <h2 className="text-[50px] md:text-[80px] lg:text-[120px] font-bold">
          Error 404
        </h2>
        <p className="text-[14px] md:text-[18px] lg:text-[20px]">
          Page not found, probably in develop
        </p>
        <Link
          className="text-[20px] w-full text-center px-10 py-2
        rounded-xl text-[var(--color-base)] bg-[var(--color-mauve)]"
          to="/"
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
