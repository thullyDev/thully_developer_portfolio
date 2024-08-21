import { CloseBtn } from "../CloseBtn/CloseBtn";
import { Loader } from "../Loader/Loader";

export const OuterLoader = () => {
  return (
    <div data-open="false" className="outer-loader-con hidden">
      <div className="layer-1-con absolute top-0 flex h-full w-full items-center justify-center bg-zinc-900">
        <Loader />
      </div>
      <div className="outer-close-btn hidden">
        <CloseBtn element=".outer-loader-con" animate="fade" />
      </div>
    </div>
  );
};

// .outer-close-btn .close-btn
