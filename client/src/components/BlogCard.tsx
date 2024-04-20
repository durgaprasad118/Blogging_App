const BlogCard = () => {
  return (
    <div className="flex flex-col  md:w-3/4 w-full  bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg items-center md:gap-10  shadow md:flex-row  ">
      <img
        className="object-cover w-full rounded-t-lg  md:w-auto  h-48 md:rounded-none md:rounded-s-lg"
        src="https://images.pexels.com/photos/16030012/pexels-photo-16030012/free-photo-of-three-tall-palm-trees.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          This is a small description
        </p>
        <div className="flex items-baseline gap-3">
          <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <span className="font-medium text-gray-600 dark:text-gray-300">
              Dp
            </span>
          </div>
          <h2 className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
            {(new Date().getDate(), new Date().getMonth())}
          </h2>
          <span className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
            <svg
              className="w-2.5 h-2.5 me-1.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
            </svg>
            2 minutes read
          </span>
        </div>
      </div>
    </div>
  );
};

export { BlogCard };
