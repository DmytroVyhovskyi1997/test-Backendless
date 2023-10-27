import {Suspense, lazy} from "react"


const TabContent = ({ componentPath, title }) => {
  const TabComponent = lazy(() => import(`../../${componentPath}` /* webpackChunkName: "MovieDetailsPage" */));
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TabComponent array={title.split(" ")}/>
    </Suspense>
  );
};

export default TabContent;
