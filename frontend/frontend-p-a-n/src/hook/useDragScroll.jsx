import { useRef } from "react";

export default function useDragScroll() {
  const ref = useRef(null);
  let isDown = false;
  let startY;
  let scrollTop;

  const onMouseDown = e => {
    isDown = true;
    ref.current.classList.add("cursor-grabbing");
    startY = e.pageY - ref.current.offsetTop;
    scrollTop = ref.current.scrollTop;
  };

  const onMouseLeave = () => {
    isDown = false;
    ref.current.classList.remove("cursor-grabbing");
  };

  const onMouseUp = () => {
    isDown = false;
    ref.current.classList.remove("cursor-grabbing");
  };

  const onMouseMove = e => {
    if (!isDown) return;
    e.preventDefault();
    const y = e.pageY - ref.current.offsetTop;
    const walk = (y - startY) * 1.5;
    ref.current.scrollTop = scrollTop - walk;
  };

  return { ref, onMouseDown, onMouseLeave, onMouseUp, onMouseMove };
}
