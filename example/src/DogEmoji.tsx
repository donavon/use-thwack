import * as React from 'react';

export const Emoji = ({ label, children }) => (
  <span role="img" aria-label={label}>
    {children}
  </span>
);

export const DogEmoji = () => <Emoji label="dog">🐶</Emoji>;
export const BoneEmoji = () => <Emoji label="bone">🦴</Emoji>;
