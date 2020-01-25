import React from 'react';
import '../../StyleSheet/header.css';
import * as constant from '../../helper/constant';

export const Header = () => {
    return (
        <div className="header">
            <div className="header-text">{constant.HEADER_TEXT}</div>
        </div>
      );
}
   
