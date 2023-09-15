import { useState } from 'react';

import { useFilterContext } from '@/app/context';
import data from '@/data/header.json';
import { scroller } from 'react-scroll';
import SearchSvg from '.././../../../public/svg/search.svg';

const SearchInput = ({ setNavbarOpen }: any) => {
  const { searchfilter, setSearchfilter } = useFilterContext();
  const [searchParams, setSearchParams] = useState();
  const query = searchParams;

  const [searchBags, setSearchBags] = useState(query ?? '');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchBags(e.currentTarget.value.trim());
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSearchfilter(searchBags);
    if (setNavbarOpen) {
      setNavbarOpen(false);
    }

    scroller.scrollTo('all_products', {
      duration: 800,
      offset: -50,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex items-center gap-x-4 justify-center">
        <SearchSvg width={30} height={30} className="w-[30px] h-[30px] " />
        <input
          type="search"
          name="query"
          placeholder={searchfilter ? searchfilter : data.search}
          value={searchBags}
          onChange={handleSearchChange}
          className="py-[6px] px-6 md:py-2 w-[290px] md:w-[250px] xl:w-[360px] text-base  border border-dark placeholder:text-base md:placeholder:text-xl placeholder:text-gray_light"
        />
      </form>
    </>
  );
};

export default SearchInput;
