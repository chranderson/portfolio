import * as React from 'react';
import Loader from './Loader';

const sleep = (ms: number = 1000) => new Promise((res) => setTimeout(res, ms));

/** Provides a callback to trigger the loader, status of state
 */
const useLoaderDemo = () => {
  const [showLoader, setShowLoader] = React.useState(false);

  const triggerLoader = React.useCallback(async () => {
    setShowLoader(true);
    await sleep(5000);
    setShowLoader(false);
  }, []);

  return {
    showLoader,
    triggerLoader,
    DemoLoader: <Loader show={showLoader} message="doing a 'lil somethin'..." />
  };
};

export default useLoaderDemo;
