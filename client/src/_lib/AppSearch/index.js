import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useLocation } from "react-router-dom";
import { Input, Layout, Modal, Skeleton, Typography } from "antd";
import { CiSearch } from "react-icons/ci";
import { LuSettings2 } from "react-icons/lu";
import { MdOutlineCancel } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";
import { BsFire } from "react-icons/bs";
import "./index.scss";

import AppScrollbar from "_lib/AppScrollbar";
import AppSearchError from "./AppSearchError";
import { useModal } from "_hooks";

const { Header } = Layout;

const AppSearch = () => {
  const { pathname } = useLocation();
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState("");

  const { open, toggle } = useModal();
  const loadingRef = useRef(false);

  const loading = loadingRef.current;
  const isSearchValueValid = searchValue.length >= 3;

  return (
    <div className="appHeaderSearch">
      <CiSearch size={24} onClick={toggle} className="salespointSearch" />
      <Modal
        className="appHeaderSearchModalContent"
        open={open}
        footer={null}
        onCancel={toggle}
        closeIcon={null}
        destroyOnClose={true}
      >
        <Input
          className="appHeaderSearchInput"
          prefix={<CiSearch size={20} />}
          value={searchValue}
          //   onChange={onSearchChange}
          placeholder="Try typing Samsung"
          size="large"
          suffix={
            <MdOutlineCancel
              //   onClick={onClickClose}
              color="#667085"
              size={20}
            />
          }
        />
        <div className="appHeaderSearchFilters">
          <LuSettings2 size={24} color={"#475467"} />
        </div>
        {!searchValue && (
          <>
            <div className="appHeaderSearchRecentHeader">
              <BsFire size={24} />
              <Title level={5} type="secondary">
                Trending Searches
              </Title>
            </div>
            {recentSearches.map((value) => (
              <div key={value} className="appHeaderSearchRecentItem">
                <Text
                  type="secondary"
                  //  onClick={onClickRecent(value)}
                >
                  {value}
                </Text>
                <Text type="secondary">
                  <GoArrowUpRight size={24} />
                </Text>
              </div>
            ))}
          </>
        )}
        {loading && isSearchValueValid && (
          <div className="appHeaderSearchSkeletonContainer">
            {Array(3)
              .fill(0)
              .map(() => (
                <Skeleton.Input active={loading} block size="large" />
              ))}
          </div>
        )}
        <AppSearchError
          isSearchValueValid={isSearchValueValid}
          isResultsEmpty={!(searchResults || []).length}
          loading={loading}
        />
        {!loading && (
          <AppScrollbar>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
          </AppScrollbar>
        )}
      </Modal>
    </div>
  );
};

const { Text, Title } = Typography;
const recentSearches = ["Laptops", "Smartphones", "Designs", "TVs", "AI"];

export default AppSearch;
