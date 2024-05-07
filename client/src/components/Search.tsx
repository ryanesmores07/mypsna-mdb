import FormInput from "./FormInput";
import { Form, useLoaderData } from "react-router-dom";

const Search = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <Form className="mx-auto w-64">
      <FormInput type="search" label="search" name="search" defaultValue="" />
    </Form>
  );
};
export default Search;
