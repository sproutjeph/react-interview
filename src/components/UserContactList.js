import { useState } from "react";
import UserContact from "./UserContact";
import Paginator from "./Paginator";

const UserContactList = ({ listId, contactList }) => {
  const [filteredContacts, setFilteredContacts] = useState(contactList);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handleFilter = (searchTerm) => {
    // Filter the contacts based on the search term
    const filtered = contactList.filter(
      (contact) =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredContacts(filtered);
    setCurrentPage(1); // Reset to the first page when filtering
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedContacts = filteredContacts.slice(startIndex, endIndex);

  return (
    <div className="">
      {contactList.map((contact, i) => (
        <UserContact key={i} info={contact} />
      ))}

      <Paginator page={currentPage} totalPages={itemsPerPage} />
    </div>
  );
};

export default UserContactList;
