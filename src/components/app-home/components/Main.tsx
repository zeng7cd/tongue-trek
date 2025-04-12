import React from 'react';

export default function Main() {
  return (
    <main className="main-content">
      <section className="banner">
        <h1>欢迎来到我们的网站</h1>
        <p>探索我们的产品和服务</p>
      </section>
      
      <section className="features">
        <h2>我们的优势</h2>
        <div className="feature-list">
          <div className="feature-item">优质服务</div>
          <div className="feature-item">专业团队</div>
          <div className="feature-item">多年经验</div>
        </div>
      </section>
    </main>
  );
}