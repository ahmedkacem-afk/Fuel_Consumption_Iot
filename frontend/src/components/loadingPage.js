import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../ressources/loading.json';

const LoadingPage = () => {
  return (
    <div className="fixed inset-0 bg-slate-500 bg-opacity-100 flex justify-center items-center z-50">
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: animationData,
        }}
        height={400}
        width={200}
      />
    </div>
  );
};

export default LoadingPage;
