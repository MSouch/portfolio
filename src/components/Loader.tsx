'use client';
import React from 'react';
import Link from 'next/link';

export default function Loader() {
  return (
    <div className="loader-container">
      <div className="loader">
        <div className="box"></div>
        <div className="hill"></div>
      </div>
      <span className="loader-text">MS</span>
    </div>
  );
}