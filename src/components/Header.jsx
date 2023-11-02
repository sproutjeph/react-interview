const Header = ({ isSyncing, sync, onFilter }) => {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-gray-200">
      <div className="">Car Dashboard</div>
      <div className="">
        <input
          type="text"
          onChange={(e) => onFilter(e.target.value)}
          className="p-2 outline-1 outline-dashed"
        />
      </div>

      <div className="">
        <button
          disabled={isSyncing}
          onClick={sync}
          className="px-2 py-1 border-slate-100 boder-1 outline"
        >
          {isSyncing ? "Syncing" : "Sync"}
        </button>
      </div>
    </div>
  );
};

export default Header;
