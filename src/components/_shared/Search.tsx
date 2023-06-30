import { inter } from "@/lib/utils/font";

const Search = () => {
  return (
    <input
      type="text"
      placeholder="Search ...."
      className={`${inter.className} text-slate-400 border-[1px] border-slate-300 rounded-full px-4 py-1 text-[12px] outline-none`}
    />
  );
};

export default Search;
