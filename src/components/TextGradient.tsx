'use client';

type TextGradientProps = {
  text: string;
  from?: string;
  via?: string;
  to?: string;
}

export default function TextGradient(props: TextGradientProps) {
  return (
    <span
      className="text-8xl font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient"
    >
      {props.text}
    </span>
  );
}