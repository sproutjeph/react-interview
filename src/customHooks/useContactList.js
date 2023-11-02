import { useState, useRef, useEffect } from "react";
import BluetoothSyncApiService from "../services/bluetoothApi";

const useContactList = () => {
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [isSyncing, setIsSyncing] = useState(false);
  const [offset, setOffset] = useState(0);
  const count = useRef(5);

  // Call next page
  const nextPage = () => {
    if (offset + count.current < list.length) {
      setOffset(offset + count.current);
    }
  };

  // Call previous page
  const previousPage = () => {
    if (offset - count.current >= 0) {
      setOffset(offset - count.current);
    }
  };

  const onFilter = (term) => {
    // Filter the list based on the search term
    const filtered = list.filter((contact) => {
      const fullName =
        `${contact.name.first} ${contact.name.last}`?.toLowerCase();
      return fullName.includes(term.toLowerCase());
    });

    setFilteredList(filtered);
  };

  // Function to fetch and sync data
  const syncData = () => {
    setIsSyncing(true);
    BluetoothSyncApiService.sync()
      .then((data) => {
        setList(data.results); // Assuming that the response is an array of contact objects
        setIsSyncing(false);
      })
      .catch((error) => {
        setIsSyncing(false);
        console.error("Failed to sync data:", error);
      });
  };

  // Initial data sync when the component using this hook mounts
  useEffect(() => {
    syncData();
  }, []);
  // Calculate total pages, current page, hasPrevPage, and hasNextPage
  const totalPages = Math.ceil(
    (filteredList.length > 0 ? filteredList.length : list.length) /
      count.current
  );
  const currentPage = Math.floor(offset / count.current) + 1;
  const hasPrevPage = offset > 0;
  const hasNextPage =
    offset + count.current <
    (filteredList.length > 0 ? filteredList.length : list.length);

  return {
    list:
      filteredList.length > 0
        ? filteredList
        : list.slice(offset, offset + count.current),
    isSyncing,
    nextPage,
    previousPage,
    onFilter,
    syncData,
    totalPages,
    currentPage,
    hasNextPage,
    hasPrevPage,
  };
};

export default useContactList;
