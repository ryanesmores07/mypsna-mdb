import { Form } from "react-router-dom";
import { SearchInput } from ".";
import { Button } from "./ui/button";
import { getUserLanguage } from '../lib/languageDetect';

const SearchSection = () => {
  const userLanguage = getUserLanguage();
  const isJp = userLanguage === "ja";

  return (
    <>
      <Form className="rounded-md px-8 py-4 grid gap-4 grid-cols-[auto_auto] place-content-center place-items-center">
        {isJp ? (
          <SearchInput
            type="search"
            label="アーティストを入力"
            name="search"
            defaultValue=""
          />
        ) : (
          <SearchInput
            type="search"
            label="Enter Artist"
            name="search"
            defaultValue=""
          />
        )}
        {isJp ? (<Button className="self-end mb-2">検索</Button>) : (<Button className="self-end mb-2">Search</Button>)}
      </Form>
    </>
  );
};
export default SearchSection;
