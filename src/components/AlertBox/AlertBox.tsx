export function AlertBox() {
  return (
    <div className="alertbox fixed top-5 hidden w-full">
      <div className="inner-con flex w-full justify-center">
        <span className="msg rounded-full border border-gray-400 bg-gray-700 px-2 py-1 text-sm"></span>
      </div>
    </div>
  );
}
