import * as React from 'react';

import './SkeletonLoader.css';

export default function SkeletonLoader() {
  return (
    <div className="skeleton-container">
      <div className="skeleton-name loading" />
      <div className="skeleton-img loading" />
    </div>
  );
}
