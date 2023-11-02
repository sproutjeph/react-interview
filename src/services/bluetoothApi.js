export default class BluetoothSyncApiService {
  static BLUETOOTH_SYNC_API = "https://randomuser.me/api/?results=1000";

  static sync = () => {
    return new Promise((resolve, reject) => {
      fetch(BluetoothSyncApiService.BLUETOOTH_SYNC_API)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
}
