import React from 'react';
import Link from 'next/link';

import style from './Navbar.module.scss';

export default function Navbar() {
  return (
    <div className={style.navbar}>
      <Link href="/">Home</Link>
      <Link href="characters-list">Characters list</Link>
    </div>
  )
}