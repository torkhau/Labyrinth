import type { HTMLAttributes } from 'react';
import './InputRange.css';

interface InputRangeProps extends HTMLAttributes<HTMLInputElement> {
  label: string;
  value: number;
  description?: string;
  min?: number;
  max?: number;
}

export function InputRange({ id, label, value, onChange, min = 0, max = 100, description }: InputRangeProps) {
  return (
    <div className='control-group'>
      <label htmlFor={id}>{label}</label>
      <input id={id} type='range' min={min} max={max} value={value} onChange={onChange} />
      {description && <span className='control-description'>{description}</span>}
    </div>
  );
}
