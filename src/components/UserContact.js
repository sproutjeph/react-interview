const UserContact = ({ listId, info }) => {
  const isValidPhoneNumber = (phoneNumber) => {
    const phoneNumberRegex = /^\d{8,14}$/;
    return phoneNumberRegex.test(phoneNumber);
  };

  const isValidURL = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };
  const validateAndTruncateName = (name) => {
    return name.length > 20 ? name.substring(0, 20) : name;
  };

  const { name, picture, cell } = info;
  console.log(cell);
  const validatedName = validateAndTruncateName(name.first + " " + name.last);
  const isValidName = validatedName.trim().length > 0;
  const isValidPicture = isValidURL(picture.thumbnail);
  const isValidPhone = isValidPhoneNumber(cell);

  return (
    <div className="flex items-center gap-2 p-2 mt-8 shadow-md">
      {isValidPicture && (
        <img src={picture.thumbnail} alt="" className="rounded-full" />
      )}

      <div className="">
        {isValidName && <h6 className="text-xs">{validatedName}</h6>}
        {isValidPhone && <p className="text-xs">{cell}</p>}
      </div>
    </div>
  );
};

export default UserContact;
