import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <div
        className="container py-10  h-[100vh] flex items-center justify-center"
        id="error-page"
      >
        <div className="text-center flex items-center text-5xl font-bold uppercase ">
          404 Not found
        </div>
      </div>
    </>
  );
}
