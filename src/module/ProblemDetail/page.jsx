import { useParams } from "react-router-dom";
import useFetch from "../useFetch/page";
import TopBar from "../../component/Topbar";
const ProblemDetail = () => {
  const { id } = useParams();
  const {
    error,
    isPending,
    data: problems,
  } = useFetch("http://localhost:3000/problems/" + id);

  return (
    <>
      <TopBar></TopBar>
      <div>
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {problems && (
          <div className="p-6 bg-white shadow-lg rounded-lg max-w-3xl mx-auto mt-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Problem Name
            </h1>
            <h2 className="text-xl text-gray-700 mb-6">
              {problems.problemName}
            </h2>

            <h1 className="text-2xl font-bold text-gray-800 mb-4">Detail</h1>
            <div className="text-gray-600">{problems.detail}</div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProblemDetail;
