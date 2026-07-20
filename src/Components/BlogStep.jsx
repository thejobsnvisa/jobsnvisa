import { useState } from "react";
import { blogs } from "../Data/BlogData";
import { Link } from "react-router-dom";
const BlogStep = () => {
  const [currentPage, setCurrentPage] = useState(1);
    
  const blogsPerPage = 10;

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;

  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = Math.ceil(blogs.length / blogsPerPage);
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1440px] mx-auto sm:px-2 md:px-4 lg:ml-12 xl:ml-14">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {currentBlogs.map((blog) => (
            <div
              key={blog.id}
              className=" h-[390px] h-[350px] w-[390px] rounded-tl-[50px] rounded-tr-[50px] mt-20 gap-10"
             >
              {/* Image */}
              <div className="overflow-hidden" style={{ width: "350px", height: "220px", left: "-1px", opacity: 1 }}>
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover rounded-tl-[50px] rounded-tr-[50px] group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow bg-green-100 w-[320px] h-[175px] top-[245px] rounded-br-[50px]">
                <h3 className="text-base font-semibold text-[#163c3d] mb-2 line-clamp-2 leading-tight">
                  {blog.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
                  {blog.description || ""}
                </p>



                {/* Push button to bottom */}
                <div className="mt-auto">
                  <Link to={`/blogs/${blog.slug}`}>
                    <button className="group/btn bg-green-700 ml-[220px] hover:bg-[#6ab563] text-white font-semibold text-xs w-[111px] h-[34px] rounded-[12px] flex items-center gap-[5px] justify-center transition-all duration-300 px-[10px] py-[5px] opacity-100">
                      <span>READ MORE</span>
                      <span className="transition-transform duration-300 group-hover/btn:translate-x-1">
                        →
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center  mt-24">
          {/* PREV */}
          <button
            onClick={() => setCurrentPage((prev) => prev - 1)}
            disabled={currentPage === 1}
            className={`px-5 py-2 rounded-lg transition ${
              currentPage === 1
                ? "cursor-pointer text-green-500"
                : "text-[18px] text-green-500 cursor-pointer"
            }`}
          >
            Prev
          </button>

          {/* NEXT */}
          <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={currentPage === totalPages}
            className={`px-5 py-2 rounded-lg transition ${
              currentPage === totalPages
                ? " cursor-pointer text-green-500"
                : " text-[18px] text-green-500 cursor-pointer"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogStep;
