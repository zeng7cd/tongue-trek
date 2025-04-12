import React, { useState, useEffect } from 'react';
import styles from '../appHome.module.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 70;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.headerScrolled : styles.headerNotScrolled}`}
    >
      <div className={styles.logo}>网站Logo</div>
      <nav className={styles.nav}>
        <a href="/">首页</a>
        <a href="/about">关于我们</a>
        <a href="/products">产品</a>
        <a href="/contact">联系我们</a>
      </nav>
    </header>
  );
}