import React, { useRef, useState, useEffect } from "react";

interface SvgSliderProps {
  value?: number; // 0..1
  onChange?: (v: number) => void;
}

const clamp = (v: number, a = 0, b = 1) => Math.max(a, Math.min(b, v));

export default function SvgSlider({ value = 0, onChange }: SvgSliderProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [internal, setInternal] = useState<number>(clamp(value));
  const draggingRef = useRef(false);

  useEffect(() => {
    setInternal(clamp(value));
  }, [value]);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!draggingRef.current || !trackRef.current) return;
      updateFromClientX(e.clientX);
    };
    const onUp = () => {
      if (!draggingRef.current) return;
      draggingRef.current = false;
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
    if (draggingRef.current) {
      window.addEventListener("pointermove", onMove);
      window.addEventListener("pointerup", onUp);
    }
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, []);

  const updateFromClientX = (clientX: number) => {
    const el = trackRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const padding = 20; // matches CSS left/right padding
    const usable = Math.max(10, rect.width - padding * 2);
    const x = clamp((clientX - rect.left - padding) / usable, 0, 1);
    setInternal(x);
    onChange?.(Number(x.toFixed(3)));
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    draggingRef.current = true;
    (e.target as Element).setPointerCapture(e.pointerId);
    updateFromClientX(e.clientX);
  };

  const handleTrackClick = (e: React.MouseEvent) => {
    updateFromClientX(e.clientX);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    let step = 0;
    if (e.key === "ArrowLeft" || e.key === "ArrowDown") step = -0.01;
    if (e.key === "ArrowRight" || e.key === "ArrowUp") step = 0.01;
    if (e.key === "Home") step = -Infinity;
    if (e.key === "End") step = Infinity;
    if (!step && step !== 0) return;
    e.preventDefault();
    let next = internal;
    if (step === -Infinity) next = 0;
    else if (step === Infinity) next = 1;
    else next = clamp(internal + step);
    setInternal(next);
    onChange?.(Number(next.toFixed(3)));
  };

  return (
    <div className="svg-slider">
      <div
        className="svg-track"
        ref={trackRef}
        onClick={handleTrackClick}
        role="slider"
        aria-valuemin={0}
        aria-valuemax={1}
        aria-valuenow={Number(internal.toFixed(3))}
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        {/* active fill */}
        <div
          className="svg-fill"
          style={{
            width: `${internal * Math.max(0, (trackRef.current?.getBoundingClientRect().width || 200) - 40)}px`,
          }}
        />

        {/* knob */}
        <div
          className="svg-knob"
          style={{
            left: `calc(${internal * 100}% )`,
          }}
          onPointerDown={handlePointerDown}
        />
      </div>

      <div
        style={{ display: "flex", justifyContent: "flex-end", marginTop: 8 }}
      >
        <div className="svg-value">{internal.toFixed(2)}</div>
      </div>
    </div>
  );
}
