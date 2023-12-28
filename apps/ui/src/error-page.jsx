import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex items-center justify-center h-screen flex-col text-2xl">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <div className="flex items-center justify-evenly text-[16rem]">
        <p>4</p>
        <div className="w-64">
          <img src="/blue-frenchie.png" alt="" />
        </div>
        <p>4</p>
      </div>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
