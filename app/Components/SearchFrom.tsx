import Form from "next/form";
import SearchFormReset from "./SearchFormreset";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
const SearchFrom = ({ query }: { query?: string }) => {
  return (
    <div>
      <Form action="/" scroll={true} className="search-form">
        <input
          name="query"
          defaultValue={query}
          className="search-input"
          placeholder="startups ideas "
        />
        <div className=" flex gap-2">
          {query && <SearchFormReset></SearchFormReset>}
          <Button type="submit" className=" search-btn text-white">
            {" "}
            <Search className=" size-5"></Search>
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default SearchFrom;
