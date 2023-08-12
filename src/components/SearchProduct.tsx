import { useEffect, useState } from "react";
import { Combobox } from "@headlessui/react";
import { useGetCategoriesListQuery } from "../services/categoryApi";
import { Category } from "../types/category";

export default function Searchproduct() {
  const [query, setQuery] = useState("");
  const { data } = useGetCategoriesListQuery("");
  const category = data?.data;
  const [selectedCategory, setSelectedCategory] =
    useState("Search by category");

  useEffect(() => {
    if (category && category.length > 0) {
      setSelectedCategory(category[0].attributes.label);
    }
  }, [category]);

  const filteredCategory =
    query === ""
      ? category
      : category?.filter((cat: Category) => {
          return cat.attributes.label
            .toLowerCase()
            .includes(query.toLowerCase());
        });

  return (
    <div className="container my-5">
      <Combobox value={selectedCategory} onChange={setSelectedCategory}>
        <Combobox.Input
          onChange={(event) => setQuery(event.target.value)}
          className="select select-bordered w-full max-w-xs"
        />
        <Combobox.Options className="absolute mt-3 z-10 card card-compact dropdown-content w-52 bg-base-100 shadow">
          <ul>
            {filteredCategory &&
              filteredCategory.map((cat: Category) => (
                <Combobox.Option
                  key={cat.id}
                  value={cat.attributes.label}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                >
                  {cat.attributes.label}
                </Combobox.Option>
              ))}
          </ul>
        </Combobox.Options>
      </Combobox>
    </div>
  );
}
