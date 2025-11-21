import { useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";

// TecladoEnPantalla.jsx
// Componente React + Tailwind + Material Tailwind para un teclado en pantalla
// Exporta un componente por defecto: <TecladoEnPantalla value onChange />

export default function TecladoEnPantalla({
  value = "",
  onChange = () => {},
  layout = "qwerty", // por ahora solo 'qwerty' soportado
  showInput = true, // mostrar el área de texto encima del teclado
  className = "",
  sticky = true, // fija el teclado abajo de la pantalla
}) {
  const [text, setText] = useState(value || "");
  const [shift, setShift] = useState(false);
  const [capsLock, setCapsLock] = useState(false);

  useEffect(() => {
    setText(value || "");
  }, [value]);

  useEffect(() => {
    // notificar al padre
    onChange(text);
  }, [text]);

  const layouts = {
    qwerty: [
      ["1","2","3","4","5","6","7","8","9","0","-","="],
      ["q","w","e","r","t","y","u","i","o","p","[","]"],
      ["a","s","d","f","g","h","j","k","l",";","'"],
      ["z","x","c","v","b","n","m","," ,".","/"],
    ],
    // se pueden añadir más layouts (azerty, numpad, etc.)
  };

  function applyCase(char) {
    if (!char) return char;
    const shouldUpper = shift !== capsLock ? true : false;
    return shouldUpper ? char.toUpperCase() : char.toLowerCase();
  }

  function pressKey(key) {
    if (key === "BACKSPACE") {
      setText((t) => t.slice(0, -1));
      return;
    }
    if (key === "SPACE") {
      setText((t) => t + " ");
      return;
    }
    if (key === "ENTER") {
      setText((t) => t + "\n");
      return;
    }
    if (key === "TAB") {
      setText((t) => t + "\t");
      return;
    }
    if (key === "SHIFT") {
      setShift((s) => !s);
      return;
    }
    if (key === "CAPS") {
      setCapsLock((c) => !c);
      return;
    }
    // caractere normal
    setText((t) => t + key);
    // si shift fue presionado para una sola letra, lo desactivamos
    if (shift && !capsLock) setShift(false);
  }

  return (
    <div
      className={`w-full ${className} ${sticky ? "fixed left-0 bottom-0 z-40" : ""}`}
      aria-hidden={false}
    >
      <div className="max-w-4xl mx-auto p-2 bg-white/90 backdrop-blur-md rounded-t-2xl shadow-lg border-t border-gray-200">
        {showInput && (
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Entrada</label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={3}
              className="w-full p-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
              aria-label="Entrada teclado en pantalla"
            />
          </div>
        )}

        <div className="flex flex-col gap-2">
          {/* fila de números / símbolos */}
          <div className="flex flex-wrap gap-2 justify-center">
            {layouts[layout][0].map((k) => (
              <Button
                key={k}
                size="sm"
                onClick={() => pressKey(applyCase(k))}
                className="min-w-[44px] px-3 py-2 text-sm"
              >
                {applyCase(k)}
              </Button>
            ))}
            <Button size="sm" onClick={() => pressKey("BACKSPACE")} className="min-w-[72px]">
              Borrar
            </Button>
          </div>

          {/* segunda fila */}
          <div className="flex flex-wrap gap-2 justify-center">
            {layouts[layout][1].map((k) => (
              <Button
                key={k}
                size="sm"
                onClick={() => pressKey(applyCase(k))}
                className="min-w-[44px] px-3 py-2 text-sm"
              >
                {applyCase(k)}
              </Button>
            ))}
          </div>

          {/* tercera fila con CAPS y ENTER */}
          <div className="flex flex-wrap gap-2 justify-center items-center">
            <Button size="sm" onClick={() => pressKey("CAPS")} className={`min-w-[72px] ${capsLock? 'ring-2 ring-blue-400' : ''}`}>
              CAPS
            </Button>
            {layouts[layout][2].map((k) => (
              <Button
                key={k}
                size="sm"
                onClick={() => pressKey(applyCase(k))}
                className="min-w-[44px] px-3 py-2 text-sm"
              >
                {applyCase(k)}
              </Button>
            ))}
            <Button size="sm" onClick={() => pressKey("ENTER")} className="min-w-[72px]">
              Enter
            </Button>
          </div>

          {/* cuarta fila con SHIFT, espacio y otros */}
          <div className="flex flex-wrap gap-2 justify-center items-center">
            <Button size="sm" onClick={() => pressKey("SHIFT")} className={`min-w-[72px] ${shift? 'ring-2 ring-blue-400' : ''}`}>
              Shift
            </Button>

            {layouts[layout][3].map((k,i) => (
              <Button
                key={k + i}
                size="sm"
                onClick={() => pressKey(applyCase(k))}
                className="min-w-[44px] px-3 py-2 text-sm"
              >
                {applyCase(k)}
              </Button>
            ))}

            <Button size="sm" onClick={() => pressKey("SPACE")} className="flex-1 min-w-[120px]">
              Espacio
            </Button>
            <Button size="sm" onClick={() => setText("") } className="min-w-[72px]">
              Limpiar
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}
