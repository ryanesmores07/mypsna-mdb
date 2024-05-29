import { Form } from "react-router-dom";
import { SearchInput } from ".";
import { Button } from "./ui/button";

const SearchSection = () => {
  return (
    <>
      <Form className="rounded-md px-8 py-4 grid gap-4 grid-cols-[auto_auto] place-content-center place-items-center">
        <SearchInput
          type="search"
          label="Enter Artist"
          name="search"
          defaultValue=""
        />
        <Button className="self-end mb-2">Search</Button>
      </Form>
    </>
  );
};
export default SearchSection;
