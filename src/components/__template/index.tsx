import './index.scss';

import React from 'react';

/**
 * Init your props interface first
 */
export interface ITemplateProps {
  /**
   * Color of text
   */
  color?: string;
  title?: string;
}

/**
 * Then build your component
 */
export const Template: IComponent<ITemplateProps> = ({ color, title, children }) => {
  return (
    <h1 className="f2 fw1" style={{ color }}>
      {title}
    </h1>
  );
};
