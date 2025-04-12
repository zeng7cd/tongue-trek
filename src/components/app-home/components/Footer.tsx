import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>关于我们</h3>
          <p>公司简介和使命</p>
        </div>
        <div className="footer-section">
          <h3>联系方式</h3>
          <p>电话: 123-456-7890</p>
          <p>邮箱: contact@example.com</p>
        </div>
      </div>
      <div className="copyright">
        &amp;copy; {new Date().getFullYear()} 公司名称 版权所有
      </div>
    </footer>
  );
}